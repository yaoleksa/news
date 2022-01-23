import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import functionSet from './functional.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Head extends React.Component {
  render() {
    return (
    <div>
      <p lang="ua">{functionSet.getCurrentDate()}</p>
    </div>);
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <Container>
          <Row>Contact us: </Row>
          <Row>Hello: </Row>
          <Row>It is a footer </Row>
        </Container>
      </div>);
  }
}

class NavbarMenu extends React.Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
        <Container fluid>
          <Navbar.Brand href="#">Головна</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="navbar_link" href="#action1">Політика</Nav.Link>
              <Nav.Link className="navbar_link" href="#action2">Культура</Nav.Link>
              <Nav.Link className="navbar_link" href="#action3">Спорт</Nav.Link>
              <Nav.Link className="navbar_link" href="#action4">Світське життя</Nav.Link>
              <Nav.Link className="navbar_link" href="#action5">Здоров'я</Nav.Link>
              <Nav.Link className="navbar_link" href="#action5">Економіка</Nav.Link>
              <Nav.Link className="navbar_link" href="#action5">COVID-19</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e => {functionSet.query = e.target.value}}
              />
              <Button variant="success" onClick={functionSet.googleSearch}>Пошук</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
    }
}

class App extends React.Component {
  render(){
    return (
      <>
        <NavbarMenu />
        <Head />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));