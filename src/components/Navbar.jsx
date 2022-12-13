import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <NavLink to='/' 
            style={({isActive})=>( 
                isActive 
                ? { color : "green", fontWeight: "bold" } 
                : undefined )}
            >
                Home
            </NavLink> {" "}
            <NavLink to='/about' 
            style={({isActive})=>( 
                isActive 
                ? { color : "green", fontWeight: "bold" } 
                : undefined )}
            >
                About
            </NavLink>{" "}
            <NavLink to='/product' 
            style={({isActive})=>( 
                isActive 
                ? { color : "green", fontWeight: "bold" } 
                : undefined )}
            >
                Product
            </NavLink>
        </div>
     );
}
 
export default Navbar;