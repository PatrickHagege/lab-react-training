import React from "react";

const randomBetweenMinMax = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Random = (props) => {
    console.log('props.max',props.max);
    console.log('props.min',props.min);
    return (
        <div className="random"
            style={{
                border:'1px solid black',
                textAlign:'left',
                margin:'1rem',
                padding:'2rem'
            }}
        >
            Random value between {props.min} and {props.max} =&gt; {randomBetweenMinMax(props.min, props.max)}
        </div>
    );
};

export default Random;