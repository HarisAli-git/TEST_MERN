import React from 'react';
import {Pagination} from "react-bootstrap"

export const Paginate = ({productsPerPage, totalProducts, paginate}) => {
  const pageNumbers = [];
  const active = 2;
  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++)
  {
    pageNumbers.push(
      <Pagination.Item key={i} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>,);
  }

  const paginationBasic = (
    <div>
      <Pagination size="lg">{pageNumbers}</Pagination>
      <br />
    </div>
  );
  
  return(paginationBasic);
};

export default Paginate;
