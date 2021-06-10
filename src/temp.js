
<div className="filter-expand" id="evolution-expand">
    Number of Evolutions
</div>
<div className="table-container" id="evolution-table">
    <ul>
        <li key="anyevo">
            <input type="checkbox" key="anyevo" checked onChange={filterEvo} id="allEvos"/>
            <label htmlFor="anyevo">Any</label>
        </li>
        <li key="1evo">
            <input type="checkbox" key="1evo" onChange={filterEvo}/>
            <label htmlFor="1evo">1</label>
        </li>
        <li key="2evo">
            <input type="checkbox" key="2evo" onChange={filterEvo}/>
            <label htmlFor="2evo">2</label>
        </li>
        <li key="3evo">
            <input type="checkbox" key="3evo" onChange={filterEvo}/>
            <label htmlFor="3evo">3</label>
        </li>
    </ul>
</div>


	async function filterEvo(event) {
		const sibling = event.target.nextElementSibling;
		const evo = sibling.htmlFor
		const mainChecked = document.getElementById("allEvos");
		setEvoFilter((prevState) => {
			if (event.target.checked == true) {
				if (mainChecked.checked == true) mainChecked.checked = false;
				return [...prevState, evo]
			} else {
				return prevState ? prevState.filter((str) => str !== evo):[]
			}
		})
	}
