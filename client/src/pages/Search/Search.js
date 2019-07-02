import React from 'react'
import Input from '../../components/Search/Input'
import SearchCard from '../../components/Search/Card'


const Search = props => {

    return (
        <>
            <Input 
                searchTerm={props.searchTerm}
                handleInputChange={props.handleInputChange}
                handleSubmitSearch={props.handleSubmitSearch}
            />
            <SearchCard
                key='searchCard'
                booksArr={props.booksArr} 
                volumeInfo={props.volumeInfo}
                title={props.title}
                authors={props.authors}
                description={props.description}
                selfLink={props.selfLink}
                imageLinks={props.imageLinks}
                thumbnail={props.thumbnail}
                handleSaveBook={props.handleSaveBook}
            />
        </>
    )
}

export default Search