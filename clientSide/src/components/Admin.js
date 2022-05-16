import {useState} from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64'
// import {encode as base64_encode , decode as base64_decode} from "base-64"
const Admin =()=>{
    const [rName , setRName] = useState(null)
    const [rCity , setRCity] = useState(null)
    const [rAddress , setRAddress] = useState(null)
    const [rFile , setRFile] = useState(null)
    const saveRestaurent =(event)=>{
        
        let restaurent = {rName , rCity , rAddress, rFile}
      axios.post(`http://localhost:4000/restaurent` , restaurent)
      .then(res=>{
          console.log(res)
          alert(res.data.message)
        })
     
      event.preventDefault()
    }

    return (
        <>
       {console.log(rFile)}
        <div className="admin-container">
            <div className="container-fluid">
                <h1>Add Restaurent</h1>
                <form onSubmit={saveRestaurent}>
                <div className="row">

                    <div className="col-md-5">
                    <div className="inputBox" >
                        <input type="text" placeholder="Enter Restaurent's Name " name="rname" onChange={(e)=>setRName(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="inputBox" >
                        <input type="text" placeholder="Enter Restaurent's city " name="rcity" onChange={(e)=>setRCity(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="inputBox" >
                        <input type="text" placeholder="Enter Restaurent address " name="raddress" onChange={(e)=>setRAddress(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="inputBox" >
                     <FileBase64 multiple={false} onDone={({base64})=>setRFile(base64)} />
                    </div>
                    </div>
                    <button type="submit">Save Restaurent</button>
                </div>

                </form>
            </div>
        </div>
        </>
    )
}
export default Admin