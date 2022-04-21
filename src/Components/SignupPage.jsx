import { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const nationalities = ['en', 'de', 'fr'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('submitted', submitted)
    }

const greetings = () => {
    if (nationality==='en') {
        return 'Hello'
    } else if (nationality==='de') {
        return 'Hallo'
    } else if (nationality==='fr') {
        return 'Bonjour'
    }   else {
        return 'Shalom'
    }
}
    // console.log('submitted', submitted)
    console.log('nationality', nationality)

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email :</label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                autoComplete="on"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)}
                }
            />
            <label htmlFor="nationality">Nationaliity</label>
            <select name="nationality" id="nationality" onChange={(e)=>{
                            console.log('EVENT TARGET IN SIGNUP PAGE : ', e.target)
                            setNationality(e.target.value)
                        }}>
                {nationalities.map((n, i) => {
                    return (<option key={i}
                        value={n}
                >
                    {n}
                </option>)
                })}
            </select>
            <button
                type='submit'
            >
                submit
            </button>
        </form>
        {greetings()}
        {submitted && (<p>your email is {email}</p> )}
        {submitted && (<p>your password is {password}</p> )}
        {submitted && (<p>your nationality is {nationality}</p> )}
        </>
    )
}

export default SignupPage;