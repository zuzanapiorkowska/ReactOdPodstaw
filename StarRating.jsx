import React, { useState } from "react";
import { Star } from "./Star";

function range(range) {
    const array = [];
    for (let i = 0; i < range; i++) {
        array.push(i);
    }
    console.log(array);
    return array;
}

let totalRating = 5;
export function StarRating() {
    const [rating, setRating] = useState(3);
    return (
        <div> 
            <p>świnka</p>
            {range(totalRating).map(key =>
                <Star
                    key={key}
                    selected={key < rating}
                />
            )}
        </div>
    );
}