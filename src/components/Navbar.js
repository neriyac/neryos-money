import {  Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext.js'
import { useLogout } from '../hooks/useLogout.js'


//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()


  return (
    <nav className={styles.navbar} >
      <ul>
        <li className={styles.title}><Link to="/">MyMoney</Link></li>

        {!user && (
          <>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName}   |</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
