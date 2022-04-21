import React, { useState } from "react";


const LikeButton = () => {
    const [counter, setCounter] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [color, setColor] = useState(0);

    const handleColor = (counter, colors) => {
        counter++;
        let newColor = counter;
        if(counter >= colors.length) {
            newColor = counter % (colors.length);
            console.log('New color dans handleColor dans le IF donc counter est supérieur à 5', newColor)
        }   else {
            console.log('New color dans handleColor dans le ELSE donc counter est inférieur à 5 :', newColor)
            newColor = counter;
        }
        
        return newColor;
    }

    return (
        <button
            className="LikeButton"
            onClick={() => {
                setCounter((prevCount) => prevCount + 1);
                let newColor = handleColor(counter, colors);
                setColor(newColor);
                setColor(handleColor(counter, colors));
            }}
            style={{
                backgroundColor: colors[color],
                color:'white',
                fontSize:'2rem',
                ':active':{
                    'boxShadow':'1px 1px 4px 4px rgb(0, 0, 0)'
                }
            }}
        >
            {counter} Like{counter > 1 && ('s') }
        </button>
    );
};

export default LikeButton;