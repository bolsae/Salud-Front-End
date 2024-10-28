import React from 'react'

const Navbar = () => {


    const palavra = "interpolada";
 


    return (
        <nav className="col navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand link-logo" href={`${process.env.REACT_APP_PUBLIC_URL}`}>
                <img className="img-logo" src={`${process.env.REACT_APP_PUBLIC_URL}imagens/logo.png`} alt="Salud" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-menu collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#institucional`}>Institucional <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white" href={`${process.env.REACT_APP_PUBLIC_URL}#beneficios`}>Benefícios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white" href={`${process.env.REACT_APP_PUBLIC_URL}contato`}>Contato</a>
                    </li>
                </ul>
            </div>

            <div className="container-btn-header collapse navbar-collapse container-cadastre-se" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active nav-btn-red">
                        <a className="btn bg-red color-white btn-sm" href="#">Cadastre-se grátis
                                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-white btn-outline-primary btn-sm color-white" href="https://clientes.secuidae.com.br/" target='__blank'>Sou Cliente</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-white btn-outline-primary btn-sm color-white" href="#">Sou Prestador</a>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse container-sociais" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <img className="icone-sociais" src='/imagens/icone-facebook.png' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img className="icone-sociais" src='/imagens/icone-instagram.png' alt="Instagram" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img className="icone-sociais" src='/imagens/icone-twitter.png' alt="Twitter" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img className="icone-sociais" src='/imagens/icone-linkedin.png' alt="Linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar