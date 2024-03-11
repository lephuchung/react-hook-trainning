import './Covid.scss';
import useFetch from '../../Customize/fetch';

const Covid = () => {
    let url = 'https://covid-api.com/api/reports?date=2021-03-14&q=China%20Beijing&iso=CHN&region_name=China'
    let { data: dataCovid, isLoading, isError } = useFetch(url);

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
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
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
                                : ''
                            )
                        })
                    }
                    {isLoading === true &&
                        <tr>
                            <td colSpan={6} style={{ 'textAlign': 'center' }}>Loading ...</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan={6} style={{ 'textAlign': 'center' }}>Something wrong ...</td>
                        </tr>
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Covid;