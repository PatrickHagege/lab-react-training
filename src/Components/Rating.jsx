const Rating = (props) => {

    const repeatStars = (props) => {
        let numberOfStars = props.children;
        numberOfStars = Math.round(numberOfStars);

        let output = '';
        for (let i = 0; i < 5; i++) {
            if (numberOfStars <= i ) {
                output += '\u2606'
            } else {
                output += '\u2605';
            }
        }
        return output;

        // Alternative way for the same result
        // let output = ['\u2606', '\u2606', '\u2606', '\u2606', '\u2606'];
        // for (let i = 0; i < numberOfStars; i++) {
        //     output[i] = '\u2605';
        // }
        // return output.join('');
    }

    return(
        <div
            className='Rating'
            style={{ 
                fontSize:'2rem'
            }}
        >
            {`${repeatStars(props)}`}
        </div>
    );
}

export default Rating