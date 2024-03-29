import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import functionSet from './functional.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: functionSet.getCurrentDate(),
      currentTime: functionSet.getCurrentTime(),
      weather: {
        main: {
          humidity: null,
          pressure: null,
          temp: null
        },
        name: null
      }
    }
    functionSet.getDefaultWeather().then(data => {
      this.setState({
        weather: data
      });
      if(functionSet.cityMap[this.state.weather.name]) {
        this.setState({
          location: functionSet.cityMap[this.state.weather.name]
        });
      } else {
        this.setState({
          location: "Погода у вашому місці знаходження: "
        });
      }
    })
  }
  changeTime() {
    setInterval(() => {
      this.setState({
        currentDate: functionSet.getCurrentDate(),
        currentTime: functionSet.getCurrentTime()
      });
    }, 1);
  }
  render() {
    return (
      <span id="weather_head">
        <span>
          <span className="header_info">{this.state.currentDate}</span>
          <span className="header_info">{this.state.currentTime}</span>
        </span>
        <span>
          <span className="header_info">{this.state.location}
          {parseFloat(this.state.weather.main.temp).toFixed(0)}{" градусів"}</span>
          <span className="header_info">Вологість повітря: {this.state.weather.main.humidity}</span>
          <span className="header_info">Атмосферний тиск: {this.state.weather.main.pressure}</span>
        </span>
      </span>
    );
  }
  componentDidMount() {
    this.changeTime();
    functionSet.getLocalWeather()
  }
  componentDidUpdate(prevProps, prevState) {
    if(functionSet.weatherData && !functionSet.dataWasRetrieved) {
      this.setState({
        weather: functionSet.weatherData
      });
      if(functionSet.cityMap[this.state.weather.name]) {
        this.setState({
          location: functionSet.cityMap[this.state.weather.name]
        });
      } else {
        this.setState({
          location: "Погода: "
        });
      }
      console.log(this.state.weather);
      functionSet.dataWasRetrieved = true;
    }
    if(this.state.weather.main.temp != prevState.weather.main.temp || this.state.weather.name != prevState.weather.name) {
      
    }
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <Container>
          <Row><span>Contact ass: <a id='ass_link' href='./pages/ass.html'>contact</a></span></Row>
          <Row><span>Donate: <a href="./pages/payment.html">Донатити</a></span></Row>
          <Row><span>Danate AFU: <a href='https://prytulafoundation.org/uk/home/support_page' target="_blank">
            Фонд Сергія Притули
          </a></span></Row>
        </Container>
      </div>);
  }
}

class NavbarMenu extends React.Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
        <Container fluid>
          <Navbar.Brand href="./index.html" active>Головна</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="navbar_link" href="./pages/policy.html">Політика</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/culture.html">Культура</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/sport.html">Спорт</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/secular_life.html">Світське життя</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/health.html">Здоров'я</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/economy.html">Економіка</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/covid-19.html">COVID-19</Nav.Link>
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

const articles = await functionSet.getNews().then(response => {
  return response.articles;
});

class NewsSet extends React.Component {
  constructor(props){
    super(props);
    this.favorite = articles[0];
  }
  render(){
    const cardArr = [];
    console.log(articles);
    let count = 0;
    for(let article of articles){
      if(this.favorite.summary.length < article.summary.length){
        this.favorite = article;
      }
      let item = <Card 
      style={{width: '12rem', height: 'fit-content'}} lang="ua" key={count}>
        <Card.Img variant="top" src={article.media} />
        <Card.Text>{article.title}</Card.Text>
        <a href={article.link}>Читати далі...</a>
      </Card>
      cardArr.push(item);
      count++; 
    }
    functionSet.redefineLinks(this.favorite.title, this.favorite.media);
    return (<>
    <div id="central_container">
      <div id="left_container">
        <Card style={{width: 'fit-content', height: 'fit-content'}}>
          <Card.Img id="article_image" variant="top" src={this.favorite.media}></Card.Img>
        </Card>
        <article>
          <h2 id="article_header">{this.favorite.title}</h2>
          <span id="main_subtitle">
            <span lang="ua" id="publication_date">Дата публікації: {this.favorite.published_date}</span>
            <span lang="ua" id="source_news">Джерело: <a 
            href={this.favorite.link} target="_blank">{this.favorite.link}</a></span>
          </span>
          <section id="article_summary">{this.favorite.summary}</section>
        </article>
      </div>
      <div id="cards_container">{cardArr}</div>
    </div>
    </>)
  }
}

class InputAricle extends React.Component {
  render() {
    return (<>
        <div id="input_article" name="input_article" hidden={true} lang="ua">
            <FormControl id='new_header' placeholder='Заголовок статті'/>
            <FormControl id='new_image' placeholder='Посилання на зображення' />
            <FormControl id='new_text' placeholder='Текст публікації' />
            <Button variant="info" id='upload_button' onClick={functionSet.uploadArticle}>Публікувати
            </Button>
        </div>
    </>);
  }
}

class App extends React.Component {
  render(){
    return (
      <>
        <NavbarMenu />
        <Head />
        <InputAricle />
        <NewsSet />
        <Footer />
      </>
    );
  }
}

export { Footer, NewsSet, Head, InputAricle }

ReactDOM.render(<App />, document.getElementById('root'));