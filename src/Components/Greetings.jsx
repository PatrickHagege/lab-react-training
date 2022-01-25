import React from "react";

const greetingsFunction = function(props) {
    if (props.lang === 'de' ) {
        return 'Hallo';
    }   else if (props.lang === 'en')   {
        return 'Hello';
    }   else if (props.lang === 'es')   {
        return 'Hola';
    }   else {
        return 'Bonjour';
    }
}

const Greetings = (props) => {
    console.log(props);
    return (
        <div className="greetings"
            style={{
                border:'1px solid black',
                textAlign:'left',
                margin:'1rem',
                padding:'2rem'
            }}
        >
            {greetingsFunction(props)} {props.children}
        </div>
    );
};

export default Greetings;