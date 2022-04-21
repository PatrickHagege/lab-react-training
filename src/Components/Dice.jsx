import { useState, useEffect } from 'react';

const Dice = (props) => {
    const [value, setValue] = useState('');

    const randomizeFace = () => {
        let randomValue = Math.ceil(Math.random() * 6);
        let randomizedDice = `images/dice${randomValue}.png`;
        setValue(randomizedDice);
    }

    // const blankFace = () => {
    //     return new Promise(function(resolve, reject) {
    //         setTimeout(() => {
    //             resolve(setValue(`images/dice-empty.png`))
    //             clearTimeout(timeoutId)
    //         }
    //         , 2000)
    //    });
    // }

    useEffect(() => {
        randomizeFace();
        console.log('Valeur du dé au chargement du composant vaut :', value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => {
        setValue(`images/dice-empty.png`);
        setTimeout(() => {
            randomizeFace();
          }, 1000);
          
    }

    return (
        <div className='Dice'>
            <img
            src={value}
            alt="Random Dice"
            onClick = {handleClick}
        />
        </div>
    )
}

export default Dice;