import React, {Component} from 'react';
import { Navbar , NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label}from 'reactstrap';
import {NavLink } from 'react-router-dom';
class Header extends Component{

    constructor(props){

        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
     this.setState({
         isNavOpen: !this.state.isNavOpen
     });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username:" + this.username.value + "password:" + this.password.value + "Remember:" + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="31" width="41" alt="Ristorante Con Fusion" />
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-phone fa-lg"></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Login In</span>
                            </Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-">
                        <h1>Ristorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                    </div>
                </div>
            </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                      
                          <Label htmlFor="username">Username</Label> 
                          <Input id="username" name="username" type="text" 
                            innerRef={(input) => this.username = input}></Input> 
                
                        </FormGroup>
                        <FormGroup>
                      
                          <Label htmlFor="password">Password</Label> 
                          <Input id="password" name="password" type="password"
                            innerRef={(input) => this.password = input}></Input> 
                
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} />
                                Remember Me
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" value="submit" className="bg-primary mt-2" onClick={this.handleLogin}>Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}

export default Header;