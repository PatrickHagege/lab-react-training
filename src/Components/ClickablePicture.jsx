import React, { useState } from "react";

const ClickablePicture = (props) => {
    const [clicked, setClicked] = useState(false);

    const toggleImage = () => {
        console.log('clicked vaut :', clicked)
        setClicked(!clicked);
    }

    console.log('props.img dans clikablepicture :', props.img)
    return (
        <>
        <img className="ClickablePicture"
        // src="images/maxence.png"
        src={clicked ? `images/${props.imgClicked}` : `images/${props.img}`
        }
        alt='Maxence'
        onClick={toggleImage}
        />
        </>
    );
};

export default ClickablePicture;