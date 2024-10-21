import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editDadosPlano } from '../../actions/PlanosEscolhidoActions'
import { Redirect } from 'react-router-dom'

export class Combo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            plano: {
                titulo: ''
            }
        }
    }

    montaLiBeneficios() {
        let rows = [<li key={0}></li>]

        for (var i = 0; i < this.props.totalBeneficios; i++) {
            if (this.props.beneficios[i] !== undefined) {
                let nome = this.props.beneficios[i].nome
                //let id = this.props.beneficios[i].id
                rows.push(<li key={i}>{nome}</li>)
            }
            else {
                rows.push(<li key={i}></li>)
            }
        }
        return rows
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={`/cadastro/${this.state.plano.titulo}`} />
        }

        return (
            <div className="col-lg-6 col-md-6">
                <div className="box-plano">
                    <div className="topo-plano  text-center">
                        <svg id="Layer_1" data-name="Layer 1" className="shadow-svg-topo-plano" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 350.7 190.12">
                            <linearGradient id={`bg-svg-topo-plano-${this.props.comboId}`} x2="1" y2="0">
                                <stop offset="0%" stopColor="var(--color-stop-1)" />
                                <stop offset="50%" stopColor="var(--color-stop-2)" />
                                <stop offset="100%" stopColor="var(--color-stop-3)" />
                            </linearGradient>
                            <path fill={`url(#bg-svg-topo-plano-${this.props.comboId})`} stroke="none"
                                d="M339.38,170.92,185.57,189.51a85.14,85.14,0,0,1-20.43,0L11.32,170.92C4.81,170.13,0,165.76,0,160.63V10.41C0,4.66,6,0,13.38,0h324c7.39,0,13.37,4.66,13.37,10.41V160.63C350.7,165.76,345.9,170.13,339.38,170.92Z" />
                        </svg>

                        <div className="circulo-topo-plano ">
                            <div className="texto">
                                {
                                    (window.location.href !== 'http://localhost:3000/apresentacao')
                                        ?
                                        <div><div className="texto-maior">{`R$ ${this.props.valor}`}</div><div className="texto-menor">/mes</div></div>
                                        :
                                        <div className="texto-maior" style={{ fontSize: '16px' }}>A Consultar</div>
                                }

                            </div>
                        </div>
                        <span className="titulo-topo-plano">{this.props.titulo}</span>
                    </div>
                    <ul id="lista-plano" className="lista-plano">

                        {this.montaLiBeneficios()}

                        <li>
                            <a
                                href={`/cadastro/${this.props.titulo}`}
                                className={`btn-planos-home bg-btn-plano-${this.props.comboId} color-white`}
                                onClick={(ev) => {

                                    ev.preventDefault()

                                    const dadosPlano = {
                                        id: this.props.comboId,
                                        titulo: this.props.titulo,
                                        valor: this.props.valor,
                                        idGetnet: this.props.idGetnet,
                                        beneficios: this.props.beneficios
                                    }

                                    this.props.editDadosPlano(dadosPlano)

                                    this.setState(
                                        {
                                            ...this.state,
                                            redirect: true,
                                            plano: { titulo: this.props.titulo }
                                        }
                                    )
                                }}
                            >
                                Quero contratar agora!

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const planoEscolhidoConnect = connect(mapStateToProps, { editDadosPlano })(Combo)

export default planoEscolhidoConnect