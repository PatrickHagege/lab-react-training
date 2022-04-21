import Rating from './Rating';

const DriverCard = (props) => {

    return (
        <div className='DriverCard'
            style={{
                backgroundColor: 'rgb(71,91,181)',
                color: 'white',
                margin:'1rem',
                padding:'.5rem',
                display: 'flex',
                flexDirection: 'row',
                gap:'1rem',
                // justifyContent:'center',
                borderRadius:'10px'
            }}
        >
            <div className='imgContainer'
                style={{
                    width: '125px',
                    height: '125px',
                    borderRadius: '50%',
                    marginLeft:'35%'
                }}
            >
                <img
                    style={{
                        objectFit: 'cover',
                        width: '125px',
                        height: '125px',
                        borderRadius: '50%'
                    }}
                    src={props.img}
                    alt={props.name}
                />
            </div>

            <div className='driverInfos'
                style={{
                    display:'flex',
                    marginLeft:'2rem',
                    flexDirection:'column',
                    alignItems:'flexStart',
                    textAlign:'left',
                    gap:'.5rem'
                }}
            >
                <div className='driverName'
                    style={{
                        fontSize:'2rem',
                        fontWeight:'600'
                    }}
                >
                    {props.name}
                </div>
                <Rating>{props.rating}</Rating>
                <div
                    className='car'
                    style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    {props.car.model} - {props.car.licensePlate}
                </div>
            </div>
        </div>
    );
}

export default DriverCard;