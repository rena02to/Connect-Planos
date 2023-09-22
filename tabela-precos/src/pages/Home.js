import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import style from "./Home.module.css";
import InfoPreco from "../layout/InfosPreco";

function Home(){

    const [mensal, setMensal] = useState(true);
    
    return(
        <div className={style.planos}>
            <p className={style.legenda}>Preços</p>
            <div className={style.titulo}><AiOutlineShoppingCart /><h1>Escolha o plano ideal para você!</h1><AiOutlineShoppingCart /></div>
            <div className={style.tabela}>
                <InfoPreco infos={[mensal, 'Básico', 'Lorem Ipsum Dolor', 16.9, true, true, false, false, false]}/>
                <InfoPreco infos={[mensal, 'Essencial', 'Lorem Ipsum Dolor', 26.9, true, true, true, false, false]}/>
                <InfoPreco infos={[mensal, 'Premium', 'Lorem Ipsum Dolor', 36.9, true, true, true, true, true]}/>
            </div>

        </div>
    );
}

export default Home;