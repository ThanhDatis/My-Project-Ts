import React, { useState } from "react";
import {
  KeyboardArrowDown as ArrowDownIcon,
  ShoppingCart as CartIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [brandsAnchorEl, setBrandsAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const navigationItems = [
    { label: "ALL BRANDS", hasDropdown: true },
    { label: "SKINCARE", hasDropdown: false },
    { label: "MAKE UP", hasDropdown: false },
    { label: "HAIRCARE", hasDropdown: false },
    { label: "BATH & BODY", hasDropdown: false },
    { label: "BEAUTY SUPPLEMENTS", hasDropdown: false },
    { label: "PROMOS", hasDropdown: false },
  ];

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleBrandsClick = (event: React.MouseEvent<HTMLElement>) => {
    setBrandsAnchorEl(event.currentTarget);
  };

  const handleBrandsClose = () => {
    setBrandsAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      {/* Top Row */}
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            YOUR LOGO
          </Typography>

          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, mx: 4, maxWidth: 400 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search for products"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "25px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>

          {/* Right Side Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Cart */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <IconButton sx={{ color: "#333" }}>
                <Badge badgeContent={3} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>
              <Typography variant="body2" sx={{ color: "#333" }}>
                Cart
              </Typography>
            </Box>

            {/* Sign In */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <IconButton sx={{ color: "#333" }}>
                <PersonIcon />
              </IconButton>
              <Typography variant="body2" sx={{ color: "#333" }}>
                User
              </Typography>
            </Box>

            {/* Language Selector */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={handleLanguageClick}
            >
              <IconButton sx={{ color: "#333" }}>
                <LanguageIcon />
              </IconButton>
              <Typography variant="body2" sx={{ color: "#333" }}>
                VIE
              </Typography>
            </Box>

            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={handleLanguageClose}> English </MenuItem>
              <MenuItem onClick={handleLanguageClose}> Vietnamese </MenuItem>
              <MenuItem onClick={handleLanguageClose}> France </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Navigation Bar */}
      <Box sx={{ backgroundColor: "#f8f8f8", borderTop: "1px solid #e0e0e0" }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "48px !important",
            }}
          >
            {/* Navigation Items */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={item.hasDropdown ? handleBrandsClick : undefined}
                  endIcon={item.hasDropdown ? <ArrowDownIcon /> : undefined}
                  sx={{
                    color: "#333",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1976d2",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Sell With Us Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#333",
                color: "white",
                textTransform: "none",
                borderRadius: "4px",
                px: 3,
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              SELL WITH US
            </Button>
          </Toolbar>
        </Container>
      </Box>

      {/* Brands Dropdown Menu */}
      <Menu
        anchorEl={brandsAnchorEl}
        open={Boolean(brandsAnchorEl)}
        onClose={handleBrandsClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
          },
        }}
      >
        <MenuItem onClick={handleBrandsClose}>Brand A</MenuItem>
        <MenuItem onClick={handleBrandsClose}>Brand B</MenuItem>
        <MenuItem onClick={handleBrandsClose}>Brand C</MenuItem>
        <MenuItem onClick={handleBrandsClose}>All Brands</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
