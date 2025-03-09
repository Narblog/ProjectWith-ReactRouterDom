import "../index.css"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const AddWork = () => {
    const list = useLoaderData()
    const navigate = useNavigate()
    const [form, setForm] = useState({ composer: -1, composition: "" })
    const handleSubmit = e => {
        e.preventDefault()
        if (form.composer != -1) {
            let found = list.find(elm => elm.id == form.composer)
            found.works.push({ composition: form.composition, id: Date.now() })

            axios.patch("http://localhost:3004/composers/" + found.id, { works: found.works })
                .then(res => {
                    navigate("/composers", { form: { composer: found.name, work: found.works.at(-1) } })
                })
              
        }
    }

    return <div className="addwork">
        <h3>AddWork</h3>
        <form onSubmit={handleSubmit}>
            <label>choose a composer</label>
            <select value={form.composer} onChange={e => setForm({ ...form, composer: e.target.value })}>
                <option value={-1}></option>
                {
                    list.map(elm => <option key={elm.id} value={elm.id}>{elm.name}</option>)
                }

            </select>
            <label>Name of the composition</label>
            <input type="text" value={form.composition} onChange={e => setForm({ ...form, composition: e.target.value })} />
            <button>Save</button>
        </form>
    </div>
}
export default AddWork