import React, {useState, useContext, useEffect} from 'react'
import { useGlobalContext } from '../context'

const maxOnPage = 15;

const PageNav = () => {
    const {maxPageNum, pageNum, setPageNum, startID, setStartID, maxID, setMaxID, numSet, setNumSet, maxSets} = useGlobalContext();

    const [pages, setPages] = useState([...new Array(maxOnPage+1).keys()].slice(1))

    const prevSet = () => {
        if (numSet != 1) {
            setNumSet(numSet-1);
        }
    }
    const prevPage = () => {
        if (pageNum != 1) {
            setStartID(startID - maxOnPage);
            setMaxID(maxID - maxOnPage);
            setPageNum(pageNum-1);
        }
    }
    const nextSet = () => {
        if (numSet != maxSets) {
            setNumSet(numSet+1);
        }
    }
    const nextPage = () => {
        if (pageNum != maxPageNum) {
            setStartID(startID + maxOnPage);
            setMaxID(maxID + maxOnPage);
            setPageNum(pageNum+1);
        }
    }

    // bug where if we are going to a lower page num, IDs do not decrease
    const getPage = (event) => {
        const pageToGo = event.target.innerHTML;
        const multiplier = pageToGo - pageNum;
        setStartID(startID + multiplier*maxOnPage);
        setMaxID(maxID + multiplier*maxOnPage);
        setPageNum(pageToGo);
    }

    useEffect(() => {
        console.log("HELLO")
        let newPagesList = [];
        // change pages state
        console.log("start", startID+maxOnPage*(numSet-1))
        console.log("max", maxOnPage*numSet)
        for (let i = startID+maxOnPage*(numSet-1); i <= maxOnPage*numSet; i++) {
            newPagesList.push(i);
        }
        setPages(newPagesList); // render when pages is set
    }, [numSet])

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
                            <button className={"page-btn"} onClick={getPage}>
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
