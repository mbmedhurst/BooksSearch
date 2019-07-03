import React from 'react'
import SavedCard from '../../components/Saved/Card'


const Saved = props => {
    return (
        <>
            <SavedCard
                componentDidMount={props.componentDidMount}
                handleDeleteBook={props.handleDeleteBook}
                dbBooks={props.dbBooks}                
                savedBooks={props.savedBooks} 
                volumeInfo={props.volumeInfo}
                title={props.title}
                authors={props.authors}
                description={props.description}
                imageLinks={props.imageLinks}
                thumbnail={props.thumbnail}
            />
        </>
    )
}

export default Saved