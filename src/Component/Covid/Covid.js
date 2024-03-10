import './Covid.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        let data_url = 'https://covid-api.com/api/reports?date=2021-03-14&q=China%20Beijing&iso=CHN&region_name=China'
        let res = await axios.get(data_url);
        let data = res && res.data && res.data.data ? res.data.data : [];
        console.log(data);
        setDataCovid(data);
        setLoading(false);
    }

    useEffect(() => {
        setTimeout(async () => {
            fetchData();
            console.log('check data: ', dataCovid);
        }, 1500)

    }, []);
    return (
        <div className='covid-container'>
            <hr></hr>
            <div>Country: China</div>
            <div>Date: 14 - 03 - 2021</div>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>

                        <th>Provine</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index) => {
                            return (item.region.province !== 'Unknown' ?
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.region.province}</td>
                                    <td>{item.confirmed}</td>
                                    <td>{item.active}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.recovered}</td>
                                </tr>
                                : <div><p>  </p></div>
                            )
                        })
                    }
                    {loading === true &&
                        <tr>
                            <td colSpan={6} style={{ 'textAlign': 'center' }}>loading</td>
                        </tr>
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Covid;