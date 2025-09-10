import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import HeroImage1 from "../assets/download.jpeg";
// backgroundImage: `url(${HeroImage})`,

const products = [
  {
    id: 1,
    title: "Trendy Dress",
    price: "$70.00",
    description: "New Arrival for Girls",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Men's Shirt",
    price: "$50.00",
    description: "Casual Cotton Shirt",
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Classic Saree",
    price: "$30.00",
    description: "Traditional Collection",
    image:
      "https://images.pexels.com/photos/6311580/pexels-photo-6311580.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Classic Jeans",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
  },
  {
    id: 5,
    title: "Elegant Dress",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  },
  {
    id: 6,
    title: "Trendy Jacket",
    price: "$60.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
];

const FeaturedCards = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "#f5f5f5" }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="green"
          gutterBottom
        >
          Our Featured Collection
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 5, color: "text.secondary" }}
        >
          Explore the latest trends in fashion – carefully selected just for
          you.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    High quality & stylish design
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "green", fontWeight: "bold" }}
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor: "green",
                      "&:hover": { bgcolor: "#2e7d32" },
                      borderRadius: "8px",
                      px: 3,
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCards;
