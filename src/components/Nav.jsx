// rrd imports
import { Form, NavLink } from 'react-router-dom'

//library
import { TrashIcon } from '@heroicons/react/24/solid'

//assets
import CMlogo from '../assets/CMlogo.png'


const Nav = ({userName}) => {

  return (
    <nav>
      <NavLink
        to="/" 
        aria-label="Go to home"
      > 
        <img style={{width: '20%', height: '20%'}} src={CMlogo} alt={CMlogo} />
        <span>B-CLEVER</span>
      </NavLink> 
      {
        userName && ( 
        <Form
        method="post"
        action="/logout"
        onSubmit={(event) => {
          if (!confirm("Delete user and all data?'")) {
            event.preventDefault()
          }
        }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
              <TrashIcon width={20} />
          </button>
        </Form>
        )
      }
    </nav>
  )
}

export default Nav