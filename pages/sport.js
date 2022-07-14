import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import functionSet, { dataWasRetrieved } from '../src/functional.js';
import * as Elements from '../src/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class SportNavbarMenu extends React.Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
        <Container fluid>
          <Navbar.Brand href="../index.html">Головна</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="navbar_link" href="./policy.html">Політика</Nav.Link>
              <Nav.Link className="navbar_link" href="./culture.html">Культура</Nav.Link>
              <Nav.Link className="navbar_link" href="./sport.html" active>Спорт</Nav.Link>
              <Nav.Link className="navbar_link" href="./secular_life.html">Світське життя</Nav.Link>
              <Nav.Link className="navbar_link" href="./health.html">Здоров'я</Nav.Link>
              <Nav.Link className="navbar_link" href="./economy.html">Економіка</Nav.Link>
              <Nav.Link className="navbar_link" href="./covid-19.html">COVID-19</Nav.Link>
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
  render() {
    return (<>
        <SportNavbarMenu />
        <Elements.Head />
        <Elements.NewsSet />
        <Elements.Footer />
    </>);
  }
}

functionSet.defineArticle();

ReactDOM.render(<App />, document.getElementById('root'));

