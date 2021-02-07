import { Pagination } from "semantic-ui-react";

const PaginationExampleShorthand = ({ blogs, itemsOnPage, page, setPage }) => {

  return (
    <Pagination
      activePage={page}
      onClick={(e) => setPage(e.target.innerText)}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      prevItem={null}
      nextItem={null}
      totalPages={Math.ceil(blogs.length / itemsOnPage)}
    />
  );
};

export default PaginationExampleShorthand;
