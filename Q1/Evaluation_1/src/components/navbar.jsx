import { useNavigate } from "react-router-dom"
export const Navbar = ()=>{
    let navigate=useNavigate()
    function handleClick(path){
        navigate(path)
    }
    return(
        <>
         <div style={{backgroundColor:"#3872d5",color:"white",padding:"10px",display:"flex",justifyContent:"space-evenly"}}>
            <button style={{padding:"10px"}} onClick={()=>handleClick("/")}>Home</button>
            <button onClick={()=>handleClick("/income")}>Income</button>
            <button onClick={()=>handleClick("/expenses")}>Expenses</button>
            <button onClick={()=>handleClick("/savings")}>Savings</button>
         </div>
        </>
    )
}

