import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import functionSet from '../src/functional.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    render(){
        return (<div id='payment_form'>
        <Form.Label htmlFor="basic-url">Ваш донат</Form.Label>
        <InputGroup>
          <InputGroup.Text>Сума</InputGroup.Text>
          <Form.Control id="donate_amount" placeholder='0.0₴'/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            Номер картки
          </InputGroup.Text>
          <Form.Control id="card_number" aria-describedby="basic-addon3" placeholder="XXXX-XXXX-XXXX-XXXX" />
        </InputGroup>
        <Form.Label>Дійсна до:</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>Місяць: </InputGroup.Text>
        <Form.Control id="expired_month" placeholder="01" />
        <InputGroup.Text>Рік:</InputGroup.Text>
        <Form.Control id="expired_year" placeholder='2022' />
      </InputGroup>
      <Button variant='success' onClick={functionSet.danate}>Задонатити</Button>
      <Card>
        <Card.Body>
          <Card.Title>Але ліпше скиньте на цю картку 5168757427260759 користуючись цим сервісом  
            <a href="https://privatbank.ua/sendmoney">Sendmoney</a></Card.Title>
        </Card.Body>
      </Card>
        </div>);
    }
}


ReactDOM.render(<App />, document.getElementById('root'));