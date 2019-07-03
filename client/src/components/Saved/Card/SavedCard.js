import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const SavedCard = props => {

    return (
        // get index position off the books array to use as the value of the save button
        props.dbBooks.map(({ _id, title, description, authors, thumbnail, infoLink }, index) => {
            return <Paper style={{ padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2>{title}</h2>
                        <p style={{fontStyle: 'italic'}}>Written by {authors}</p>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: 'right'}}>
                        <Button style={{ backgroundColor: '#4285f4' }} id='view'><a style={{ color: 'white', textDecoration: 'none' }} href={infoLink} target='_blank'>View</a></Button>
                        <Button style={{marginLeft: '5px', backgroundColor: '#eb4335', color: 'white' }} value={_id} id='delete' onClick={props.handleDeleteBook}>Delete</Button>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: 'center'}}>
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

export default SavedCard
