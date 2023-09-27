import style from "./Sobre.module.css";

function Sobre(){
    return(
        <div className={style.sobre}>
            <h1>Sobre</h1>
            <p className={style.p1}>
                Projeto criado usando React (com as dependências: react-tout-dom, react-icons), 
                tendo também como principal objetivo aprender a linguagem e melhorar os conhecimentos 
                em HTML, CSS e JavaScript de forma a criar projetos de código limpo, com interfaces e flúidos, bonitas e agradáveis.
                <br />Nesse site o usuário vai inserir informações de um pseudo cartão de crédito, para a 
                compra de um pseudo plano, contudo não há integração com banco de dados e nem com a empresa 
                de cartões. Sendo assim, só há a validação do número do cartão de crédito, exigência de que a 
                data de validade seja uma data futura, e que nenhum dos campos seja vazio ao tentar realizar a 
                compra, podendo o usuário contratar plano mensal ou anual, e contratar por um período de meses/anos 
                que ele quiser (máximo 12 meses/anos).
            </p>
            <p className={style.p2}>
                Mais informações sobre as tecnologias usadas,
                créditos aos criadores das imagens usadas e
                local de onde foi tirada a idéia para a criação
                do site <a href="https://github.com/rena02to/Connect-Planos" target="_blank" rel="noopener noreferrer">clicando aqui</a>.
            </p>
        </div>
    );
}

export default Sobre;