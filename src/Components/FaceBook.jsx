import { useState } from 'react';

import profiles from './../data/berlin.json';
import CountryButton from './CountryButton';

const uniqueCountries = [];

profiles.filter(element => {
  const isDuplicate = uniqueCountries.includes(element.country);

  if (!isDuplicate) {
    uniqueCountries.push(element.country);
    return true;
  } else return false;
});

// other way for the same result with ES6 Set
// const listTheCountries = (list) => {
//     return [...new Set(list.map((item) => item.country))];
//   };


const FaceBook = () => {
    const [bg, setBg] = useState('');
    const [selected, setSelected] = useState('');

    const changeBackground = () => {
        console.log('coucou ca marche !');
        setBg('blue');
    }
    console.log('SELECTED : ', selected)
    console.log('PROFILES :', profiles)
    return(
        <div className='FaceBook'>
            <div className="CountriesButtons">
                {uniqueCountries.map((country, i) => {
                    return (
                    <CountryButton key={i}
                        country={country}
                        setSelected={setSelected}
                        changeBackground={changeBackground}
                    />)
                })}
            </div>
            {
                profiles.map((profile, i) => {
                    return(
                        <article className='profile'
                            style={{
                                border: '1px solid black',
                                width:'90vw',
                                margin:'.5rem',
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'flex-start',
                                backgroundColor:(selected===profile.country) ? bg : 'white',

                            }}
                            key={i}>
                            <img
                                style={{
                                    maxWidth:'13rem',
                                    maxHeight:'13rem',
                                    width:'auto',
                                    height:'auto'
                                }}
                                src={profile.img}
                                alt={profile.lastName}
                            />
                            <div
                                className='profileInfos'
                                style={{
                                    marginLeft:'1.5rem',
                                    fontSize:'1.25rem',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'space-evenly',
                                    alignItems:'left',
                                    textAlign:'left'
                                }}
                            >
                                <p><span
                                style={{
                                    fontWeight:'bold'
                                }}
                                >Firstname : </span>{profile.firstName}</p>
                                <p><span
                                style={{
                                    fontWeight:'bold'
                                }}
                                >Lastname : </span>{profile.lastName}</p>
                                <p><span
                                style={{
                                    fontWeight:'bold'
                                }}
                                >Country : </span>{profile.country}</p>
                                <p><span
                                style={{
                                    fontWeight:'bold'
                                }}
                                >Type : </span>{profile.isStudent ? 'student' : 'teacher'}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default FaceBook;