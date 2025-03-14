

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCart from "./ProductReviewCart";
import { HomeSectionCardData } from "../HomeSectionCard/HomeSectionCardData";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../state/Cart/Action";
import { findProductById } from "../../../state/Product/Action";
import HomeProductSection from "../Home/HomeProductSection";
import { mens_kurta } from "../../../Data/Men/men_kurta";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [

    { id: 1, name: "Clothing", href: "#" }
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");
  // console.log("param",productId,customersProduct.product)

  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const data = { productId, size: selectedSize.name };
      dispatch(addItemToCart({ data, jwt }));
      navigate("/cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError(true);
    }
  };

  useEffect(() => {
    const data = { productId: Number(productId), jwt };
    dispatch(findProductById(data));
    // dispatch(getAllReviews(productId));
  }, [productId]);

  return (
    <div className="bg-gray-900 lg:px-20">
      {/* Breadcrumb Navigation */}
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-7xl items-center space-x-2 px-4 sm:px-6 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id} className="flex items-center">
                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-500">
                  {breadcrumb.name}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {customersProduct.product?.brand}
              </a>
            </li>
          </ol>
        </nav>


        <section className="grid grid-cols-1 lg:grid-cols-2 -mb-2 px-4 pt-1 gap-x-8 gap-y-10">
          {/* Image gallery */}
          <div className=" flex flex-col items-center">
            <div className=" overflow-hidden m-7 rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5  justify-center">
              {product.images.map((image) => (
                <div onClick={() => handleSetActiveImage(image)}
                  className="max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={product.images[1].alt}
                    src={image.src}
                    className="aspect-[3/2] w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-3 pb-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 ">
            <div className="lg:col-span-2 l">
              <h1 className="lg:text-xl lg:text-xl font-semibold text-white">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl text-white opacity-60 pt-1">
                {customersProduct.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex space-x-5 item-center text-lg lg:text-xl text-white mt-3">
                <p className="font-semibold">₹{customersProduct.product?.discountedPrice}</p>
                <p className="line-through opacity-50">₹{customersProduct.product?.price}</p>
                <p className="text-green-600 font-semibold">{customersProduct.product?.discountPersent}% Off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex  items-center space-x-3 opacity-70">
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        color: "yellow", // Star color
                      },
                    }}
                  />
                  <p className="opacity-90 text-sm text-white hover:text-indigo-500">
                    454454 Ratings
                  </p>
                  <p className="ml-3 text-sm font-medium text-white hover:text-indigo-500">
                    {reviews.totalCount} Reviews
                  </p>
                </div>
              </div>

              <form className="mt-5" onSubmit={handleSubmit}>
                {/* Sizes */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Size</h3>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid xs:grid-cols-4 m-1 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            `${size.inStock ? "cursor-pointer bg-white text-gray-900 shadow-sm" : "cursor-not-allowed bg-gray-50 text-gray-200"}
                ${active ? "ring-1 ring-indigo-500" : ""}
                group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={`${active ? "border" : "border-2"} 
                      ${checked ? "border-indigo-700" : "border-transparent"} 
                      pointer-events-none absolute -inset-px rounded-md`}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  {error && <p className="text-red-500 text-sm mt-2">Please select a size before continuing.</p>}
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    padding: "0.8rem 2rem",
                    marginTop: "2rem",
                    borderRadius: "8px",
                    background: "linear-gradient(45deg, #ff6b6b, #ff8e53)",
                    color: "#fff",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 10px rgba(255, 107, 107, 0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      background: "linear-gradient(45deg, #ff4d4d, #ff7043)",
                      transform: "scale(1.05)",
                      boxShadow: "0px 6px 15px rgba(255, 107, 107, 0.5)",
                    },
                  }}
                >
                  Add To Cart
                </Button>



              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">

              <div>
                <h3 className="semi-bold text-lg text-white">Product Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-white opacity-80 text-justify">{customersProduct.product?.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-white">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-white">
                        <span className="text-white opacity-80">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-16" >
          <h1 className="font-semibold text-lg pb-4 pt-0 mt-0 text-white">
            Recent Reviews and Ratings
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div
                  className="space-y-5"
                  style={{
                    maxHeight: "400px", // Adjust height as needed
                    overflowY: "auto",
                    paddingRight: "8px", // Optional: Prevent content from cutting off due to scrollbar
                  }}
                >
                  {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                    <ProductReviewCart key={i} item={item} />
                  ))}
                </div>
              </Grid>


              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1 text-white">
                  Product Rating
                </h1>
                <div className="flex items-center space-x-3">
                  <Rating
                    value={4.6}
                    precision={0.5}
                    readonly
                    sx={{
                      "& .MuiRating-icon": {
                        color: "yellow", // Star color
                      },
                    }}
                  />
                  <p className="opacity-60 text-white">43353 Ratings</p>
                </div>

                <Box className="mt-5 space-y-3">
                  <Grid container alignContent="center" gap={2}>
                    <Grid item xs={2}>
                      <p className="text-white">Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "gray-100",
                          borderRadius: 4,
                          height: 7,
                          mt: 1.2,
                        }}
                        variant="determinate"
                        value={60}
                        color="success"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className="text-white opacity-60">3344</p>
                    </Grid>
                  </Grid>

                  <Grid container alignContent="center" gap={2}>
                    <Grid item xs={2}>
                      <p className="text-white">Very Goodt</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "gray-100",
                          borderRadius: 4,
                          height: 7,
                          mt: 1.2,
                        }}
                        variant="determinate"
                        value={45}
                        color="success"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className="text-white opacity-60">1344</p>
                    </Grid>
                  </Grid>

                  <Grid container alignContent="center" gap={2}>
                    <Grid item xs={2}>
                      <p className="text-white">Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "gray-100",
                          borderRadius: 4,
                          height: 7,
                          mt: 1.2,
                        }}
                        variant="determinate"
                        value={35}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className="text-white opacity-60">1035</p>
                    </Grid>
                  </Grid>

                  <Grid container alignContent="center" gap={2}>
                    <Grid item xs={2}>
                      <p className="text-white">Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "gray-100",
                          borderRadius: 4,
                          height: 7,
                          mt: 1.2,
                        }}
                        variant="determinate"
                        value={25}
                        color="warning"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className="text-white opacity-60">744</p>
                    </Grid>
                  </Grid>
                  <Grid container alignContent="center" gap={2}>
                    <Grid item xs={2}>
                      <p className="text-white">Very Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "gray-100",
                          borderRadius: 4,
                          height: 7,
                          mt: 1.2,
                        }}
                        variant="determinate"
                        value={15}
                        color="error"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className="text-white opacity-60">334</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        <section>
          <HomeProductSection data={mens_kurta} section={"Similar Product"} />
        </section>
      </div>
    </div>
  );
}
