import React from 'react'

const SavedCard = props => {

    return (
        // get index position off the books array to use as the value of the save button
        props.dbBooks.map(({ _id, title, description, authors, thumbnail, infoLink }) => {
            return <div>
                <p>{title}</p>
                <p>{authors}</p>
                <p>{description}</p>
                <img src={thumbnail}></img>
                <p>
                <button value={_id} id='save'>Delete</button>
                <button id='view'><a style={{color: 'black', textDecoration: 'none'}} href={infoLink} target='_blank'>View</a></button>
                </p>
                <hr></hr>
            </div>

        })
    )
}

export default SavedCard
