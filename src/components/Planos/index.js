import React, { Component } from 'react'
import Combo from "../Combo/index"
import axios from 'axios'
import config from './../../config'

export default class Planos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            planos: []
        }
    }

    componentDidMount() {
        this.getPlanosBeneficios()
    }

    getPlanosBeneficios() {
        axios.get(process.env.REACT_APP_API_URL + "planos/listar")
            .then(resp => this.setState({ planos: resp.data.dados }));
    }

    verificaMaiorQtdeBeneficios() {
        let maiorQtde = 0;
        this.state.planos.map(plano => {
            maiorQtde = plano.beneficios.length > maiorQtde ? plano.beneficios.length : maiorQtde
        })

        return maiorQtde;
    }

    render() {

        return (
            <section id="combos-home" className="planos-home">

                <svg id="svg-topo-planos" data-name="svg-topo-planos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 236.77">
                    <defs>
                        <clipPath id="clip-path">
                            <rect className="cls-1" y="-95.19" width="1920" height="332"></rect>
                        </clipPath>
                    </defs>

                    <g className="cls-2" fill="#121b44" stroke="none">
                        <path d="M1920,1446.1s-850.57,145.71-1021.19,145.71C730.93,1591.81,0,1446.1,0,1446.1V170.39S970.76-27.27,1197.74,4.18C1330.16,22.53,1920,170.39,1920,170.39Z"></path>
                    </g>
                </svg>

                <div className="container-beneficios">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="color-red text-center">Benefícios</h2>
                                <h3 className="color-white text-center">As vantagens do {config.NOME_FANTASIA} são muitas!</h3>
                            </div>
                        </div>

                        <div className="row">

                            {this.state.planos.map(plano => (
                                <Combo
                                    key={plano.id}
                                    comboId={plano.id}
                                    valor={plano.valor}
                                    titulo={plano.plano}
                                    beneficios={plano.beneficios}
                                    idGetnet={plano.id_getnet}
                                    totalBeneficios={this.verificaMaiorQtdeBeneficios()}
                                />
                            ))
                            }
                        </div>
                    </div>
                </div>

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280.000000 158.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,158.000000) scale(0.100000,-0.100000)" fill="#121b44" stroke="none">
                        <path d="M0 1356 c0 -205 2 -225 17 -230 39 -11 1343 -331 1738 -426 1437
                    -346 2494 -583 2946 -660 64 -10 174 -24 244 -30 861 -70 3181 236 6460 851
                    326 61 1260 242 1347 260 l48 11 0 224 0 224 -6400 0 -6400 0 0 -224z"></path>
                    </g>
                </svg>
            </section>
        )
    }

}

