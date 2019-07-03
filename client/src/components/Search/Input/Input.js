import React from 'react'
import Button from '@material-ui/core/Button'

const Input = props => {
    return (
        <div style={{marginTop: '100px', marginLeft: '50px', marginRight: '50px', textAlign: 'center'}}>
            <div style={{color: '#4285f4'}}>
                <h1>Google Books Search</h1>
                <h3>Search for and save books of interest</h3>
            </div>
            <input style={{textAlign: 'center', fontSize: '20px', marginTop: '50px', width: '80%', height: '30px', borderRadius: '2px'}} id='searchTerm' onChange={props.handleInputChange}></input>
            <p>
            <Button style={{color: 'white', backgroundColor: '#4285f4'}} id='search' onClick={props.handleSubmitSearch}>Search</Button>
            </p>
        </div>
    )
}

export default Input



