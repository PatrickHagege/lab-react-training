import React from "react";

const rgbColorComponent = function (props) {
    let {r,g,b} = props;
    let rgbColor = `${r},${g},${b}`
    return rgbColor;
}

const toHexa = (props) => {
    let {r,g,b} = props;
    let hexaColor = `#${parseInt(r, 10).toString(16)}${parseInt(g, 10).toString(16)}${parseInt(b, 10).toString(16)}`
    return hexaColor;
}

const reactiveColor = (props) => {
    let {r, g, b} = props;
    if ((r >= 128) && (g >= 128)) {
        console.log('(r >= 128) && (g >= 128)')
        return 'black';
    } else if ((g >= 128) && (b > 128)) {
        console.log('(g >= 128) && (b >= 128)')
        return 'black'
    }   else if ((b >= 128) && (b >= 128)) {
        console.log('(r >= 128) && (b >= 128)')
        return 'black'
    }   else {
        return 'white';
    }
}

const BoxColor = (props) => {
    console.log('R', props.r);
    console.log('G', props.g);
    console.log('B', props.b);
    console.log(rgbColorComponent(props))
    return (
        <div className="boxColor"
            style={{
                border:'1px solid black',
                textAlign:'center',
                fontSize:'1.5rem',
                fontWeight:'500',
                margin:'1rem',
                padding:'2rem',
                // backgroundColor:`rgb(${rgbColorComponent(props)})`,
                backgroundColor:`rgb(${props.r},${props.g},${props.b})`,
                color:`${reactiveColor(props)}`
            }}
        >
        rgb({props.r},{props.g},{props.b})
        <br/>
        {toHexa(props)}
        </div>
    );
};

export default BoxColor;