function Pagination({ pageNo, setPageNo }) {
    const prev = Array.from({ length: 3 }, (_, i) => pageNo - 3 + i).filter(
      (i) => i > 0
    );
    const next = Array.from({ length: 3 }, (_, i) => pageNo + i);
    // console.log(next);
    const pages = [...prev, ...next];
    console.log(pages);
    return (
      <>
        <div className="button-container">
          {/* <button onClick={() => setPageNo(pageNo - 1)}> prev </button>
          <button> {pageNo}</button>
          <button onClick={() => setPageNo(pageNo + 1)}> next </button> */}
  
          {pageNo > 1 ? (
            <div className="pageno" onClick={() => setPageNo(pageNo - 1)}>
              {" "}
              prev{" "}
            </div>
          ) : (
            ""
          )}
          {pages.map((page, index) => (
            <>
              <div
                className={page == pageNo ? "pageno active" : "pageno"}
                onClick={() => setPageNo(page)}
                key={index}
              >
                {" "}
                {page}{" "}
              </div>
            </>
          ))}
  
          <div className="pageno" onClick={() => setPageNo(pageNo + 1)}>
            {" "}
            next{" "}
          </div>
        </div>
      </>
    );
  }
  
  export default Pagination;
  