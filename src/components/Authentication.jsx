import {useEffect} from 'react'

const Authentication = ({setAuthToken}) => {

    useEffect(() => {
        const registerUser = async() => {
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user:{
                        username: 'jamesBond',
                        password: 'govTool007',
                    }
                })
            });

            const tokenData = await response.json()
            console.log(tokenData.data.token);
            const tokenString = tokenData.data.token 
            setAuthToken(tokenString);

            } catch (error) {
                console.log(error);
            }
        }
        registerUser();
    },[]);

    return (
        <>
            <h3> This is the Authentication </h3>
        </>
    )
}

export default Authentication;