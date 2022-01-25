import React from "react";

const IdCard = (props) => {
    console.log(props);
    return (
        <div className="idCard"
            style={{
                border: '1px solid black',
                display:'flex',
                margin:'1rem',
                padding:'2rem'
            }}
        >
            <div className="avatar">
                <img src={props.picture} alt={props.name} />
            </div>
            {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            <div className="cardInfos"
            style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                padding:'1rem'
            }}
            >
                <p><b>First name:</b> {props.lastName}</p>
                <p><b>Last name:</b> {props.firstName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Birth:</b> {props.birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;