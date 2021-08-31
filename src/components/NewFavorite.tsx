import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function NewFavorite(props: any) {
    return (
        <Button
            size="large"
            startIcon={<AddIcon fontSize="large" />}
            variant="contained" color="primary" >New Favorite
        </Button>
    )
}