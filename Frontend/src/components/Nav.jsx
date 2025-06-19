import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="flex justify-center items-center gap-x-5 p-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav