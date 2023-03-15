// rrd (react router dom) imports
import { useLoaderData } from "react-router-dom"

// library
import { toast } from "react-toastify"

// components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"

// helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  const budgets = fetchData("budgets")
  return { userName, budgets }
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)
  console.log(_action)

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return toast.success(`Welcome, ${values.userName}`)
    } catch (e) {
      throw new Error("There was a problem creating your account.")
    }  
  }

  if (_action === "createBudget") {
    try {
      //create budget
      // localStorage.setItem("budget", JSON.stringify(values.budget) )
      throw new Error ("Fuk outta hear!")
      return toast.success("Budget created!")
    } catch (e) {
      throw new Error("There was a problem creating your budget.")
    } 
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData() //hook - destructure name from useLoaderData

   return (
    <>
      {userName ? (
      <div className="dashboard">
        <h1>Welcome back, <span className="accent">{userName}</span></h1>
        <div className="grid-sm">
          {/* { budgets ? () : () } */}
          <AddBudgetForm />
        </div>
      </div>
      ) : (<Intro />)}
    </>
  )
}

export default Dashboard