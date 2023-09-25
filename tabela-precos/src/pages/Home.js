import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import style from "./Home.module.css";
import InfoPreco from "../layout/InfosPreco";
import Pop_up from "../layout/Pop_up";

function Home(){

    const [mensal, setMensal] = useState(true);
    const [st_mensal, setSt_mensal] = useState(style.slider_mens);
    const [st_anual, setSt_anual] = useState(style.slider_anual);
    const [checked, setChecked] = useState(false);
    const [scrollBlocked, setScrollBlocked] = useState(false);
    const [total, setTotal] = useState(0);
    const [plano, setPlano] = useState();
    const [time, setTime] = useState('Mensal');

    function alterna(){
        setChecked(!checked);
        const t = !mensal;
        setMensal(t);
        if(t){
            setTime('Mensal');
        }else{
            setTime('Anual');
        }

        if(checked === false){
            setSt_mensal(style.slider_mens_before);
            setSt_anual(style.slider_anual_before);
        }else{
            setSt_mensal(style.slider_mens);
            setSt_anual(style.slider_anual);
        }
    }

    const toggleScrollBlocked = (estado, valor, plan) => {
        switch(estado){
            case true:
                const overlay = document.createElement('div');
                overlay.classList.add(style.overlay);
                overlay.id = 'overlay';
                document.body.appendChild(overlay);
                document.body.pointerEvents = 'none';
                document.body.style.overflow = "hidden";
                break;
            case false:
                document.body.style.pointerEvents = 'auto';
                document.body.style.overflow = 'auto';
                const overlayElement = document.getElementById('overlay');
                document.body.removeChild(overlayElement);
                break;
        };
        setScrollBlocked(estado);
        setTotal(valor);
        setPlano(plan);
    };
    
    return(
        <div className={style.planos}>
            <p className={style.legenda}>Preços</p>
            <div className={style.titulo}><AiOutlineShoppingCart /><h1>Escolha o plano ideal para você!</h1><AiOutlineShoppingCart /></div>
            <label className={style.switch}>
                <input type="checkbox" className={style.liga_desliga} onChange={alterna}/>
                <span className={style.slider}></span>
                <span className={st_mensal}>Mensal</span>
                <span className={st_anual}>Anual (20% off)</span>
            </label>
            <div className={style.tabela}>
                <InfoPreco scroll={toggleScrollBlocked} infos={[mensal, 'Básico', 'Lorem Ipsum Dolor', 16, true, true, false, false, false]}/>
                <InfoPreco scroll={toggleScrollBlocked} infos={[mensal, 'Essencial', 'Lorem Ipsum Dolor', 26, true, true, true, false, false]}/>
                <InfoPreco scroll={toggleScrollBlocked} infos={[mensal, 'Premium', 'Lorem Ipsum Dolor', 36, true, true, true, true, true]}/>
            </div>
            <div>
                {scrollBlocked && <Pop_up tipo={plano} tempo={time} total={total} scroll={toggleScrollBlocked} />}
            </div>
        </div>
    );
}

export default Home;