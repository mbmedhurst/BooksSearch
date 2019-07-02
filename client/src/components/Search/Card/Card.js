import React from 'react';

const SearchCard = props => {

    return (
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
