"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCart from "./ProductReviewCart";
import { HomeSectionCardData } from "../HomeSectionCard/HomeSectionCardData";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate } from "react-router-dom";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
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
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate();

  // Navigate to the product details page when the card is clicked
  const handleaddtocart = () => {
    navigate("/cart"); // Assuming `product.id` is the unique identifier
  };

  return (
    <div className="bg-gray-900 lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-500"
                  >
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
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-5 gap-x-8 gap-y-10">
          {/* Image gallery */}
          <div className=" flex flex-col items-center">
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="hidden size-full rounded-lg object-cover lg:block"
              />
            </div>
            <div className="flex flex-wrap space-x-5  justify-center">
              {product.images.map((item) => (
                <div className="max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="aspect-[3/2] w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 ">
            <div className="lg:col-span-2 l">
              <h1 className="text-lg lg:text-xl font-semibold text-white">
                Kook N Keech
              </h1>
              <h1 className="text-lg lg:text-xl text-white opacity-60 pt-1">
                Men Printed Round Neck Pure Cotton Blue T-Shirt
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 item-center text-lg lg:text-xl text-white mt-3">
                <p className="font-semibold">270</p>
                <p className="line-through opacity-50">1098</p>
                <p className="text-green-600 font-semibold">74 % off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex  items-center space-x-3">
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
                    54545 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white ">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
                <div className="mt-6">
                  <Button
                    variant="contained"
                    sx={{
                      px: "1.5rem",
                      py: "1rem",
                      color: "white",
                      bgcolor: "blue",
                      borderRadius: "10px", // Rounded corners
                      fontSize: "1rem", // Slightly larger font size for readability
                      fontWeight: "bold", // Emphasize text
                      textTransform: "uppercase", // Make text uppercase for prominence
                      boxShadow: "0px 4px 10px rgba(144, 143, 143, 0.3)", // Add a subtle shadow for depth
                      transition:
                        "transform 0.2s ease-in-out, background-color 0.2s ease", // Smooth hover effect
                      "&:hover": {
                        bgcolor: "darkblue", // Change background color on hover
                        transform: "scale(1.05)", // Slightly enlarge the button on hover
                      },
                    }}
                    onClick={handleaddtocart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only ">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-white">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-white">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-white">
                        <span className="text-white opacity-600">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-white">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-white">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="font-semibold text-lg pb-4 text-white">
            Recent Reviews and Ratings
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[, 1, , 1, , 1, 1].map((item) => (
                    <ProductReviewCart />
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

        <section className="mt-10">
          <h1 className="py-5 text-xl font-bold text-white">Similar Product</h1>
          <div className="flex flex-wrap space-y-5">
            {HomeSectionCardData.map((item, index) => (
              <HomeSectionCard
               
                imageUrl={item.imageUrl}
                brand={item.brand}
                title={item.title}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
