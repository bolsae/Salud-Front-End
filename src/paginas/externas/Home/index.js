import React, { Fragment, Component } from 'react'
import { Alert } from 'reactstrap';

import Header from '../../../components/Header'
import Etapas from '../../../components/Etapas'
import EtapaItem from '../../../components/EtapaItem'
import Institucional from '../../../components/Institucional'
import Planos from '../../../components/Planos'
import SlideBeneficios from '../../../components/SlideBeneficios'
import Footer from '../../../components/Footer'


export default class Home extends Component {
    render() {
        return (
            <Fragment>
            <Header />
            <main className="container-principal">

                
                <Etapas>
                <EtapaItem
                    etapaId="primeiro-passo"
                    etapaIcon="/imagens/icone-passo1.png"
                    texto1="Acesse o"
                    texto2="nosso site"
                /> 
              
                <EtapaItem
                    etapaId="segundo-passo"
                    etapaIcon="/imagens/icone-passo3.png"
                    texto1="Confira os"
                    texto2="benefícios"
                />

                <EtapaItem
                    etapaId="terceiro-passo"
                    etapaIcon="/imagens/icone-passo4.png"
                    texto1="Finalize seu"
                    texto2="cadastro"
                />

                <EtapaItem
                    etapaId="quarto-passo"
                    etapaIcon="/imagens/icone-passo2.png"
                    texto1="Comece a"
                    texto2="utilizar"
                />

                </Etapas>

                {/* Institucional Section */}
                <Institucional />

                {/* Planos Section */}
                <Planos />

                {/* SlideBeneficios Section */}
                <SlideBeneficios />

                {/* Footer Section */}
                <Footer />
            </main>

            </Fragment>
        )
    }
}

