import React,{useState, useEffect} from 'react'

import './Covid.css'

const Covid = () => {

    
    const [state, setstate] = useState([])


    const getCoviddata = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const jsondata = await res.json();
            console.log(jsondata)
            setstate(jsondata.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCoviddata();
    }, [])


    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Live Covid Cases 📈🦠</h1>
            </div>
            <div className="container-flud mb-5">
                <div className="row gy-4 col-10 mx-auto">

                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card border-warning">
                            <div className="card-header text-center">Total Active</div>
                            <div className="card-body covidbodyx">
                                <h5 className="card-title text-center my-3">{state.active}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card border-warning">
                            <div className="card-header text-center">Total Recoverd</div>
                            <div className="card-body covidbodyx">
                                <h5 className="card-title text-center my-3">{state.recovered}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card border-warning">
                            <div className="card-header text-center">Total Confirmed</div> 
                            <div className="card-body covidbodyx">
                                <h5 className="card-title text-center my-3">{state.confirmed}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card border-warning">
                            <div className="card-header text-center">Total Deaths</div>
                            <div className="card-body covidbodyx">
                                <h5 className="card-title text-center my-3">{state.deaths}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card border-warning">
                            <div className="card-header text-center">Last Updated</div>
                            <div className="card-body covidbodyx">
                                <h5 className="card-title text-center my-3">{state.lastupdatedtime}</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Covid
