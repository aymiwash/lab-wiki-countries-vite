import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

function CountryDetails({ baseURL }) {
    const params = useParams()

    const [country, setCountry] = useState()

    //Fetching data from API only ONCE 
    useEffect(() =>
        //Cannot use async directly with useEffect, so need to put it inside the callback
        async () => {
            try {
                //Destructuring data from response
                const { data } = await axios.get(`${baseURL}/${params.countryId}`)
                //Set data to countries
                console.log("my data is", data)
                setCountry(data)
            } catch (error) {
                console.error(error)
            }
        }, [params])

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
            {country !== null && country !== undefined ?
                <>
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map((border) =>
                                            <li key={border} ><Link to={`/${border}`}>{border}</Link></li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table> </>
                : <p>Loading...</p>}
        </div>
    )
}

export default CountryDetails;
