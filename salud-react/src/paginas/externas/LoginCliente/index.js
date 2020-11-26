import React, { Fragment, Component } from 'react'
import HeaderInterno from '../../../components/HeaderInterno'
import Footer from '../../../components/Footer'
import Card from '../../../components/Card'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import { connect } from 'react-redux'

import { storeDadosCliente } from './../../../actions/ClientesActions'
import Modal from '../../../components/Modal'
import queryString from 'query-string';

import { Alert } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        //console.log(props)
        super(props)
        //pega parametros da URL
        this.params = queryString.parse(this.props.location.search);
        this.state = { erroLogin: false }
    }

    modalErroLogin = () => {

        return <div>
            <Modal 
                isOpen={true}
                title="Erro de Autenticação"
                classCssHeader="bg-red"
            >
                <p>Você não está autenticado.</p>
            </Modal>
            <Alert color="danger">{Date('s')}</Alert>
            
        </div>

    }


    onSubmit = async (values, actions) => {

        let resp = await axios.get(process.env.REACT_APP_API_URL + "clientes/login", { params: values }).then((resp) => resp.data)

        if (resp.status == "sucesso") {

            localStorage.setItem('token', resp.dados.usuario_token)
            localStorage.setItem('tipoUsuario', resp.dados.usuario_tipo_usuario)
            localStorage.setItem('tokenDtExpiracao', resp.dados.updated_at.date)

            const cliente = {
                nome: resp.dados.cliente_nome
            }
        } else {
            this.setState({ erroLogin: true }); 
        }
    }

    render() {
        return (
            <Fragment>

                <HeaderInterno tituloHeader="Login Cliente" />
                <div className="container">
                    <section className="container-form">

                        {
                           
                            this.params.auth == "false" || this.state.erroLogin == true ?

                            this.modalErroLogin()
                                 /*
                                <div>
                                <Modal
                                    isOpen={true}
                                    title="Erro de login"
                                    classCssHeader="bg-red color-white"
                                >
                                    <p>O usuário não existe na base de dados.</p>
                                </Modal>
                                <Alert color="primary">{Date('s')}</Alert>
                                </div>
                                */
                                : ""
                                
                        }

                        <Formik
                            onSubmit={this.onSubmit}
                            initialValues={{
                                cpf: "",
                                senha: "",
                                manter_conectado: ""
                            }}
                            render={({ values }) => (
                                <Form className="clearfix">
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <Card textoHeader="Login">
                                                <div className="row">
                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <label>CPF: </label>
                                                            <Field type="text" name="cpf" className="form-control input-sm cpf_valido" />
                                                            <ErrorMessage name="cpf" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <label>Senha: </label>
                                                            <Field type="password" name="senha" className="form-control input-sm" />
                                                            <ErrorMessage name="senha" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-xs-12 col-lg-12">
                                                            <div className="form-check">
                                                                <label htmlFor="defaultCheck1">
                                                                    <Field type="checkbox" name="manter_conectado" id="defaultCheck1" /> Manter Conectado
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-12 col-lg-12">
                                                        <div className="form-group">
                                                            <button className="btn btn-primary float-right" type="submit">Entrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        />
                    </section>
                </div>
            </Fragment>
        )
    }
}


export default connect(state => ({ cliente: state.clientes }), { storeDadosCliente })(Login); 
