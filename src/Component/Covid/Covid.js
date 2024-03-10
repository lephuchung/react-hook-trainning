import './Covid.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([])

    const fetchData = async () => {
        let res = await axios.get(`https://covid-api.com/api/reports?date=2021-03-14&q=China%20Beijing&iso=CHN&region_name=China`);
        let data = res && res.data && res.data.data ? res.data.data : [];
        console.log(data);
        setDataCovid(data);
    }

    useEffect(() => {
        fetchData();
        console.log('check data: ', dataCovid);
    }, [])
    return (
        <div className='covid-container'>
            <hr></hr>
            <div>Country: China</div>
            <div>Date: 14 - 03 - 2021</div>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>Provine</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCovid.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.region.province}</td>
                                <td>{item.confirmed}</td>
                                <td>{item.active}</td>
                                <td>{item.deaths}</td>
                                <td>{item.recovered}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Covid;