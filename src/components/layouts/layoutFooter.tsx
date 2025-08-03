import React from "react";
import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const companyLinks = [
    "Sell with us",
    "About US",
    "Contact US",
    "Promos",
    "FAQ",
  ];

  const legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

  const categoryLinks = [
    "Skincare",
    "Haircare",
    "Makeup",
    "Bath & Body",
    "Beauty Supplements",
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0f0f0",
        borderTop: "1px solid #e0e0e0",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
            >
              YOUR LOGO
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Your trusted beauty destination
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  backgroundColor: "#1877F2",
                  color: "white",
                  width: 36,
                  height: 36,
                }}
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#1DA1F2",
                  color: "white",
                  width: 36,
                  height: 36,
                }}
              >
                <TwitterIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#FF0000",
                  color: "white",
                  width: 36,
                  height: 36,
                }}
              >
                <YouTubeIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
            >
              COMPANY
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  variant="body2"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    textAlign: "left",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    p: 0,
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
            >
              LEGAL
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  variant="body2"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    textAlign: "left",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    p: 0,
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
            >
              CATEGORIES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {categoryLinks.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  variant="body2"
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    textAlign: "left",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    p: 0,
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
            >
              SUBSCRIBE TO NEWSLETTER
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
              Be the first to know about new offers and promotions
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "4px",
                  },
                }}
              />
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                sx={{
                  backgroundColor: "#666",
                  minWidth: "auto",
                  px: 2,
                  "&:hover": { backgroundColor: "#555" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
            pt: 3,
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="body2" sx={{ color: "#666" }}>
            © 2025 Your Company. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 25,
                backgroundColor: "#EB001B",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              MC
            </Box>
            <Box
              sx={{
                width: 40,
                height: 25,
                backgroundColor: "#003087",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "8px",
                fontWeight: "bold",
              }}
            >
              PayPal
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
