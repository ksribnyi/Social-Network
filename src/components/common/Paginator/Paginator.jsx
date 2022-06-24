import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import classNames from 'classnames'
import Button from "@mui/material/Button";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <Button className={styles.btnPrev} variant={"contained"} color={"primary"} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</Button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span  className={classNames(currentPage === p && styles.selectedPage, styles.pageNumber)} key={p} onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
        { portionCount > portionNumber &&
        <Button className={styles.btnNext} variant={"contained"} color={"primary"} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</Button> }
    </div>
}

export default Paginator;