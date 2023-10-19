import * as Yup from 'yup';
import cardValidator from 'card-validator';
import { validate } from 'gerador-validador-cpf';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './PoupUp.module.css';

function PoupUp({ tipo, tempo, total, scroll }){
    const initialValues = {
        nCartao: '',
        name: '',
        cvv: '',
        venc: '',
        cpf: '',
    }

    const isValidCPF = () => {
        const valor = document.getElementById('cpf').value;
        const cpf = valor.replace(/\D/g, '');
        const isValidCPF = validate(cpf);
        if(isValidCPF){
            return true;
        }else{
            return false;
        }
    }

    const isValidCreditCard = () => {
        const cartao = document.getElementById('nCartao').value;
        const numeroCartao = cartao.replace(/\D/g, '');
        const isValid = cardValidator.number(numeroCartao);

        if(isValid.isValid){
            return true;
        }else{
            return false;
        }
    }

    const isValidDate = () => {
        const valor = document.getElementById('venc').value;
        const date = new Date();
        const mesAtual = date.getMonth() + 1;
        const anoAtual = date.getFullYear();
        const [mesComparacao, anoComparacao] = valor.split('/').map(Number);

        if(anoComparacao > anoAtual || (anoComparacao === anoAtual && mesComparacao >= mesAtual)){
            return true;
        }else{
            return false;
        }
    }

    const validationSchema = Yup.object().shape({
        nCartao: Yup.string().transform((originalValue) => originalValue.replace(/\D/g, '')).min(16, 'O número do cartão deve ter 16 dígitos!').test('is-valid-card', 'Número de cartão de crédito inválido!', isValidCreditCard),
        venc: Yup.string().required('Campo obrigatório!').min(7, 'Digite a data no formato correto!').test('is-valid-date', 'Digite uma data válida!', isValidDate),
        cvv: Yup.string().required('Campo obrigatório!').min(3, 'O CVV do cartão deve ter 3 dígitos!'),
        name: Yup.string().required('Campo obrigatório!'),
        cpf: Yup.string().required('Campo obrigatório!').transform((originalValue) => originalValue.replace(/\D/g, '')).min(11, 'O CPF deve ter 11 dígitos!').test('is-valid-CPF', 'Digite uma CPF válido!', isValidCPF),
    });

    const FormataCart = () => {
        const cart = document.getElementById('nCartao');
        let valor = cart.value.replace(/\D/g, '');
        let valorFormatado = '';
        for (let i = 0; i < valor.length; i++) {
            if (i > 0 && i % 4 === 0) {
                valorFormatado += ' ';
            }
            valorFormatado += valor.charAt(i);
        }
        cart.value = valorFormatado;
    }

    const FormataCPF = () => {
        const cpf = document.getElementById('cpf');
        let valor = cpf.value.replace(/\D/g, '');
        let valorFormatado = '';
        for (let i = 0; i < valor.length; i++) {
            if (i > 0 && i % 3 === 0 && i !== 9) {
                valorFormatado += '.';
            }else if(i === 9){
                valorFormatado += '-';
            }
            valorFormatado += valor.charAt(i);
        }
        cpf.value = valorFormatado;
    }

    const FormataData = () => {
        const data = document.getElementById('venc');
        const valor = data.value.replace(/\D/g, '');
        let valorFormatado = '';
        for(let i = 0; i < valor.length; i++){
            if(i === 2){
                valorFormatado += '/';
            }
            valorFormatado += valor.charAt(i);
        }
        data.value = valorFormatado;
    }

    const Comprar = () => {
        scroll(false, true);
    }

    const Cancelar = () => {
        scroll(false, false);
    }

    return(
        <div className={style.poup_up}>
            <button className={style.fechar} onClick={Cancelar}>X</button>
            <h1 className={style.titulo}>Dados para cobrança</h1>
            <h2 className={style.infos}>Plano {tipo} {tempo}</h2>
            <h2 className={style.total}>Total: ${total}</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                {() => (
                    <Form>
                        <Field className={style.nCartao} name='nCartao' type='text' placeholder='Número do cartão' id='nCartao' maxLength={19} onInput={FormataCart}/>
                        <ErrorMessage name='nCartao' component='div' className={style.error}/>

                        <div className={style.inline}>
                            <div className={style.input}>
                                <Field className={style.venc} name='venc' type='text' placeholder='Validade' id='venc' maxLength={7} onInput={FormataData} />
                                <ErrorMessage name='venc' component='div' className={style.errorMenor}/>
                            </div>

                            <div className={style.input}>
                                <Field className={style.cvv} name='cvv' type='number' placeholder='CVV' id='cvv' onInput={(e) => {if(e.target.value.length > 3){e.target.value = e.target.value.slice(0, 3);}}} />
                                <ErrorMessage name='cvv' component='div' className={style.errorMenor}/>
                            </div>
                        </div>

                        <Field className={style.name} name='name' type='text' placeholder='Nome impresso no cartão' id='name' />
                        <ErrorMessage name='name' component='div' className={style.error}/>

                        <Field className={style.cpf} name='cpf' type='text' placeholder='CPF do titular' id='cpf' maxLength={14} onInput={FormataCPF} />
                        <ErrorMessage name='cpf' component='div' className={style.error}/>

                        <button type='submit' onClick={Comprar}>Concluir</button>
                    </Form>
                )}
            </Formik>
            <p className={style.legenda}>*No caso de plano mensal, a cobrança será cobrado todo mês na data que você escolher*</p>
            <p className={style.legenda}>*No caso de plano anual, será cobrado todo ano, no mês da compra, mas no dia escolhido*</p>
            <p className={style.legenda2}>O número do cartão de crédito e número do cpf devem corresponder ao cálculo de verificação. Números que correspondem à essas regras podem ser encontrados <a href='https://www.4devs.com.br/'>clicando aqui</a>.</p>
            <p className={style.legenda3}>Esta ferramenta deve ser usada apenas para gerar numerações que correspondem aos critérios de validação de cada tipo. É uma ferramenta de terceiros. Não me responsabilizo por qualquer uso indevido.</p>
        </div>
    );
}

export default PoupUp;