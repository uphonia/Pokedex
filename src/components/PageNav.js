import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'

const maxOnPage = 15;

const PageNav = () => {
    const {maxPageNum, pageNum, setPageNum, numSet, setNumSet, maxSets, setMaxPageNumOnPage, setStartFetchID, idList, setLoading} = useGlobalContext();

    // set current page number active and keep track
    const [currentPage, setCurrentPage] = useState(1);

    // sets page numbers to display
    const [pages, setPages] = useState([...new Array(maxOnPage+1).keys()].slice(1))

    const prevSet = () => {
        if (numSet !== 1) {
            setNumSet(numSet-1);
        }
    }
    const nextSet = () => {
        if (numSet !== maxSets) {
            setNumSet(numSet+1);
        }
    }

    const prevPage = () => {
        if (pageNum !== 1) {
            setPageNum(parseInt(pageNum)-1);
            setStartFetchID((parseInt(pageNum)-2)*15+1);
            setLoading(true);
            setCurrentPage(parseInt(pageNum)-1);
        }
    }
    const nextPage = () => {
        if (pageNum !== maxPageNum) {
            setPageNum(parseInt(pageNum)+1);
            setStartFetchID(parseInt(pageNum)*15+1);
            setLoading(true);
            setCurrentPage(parseInt(pageNum)+1);
        }
    }

    const getPage = (event) => {
        const num = event.target.innerHTML;
        setPageNum(num);
        setStartFetchID((num-1)*15+1);
        setLoading(true);
        setCurrentPage(num);
    }

    // call when user is going to the next or prev set of pages
    useEffect(() => {
        const tempMaxPageNum = Math.ceil(idList.length/15);
        let newPagesList = [];
        const newMaxPageNum = numSet*15;
        for (let i = newMaxPageNum-14; i <= newMaxPageNum; i++) {
            if (i <= tempMaxPageNum) {
                newPagesList.push(i); // pushing index(i) in range
            }
        }
        setMaxPageNumOnPage(newMaxPageNum);
        setPages(newPagesList); // render when pages is set
    }, [numSet, idList])

    return (
        <div className="pagenav-container">
            <ul>
                <li><button className="page-btn" onClick={prevSet}>
                    {"<<"}
                </button></li>
                <li><button className="page-btn" onClick={prevPage}>
                    {"<"}
                </button></li>
                {pages.map((index) => {
                    return (
                        <li key={index}>
                            <button className={index === currentPage ? "page-btn active" : "page-btn"} onClick={getPage}>
                                {index}
                            </button>
                        </li>
                    )
                })}
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
