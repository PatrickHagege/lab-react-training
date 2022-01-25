import React from "react";

const bulletize = (number) => {
    let i = 0;
    console.log(number.split(''));
    let bulletizedNumber = number.split('');
    while(i<12) {
        bulletizedNumber[i] ='•';
        i++;
    }
    console.log(bulletizedNumber.join(''));
    number = bulletizedNumber.join('');
    return number;
}

// const formatCardNumber = (props) => {
//     let formattedCardNumber = [];
    
//         for (let i = 0; i < props.number.length; i++){
//             if (j%4 === 0) {
//                 formattedCardNumber.push(' ');
//                 formattedCardNumber.push(props.number[i])
//             } else {
//                 formattedCardNumber.push(props.number[i])
//             }
//         }
//         formattedCardNumber.join('');
//         props.number = formattedCardNumber
// }

const displayLogo = (props) => {
    let bankLogo;
    if (props.type === 'Master Card') {
        bankLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
    } else {
        bankLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
    }
    return bankLogo;
}

const CreditCard = (props) => {
    console.log(props);
    return (
        <div className="CreditCard"
            style={{
                borderRadius: '14px',
                backgroundColor: props.bgColor,
                color: props.color,
                display: 'flex',
                flexDirection: 'column',
                margin: '1rem',
                padding: '1rem',
                width: '400px',
                height: '250px'
            }}
        >
            {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            <div className="cardInfos"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: '1rem'
                }}
            >
                <div className="bankLogo"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'right',
                        width: '100%'
                    }}
                >
                    <img
                        style={{
                            width: '60px',
                        }}
                        src={displayLogo(props)} alt={props.bank} />
                </div>
                <div className="CreditCardNumber"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        height: '3.5rem',
                        padding: '2.5rem',
                    }}
                >
                    {bulletize(props.number)}
                </div>
                <div className="NumberAndBank"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'left',
                        fontSize: '1.2rem'
                    }}
                >
                    <div className="CreditCardExpiration"
                        style={{
                            width: '50%'
                        }}
                    >
                        Expires {props.expirationMonth}/{props.expirationYear}
                    </div>
                    <div className="BankName">
                        {props.bank}
                    </div>
                </div>
                <div className="owner">{props.owner}</div>
            </div>
        </div>
    );
};

export default CreditCard;