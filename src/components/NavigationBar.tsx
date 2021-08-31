import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import { AppBar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState('/');
    const history = useHistory();
    let currentPath = history.location.pathname
    if (value !== currentPath)
        setValue(currentPath)
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
                location.pathname
                <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Weekly Progress" value="/weekly" icon={<BarChartIcon />} />
            </BottomNavigation>
        </AppBar>
    );
}