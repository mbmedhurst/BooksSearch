import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const SavedCard = props => {

    return (
        // get index position off the books array to use as the value of the save button
        props.dbBooks.map(({ _id, title, description, authors, thumbnail, infoLink }, index) => {
            return <Paper style={{ padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {title}
                        <p>Written by {authors}</p>
                    </Grid>
                    <Grid item xs={6}>
                        <button id='view'><a style={{ color: 'black', textDecoration: 'none' }} href={infoLink} target='_blank'>View</a></button>
                        <button value={_id} id='delete' onClick={props.handleDeleteBook}>Delete</button>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={thumbnail}></img>
                    </Grid>
                    <Grid item xs={9}>
                        {description}
                    </Grid>
                </Grid>
            </Paper>

        })
    )
}

export default SavedCard
