import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const SavedCard = ({dbBooks = [], handleDeleteBook}) => {
    // console.log(dbBooks)
        // const { dbBooks, title, _id, description, authors, thumbnail, infoLink } = this.props
        // need to somehow get the app to wait for the data to be retunred from the database
        return (
            
            dbBooks.map(({ _id, title, description, authors, thumbnail, infoLink }) => {
                return <Paper style={{ backgroundColor: 'rgba(52,168,83,0.2)', padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '50px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h2>{title}</h2>
                            <p style={{ fontStyle: 'italic' }}>Written by {authors}</p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <button style={{ fontSize: '16px', height: '30px', width: '70px', borderRadius: '4px', backgroundColor: '#4285f4' }} id='view'><a style={{ color: 'white', textDecoration: 'none' }} href={infoLink} target='_blank'>View</a></button>
                            <button style={{ marginLeft: '5px', fontSize: '16px', height: '30px', width: '70px', borderRadius: '4px', marginLeft: '5px', backgroundColor: '#eb4335', color: 'white' }} value={_id} id='delete' onClick={handleDeleteBook}>Delete</button>
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


export default SavedCard