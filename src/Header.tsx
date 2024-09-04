import { Link } from "react-router-dom"

function Header() {
  

  return (
    <header>
      <Link style={{fontSize: "xx-large"}} to="/create-product">Create Product</Link>
    </header>
  )
}

export default Header