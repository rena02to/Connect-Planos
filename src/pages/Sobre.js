import style from "./Sobre.module.css";

function Sobre(){
    return(
        <div className={style.sobre}>
            <h1>Sobre</h1>
            <p className={style.p1}>
                Projeto criado usando React (com as dependências: 
                react-tout-dom, react-icons), tendo também como principal
                objetivo aprender a linguagem e melhorar os 
                conhecimentos em HTML, CSS e JavaScript
                de forma a criar projetos de código limpo, com interfaces
                e flúidos, bonitas e agradáveis.
            </p>
            <p className={style.p2}>
                Mais informações sobre as tecnologias usadas,
                créditos aos criadores das imagens usadas e
                local de onde foi tirada a idéia para a criação
                do site <a href="https://github.com/rena02to/my-projects/tree/main/tabela-precos" target="_blank" rel="noopener noreferrer">clicando aqui</a>.
            </p>
        </div>
    );
}

export default Sobre;