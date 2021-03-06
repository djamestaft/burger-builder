import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;