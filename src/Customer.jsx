import { useEffect, useState } from "react";
import { useFetch } from "./my-fetch";

function CustomerPage() {


    const [customerData, setCustomerData] = useState([]);

    const _fetch = useFetch();


    async function getCustomer() {

        let response = await _fetch("/customer-data");
        if (response.ok) {
            setCustomerData(response.data);

        } else {

        }

    }
    useEffect(() => {
        getCustomer();
    }, [])


    return (<div>
        <h2>Customer Page</h2>
        <ul>{customerData.map((item, i) => <li key={i}>{item.first_name} {item.last_name}</li>)}</ul>
    </div>)
}

export default CustomerPage;

//