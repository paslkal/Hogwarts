import { Link } from "react-router-dom"

function Header() {
  

  return (
    <header>
      <Link style={{fontSize: "20px"}} to="/create-product">Create Product</Link>
    </header>
  )
}

export default Header