import style from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className={style.footer}>
            <div>
                <a href="https://linkedin.com/in/renato-alves-2284a6236" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/rena02to" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <p>Connect Planos &copy; 2023</p>
        </footer>
    );
}

export default Footer;