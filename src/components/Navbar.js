import {  Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout.js'

//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = useLogout(

  )
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My money</li>

        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>

        <li>
          <button className="btn" onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
