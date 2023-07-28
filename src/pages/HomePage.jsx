import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ baseURL }) {

    const [countries, setCountries] = useState([])

    //Fetching data from API only ONCE 
    useEffect(() =>
        //Cannot use async directly with useEffect, so need to put it inside the callback
        async () => {
            try {
                //Destructuring data from response
                const { data } = await axios.get(`${baseURL}`)
                //Set data to countries
                setCountries(data)
            } catch (error) {
                console.error(error)
            }
        }, [])

    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {countries.map(country =>
                    <Link
                        key={country.alpha3Code}
                        className="list-group-item list-group-item-action"
                        to={`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />
                        <br></br>{country.name.common}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default HomePage;
