import React, { Component } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from './navigationActions'
import If from './If'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Navigation extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
           <React.Fragment>
               <Navbar collapseOnSelect fixed="top" expand="sm" style={{backgroundColor: 'rgb(218 218 218)'}} className="shadown-">
                    <Container>
                        <Navbar.Collapse aria-controls="responsive-navbar-nav" />
                            <If test={localStorage.getItem('token')}>
                                <Navbar.Collapse id="esponsive-navbar-nav">
                                    <Nav.Link eventKey="link-2" onClick={this.props.logout}>Logout</Nav.Link>
                                </Navbar.Collapse>
                            </If>
                            <If test={!localStorage.getItem('token')}>
                                <Navbar.Collapse id="esponsive-navbar-nav">
                                    <Link to="/login">Login</Link>
                                </Navbar.Collapse>
                                <Navbar.Collapse id="esponsive-navbar-nav">
                                    <Link to="/register">Register</Link>
                                </Navbar.Collapse>
                            </If>
                        </Container>
                </Navbar>
           </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({email: state.login.email, password: state.login.password, error: state.login.error})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)