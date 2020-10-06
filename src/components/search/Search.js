import React from 'react';
import './search.css'
import {Button} from '@material-ui/core';

function Search(props) {
    return (
        <form className="search" onSubmit={props.getWeather}>
           <input type="text" name="city" placeholder="Населённый пункт"></input>
            <Button variant="contained" type="submit">Поиск</Button>
        </form>
    )
}

export default Search;