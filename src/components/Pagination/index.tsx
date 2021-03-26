import React, { useEffect, useState } from 'react';
import { Ul, Link, Container, Li, ArrowLi, ArrowLink } from './styles';

import { PaginationProps } from './constracts'

let hasMobile = false

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  hasMobile = true
}

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = ({
  totalRecords = 0,
  pageLimit = 30,
  setPaginationOrderList,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalRecords / pageLimit);

  const gotoPage = async (page: number) => {
    await setCurrentPage(page);

    const offset = (page - 1) * pageLimit;

    setPaginationOrderList({ offset, pageLimit })
  };

  useEffect(() => {
    gotoPage(1);
  }, [totalRecords]);

  const handleClick = (page: number) => (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    gotoPage(page);
  };

  let startPage = 1;
  let endPage = totalPages;

  if (hasMobile) {
    startPage = currentPage == totalPages ? Math.max(1, currentPage - 2) : Math.max(1, currentPage - 1);
    endPage = currentPage == 1 ? Math.min(totalPages, currentPage + 2) : Math.min(totalPages, currentPage + 1);
  }

  const pages = range(startPage, endPage);


  if (!totalRecords || totalPages === 1) return null;

  return (
    <>
      <Container aria-label="Countries Pagination">
        <Ul className="pagination">
          <ArrowLi className={`${currentPage < 3 ? 'hidden' : ''}`}>
            <ArrowLink
              href="#"
              onClick={handleClick(1)}
            >
              {'<<'}
            </ArrowLink>
          </ArrowLi>
          <ArrowLi className={`${currentPage < 2 ? 'hidden' : ''}`}>
            <ArrowLink
              href="#"
              onClick={handleClick(currentPage - 1)}
            >
              {'<'}
            </ArrowLink>
          </ArrowLi>
          {pages.map((page, index) => (
            <Li
              key={index}
              className={`page-item${currentPage === page ? ' active' : ''}`}
            >
              <Link
                className="page-link"
                href="#"
                onClick={handleClick(page)}
              >
                {page}
              </Link>
            </Li>
          ))}

          <ArrowLi className={`${currentPage == totalPages ? 'hidden' : ''}`}>
            <ArrowLink
              className="page-link"
              href="#"
              onClick={handleClick(currentPage + 1)}
            >
              {'>'}
            </ArrowLink>
          </ArrowLi>

          <ArrowLi className={`${currentPage > (totalPages - 2) ? 'hidden' : ''}`}>
            <ArrowLink
              className="page-link"
              href="#"
              onClick={handleClick(totalPages)}
            >
              {'>>'}
            </ArrowLink>
          </ArrowLi>
        </Ul>
      </Container>
    </>
  );
};

export default Pagination;
