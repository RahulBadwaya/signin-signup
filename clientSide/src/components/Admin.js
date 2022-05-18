import { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { adminApi } from "../apiCalling/ApiCall";

const Admin = () => {
  // const [rName, setRName] = useState(null);
  // const [rCity, setRCity] = useState(null);
  // const [rAddress, setRAddress] = useState(null);
  // const [rFile, setRFile] = useState(null);
  const [restaurent , setRestaurent] = useState({
    rName:null,
    rCity:null,
    rAddress:null,
    base64:null
  })
  const saveRestaurent = (event) => {
    async function adminApiCall (){
      if(restaurent){
        const res = await adminApi(restaurent)
          alert(res.data.message);
      }
      
    }
    adminApiCall()
    event.preventDefault();
  };
  const handleChange =(e)=>{
    setRestaurent({
       ...restaurent,
       [e.target.name]:e.target.value
     })
  }

  return (
    <>
    {console.log(restaurent)}
      <div className="admin-container">
        <div className="container-fluid">
          <h1>Add Restaurent</h1>
          <form onSubmit={saveRestaurent}>
            <div className="row">
              <div className="col-md-5">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Enter Restaurent's Name "
                    name="rName"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Enter Restaurent's city "
                    name="rCity"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Enter Restaurent address "
                    name="rAddress"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="inputBox">
                  <FileBase64
                    multiple={false}
                    onDone={({base64 }) => setRestaurent({...restaurent , base64})}
                  />
                </div>
              </div>
              <button type="submit">Save Restaurent</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Admin;
