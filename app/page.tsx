"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clear = () => setInput("");

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    "0", "/", "."
  ];

  const isOperator = (val: string) => ["+", "-", "*", "/"].includes(val);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Calculator</h1>

      <input value={input} readOnly style={styles.display} />

      <div style={styles.grid}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              ...styles.button,
              backgroundColor: isOperator(btn) ? "#ff6b6b" : "#4dabf7",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      <div style={styles.bottomRow}>
        <button onClick={calculate} style={{ ...styles.button, backgroundColor: "#51cf66", width: "100px" }}>
          =
        </button>
        <button onClick={clear} style={{ ...styles.button, backgroundColor: "#ffa94d", width: "100px" }}>
          C
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  display: {
    padding: "12px",
    fontSize: "20px",
    width: "220px",
    marginBottom: "15px",
    textAlign: "right",
    borderRadius: "8px",
    border: "2px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 60px)",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },
  bottomRow: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};