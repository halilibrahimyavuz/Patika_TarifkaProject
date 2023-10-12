import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch2(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //sayfa acılırken fetchdata yı cekecek
  //data cekme
  const fetchData = async () => {
    try {
      const {data : responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false); // Veriler çekildikten sonra loading'i false yap
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch2;
