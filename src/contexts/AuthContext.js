import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [mobileNumber, setMobileNumber] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <AuthContext.Provider value={{ mobileNumber, setMobileNumber, otpVerified, setOtpVerified }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);