import React from 'react'

const SearchCard = props => {

    return (
        // get index position off the books array to use as the value of the save button
        props.booksArr.map(({ title, description, authors, thumbnail, infoLink }, index) => {
            return <div>
                <p>{title}</p>
                <p>{authors}</p>
                <p>{description}</p>
                <img src={thumbnail}></img>
                <p>
                <button value={index} id='save' onClick={props.handleSaveBook}>Save</button>
                <button id='view'><a style={{color: 'black', textDecoration: 'none'}} href={infoLink} target='_blank'>View</a></button>
                </p>
                <hr></hr>
            </div>

        })
    )
}

export default SearchCard
