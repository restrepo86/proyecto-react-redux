import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import styles from './style';

export default () => {
    
    const [searchText, setSearchText] = useState('');

    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick = event => {

    };

    const handleSearchTextClick = event => {

    };    

    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido!</Typography>
                    </Grid>
                    <Grid>
                        <label>Icono</label>
                    </Grid>
                </Grid>
                <TextField
                    value = { searchText }
                    placeholder = 'Buscar...'
                    className = { classes.textFieldSearch}
                    onChange = { handleSearchTextChange }
                />
                <Grid className = { classes.buttonsContainer }>
                    <Button 
                        variant='contained' 
                        onClick={ handleCleanTextClick }
                    >
                        Limpiar
                    </Button>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        size='large' 
                        className = { classes.searchButton }
                        onClick={ handleSearchTextClick }
                    >
                        Buscar
                    </Button>
                </Grid>
            </Card>
        </Container>
    );
};