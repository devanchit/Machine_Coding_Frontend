import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Photos() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?limit=10&page=${pageNo}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Fetch error:", error));
  }, [pageNo]);

  // useEffect(() => {
  //   console.log(data); // Logs the updated data whenever it changes
  // }, [data]);
  return (
    <>
      <div className="container">
        <div className="image-container">
          {data.map((info, index) => (
            <img key={index} src={info.download_url} alt="Nan" />
          ))}
        </div>
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </>
  );
}

export default Photos;
