import { Link } from 'react-router-dom'
import React from 'react'

const MyLink = ({ children, ...props }) => {
   return (
      <Link { ...props} style={{textDecoration: 'none', color: 'inherit' }}>
         {children}
      </Link>
   )
}

export default MyLink
