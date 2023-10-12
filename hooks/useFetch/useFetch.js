import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url ) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    //sayfa acılırken fetchdata yı cekecek
    //data cekme
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setData(resp.data);       
        setLoading(false);
       } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    useEffect(() => {
      setLoading(true);
        fetchData();
      }, [url]);

    return {data , loading , error};
    
}

export default useFetch;