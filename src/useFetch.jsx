import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [userData, setUserData] = useState([]);
  const [isError, setIsError] = useState();
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUserData(response.data);
         setTotalPage(Math.ceil(response.data.length / 10));
      })
      .catch((error) => setIsError(error.message));
  }, []);

  return { userData, isError, totalPage };
}

export default useFetch;
