import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
  const navigate = useNavigate();

  const updateQueryParams = () => {
    const newParams = new URLSearchParams();
    newParams.append("email", "flornieva160@gmail.com");
    newParams.append("edad", "18");
    console.log(navigate(`/contact?${newParams.toString()}`));
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/details/1/cosa">Details</Link>
      <div>
        {/* solo tiene la query del email */}
        <Link to={"/contact?email=flornieva160@gmail.com"}>Ir al contacto</Link>
        {/* tiene las queries del email y la edad */}
        <div onClick={updateQueryParams}>Ir al contacto</div>
      </div>
    </>
  )
}
