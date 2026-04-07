import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import { ShoppingCart } from "lucide-react";
import { UserCircle } from "lucide-react";
import { isLoggedIn } from "../utils/auth"; // <-- import utility

// Navigation links
const navLinks = [
  { name: "Campus", path: "/courses" },
  { name: "Online", path: "/online-fellowship" },
  { name: "Hospitals", path: "/hospitals" },
  { name: "Faculty", path: "/blogs" },
  { name: "About", path: "/about" },
];

const Header = ({ applyBtnColor = "secondary" }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const loggedIn = isLoggedIn();
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const btnColor =
    applyBtnColor === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  return (
    <>
      {/* HEADER */}
      <AppBar
        position="fixed"
        sx={{
          background: { xs: '#FFF', md: "rgba(255,255,255,0.4)" },
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "none",

          borderRadius: { xs: 0, md: 5 },
          width: { xs: "100%", md: "70%" },
          left: { xs: 0, md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },
          top: { xs: 0, md: 10 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* LOGO LEFT */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: { xs: '#000', md: "#FFF" },
              fontWeight: 600,
              fontFamily: "'Figtree', sans-serif",
            }}
          >
            MyLogo
          </Typography>

          {/* NAV CENTER (DESKTOP) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                   color: { xs: '#000', md: "#FFF" },
                  textTransform: "none",
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            {/* CART (desktop only) */}
            <IconButton
              sx={{
                 color: { xs: '#000', md: "#FFF" },
                display: { xs: "none", md: "flex" }  // mobile hide, desktop show
              }}
            >
              <ShoppingCart sx={{ fontSize: 32 }} />
            </IconButton>

            {/* DESKTOP LOGIN / PROFILE */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {loggedIn ? (
                <IconButton sx={{  color: { xs: '#000', md: "#FFF" }, }}>
                  <UserCircle sx={{ fontSize: 40 }} />
                </IconButton>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    background: "#000",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontSize: 16,
                    fontWeight: 600,
                    "&:hover": {
                      background: "#222",
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "flex", md: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
            pt: 3,
            pb: 2,
            borderBottom: "1px solid #ddd",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#000",
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 600,
            }}
            onClick={toggleDrawer}
          >
            MyLogo
          </Typography>

          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>

        {/* NAV ITEMS */}
        <Box sx={{ flexGrow: 1, px: 0, mt: 4 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.name}
                component={Link}
                to={link.path}
                onClick={toggleDrawer}
                sx={{ mb: 3 }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "'Figtree', sans-serif",
                        fontWeight: 600,
                        fontSize: 20,
                        color: "#000",
                        textAlign: "left",
                      }}
                    >
                      {link.name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* LOGIN BUTTON MOBILE */}
        {!loggedIn && (
          <Box sx={{ px: 4, pb: 4 }}>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="/login"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: 18,
                py: 2,
              }}
              onClick={toggleDrawer}
            >
              Login
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default Header;