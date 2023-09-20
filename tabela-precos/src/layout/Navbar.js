import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar(){
    return(
        <div className={style.navbar}>
            <ul className={style.ulnavbar}>
                <li><Link to="/"><p>Home</p></Link></li>
                <li><Link to="/contato"><p>Contate-me</p></Link></li>
                <li><Link to="/sobre"><p>Sobre</p></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;