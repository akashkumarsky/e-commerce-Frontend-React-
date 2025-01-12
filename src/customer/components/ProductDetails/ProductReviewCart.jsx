import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCart = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,hight:56, bgcolor:"black"}}>
                        A
                    </Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className="space-y-2 text-white">
                    <div>
                        <p className="text-lg">Akash kumar</p>
                        <p classNmae="opacity-60">25 April 2023</p>
                    </div>
                </div>

                <Rating value={4}  name="half-rating"  sx={{
                      "& .MuiRating-icon": {
                        color: "yellow", // Star color
                      },
                    }}/>
                <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, neque optio? Debitis similique tempora animi. Eligendi libero, cum vitae, doloremque consectetur expedita totam corporis iusto obcaecati praesentium nisi impedit consequatur!</p>
            </Grid>
        </Grid>
    </div>
  )
};

export default ProductReviewCart