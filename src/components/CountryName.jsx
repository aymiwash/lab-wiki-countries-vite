import axios from "axios"
import { useState, useEffect } from "react"

const CountryName = ({ alpha3Code, baseURL }) => {

    const [country, setCountry] = useState()

    //Fetching data from API only ONCE 
    useEffect(() =>
        //Cannot use async directly with useEffect, so need to put it inside the callback
        async () => {
            try {
                //Destructuring data from response
                const { data } = await axios.get(`${baseURL}/${alpha3Code}`)
                //Set data to countries
                setCountry(data)
            } catch (error) {
                console.error(error)
            }
        }, [])

    return (
        <>
            {country &&
                <>
                    {country.name.common}
                </>}
        </>
    )
}

export default CountryName;