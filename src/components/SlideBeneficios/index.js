import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { exibeModal } from '../../actions/ModalActions'

import Modal from '../Modal'

class SlideBeneficios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            beneficios: [],
            modal: {
                title: '',
                classCss: '',
                msg: ''
            }
        }
    }

    componentDidMount() {
        this.getBeneficios();
    }

    beneficioClicado(index) {
        const rows = document.getElementsByClassName('rowSlideBeneficio')

        for (var i = 0; i < rows.length; i++) {
            if (index == i) {
                rows[i].style.display = 'flex'
            } else {
                rows[i].style.display = 'none'
            }
        }
    }

    getBeneficios = async () => {
        let data = await axios.get(process.env.REACT_APP_API_URL + "beneficios/listar")
            .then((resp) => resp.data);

        console.log(data.dados)

        this.setState({ beneficios: data.dados })
    }

    renderModal(title, classCss, msg) {

        return <Modal
            title={title}
            classCssHeader={`${classCss}`}
        >
            <p>{msg}</p>
        </Modal>
    }

    onClick = (event) => {
        event.preventDefault()

        this.setState({
            ...this.state,
            modal: {
                title: "Cobertura",
                msg: "Texto de cobertura dos benefícios",
                classCss: "color-white bg-green"
            }
        })

        this.props.exibeModal(true)
    }


    render() {

        return (
            <section id="beneficios" className="beneficios-home">
                {this.renderModal(this.state.modal.title, this.state.modal.classCss, this.state.modal.msg)}
                <div className="container">
                    <div className="slide-beneficios-home">
                        <h2 className="color-red">Benefícios</h2>
                        <h3 className="color-dark-blue">Conheça nossos benefícios:</h3>

                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <ul className="slide-menu-items">
                                    {
                                        this.state.beneficios.map((beneficio, index) => {
                                            return (
                                                <li className="slide-menu-items-1" key={index} onClick={() => this.beneficioClicado(index)} >
                                                    <img className="img-icone-slide-home" src={`/imagens/${beneficio.icone}`} />
                                                    <span className="texto-item-slide-home color-dark-blue">
                                                        {beneficio.titulo}
                                                    </span>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                            <div className="col-lg-8 col-sm-12" style={{ padding: 0 }}>
                                <div className="exibe-slide-container">
                                    <div className="conteudo-slide-home">
                                        {
                                            this.state.beneficios.map((beneficio, index) => {
                                                let cont = index + 1
                                                let display = (index == 0) ? { display: "flex" } : {/**/ }
                                                return (

                                                    <div className="row rowSlideBeneficio" key={index} style={display}>
                                                        <div className="col-lg-4 col-sm-12">
                                                            <div className="img-slide-box">
                                                                <img className="img-fluid" src={`/imagens/slide-beneficios/${beneficio.img}`} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-sm-12">
                                                            <div className="texto-slide-box text-left">
                                                                <span className="passo color-red">{cont} de {this.state.beneficios.length}</span>
                                                                <h4 className="color-dark-blue">{beneficio.titulo}</h4>
                                                                <p>{beneficio.descricao}</p>
                                                                {
                                                                    /*
                                                                    beneficio.id === 1
                                                                        ? <img className='logo-rede-mais-saude' src='/imagens/logo-rede-mais-saude.png' />
                                                                        : ''
                                                                        */
                                                                }

                                                                {
                                                                    /*
                                                                    (beneficio.comum_todos == 1) ? (
                                                                        <p className="frase-final">Benefício presente em todos os combos</p>
                                                                    ) : ''*/
                                                                }

                                                                <div className='container-btn-beneficios'>
                                                                    
                                                                    <a className="btn bg-btn-plano-1 color-white btn-lg" href="#">Eu Quero</a>
                                                                    {
                                                                   
                                                                    (beneficio.link !== "") ? (
                                                                        <a className="btn bg-light-blue color-white btn-lg" target="_blank" href={`${beneficio.link}`} rel="noreferrer">Regulamento</a>
                                                                    ) : '' 
                                                                    }
                                                                                                                                        
                                                                    <a className="btn bg-red color-white btn-lg" href="#" onClick={this.onClick}>Cobertura</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        isOpen: state.modal.isOpen,
    }
}

export default connect(mapStateToProps, { exibeModal })(SlideBeneficios);