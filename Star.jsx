import React from 'react';
import {FaStar} from "react-icons/fa";

export function Star({selected = false}) {
    console.log("Star");
    return <FaStar color= { selected ? "pink" : "gray" } />
}