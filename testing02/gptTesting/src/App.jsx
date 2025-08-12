import React, { useState, useEffect } from "react";

export default function ExamApp() {
  const [switchCount, setSwitchCount] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const switchLimit = 3; // max allowed tab switches
  const [bgColor, setBgColor] = useState("#ffffff");

  // 🖱️ Change background color on resize
  useEffect(() => {
    function handleResize() {
      const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 80%)`;
      setBgColor(randomColor);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 👀 Track tab visibility changes
  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden) {
        setSwitchCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= switchLimit) {
            setIsSubmitted(true);
          }
          return newCount;
        });
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // 🎨 Page styles
  const pageStyle = {
    backgroundColor: bgColor,
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "sans-serif",
    transition: "background-color 0.4s ease",
  };

  // If exam is submitted, show submission screen
  if (isSubmitted) {
    return (
      <div style={{ ...pageStyle, textAlign: "center" }}>
        <h1>✅ Test Submitted</h1>
        <p>You crossed the limit of {switchLimit} tab switches.</p>
        <p>Thank you for participating.</p>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1>📝 Exam In Progress</h1>
      <p>Do NOT switch tabs more than {switchLimit} times.</p>
      <p>Tab switches so far: {switchCount}</p>
      <p>Resize the window to see a random background color effect!</p>
    </div>
  );
}
