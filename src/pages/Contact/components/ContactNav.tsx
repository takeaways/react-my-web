import React from 'react'
import { Link } from 'react-router-dom'

function ContactNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/contact/profile">profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ContactNav
