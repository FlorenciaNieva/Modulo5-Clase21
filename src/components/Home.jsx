import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
      <h1>Home</h1>
      <Link to="/details">Details</Link>
    </>
  )
}