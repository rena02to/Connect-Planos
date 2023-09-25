import style from "./Pop_up.module.css";
import { useState } from "react";

function Pop_up({ tipo, tempo, total, scroll }){
    tempo = tempo.toLowerCase();
    const [quantidade, setQuantidade] = useState(1);
    const [erro, setErro] = useState();
    total = total * quantidade;

    
    const Cancelar = () => {
        scroll(false);
    }

    const Confirmar = () =>{

    }

    const Alterar = () => {
        const q = document.getElementById('quantidade');
        if(q.value > 10 || q.value < 1){
            setErro(style.error);
            const e = document.getElementById('erro');
            e.textContent = 'Digite um valor entre 1 e 10';
        }else{
            setQuantidade(q.value);
        }
    }

    const Aumenta = () => {
        const q = document.getElementById('quantidade');
        if(quantidade < 10){
            setQuantidade(quantidade + 1);
            q.value = quantidade + 1;
        }
    }

    const Diminui = () => {
        const q = document.getElementById('quantidade');
        if(quantidade > 1){
            setQuantidade(quantidade - 1);
            q.value = quantidade - 1;
        }
    }

    const testa_cart = () =>{
        const cartao = document.getElementById('cartao').value;
        if(isNaN(cartao)){
            alert('Digite somente números! (vermelho)')
        }else if(cartao.length){
            alert('O número do cartão deve ter no mínimo 16 digitos! (amarelo)')
        }
    }


    return(
        <div className={style.telinha}>
            <fieldset className={style.main}>
                <legend className={style.legenda_main}><h1>Dados para cobrança</h1></legend>
                <fieldset className={style.dados_compra}>
                    <legend className={style.legenda_dados_compra}><h2>Dados da compra</h2></legend>
                    <div className={style.compra_intern}>
                        <button className={style.menos} onClick={Diminui}>-</button>
                        <input type="number" id="quantidade" className={style.quantidade} onKeyUp={Alterar} placeholder={quantidade}></input>
                        <button className={style.mais} onClick={Aumenta}>+</button>
                        <p className={style.infos}>X Plano {tipo} {tempo}</p>
                    </div>
                    <h1 className={style.total}>Total: ${total}</h1>
                </fieldset>
                <fieldset className={style.dados_cartao}>
                    <legend><h2>Dados do cartão</h2></legend>
                    <div className={style.nome_numero}>
                        <fieldset>
                            <legend>Número do cartão</legend>
                            <input type="text" id="cartao" maxLength={16} placeholder="0000.0000.0000.0000" onKeyDown={testa_cart}></input>
                        </fieldset>
                        <fieldset>
                            <legend>Nome no cartão</legend>
                            <input type="text" placeholder="Seu nome"></input>
                        </fieldset>
                    </div>
                    <div className={style.codigo_validade}>
                        <fieldset>
                            <legend>Código de segurança (CVV)</legend>
                            <input type="number" placeholder="000"></input>
                        </fieldset>
                        <fieldset>
                            <legend>Data de validade</legend>
                            <input type="date"></input>
                        </fieldset>
                    </div>
                </fieldset>
            </fieldset>
            <div className={style.botoes}>
                <button className={style.cancelar} onClick={Cancelar}>Cancelar</button>
                <button className={style.confirmar} onClick={Confirmar} disabled>Confirmar</button>
            </div>
        </div>
    );
}

export default Pop_up;