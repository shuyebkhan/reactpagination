import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setMyData] = useState([]);
  const [isError, setIsError] = useState();
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMyData(response.data);
         setTotalPage(Math.ceil(data.length / 10));
      })
      .catch((error) => setIsError(error.message));
  }, []);

  return { data, isError, totalPage };
}

export default useFetch;
