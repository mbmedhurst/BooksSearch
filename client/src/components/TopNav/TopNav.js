import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const TopNav = props => {

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#fbbc05'}}>
        <Toolbar>
          <h2 style={{marginRight: '20px'}}>
            Google Books
          </h2>
          <Button href='./' variant="h6" style={{color: 'white', fontWeight: 'bold'}}>
            Search
          </Button>
          <Button href='/saved' variant="h6" style={{color: 'white', fontWeight: 'bold'}}>
            Saved
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNav
