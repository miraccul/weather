import React from 'react';
import {Card} from '@material-ui/core';
import './weatherCard.css'
import img from '../../assets/thermometer.svg';

function WeatherCard(props) {
    if(!props.data.message) {
        if(props.data.city) {
            return (
                <Card variant="outlined" className="weatherCard">
                    {props.data.city ?<h2 className="title">{props.data.city},{props.data.region}</h2>:""}
                    <span className="temp">{props.data.temp? props.data.temp: ""}<b>&#8451;</b></span>
                </Card>
            )
        } else {
            return (
                <Card variant="outlined" className="weatherCard">
                    <img src={img} alt="Картинка"></img>
                </Card>
            )
        }
    } else {
        return (
            <Card variant="outlined" className="weatherCard errorMsg">
                <div><h1>{props.data.message}</h1></div>
            </Card>
        )
    }
}

export default WeatherCard;