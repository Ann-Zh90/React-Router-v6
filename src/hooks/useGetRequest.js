import { useState, useEffect } from "react";

export default function useGetRequest(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const getData = async () => {
    setIsLoading(true);
    try {
      const generalData = await fetch(url);
      const finalData = await generalData.json();
      setData(finalData);
      setIsLoading(false);
    } catch (err) {
      setErrorInfo(err);
    }
  };

  useEffect(() => getData(), []);

  return { data, isLoading, errorInfo };
}
