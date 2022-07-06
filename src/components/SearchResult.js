import { useState, useEffect, Fragment } from 'react';
import { getAllPayments, getAllPaymentsRestVersion, getAllPaymentsAxiosVersion } from '../data/DataFunctions';
import ResultRow from './ResultRow';
import './SearchResult.css'

const SearchResult = () => {
    //let selectCountryMsg = "Select a country";
    const countryList = ["USA", "FRA", "SWE"];
    console.log(countryList);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const populateCountries = countryList.map((country, idx) =>
        <option key={idx} value={country} >{country}</option>
    );


    const getAllPaymentsFromServer = () => {
        const paymentsPromise = getAllPaymentsAxiosVersion();
        paymentsPromise.then(
            (response) => {
                /* Non Axios versionn */
                // if (response.ok) {
                //     const dataPromise = response.json();
                //     dataPromise.then(data => {
                //         console.log("setting transaction data");
                //         setDisplayingPayments(data);
                //     }
                //     )
                // }
                /* Axios versionn */
                if (response.status === 200) {
                    setDisplayingPayments(response.data);
                }
            }
        ).catch(
            (error) => {
                console.log("server error", error);
            }
        );
    };
    useEffect(() => { getAllPaymentsFromServer() }, []);

    const payments = getAllPayments();
    const [displayingPayments, setDisplayingPayments] = useState(payments);

    const displayPayments = //{
        //console.log("selectedCountry="+selectedCountry);
        //return 
        displayingPayments.map((payment, index) => (selectedCountry == null || payment.country === selectedCountry) &&
            <ResultRow key={index} id={payment.id} date={payment.date} country={payment.country} currency={payment.currency} amount={payment.amount} />
            //{
            // if (selectedCountry == null || payment.country === selectedCountry) {
            //     return <ResultRow key={index} id={payment.id} date={payment.date} country={payment.country} currency={payment.currency} amount={payment.amount}/>
            // } else {
            //     return "";
            // }

            // return (selectedCountry == null || payment.country === selectedCountry) && 
            //         <ResultRow key={index} id={payment.id} date={payment.date} country={payment.country} currency={payment.currency} amount={payment.amount}/>
            // }

        )//};

    const selectCountry = (event) => {
        console.log("event=" + event);
        console.log("selected=" + event.target.value);
        //countryList.map((country, index) => index === event.target.option.selectedIndex ? setSelectedCountry(country) : setSelectedCountry(null));
        setSelectedCountry(event.target.value);
    }

    const filterCountry = () => {
        const tempPayments = payments.filter(payment => payment.country === selectedCountry);
        setDisplayingPayments(tempPayments);
    };
    return (
        <Fragment>
            <label htmlFor="countries">Choose a country:</label>
            <select id="countries" onChange={selectCountry}>
                <option selected disabled>Select a country</option>
                {populateCountries}
            </select>
            {payments.length === 0 && <p>"Please wait..."</p>}
            <table className="searchResults"  >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {displayPayments}
                </tbody>
            </table>
        </Fragment>
    );
}

export default SearchResult;