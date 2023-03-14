// rrd (react router dom) imports
import { Outlet, useLoaderData } from "react-router-dom"

// helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader(){
  const userName = fetchData("userName")
  return { userName }
}
const Main = () => {
  const { userName } = useLoaderData() //hook - destructure name from useLoaderData

   return (
    <div>
      <h1>main</h1>
      <main>
        <Outlet /> {/* slot - any children that I'm going to pass down will dropped in this component */}
      </main>      
    </div>
  )
}

export default Main