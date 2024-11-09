//@ts-nocheck
"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Expanded hardcoded exchange rates for more currencies
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.5, RUB: 61, JPY: 110, CNY: 6.5, AUD: 1.4, CAD: 1.3, CHF: 0.92, NZD: 1.5 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.6, RUB: 72, JPY: 129, CNY: 7.6, AUD: 1.65, CAD: 1.55, CHF: 1.08, NZD: 1.78 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 100.2, RUB: 82, JPY: 150, CNY: 8.6, AUD: 1.84, CAD: 1.7, CHF: 1.2, NZD: 1.95 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, RUB: 0.82, JPY: 1.46, CNY: 0.087, AUD: 0.018, CAD: 0.017, CHF: 0.012, NZD: 0.02 },
    RUB: { USD: 0.016, EUR: 0.014, GBP: 0.012, INR: 1.22, JPY: 1.78, CNY: 0.11, AUD: 0.02, CAD: 0.018, CHF: 0.014, NZD: 0.022 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0067, INR: 0.68, RUB: 0.56, CNY: 0.059, AUD: 0.012, CAD: 0.011, CHF: 0.0085, NZD: 0.013 },
    CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, INR: 11.5, RUB: 9.1, JPY: 17, AUD: 0.22, CAD: 0.19, CHF: 0.14, NZD: 0.23 },
    AUD: { USD: 0.72, EUR: 0.61, GBP: 0.54, INR: 54.4, RUB: 44, JPY: 83, CNY: 4.56, CAD: 0.93, CHF: 0.66, NZD: 1.03 },
    CAD: { USD: 0.77, EUR: 0.65, GBP: 0.59, INR: 58, RUB: 47.2, JPY: 89, CNY: 5, AUD: 1.08, CHF: 0.71, NZD: 1.1 },
    CHF: { USD: 1.08, EUR: 0.92, GBP: 0.83, INR: 78, RUB: 62, JPY: 115, CNY: 6.5, AUD: 1.5, CAD: 1.4, NZD: 1.6 },
    NZD: { USD: 0.66, EUR: 0.56, GBP: 0.51, INR: 50, RUB: 40, JPY: 74, CNY: 4.3, AUD: 0.98, CAD: 0.91, CHF: 0.64 },
  };

  // Handler for amount input change
  const handleAmountChange = (e:any) => {
    setAmount(e.target.value);
  };

  // Handler for currency selection change
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // Convert currency
  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount); // No conversion if both currencies are the same
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Currency Converter</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          style={{height:"30px"}}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>From: </label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange} style={{height:"30px"}}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="RUB">RUB</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="NZD">NZD</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>To: </label>
        <select value={toCurrency} onChange={handleToCurrencyChange} style={{height:"30px"}}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="RUB">RUB</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="NZD">NZD</option>
        </select>
      </div>

      <button onClick={convertCurrency} style={{height:"30px", width:"80px"}}>Convert</button>

      <h3 style={{ marginTop: "20px" }}>Converted Amount: {convertedAmount}</h3>
    </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.nsbconsultancy.com/saurabhpatil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Know more
        </a>
        <a
          href="https://github.com/Saurabh4741"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
