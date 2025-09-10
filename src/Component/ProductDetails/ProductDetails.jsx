import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShareIcon from "@mui/icons-material/Share";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const products = await axios.get(
          `https://fakestoreapi.com/products/${param?.product_id}`
        );

        if (products.status === 200) {
          setIsLoading(false);
          setProductDetail(products?.data);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [param]);

  return (
    <Box className="m-3 p-4 rounded-5 shadow-lg bg-body">
      {isLoading ? (
        <Box className="text-center mt-5">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Grid container spacing={4} alignItems="center">
          {/* Left: Product Image */}
          <Grid item xs={12} md={6} className="text-center">
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: 4,
              }}
            >
              <img
                style={{ maxWidth: "70%", height: "auto" }}
                src={productDetail?.image}
                alt={productDetail?.title}
              />
            </Card>
          </Grid>

          {/* Right: Product Details */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 4, boxShadow: 2 }}>
              <CardContent>
                <Typography
                  variant="overline"
                  sx={{ color: "green", fontWeight: "bold" }}
                >
                  {productDetail?.category}
                </Typography>

                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {productDetail?.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  {productDetail?.description}
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <Rating value={4} readOnly sx={{ color: "gold" }} />
                  <Typography sx={{ ml: 2 }} fontWeight="bold">
                    ${productDetail?.price}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ mb: 3 }}>
                  Available: {productDetail?.rating?.count || "In stock"}
                </Typography>

                <Box display="flex" gap={2}>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ borderRadius: 3 }}
                  >
                    <FavoriteBorderIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ borderRadius: 3 }}
                  >
                    <AddShoppingCartIcon /> &nbsp; Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ borderRadius: 3 }}
                  >
                    <ShareIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetails;
