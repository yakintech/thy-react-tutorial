import { Grid } from '@mui/material'
import React from 'react'

function MuiGridSample() {
  return <>
        <Grid container>
            <Grid item xs={6} md={3} >
                Türkiye
            </Grid>
            <Grid item xs={6} md={3}>
                Almanya
            </Grid>
            <Grid item xs={6} md={3}>
                Rusya
            </Grid>
            <Grid item xs={6} md={3}>
                İran
            </Grid>
        </Grid>
  </>
}

export default MuiGridSample