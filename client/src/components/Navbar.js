import React, {useContext} from 'react'
import { AuthContext, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter} from 'react-router-dom'

const Navbar = ({history, location}) =>{

  const {user, handleLogout} = useContext(AuthContext)

   const rightNavItems = () => {
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>
          {user.email}
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
         
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return (
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
        <Link to='/blogs'>
          <Menu.Item
            name='blogs'
            id='blogs'
            active={location.pathname === '/blogs'}
          />
        </Link>
          { rightNavItems() }
      </Menu>
    </div>
  )

}


export default withRouter(Navbar);
