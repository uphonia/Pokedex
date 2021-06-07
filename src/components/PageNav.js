import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'

const maxPageInRow = 15;

const PageNav = () => {

    const prevSet = () => {

    }
    const prevPage = () => {

    }
    const nextSet = () => {

    }
    const nextPage = () => {

    }
    const getPage = () => {

    }

    let pageButtons = [];
    let pageButtonClass = "page-btn";
    for (let i = 1; i <= maxPageInRow; i++) {
        if (i == 1) {
            pageButtonClass = "page-btn active"
        } else pageButtonClass = "page-btn"
        pageButtons.push(<li key={i}><button className={pageButtonClass}>{i}</button></li>)
    }

    return (
        <div className="pagenav-container">
            <ul>
                <li><button className="page-btn" onClick={prevSet}>
                    {"<<"}
                </button></li>
                <li><button className="page-btn" onClick={prevPage}>
                    {"<"}
                </button></li>
                {
                    pageButtons
                }
                <li><button className="page-btn" onClick={nextPage}>
                    {">"}
                </button></li>
                <li><button className="page-btn" onClick={nextSet}>
                    {">>"}
                </button></li>
            </ul>
        </div>
    )
}

export default PageNav
