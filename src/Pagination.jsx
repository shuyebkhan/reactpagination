import { useState } from "react";
import useFetch from "./useFetch";

function Pagination() {
  const { data, isError, totalPage } = useFetch(
    "https://jsonplaceholder.typicode.com/todos "
  );

  const [currentPage, setCurrentPage] = useState(1);

  function increment() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function decrement() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPage;

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDiaplay = data.slice(startIndex, endIndex);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Fetch-Api</h1>
        {!isError == "" && <h2>{isError}</h2>}
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER_ID</th>
              <th>Title</th>
            </tr>
          </thead>
          {itemsToDiaplay.map(({ id, userId, title }) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="btn">
        <button onClick={decrement} disabled={preDisabled}>
          Previous
        </button>
        <button onClick={increment} disabled={nextDisabled}>
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
