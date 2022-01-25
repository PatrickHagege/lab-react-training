import React from "react";

const rgbColorComponent = function(props) {
    let {r,g,b} = props;
    let rgbColor = `${r},${g},${b}`
    return rgbColor;
}

const toHexa = (props) => {
    let {r,g,b} = props;
    let hexaColor = `#${parseInt(r, 10).toString(16)},${parseInt(g, 10).toString(16)},${parseInt(b, 10).toString(16)}`
    return hexaColor;
}

const BoxColor = (props) => {
    console.log(props);
    console.log(rgbColorComponent(props))
    return (
        <div className="boxColor"
            style={{
                border:'1px solid black',
                textAlign:'left',
                margin:'1rem',
                padding:'2rem',
                textAlign:'center',
                backgroundColor:`rgb(${rgbColorComponent(props)})`
            }}
        >
        rgb({props.r},{props.g},{props.b})
        <br/>
        {toHexa(props)}
        </div>
    );
};

export default BoxColor;