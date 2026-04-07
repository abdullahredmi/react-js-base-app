import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import theme from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  { label: "Fellowship", value: "fellowship" },
  { label: "Certification", value: "certification" },
  { label: "Diploma", value: "diploma" },
];

const specialties = [
  { label: "Cardiology", value: "cardiology" },
  { label: "Orthopedics", value: "orthopedics" },
  { label: "Dermatology", value: "dermatology" },
  { label: "Neurology", value: "neurology" },
];

const FindYourProgram = () => {
  const [category, setCategory] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSearch = () => {
    console.log({
      category,
      specialty,
    });
  };

  return (
    <Box
      sx={{
        py: 10,
        background: alpha(theme.palette.secondary.main, 0.08),
      }}
    >
      <Container maxWidth="lg">

        {/* Header */}
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: 400,
            textAlign: "center",
            mb: 6,
          }}
        >
          Find <span style={{ color: theme.palette.secondary.main }}>your</span> program
        </Typography>

        {/* Search Card */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 4,
            p: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          {/* Category */}
          <Box sx={{ flex: { xs: "100%", md: 1.6 } }}>
            <Typography sx={{ mb: 2, fontWeight: 500, fontSize: 16, textAlign: 'left' }}>
              Fellowship Category
            </Typography>

            <FormControl fullWidth>
              <InputLabel sx={{fontSize: 15}}>Campus or Online</InputLabel>

              <Select
                value={category}
                label="Campus or Online"
                onChange={(e) => setCategory(e.target.value)}
                sx={{borderRadius: 3, height: 55, fontSize: 16, textAlign: 'left'}}
                IconComponent={(props) => (
                    <ExpandMoreIcon {...props} sx={{ fontSize: 30 }} />
                )}
              >
                {categories.map((item) => (
                  <MenuItem key={item.value} value={item.value} sx={{fontSize: 14}}>
                    {item.label} 
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Specialty */}
          <Box sx={{ flex: { xs: "100%", md: 1.6 } }}>
            <Typography sx={{ mb: 2, fontWeight: 500, fontSize: 16, textAlign: 'left' }}>
              Specialty
            </Typography>

            <FormControl fullWidth>
              <InputLabel sx={{fontSize: 15}}>Eg. All specialities</InputLabel>

              <Select
                value={specialty}
                label="Select Specialty"
                onChange={(e) => setSpecialty(e.target.value)}
                sx={{borderRadius: 3, height: 55, fontSize: 16, textAlign: 'left'}} 
                IconComponent={(props) => (
                    <ExpandMoreIcon {...props} sx={{ fontSize: 30 }} />
                )}
              >
                {specialties.map((item) => (
                  <MenuItem key={item.value} value={item.value} sx={{fontSize: 14}}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Search Button */}
          <Box
            sx={{
              flex: { xs: "100%", md: "1" },
              display: "flex",
              alignItems: "flex-end",
              justifyContent: 'center'
            }}
          >
            <Button
            startIcon={<SearchIcon />}
              onClick={handleSearch}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                px: 5,
                py: 1.8,
                borderRadius: 2,
                textTransform: "none",
                fontSize: 16,
                height: 55,
                mt: 3,
                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              Search Fellowship
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FindYourProgram;