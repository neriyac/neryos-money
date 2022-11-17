import { useState } from 'react'
import styles from './Signup.module.css'



export default function Signup() {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user,email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup:</h2>
      <label>
        <span>Username:</span>
        <input
          type="username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
      </label>
      <label>
        <span>New Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
      </label>
      <button className="btn">Signup</button>
    </form>
  )
}
