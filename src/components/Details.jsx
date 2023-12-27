import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Details() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <h1>Details</h1>
      <h3>param id: {params.id}</h3>
      <h3>param cosa: {params.cosa}</h3>
      {/* <Link to= "/">Home</Link> */}
      <button onClick={() => {navigate("/")}}>Home</button>
    </>
  )
}
