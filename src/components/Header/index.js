import React, {Component, Fragment} from 'react'

import Navbar from '../Navbar'

export default class Header extends Component
{
    render()
    {
        return(
            <Fragment> 
                <header className="container-header">
                    <Navbar />
                    <section className="container container-carousel">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item container-carousel-familia active">
                                    <div className="institucional-carousel">
                                        <h1 className="display-4 color-light-blue titulo">Para Você</h1>
                                        <p className="lead color-white">Saúde e proteção para o bem de todos da sua família</p>
                                        <a className="btn bg-light-blue color-white btn-lg" href={`${process.env.REACT_APP_PUBLIC_URL}#como-funciona`}>Como funciona?</a>
                                        <a className="btn bg-red color-white btn-lg" style={{ marginLeft: 10 + 'px' }} href={`${process.env.REACT_APP_PUBLIC_URL}#combos-home`}>Escolha o seu combo</a>
                                    </div>
                                </div>
                                <div className="carousel-item container-carousel-empresa">
                                    <div className="institucional-carousel">
                                        <h1 className="display-4 color-light-blue titulo">Para sua empresa</h1>
                                        <p className="lead color-white">Saúde e proteção para o bem de todos os seus colaboradores</p>
                                        <a className="btn bg-light-blue color-white btn-lg" href={`${process.env.REACT_APP_PUBLIC_URL}#como-funciona`}>Como funciona?</a>
                                        <a className="btn bg-red color-white btn-lg" style={{ marginLeft: 10 + 'px' }} href={`${process.env.REACT_APP_PUBLIC_URL}contato`}>Entre em contato</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 289.83">
                    <linearGradient id="bg-svg-topo-header" x2="1" y2="0">
                        <stop offset="0%" stopColor="#001515" />
                        <stop offset="100%" stopColor="#002626" />
                    </linearGradient>
                    <path fill="url(#bg-svg-topo-header)" stroke="none"
                    d="M1920,74.7s-534.19,194.41-721.38,210C538.28,339.7-1,74.7-1,74.7V-.3H1920Z" />
                </svg>
            </Fragment>
        )
    }
}
