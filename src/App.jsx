import { createBrowserRouter, RouterProvider,  } from "react-router-dom"

//Layouts
import Main, { mainLoader } from "./layouts/Main"

//Actions
import { logoutAction } from "./actions/logout"

//Routes
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard"
import Error from "./pages/Error"
import BudgetPage, { budgetLoader, budgetAction } from "./pages/BudgetPage"

//Library
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import ExpensesPage, { expensesLoader, expensesAction } from "./pages/ExpensesPage"

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      { 
        index: true, 
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      { 
        path: "budget/:id", 
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      { 
        path: "expenses", 
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "logout", 
        action: logoutAction
      }
    ]
  },
  
])

const App = () => {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
