import React from 'react'

function Paginaion({postPerPage, totalPosts, paginate}) {
  const pageNumbers = [];

    for(let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
         

    }
    return (
        <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                  <li key={number} className="page-item">
                     <a onClick={() => paginate(number)} href="#" className="page-link">
                         {number}
                     </a>
                  </li>
              ))}
            </ul>
        </nav>
    )
}

export default Paginaion
