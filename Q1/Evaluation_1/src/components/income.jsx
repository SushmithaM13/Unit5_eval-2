import { useState } from "react";
export const Income = ()=>{
    const [formData, setFormData] = useState({ amount: "", description: "", date: "" });
    function handleChange(e) {
        const { name,value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    return(
        <>
        <form >
             <input value={formData.amount} onChange={handleChange} type="text" name="amount" placeholder="Amount"/>
             <input  type="text" name="description" placeholder="Description"/>
             <input  type="text" name="date" placeholder="Date"/>
             <button type="submit">Add Income</button>
        </form>
        </>

    )
}

