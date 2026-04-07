import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setMobileNumber } = useAuth();

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  // Country list with code, regex, length
  const countries = [
    { name: "India", code: "+91", regex: /^[6-9]\d{9}$/, length: 10 },
    { name: "USA", code: "+1", regex: /^[2-9]\d{9}$/, length: 10 },
    { name: "UK", code: "+44", regex: /^\d{10}$/, length: 10 },
    { name: "Japan", code: "+81", regex: /^\d{10}$/, length: 10 },
    { name: "France", code: "+33", regex: /^\d{9}$/, length: 9 },
    { name: "Finland", code: "+358", regex: /^\d{9}$/, length: 9 },
    { name: "South Africa", code: "+27", regex: /^\d{9}$/, length: 9 },
    { name: "Thailand", code: "+66", regex: /^\d{9}$/, length: 9 },
  ];

  // Handle mobile input change with max length restriction
  const handlePhoneChange = (e) => {
    const rule = countries.find((c) => c.code === countryCode);
    const val = e.target.value.replace(/\D/g, ""); // digits only
    if (rule) setPhone(val.slice(0, rule.length));
    else setPhone(val);
  };

  // Validate phone based on selected country
  const isPhoneValid = () => {
    const rule = countries.find((c) => c.code === countryCode);
    return rule ? rule.regex.test(phone) : false;
  };

  // Handle login button
  const handleLogin = () => {
    if (!phone) return alert("Please enter mobile number");
    setMobileNumber(countryCode + phone);
    navigate("/otp");
  };

  // Get dynamic start digits for helper text
  const getStartDigits = () => {
    const rule = countries.find((c) => c.code === countryCode);
    if (!rule) return "valid digits";
    const match = rule.regex.toString().match(/^\^(\[[^\]]+\])/);
    return match ? match[1].replace(/[\[\]]/g, "") : "valid digits";
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box sx={{ position: "absolute", top: "25px", left: "25px" }}>
        <img src="/img/favicon.ico" onClick={() => navigate("/")} alt="Venum" style={{ width: "120px" }} />
      </Box>

      <Box sx={{ width: "100%", maxWidth: "550px", textAlign: "center", margin: "0 auto" }}>
        <Typography variant="h4" fontWeight="500" fontSize={{xs: 30, md: 50}} mb={2}>Welcome Back</Typography>
        <Typography color="black" fontWeight={400} fontSize={{xs: 16, md: 20}} mb={8}>
          to your medical fellowship journey
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          {/* Country select */}
          <TextField
            select
            label="Country"
            value={countryCode} // only store code in state
            onChange={(e) => setCountryCode(e.target.value)}
            SelectProps={{
              renderValue: (selected) => selected, // show only +91 after selection
              MenuProps: { PaperProps: { style: { minWidth: 150 } } }
            }}
            sx={{
              width: "150px",
              "& .MuiOutlinedInput-root": { borderRadius: 2, fontSize: 14 },
              "& .MuiSelect-icon": { fontSize: 28 }
            }}
          >
            {countries.map((c) => (
              <MenuItem key={c.code} value={c.code} sx={{fontSize: 14}}>
                {c.name} {c.code} {/* dropdown shows full name + code */}
              </MenuItem>
            ))}
          </TextField>

          {/* Mobile number input */}
          <TextField
            fullWidth
            label="Mobile Number"
            value={phone}
            onChange={handlePhoneChange}
            error={phone.length === countries.find(c => c.code === countryCode)?.length && !isPhoneValid()}
            helperText={
              phone.length === countries.find(c => c.code === countryCode)?.length && !isPhoneValid()
                ? `Invalid number. Must start with ${getStartDigits()} and match length`
                : ""
            }
            FormHelperTextProps={{ sx: { fontSize: "14px", fontWeight: 500 } }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2, fontSize: 16 } }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={!isPhoneValid()}
          sx={{
            backgroundColor: "black",
            color: "white",
            height: "50px",
            fontSize: "16px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#222" }
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}