import React from 'react'

const Card = props => {
    return (
        props.booksArr.map(({ volumeInfo, title, description, authors, imageLinks, thumbnail, selfLink }) => {
            return <div>
                {selfLink}
                {volumeInfo.title}
                {volumeInfo.description}
                {volumeInfo.authors}
                {/* {volumeInfo.imageLinks.thumbnail} */}
                <hr></hr>
            </div>

        })
    )
}

export default Card