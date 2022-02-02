import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Products Catalogue</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create">New Product</Link>
                <Link to ="/createCat">New Category</Link>
                <Link to ="/categories">Categories</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;