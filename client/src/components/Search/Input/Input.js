import React from 'react'

const Input = props => {
    return (
        <>
            <input id='searchTerm' onChange={props.handleInputChange}></input>
            <button id='search' onClick={props.handleSubmitSearch}>Search</button>
        </>
    )
}

export default Input



