import React from 'react';
import classes from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesСount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesСount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span key={p.id} className={currentPage === p && classes.selectedPage}
                onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}
    </div>
}

export default Paginator;