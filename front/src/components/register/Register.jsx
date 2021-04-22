import React, { Component } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../template/If'
import { changeName, changeEmail, changePassword, changeRepeatPassword, register, changeDateOfBirth } from './registerActions'

class Register extends Component {

    render(){
        return(
            <div className="vh-100 d-flex justify-content-center">
                <div className="align-self-center col-md-6 shadow-lg p-5">
                    <h1 key={1} variant={'danger'}>
                        Register
                    </h1>
                    <hr />
                    <If test={this.props.error.status}>
                        <Alert variant={this.props.error.status=='error'?'danger':'success'}>
                            {this.props.error.message}
                        </Alert>
                    </If>
                    <Form onSubmit={(e) => this.props.register(e, this.props.name, 
                                                                    this.props.email,
                                                                    this.props.password,
                                                                    this.props.repeat_password)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={this.props.changeName} 
                                            value={this.props.name} 
                                            type="text" placeholder="Name" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control onChange={this.props.changeDateOfBirth} 
                                            value={this.props.date_of_birth} 
                                            type="date" placeholder="Name" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  onChange={this.props.changeEmail} 
                                            value={this.props.email} 
                                            type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  onChange={this.props.changePassword} 
                                            value={this.props.password} 
                                            type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control  onChange={this.props.changeRepeatPassword} 
                                            value={this.props.repeat_password} 
                                            type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary btn-block" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <hr />
                    <Link to="/login">Aready registered? Click here to login</Link>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({name: state.register.name, 
                                        email: state.register.email, 
                                        password: state.register.password, 
                                        date_of_birth: state.register.date_of_birth,
                                        error: state.register.error, 
                                        repeat_password: state.register.repeat_password })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeName, changeEmail, changePassword, changeRepeatPassword, register, changeDateOfBirth }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)