import { useState } from "react";
import style from "./Copiar.module.css";

function Copiar({ item }){
    
    const [texto, setTexto] = useState("Copiar e-mail");
    const [iscopied, setiscopied] = useState(style.notcopied);

    const copy = () => {
        navigator.clipboard.writeText(item).then(() => {
            setTexto("E-mail copiado!");
            setiscopied(style.copied);
            setTimeout(() => setiscopied(style.notcopied), 2000);
            setTimeout(() => setTexto('Copiar e-mail'), 2000)
        }).catch((err) => {
            setTexto("E-mail copiado!");
            setiscopied(style.errorcopied);
            setTimeout(() => setiscopied(style.notcopied), 2000)
            setTimeout(() => setTexto('Copiar e-mail'), 2000)
        });
    };

    return(
        <div className={style.copiar}>
            <div className={style.conteudo}>
                <p>{item}</p>
            </div>
            <button className={iscopied} onClick={copy}>
                <p>{texto}</p>
            </button>
        </div>
    );
}

export default Copiar;