import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [ seachParams ] = useSearchParams(); // Hook de react-router-dom para trabajar con las queries

  useEffect(() => {
    setEmail(seachParams.get("email")); // Acceso al valor de la query email
  }, [])

  return (
    <div>
      <h1>Email: {email}</h1>
    </div>
  )
}
