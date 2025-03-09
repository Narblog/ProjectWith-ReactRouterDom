import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"
const Profile=()=>{
    const [composer,setComposer]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        axios.get("http://localhost:3004/composers/"+id)
        .then(res=>{
                setComposer(res.data)
        })
    },[])
 
    return <div>
        {
            composer && <div> 

                <img src={composer.photo}/>
                <h1>{composer.name}</h1>
                <div>
                    {
                        composer.works.map(elm=><div key={elm.id}><p>{elm.composition}</p></div>)
                    }
                </div>
            </div>
        }
    </div>
}

export default Profile