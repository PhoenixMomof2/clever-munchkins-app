// rrd (react router dom) imports
import { Outlet, useLoaderData } from "react-router-dom"

//assets
import wave from "../assets/wave.svg"

//components
import Nav from "../components/Nav"

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
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet /> {/* slot - any children that I'm going to pass down will dropped in this component */}
      </main>  
      <img src={wave} alt="..." />  
    </div>
  )
}

export default Main