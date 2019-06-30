import React from 'react'
import Input from '../../components/Search/Input'
import Card from '../../components/Search/Card'


const Search = props => {

    return (
        <>
            <Input 
                searchTerm={props.searchTerm}
                handleInputChange={props.handleInputChange}
                handleSubmitSearch={props.handleSubmitSearch}
            />
            <Card 
                title={props.title}
                authors={props.authors}
                description={props.description}
                selfLink={props.selfLink}
                thumbnail={props.thumbnail}
            />
        </>
    )
}

export default Search