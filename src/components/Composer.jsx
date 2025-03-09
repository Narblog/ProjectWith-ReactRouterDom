import axios from "axios"
import { useLoaderData,useLocation,Link } from "react-router-dom"
import "../index.css"
import { ToastContainer,toast } from "react-toastify"
import { useEffect } from "react"

const Composers=()=>{
    const list=useLoaderData()
    const location=useLocation()
    useEffect(()=>{
        let info=location.state
       
 
    },[])
   

    return<div>
    <h3>Composers</h3>
    <ToastContainer/>
        <div className="gallery">
            {
                list.map(el=><div key={el.id}>
                    <img src={el.photo}/>
                    <p>{el.name}</p>
                    <Link to={"/composer/"+el.id}>compositions</Link>
                </div>)
            }
        </div>
    </div>
}

export default Composers



export const getComposers=async()=>{
    const response=await axios.get("http://localhost:3004/composers")
    return response.data
}