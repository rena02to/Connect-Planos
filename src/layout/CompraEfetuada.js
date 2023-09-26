import style from "./CompraEfetuada.module.css";

function CompraEfetuada({scroll}){
    const confirmou = () => {
        scroll(false, false);
    };

    return(
        <div className={style.telinha}>
            <h2>Sua compra foi efetuada com sucesso!</h2>
            <button onClick={confirmou}><p>OK</p></button>
        </div>
    );
}

export default CompraEfetuada;