import React, { useState} from 'react'
import './FindCenter.css'
import axios from 'axios';

const FindCenter = () => {

  const [product, setproduct] = useState([]);
  const [pincode, setpincode] = useState("")
  const [date, setdate] = useState("");
  const [visible, setvisible] = useState(true)

  const InputEvent = (event) => {
    setpincode(event.target.value)
  }
  const InputEventx = (event) => {
    setdate(event.target.value)
  }

  
  const FormSubmit = (e) => {
    e.preventDefault();
    setvisible(false)
    if(!product){
      console.log("Enter Valid Pincode or Date")
    
  }else{
    
    async function getData() {
      try {
        const data = await axios.get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`
        );
        console.log(data.data)
        setproduct(data.data.centers);
      } catch (e) {
        setvisible()
      
        
      }
    };
    getData();
  }
}

  return (
    <>
    <div className="main-heading">
          <h1 className='my-5 text-center'>
            <span className="font-weight-bold">  Vacctination  </span> COVID-19 Center List
          </h1>
        </div>
        <div className="container-flud container_form mx-auto" >
        
        <form onSubmit={FormSubmit}>
          <div className="mb-3 col-6 mx-auto">
            <label className="form-label">Enter Your PinCode</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" onChange={InputEvent} />
          </div>
          <div className="mb-3 col-6 mx-auto">
            <label className="form-label" >Enter Date</label>
            <input type="text" className="form-control" onChange={InputEventx} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-info mr-3 mb-5"><i className="fas fa-search mr-2"></i>Find Your Center</button>
          </div>
        </form>
      </div>

    {visible !== false ? (  <h1 id="ok" className="text-center"> Enter Proper Data </h1> ):
    
    (  <div className="container-flud mx-auto container_table">
      <div className="main-heading">
        <h1 className='mb-5 text-center'>
          <span className="font-weight-bold">India </span> COVID-19 DashBoard</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-striped "  >
          {/*    <caption>we are provide user specifically data</caption>*/}
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Center_Id</th>
              <th>Block_Name</th>
              <th>District_Name</th>
              <th>Pincode</th>
              <th>Address</th>
              <th>Fee_Type</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.name}</th>
                  <td>{item.center_id}</td>
                  <td>{item.block_name}</td>
                  <td>{item.district_name}</td>
                  <td>{item.pincode}</td>
                  <td>{item.address}</td>
                  <td>{item.fee_type}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
      )}

      
     
    </>
  )
}

export default FindCenter
