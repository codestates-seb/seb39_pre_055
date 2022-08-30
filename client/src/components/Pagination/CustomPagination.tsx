import Pagination from 'react-js-pagination';

import { Container } from './style';

interface Prop {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  onChange: (page: number) => any;
  pageRangeDisplayed?: number;
}

const CustomPagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
  pageRangeDisplayed = 5,
}: Prop) => {
  return (
    <Container>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
        prevPageText="Prev"
        nextPageText="Next"
      />
    </Container>
  );
};

export default CustomPagination;
