import React, { Fragment} from 'react'
import config from './../../config'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <section className="footer bg-dark-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="logo-footer" src="./imagens/logo.png" alt="Logo" />
                            <p className="color-white">
                                {config.LOGRADOURO} {config.NUMERO}, {config.COMPLEMENTO}  <br />
                                {config.BAIRRO}, {config.CIDADE}, {config.UF}<br />
                                CEP: {config.CEP}
                            </p>

                            <div className="row">

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <span className="color-white">CNPJ: {config.CNPJ}</span>
                                    </div>
                                </div>


                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <a style={{color: '#00ef77', fontSize: '14px', padding: '10px 0', display: 'block'}} target='_blank' href={`https://web.whatsapp.com/send?phone=55${config.WHATSAPP}`} rel="noreferrer"><strong>FALE PELO WHATSAPP</strong></a>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-telefone-footer.png" alt="telefone" /> <span className="color-white">{config.WHATSAPP}</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6">
                                    <div className="contato-footer">
                                        <img src="./imagens/icone-email-footer.png" alt="Facebook" /> <span className="color-white">{config.EMAIL}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 menu-footer">
                            <h3 className="color-light-blue">Explore</h3>
                            <ul className="menu-footer">
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}`}>Página Inicial</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#beneficios`}>Benefícios</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#institucional`}>Institucional</a></li>
                                <li><a className="color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#combos-home`}>Combos</a></li>
                            </ul>

                            <a className="btn bg-btn-plano-2 color-black btn-lg btn-entre-contato" href={`${process.env.REACT_APP_PUBLIC_URL}contato`}>Entre em contato conosco</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <div className="container text-center color-dark-blue">
                    Copyright {currentYear}. Todos os direitos reservados. {config.NOME_FANTASIA}.
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
