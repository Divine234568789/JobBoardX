import { createContext, useContext, useState } from "react";

export const PayContext = createContext();

export const PayProvider = ({ children }) => {
  const [minPay, setMinPay] = useState("");
  const [maxPay, setMaxPay] = useState("");
  const [jobData, setJobData] = useState({});
  const [rate, setRate] = useState("per month");

  return (
    <PayContext.Provider
      value={{
        minPay,
        setMinPay,
        maxPay,
        setMaxPay,
        rate,
        setRate,
        jobData,
        setJobData,
      }}
    >
      {children}
    </PayContext.Provider>
  );
};

export const usePay = () => useContext(PayContext);
