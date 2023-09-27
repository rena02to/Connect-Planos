import CompraEfetuada from "./CompraEfetuada";
import style from "./Pop_up.module.css";
import { useState, useEffect } from "react";

function Pop_up({ tipo, tempo, total, scroll }){
    tempo = tempo.toLowerCase();
    const [quantidade, setQuantidade] = useState(1);
    const [erroQuantidade, setErroQuantidade] = useState(false);
    const [eQuantidade, setEQuantidade] = useState(style.quantidade);
    const [t, setT] = useState(style.total);
    const [data, setData] = useState(style.data);
    const [erroData, setErroData] = useState(false);
    const [errorCartao, setErrorCartao] = useState(false);
    const [eCartao, setECartao] = useState(style.cartao);
    const [eNumeroCartao, setENumeroCartao] = useState(false);
    const [errorCvv, setErrorCvv] = useState(false);
    const [camposErrados, setCamposErrados] = useState(false);
    const [tudoCerto, setTudoCero] = useState(false);

    total = total * quantidade;

    useEffect(() => {
        if(quantidade > 12 || quantidade < 1){
            setErroQuantidade(true);
            setT(style.eTotal)
            setEQuantidade(style.eQuantidade);
        }else{
            setErroQuantidade(false);
            setEQuantidade(style.quantidade);
            setT(style.total);
        }
    } ,[quantidade]);
    
    const Cancelar = () => {
        scroll(false, false);
    }

    const Confirmar = () =>{
        const cartao = document.getElementById('cartao').value;
        const date = document.getElementById('data').value;
        const nome = document.getElementById('nome').value;
        const codigo = document.getElementById('codigo').value;
        const camposPreenchidos = cartao !== "" && date !== "" && codigo !== "" && nome !== "";
        const dadosQuantidadeValidos = !erroQuantidade;
        const dadosCartaoValidos = !errorCartao && !eNumeroCartao;
        const dadosDataValidos = !erroData;
        const codigoValido = !errorCvv;
        const todosValidos = camposPreenchidos && dadosQuantidadeValidos && dadosCartaoValidos && dadosDataValidos && codigoValido;

        if(!camposPreenchidos){
            setCamposErrados(true);
        }else if(todosValidos){
            setCamposErrados(false);
            setTudoCero(true);
            scroll(false, true);
        }
    }

    const Formata = () => {
        let cartaoCreditoInput = document.getElementById('cartao');
        let valor = cartaoCreditoInput.value.split("").filter(n => isNaN(n) && n != " ").join("");
        let valorFormatado = '';
        for (let i = 0; i < valor.length; i++) {
            if (i > 0 && i % 4 === 0) {
                valorFormatado += ' ';
            }
            valorFormatado += valor.charAt(i);
        }

        cartaoCreditoInput.value = valorFormatado;

        if(valor.length < 16){
            setErrorCartao(true);
            setECartao(style.eCartao);
        }else{
            setErrorCartao(false);
            setECartao(style.cartao);

            let temp;
            let soma = 0;
            let verificador = parseInt(valor[valor.length - 1]);
            valor = valor.slice(0, -1);
            valor = valor.split('').reverse().join('');

            for(let i = 0; i < valor.length; i++){
                temp = 0;
                if((i + 1) % 2 === 0){
                    soma = soma + parseInt(valor[i]);
                }else{
                    temp = parseInt(valor[i]) * 2;
                    if(temp > 9){
                        temp = temp - 9;
                    }
                    soma = soma + temp;
                }
            }
            soma = soma + verificador;
            if(soma % 10 === 0){
                setENumeroCartao(false);
            }else{
                setENumeroCartao(true);
            }
        }
    }

    const verificaCvv =() => {
        const cvv = document.getElementById('codigo').value;
        if(cvv.length < 3){
            setErrorCvv(true);
        }else{
            setErrorCvv(false);
        }
    }

    const Data_valida = () => {
        const dataAtual = new Date();
        const data_digitada = new Date(document.getElementById('data').value);
        if(data_digitada <= dataAtual){
            setData(style.eData);
            setErroData(true);
        }else{
            setData(style.data);
            setErroData(false);
        }
    }

    const Alterar = () => {
        const q = document.getElementById('quantidade');
        setQuantidade(q.value);
        q.value = q.value;
    }

    const Aumenta = () => {
        const q = document.getElementById('quantidade');
        if(quantidade < 12){
            setQuantidade(quantidade + 1);
            setErroQuantidade(false);
            q.value = (+quantidade) + 1;
        }
    }

    const Diminui = () => {
        const q = document.getElementById('quantidade');
        if(quantidade > 1){
            setQuantidade(quantidade - 1);
            setErroQuantidade(false);
            q.value = quantidade - 1;
        }
    }


    return(
        <div className={style.telinha}>
            <fieldset className={style.main}>
                <legend className={style.legenda_main}><h1 className={style.titulo}>Dados para cobrança</h1></legend>
                <fieldset className={style.dados_compra}>
                    <legend className={style.legenda_dados_compra}><h2>Dados da compra</h2></legend>
                    <div className={style.compra_intern}>
                        <button className={style.menos} onClick={Diminui}>-</button>
                        <input type="number" id="quantidade" className={eQuantidade} onKeyUp={Alterar} placeholder={quantidade}></input>
                        <button className={style.mais} onClick={Aumenta}>+</button>
                        <p className={style.infos}>X Plano {tipo} {tempo}</p>
                    </div>
                    {erroQuantidade && <p className={style.error_quantidade}>Digite uma quantidade entre 1 e 12.</p>}
                    <h1 className={t}>Total: ${total}</h1>
                </fieldset>
                <fieldset className={style.dados_cartao}>
                    <legend><h2>Dados do cartão</h2></legend>
                    <div className={style.nome_numero}>
                        <fieldset>
                            <legend>Número do cartão</legend>
                            <input type="text" id="cartao" className={eCartao} maxLength={19} placeholder="0000 0000 0000 0000" onInput={Formata}></input>
                        </fieldset>
                        <fieldset>
                            <legend>Nome no cartão</legend>
                            <input type="text" id="nome" placeholder="Nome impresso no cartão" ></input>
                        </fieldset>
                    </div>
                    <div className={style.codigo_validade}>
                        <fieldset>
                            <legend>Código de segurança (CVV)</legend>
                            <input type="number" id="codigo" placeholder="000" onInput={(e) => {verificaCvv(); if (e.target.value.length > 3){e.target.value = e.target.value.slice(0, 3);}}}></input>
                        </fieldset>
                        <fieldset>
                            <legend>Data de validade</legend>
                            <input id="data" type="date" className={data} onInput={Data_valida}></input>
                        </fieldset>
                    </div>
                    {errorCartao && <p className={style.cartaoErrado}>A quantidade mínima de digitos para cartões é 16!</p>}
                    {eNumeroCartao && <p className={style.cartaoErrado}>Digite um número de cartão válido!</p>}
                    {errorCvv && <p className={style.cartaoErrado}>O CVV deve possuir 3 dígitos!</p>}
                    {erroData && <p className={style.dataErrada}>Digite uma data válida!</p>}
                    {camposErrados && <p className={style.camposErrados}>Preencha todos os campos (em caso de já preenchimento, desconsidere)!</p>}
                </fieldset>
            </fieldset>
            <div className={style.botoes}>
                <button className={style.cancelar} onClick={Cancelar}>Cancelar</button>
                <button className={style.confirmar} id="confirmar" onClick={Confirmar}>Confirmar</button>
            </div>
        </div>
    );
}

export default Pop_up;