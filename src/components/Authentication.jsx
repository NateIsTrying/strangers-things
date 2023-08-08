import {useEffect, useState} from 'react'

const Authentication = async() => {
    const [APICall, setAPICall ] = useState(null)

    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT');
      const strangerData = await response.json();
      console.log(strangerData.success, strangerData.data);
      setAPICall(strangerData.success, strangerData.data);
    } catch (error) {
      console.log(error);
    }

    return (
        <>
            {APICall}
        </>
    )
}

export default Authentication;