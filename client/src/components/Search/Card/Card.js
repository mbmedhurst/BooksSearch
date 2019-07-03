import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const SearchCard = props => {

    return (
        // get index position off the books array to use as the value of the save button
        props.booksArr.map(({ title, description, authors, thumbnail, infoLink }, index) => {
            return <Paper style={{ backgroundColor: 'rgba(52,168,83,0.2)', padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2>{title}</h2>
                        <p style={{ fontStyle: 'italic' }}>Written by {authors}</p>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <button value={index} id='save' onClick={props.handleSaveBook} style={{fontSize: '16px', height: '30px', width: '70px', borderRadius: '4px', color: 'white', backgroundColor: '#34a853'}}>Save</button>
                        <button style={{marginLeft: '5px', backgroundColor: '#4285f4', fontSize: '16px', height: '30px', width: '70px', borderRadius: '4px',}} id='view'><a style={{ color: 'white', textDecoration: 'none' }} href={infoLink} target='_blank'>View</a></button>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <img src={thumbnail}></img>
                    </Grid>
                    <Grid item xs={10}>
                        {description}
                    </Grid>
                </Grid>
            </Paper>
        })
    )
}

export default SearchCard

