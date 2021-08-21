import React, { useEffect, useState } from 'react'
import '../AStatewise/Statewise.css'

const Statewise = () => {

    const [data, setdata] = useState([])
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const jsondata = await res.json();

        setdata(jsondata.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="container-flud mt-5">
                <div className="main-heading">
                    <h1 className='mb-5 text-center'>
                        <span className="font-weight-bold">India </span> COVID-19 DashBoard</h1>
                </div>

                <div className="table-responsive">

                    <table className="table table-hover "  >

                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>

                        <tbody>

                            {data.map((CurElem, Index) => {
                                return (
                                    <tr key={Index}>
                                        <th>{CurElem.state}</th>
                                        <td className="lmao">{CurElem.confirmed}</td>
                                        <td className="">{CurElem.recovered}</td>
                                        <td className="ok">{CurElem.deaths}</td>
                                        <td className="">{CurElem.active}</td>
                                        <td className="">{CurElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise
