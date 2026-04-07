import React from "react";
import { Box, Typography, Link, Stack, Divider, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import { alpha } from "@mui/material/styles";

const navLinksPrograms = [
  { name: "Medical", path: "/campus-fellowship" },
  { name: "Surgical", path: "/online-fellowship" },
  { name: "Emergency", path: "/hospitals" },
  { name: "Critical Care", path: "/contact" },
];

const navLinksExplore = [
  { name: "ECG Mastery", path: "/blogs" },
  { name: "Clinical Mastery Essential", path: "/about" },
  { name: "ICU", path: "/faqs" },
  { name: "Emergency", path: "/faqs" },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(
          to bottom,
          ${theme.palette.secondary.main}10 0%,
          ${theme.palette.secondary.main}00 100%
        )`,
        color: theme.palette.secondary.main,
        py: 8,
        px: { xs: 3, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          mb: 6,
        }}
      >
        {/* Column 1: Logo + Description + Socials */}
        <Box sx={{ maxWidth: 300 }}>
          <Box
            component="img"
            src="https://via.placeholder.com/150x50?text=Logo"
            alt="Logo"
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" sx={{ mb: 6 }} color="#000" fontSize={15}>
            We connect doctors with top hospitals and training programs across India.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="#"
              target="_blank"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 22 }} />
            </IconButton>

            <IconButton
              href="#"
              target="_blank"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              <YouTubeIcon sx={{ fontSize: 22 }} />
            </IconButton>

            <IconButton
              href="#"
              target="_blank"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Column 2: Programs */}
        <Box>
          <Typography variant="h6" fontSize={20} sx={{ mb: 2, fontWeight: 500, textAlign: 'left', }} color="#000">
            Campus Fellowship
          </Typography>
          <Stack spacing={1}>
            {navLinksPrograms.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                underline="none"
                sx={{ color: '#000', lineHeight: 1.5, fontWeight: 400, textAlign: 'left', fontSize: '16px', "&:hover": { color: theme.palette.secondary.main } }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Column 3: Explore */}
        <Box>
          <Typography variant="h6" fontSize={20} sx={{ mb: 2, fontWeight: 500, textAlign: 'left', }} color="#000">
            Online Fellowships
          </Typography>
          <Stack spacing={1}>
            {navLinksExplore.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                underline="none"
                sx={{ color: '#000',  lineHeight: 1.5, fontWeight: 400, textAlign: 'left', fontSize: '16px', "&:hover": { color: theme.palette.secondary.main } }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Column 4: Contact */}
        <Box>
          <Typography variant="h6" fontSize={20} sx={{ mb: 2, fontWeight: 500, textAlign: 'left', }} color="#000">
            Get in touch
          </Typography>

        <Stack spacing={1}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingBottom: 2 }}>
            <PhoneIcon
              sx={{
                fontSize: 32,
                color: "#000",
                bgcolor: alpha(theme.palette.secondary.main, 0.15),
                p: 1,
                borderRadius: 2,
              }}
            />
            <Typography
              sx={{
                color: "#000",
                textAlign: "left",
                fontSize: "16px",
                "&:hover": { color: theme.palette.secondary.main },
              }}
              variant="body2"
            >
              +91 12345 67890 
              <br></br>
              <span style={{fontSize: 10}}>Mon-Sat, 9 AM - 6 PM</span>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingBottom: 2 }}>
            <EmailIcon
              sx={{
                fontSize: 32,
                color: "#000",
                bgcolor: alpha(theme.palette.secondary.main, 0.15),
                p: 1,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#000",
                textAlign: "left",
                fontSize: "16px",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              support@doctutorials.com
                    <br></br>
              <span style={{fontSize: 10}}>Admission Enquiry</span>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingBottom: 2 }}>
            <ChatIcon
              sx={{
                fontSize: 32,
                color: "#000",
                bgcolor: alpha(theme.palette.secondary.main, 0.15),
                p: 1,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#000",
                textAlign: "left",
                fontSize: "16px",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Live Chat
              <br></br>
              <span style={{fontSize: 10}}>Hyderabad, Telangana, India</span>
            </Typography>
          </Box>
        </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          py: 2,
          px: 1,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "0.875rem",
          color: "#000",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            color: "#000",
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            fontSize: 15,
            fontWeight:500,
            flexDirection: { xs: "column", sm: "row" }, // stack on mobile, row on desktop
          }}
        >
          <Link href="#" underline="hover" sx={{fontWeight:400,}}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" sx={{fontWeight:400,}}>
            Terms & Conditions
          </Link>
        </Box>

        {/* Right */}
        <Typography sx={{ color: "#000", fontWeight:400,fontSize: 15, mt: { xs: 1, sm: 0 } }}>
          © 2026 Doc Tutorials. All rights reserved.
        </Typography>
      </Box>

      <Box
        sx={{
          px: 1,
          display: "flex",
          py: 1,
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "0.875rem",
          color: "#000", textAlign: 'left',
          fontSize: 11, fontWeight: 400
        }}
      >
        © 2026 Doc Tutorials. All rights reserved. All programs, fellowship courses, educational materials, 
        digital assets, text, images, graphics, and multimedia content available on this platform are the
         exclusive property of Doc Tutorials unless otherwise stated. These materials are protected by 
         continuing to use this website, users acknowledge and agree to comply with the platform’s terms of 
         service, privacy policy, and applicable laws governing the use of digital educational resources.
      </Box>
    </Box>
  );
};

export default Footer;
