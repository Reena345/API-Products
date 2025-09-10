import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  SnackbarContent,
  Tooltip,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function HeroSection() {
  const [cartList, setcartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [isLording, setIsLording] = useState(false);

  //  Cart handler with localStorage support
  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);

    if (!isExist) {
      const updatedCart = [...cartList, product];
      setcartList(updatedCart);
      localStorage.setItem("cartList", JSON.stringify(updatedCart)); // save in localStorage
    } else {
      setOpenAlert(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  //  Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLording(true);
        const products = await axios.get("https://fakestoreapi.com/products");

        if (products.status === 200) {
          setIsLording(false);
          setProducts(products?.data);
        } else {
          setIsLording(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    //  Load cartList from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cartList")) || [];
    setcartList(savedCart);
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          style={{ backgroundColor: "red" }}
          message={
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Box sx={{ paddingRight: "60px" }}>
                <span id="client-snackbar">Product already in cart list</span>
              </Box>
              <Box>
                <CloseIcon onClick={handleClose} />
              </Box>
            </Box>
          }
        />
      </Snackbar>

      {/*  Search Bar (Autocomplete) */}
      <Autocomplete
        className="my-5 ms-4"
        disablePortal
        options={products.map((p) => p.title)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Product"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "green",
                },
                "&:hover fieldset": {
                  borderColor: "darkgreen",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root": {
                color: "green",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "darkgreen",
              },
            }}
          />
        )}
      />
      {isLording ? (
        <Box className="text-center mt-5">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Box className=" mx-3 px-3">
          <Grid container className="container text-center">
            {products?.map((product, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} xl={3} mb={3} key={index}>
                  <Card
                    sx={{
                      width: 300,
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      border: "1px solid #e0e0e0",
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 25px rgba(0, 128, 0, 0.2)",
                      },
                    }}
                  >
                    {/* Image Section */}
                    <Box
                      sx={{
                        backgroundColor: "#f0fdf4",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 180,
                        p: 2,
                      }}
                    >
                      <img
                        src={product.image}
                        alt="product-img"
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <CardContent sx={{ textAlign: "center" }}>
                      <Tooltip title={product?.title} placement="top">
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#2e7d32",
                            mb: 1,
                          }}
                        >
                          {product?.title?.length >= 22
                            ? `${product?.title?.slice(0, 18)}...`
                            : product?.title}
                        </Typography>
                      </Tooltip>

                      <Typography
                        variant="h5"
                        sx={{ color: "#1b5e20", fontWeight: "bold", mb: 1 }}
                      >
                        ${product.price}
                      </Typography>
                      <Divider
                        sx={{ borderColor: "rgba(0,128,0,0.3)", my: 1 }}
                      />

                      {/* Action Buttons */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          mt: 2,
                        }}
                      >
                        <Tooltip title="Product Details">
                          <VisibilityIcon
                            sx={{
                              cursor: "pointer",
                              color: "#2e7d32",
                              "&:hover": { color: "#1b5e20" },
                            }}
                            fontSize="medium"
                            onClick={() =>
                              navigate(`/ProductDetails/${product?.id}`)
                            }
                          />
                        </Tooltip>
                        <Tooltip title="Add to Favorite">
                          <FavoriteIcon
                            sx={{
                              cursor: "pointer",
                              color: "#ef5350",
                              "&:hover": { color: "#d32f2f" },
                            }}
                            fontSize="medium"
                          />
                        </Tooltip>
                        <Tooltip title="Add to Cart">
                          <AddShoppingCartIcon
                            sx={{
                              cursor: "pointer",
                              color: "#2e7d32",
                              "&:hover": { color: "#1b5e20" },
                            }}
                            fontSize="medium"
                            onClick={() => cartHandler(product)}
                          />
                        </Tooltip>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default HeroSection;
