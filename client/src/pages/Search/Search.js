import React from 'react'
import Input from '../../components/Search/Input'


const Search = props => {
    

    return (
        <>
            <Input 
                searchTerm={props.searchTerm}
                handleInputChange={props.handleInputChange}
                handleSubmitSearch={props.handleSubmitSearch}
            />
            {/* <Card 
                title={props.title}
                authors={props.authors}
                description={props.description}
                url={props.url}
                image={props.image}
            /> */}
        </>
    )
}

export default Search