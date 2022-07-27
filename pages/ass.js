import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render(){
        return (<div>
        <Card>
            <Card.Img variant='top' 
            style={{width: '20%'}}
            src='https://thumbs.dreamstime.com/b/sexy-beautiful-woman-taking-off-her-white-panties-sexy-beautiful-woman-taking-off-her-white-panties-over-gray-background-110258419.jpg' />
        </Card>
        <Alert variant='secondary'>Connection is establishing...</Alert>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));