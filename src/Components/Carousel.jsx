import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState('');
    const [position, setPosition] = useState(0);

    // const changeImage = () => {

    // }

    const handleClick = (event) => {
        let direction = event.target.innerHTML;
        if (direction === 'next') {
            if (position === images.length - 1) {
                setPosition(0);
                setCurrentImage(images[position])
            } else {
                setPosition(position + 1);
                setCurrentImage(images[position])
            }
        }
        if (direction === 'previous') {
            if (position === 0) {
                setPosition(images.length - 1);
                setCurrentImage(images[position])
            } else {
                setPosition(position - 1);
                setCurrentImage(images[position])
            }
        }
    }

    useEffect(() => {
        setCurrentImage(images[position]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    return (
        <div className='Carousel'>
            <button
                className='previous'
                onClick={handleClick}
            >
                previous
            </button>
            <div className='imageContainer'>
                <img src={currentImage} alt="" />
            </div>
            <button
                className='next'
                onClick={handleClick}
            >
                next
            </button>
        </div>
    )
}

export default Carousel;