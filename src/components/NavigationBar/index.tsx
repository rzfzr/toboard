import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import { AppBar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const history = useHistory();
    const [value, setValue] = React.useState(0);
    return (
        <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0 }}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    history.push(newValue)
                }}
                showLabels
            >
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Weekly Progress" value="goals" icon={<BarChartIcon />} />
            </BottomNavigation>
        </AppBar>
    );
}