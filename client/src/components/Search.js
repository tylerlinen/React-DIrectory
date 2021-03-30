import React from 'react'

function Search({handleSearchChange}) {
    return (
        <div>
            <form>
                <input className="form_control" type="search" placeholder="search" onChange={event => handleSearchChange(event)}></input>
            </form>
        </div>
    )
}

export default Search
