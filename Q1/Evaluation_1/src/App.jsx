import { Routes, Route } from "react-router-dom"
import {Home} from './components/home'
import { Income } from "./components/income"
import { Expenses } from "./components/expenses"
import { Savings } from "./components/savings"
import { Transactions } from "./components/transactions"
import { Navbar } from "./components/navbar"

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/income" element={<Income />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
    </>
  )
}
export default App