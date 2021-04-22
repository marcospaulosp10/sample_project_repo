import React, { Component } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {changeEmail, changePassword, login, setIsLoading } from './loginActions'
import If from '../template/If'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="vh-100 d-flex justify-content-center">
                <div className="align-self-center col-lg-6 col-sm-12 shadow-lg p-5">
                    <h1 variant={'danger'}>
                        Login
                    </h1>
                    <hr />
                    <If test={this.props.error.status}>
                        <Alert variant={this.props.error.status=='error'?'danger':'success'}>
                            {this.props.error.message}
                        </Alert>
                    </If>
                    <Form onSubmit={(e) => {this.props.setIsLoading(true); this.props.login(e, this.props.email, this.props.password)}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                onChange={this.props.changeEmail} 
                                value={this.props.email} 
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                    type="password"
                                    onChange={this.props.changePassword}
                                    value={this.props.password}
                                    placeholder="Password"
                                />
                        </Form.Group>
                        <Button disabled={this.props.isLoading} variant="primary btn-block" type="submit">
                            <If test={this.props.isLoading}>
                                <Spinner animation="border" size="sm" role="status" className="mr-3" />
                            </If>
                            Submit
                        </Button>
                        <hr />
                    <Link to="/register">Register</Link>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({email: state.login.email, password: state.login.password, error: state.login.error, isLoading: state.login.isLoading})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeEmail, changePassword, login, setIsLoading }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)