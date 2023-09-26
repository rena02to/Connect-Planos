import { useState, useEffect } from "react";
import { GoCheckCircle, GoXCircle } from "react-icons/go";
import { FaCrown, FaCogs } from "react-icons/fa";
import { BsFillShieldFill } from "react-icons/bs";
import style from "./InfosPreco.module.css";

function InfoPreco({ scroll, infos }){
    var valor = infos[3];
    const plano = infos[1];
    const [tipo, setTipo] = useState('');
    const legenda = infos[2];
    const [represent, setRepresent] = useState();
    var validade = "/ Por mês";

    //beneficios nao tem uso efetivo, porém é para simular uma cadeia real em que cada item representa um beneficio
    const beneficios = ['Lorem Ipsum Dolor Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Lorem Ipsum Dolor'];
    const possui = [];
    for(let i = 4; i < infos.length; i++){
        if(infos[i] === true){
            possui.push(<GoCheckCircle className={style['check_circle_icon']}/>)
        }else{
            possui.push(<GoXCircle className={style['x-circle-icon']} />)
        }
    }

    useEffect(() => {
        switch (plano) {
            case 'Básico':
                setTipo(style.basico);
                setRepresent(<FaCogs className={style.engr}/>);
                break;
            case 'Premium':
                setTipo(style.premium);
                setRepresent(<FaCrown className={style.coroa}/>);
                break;
            case 'Essencial':
                setTipo(style.essencial);
                setRepresent(<BsFillShieldFill className={style.escudo}/>);
                break;
        }
    }, [plano]);

    if(infos[0] === false){
        valor = (valor * 12) * 0.8; //20% de desconto
        valor = Math.ceil(valor);//arredonda para o meior inteiro
        validade = "/ Por ano";
    }


    const Contratando = () => {
        scroll(true, false, valor, plano);
    }

    return(
        <div className={style.item}>
            <div className={style.rep}>{represent}</div>
            <h1>{plano}</h1>
            <p className={style.legenda}>{legenda}</p>
            <div className={style.valor}>
                <h1>$ {valor}</h1>
                <p>{validade}</p>
            </div>
            <div className={tipo}>
                <h2 className={style.h2}>Benefícios</h2>
                <div className={style.lista}>
                    <div>
                        <p className={style.icone}>{possui[0]}</p>
                        <p>{beneficios[0]}</p>
                    </div>
                    <div>
                        <p className={style.icone}>{possui[1]}</p>
                        <p>{beneficios[1]}</p>
                    </div>
                    <div>
                        <p className={style.icone}>{possui[2]}</p>
                        <p>{beneficios[2]}</p>
                    </div>
                    <div>
                        <p className={style.icone}>{possui[3]}</p>
                        <p>{beneficios[3]}</p>
                    </div>
                    <div>
                        <p className={style.icone}>{possui[4]}</p>
                        <p>{beneficios[4]}</p>
                    </div>
                </div>
            </div>
            <button onClick={Contratando}><h2 className={style.botao}>Contratar</h2></button>
        </div>
    );
}

export default InfoPreco;