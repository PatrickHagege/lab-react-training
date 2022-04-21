import React from "react";

const IdCard = (props) => {
    console.log('props in IdCard :\n', 'props.firstName :', props.lastName,'\nprops.firstName :', props.lastName, 'props.gender :', props.gender, '\n and some other props, see IdCard.js...');
    return (
        <div className="idCard"
            style={{
                border: '1px solid black',
                display:'flex',
                justifyContent:'left',
                margin:'1rem',
                padding:'.5rem'
            }}
        >
            <div className="avatar">
                <img
                    style={{
                        height:'225px',
                        margin:'auto'
                    }}
                    src={props.picture}
                    alt={props.name}
                />
            </div>
            {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            <div className="cardInfos"
                style={{
                    display:'flex',
                    flexDirection: 'column',
                    textAlign:'left',
                    justifyContent:'flex-start',
                    padding:'.25rem',
                    marginLeft:'.5rem',
                    height:'225px',
                    width:'12rem'
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