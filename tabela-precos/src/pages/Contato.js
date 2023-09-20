import { BsGithub, BsLinkedin } from "react-icons/bs";
import email from "../imagens/email.png";
import style from "./Contato.module.css";
import Copiar from "../layout/Copiar";

function Contato(){
    return(
        <div className={style.contato}>
            <h1>Encontre-me em meus perfis profissionais:</h1>
            <div className={style.links}>
                <a href="https://github.com/rena02to" target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/renato-alves-2284a6236" target="_blank" rel="noopener noreferrer" className={style.linkedin}>
                    <BsLinkedin />
                </a>
            </div>
            <h1>Ou me mande um e-mail:</h1>
            <img alt="" src={email} />
            <Copiar item="rena02to@gmail.com"></Copiar>
        </div>
    );
}

export default Contato;