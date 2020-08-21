import React from "react";

const WeatherContainer = (props) => (
    <form onsubmit={props.getWeather}>
        <input type="text" name="city" placeholder="CITY"/>
        <input type="text" name="country" placeholder="COUNTRY"/>
        <button>Get Weather</button>
    </form>
);
export default WeatherContainer;