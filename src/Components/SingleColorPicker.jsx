const SingleColorPicker = ({ value, color, handleColor, RGBColor }) => {
    console.log('RGBColor.R', RGBColor.R);
    console.log('RGBColor.G', RGBColor.G);
    console.log('RGBColor.B', RGBColor.B);

    const actualColor = () => {
        if(color==='R') {
            return `rgb(${RGBColor.R}, 0, 0)`
        } else if (color==='G') {
            return `rgb(0, ${RGBColor.G},0)`
        } else if (color==='B') {
            return `rgb(0, 0,${RGBColor.B})`
        }   else {
            return `rgb(${RGBColor.R}, ${RGBColor.G},${RGBColor.B})`
        }
    }

    return(
        <div
            className='SingleColorPicker' style={{display: 'flex', flexDirection:'row', gap:'.5rem'}}
        >
            <div
                id='colorPicker'
                style={{
                    height:'100%',
                    width:'1.5rem',
                    backgroundColor:actualColor()
                }}
            >
                &nbsp;
            </div>
            <label htmlFor={color}>
                {color} : 
            </label>
            <input
                type="number"
                min="0"
                max="255"
                name={color}
                value={value}
                onChange={handleColor}
                placeholder="0"
            >
            </input>
            </div>
    )
}
export default SingleColorPicker;