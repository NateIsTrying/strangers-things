import { useState } from 'react';

const HomePage = ({setAuthToken}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    }
                })                
            });

            const loginData = await response.json();
            console.log(loginData.data.message);
            const loginToken = loginData.data.token;
            if(loginData.success){
                setAuthToken(loginToken);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type='submit'>Login</button>
            </form>
        </>
    ) 

}

export default HomePage;