import { Form, redirect } from "react-router-dom"
import "../index.css"
import axios from "axios"
import { useState } from "react"

const AddComposer = () => {
    const [form,setForm]=useState({name:"",url:""})
    return <div className="composerdiv">
        <h2>Add Composer</h2>
        <Form method="post" >
            <div className="childcomposer">

                <label>name</label>
                <input 
                     type="text"
                     placeholder="Composer's Name"
                     name="name"
                     value={form.name}
                     onChange={e=>setForm({...form,name:e.target.value})} />
                <label>photo</label>
                <input
                       type="text"
                       placeholder="Composer's Photo URL"
                       name="photo"
                       value={form.url}
                       onChange={e=>setForm({...form,url:e.target.value})} />

                <button disabled={!form.name || !form.url}>Save</button>
            </div>

        </Form>
    </div>
}

export default AddComposer


export const addComposerAction = async ({ request }) => {
    const formData = await request.formData();
    const forms = Object.fromEntries(formData);
    await axios.post("http://localhost:3004/composers", { ...forms, work: [] })
    return redirect("/composers")
}