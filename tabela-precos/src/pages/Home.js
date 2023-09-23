import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import style from "./Home.module.css";
import InfoPreco from "../layout/InfosPreco";

function Home(){

    const [mensal, setMensal] = useState(true);
    const [st_mensal, setSt_mensal] = useState(style.slider_mens);
    const [st_anual, setSt_anual] = useState(style.slider_anual);
    const [checked, setChecked] = useState(false);

    function alterna(){
        setChecked(!checked);
        setMensal(!mensal);

        if(checked === false){
            setSt_mensal(style.slider_mens_before);
            setSt_anual(style.slider_anual_before);
        }else{
            setSt_mensal(style.slider_mens);
            setSt_anual(style.slider_anual);
        }
    }
    
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
                <InfoPreco infos={[mensal, 'Básico', 'Lorem Ipsum Dolor', 16, true, true, false, false, false]}/>
                <InfoPreco infos={[mensal, 'Essencial', 'Lorem Ipsum Dolor', 26, true, true, true, false, false]}/>
                <InfoPreco infos={[mensal, 'Premium', 'Lorem Ipsum Dolor', 36, true, true, true, true, true]}/>
            </div>

        </div>
    );
}

export default Home;