import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);
    const [RGBColor, setRGBColor] = useState({R:0,G:0,B:0})

    const handleColor = (e) => {
        if (e.target.name === 'R') {
            setRValue(e.target.value)
        } else if (e.target.name === 'G'){
            setGValue(e.target.value)
        } else {
            setBValue(e.target.value)
        }
        setRGBColor({R:rValue, G:gValue, B:bValue});
    }

    return (
        <div
            className='RGBColorPicker'
            style={{
                width:'75%',
                margin:'.5rem auto',
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
            }}
            >
                <div className='RGBSample' style={{display:'flex', flexDirection:'row'}}>
                    {`rgb(${RGBColor.R}, ${RGBColor.G}, ${RGBColor.B}) `}
                    <div
                        className='RGBSampleBox'
                        style={{
                            width:'2rem',
                            height:'auto',
                            border:'1px solid black',
                            backgroundColor:`rgb(${RGBColor.R}, ${RGBColor.G}, ${RGBColor.B})`
                        }}
                    >
                        &nbsp;
                    </div>
                </div>
                
            <SingleColorPicker
                color="R"
                RGBColor={RGBColor}
                value={rValue}
                handleColor={handleColor}
            />

            <SingleColorPicker
                color="G"
                RGBColor={RGBColor}
                value={gValue}
                handleColor={handleColor}
            />

            <SingleColorPicker
                color="B"
                RGBColor={RGBColor}
                value={bValue}
                handleColor={handleColor}
            />
        </div>
    )
}
export default RGBColorPicker;