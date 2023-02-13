const paginationList = (currentPage, pageNumbers, setCurrentPage) => {
  let start = 0;
  let end = 0;
  if (pageNumbers?.length <= 5) {
    start = 0;
    end = pageNumbers?.length;
  } else {
    if (currentPage <= 2) {
      start = 0;
      end = 5;
    } else if (currentPage + 2 >= pageNumbers?.length) {
      start = pageNumbers?.length - 5;
      end = pageNumbers?.length;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }
  }

  return pageNumbers?.slice(start, end).map((number) => (
    <p
      key={number}
      style={{
        display: "inline-block",
        margin: "0 5px",
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "5px 10px",
        borderRadius: "10px",
        backgroundColor: number === currentPage ? "#d8eaeb" : "transparent",
      }}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </p>
  ));
};

export default paginationList;
