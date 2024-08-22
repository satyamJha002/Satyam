import React, { useEffect, useState } from "react";

const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("I'm a ");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <div>{currentText}</div>;
};

export default TypeWriter;
