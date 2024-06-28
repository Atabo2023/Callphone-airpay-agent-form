// import React from "react";

import React, { useState, useEffect } from "react";
const [data, setData] = useState([]);

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://nga-states-lga.onrender.com/fetch"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
}

export default App;
