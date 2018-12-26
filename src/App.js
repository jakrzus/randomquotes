import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import QuoteBox from './quoteBox';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: ''
        };
        this.fetchQuote = this
            .fetchQuote
            .bind(this);
    }
    componentWillMount(){
      this.fetchQuote();
    }
    render() {
        return (
            <div className="App">
                <QuoteBox fetchQuote={this.fetchQuote} author={this.state.author} text={this.state.text}/>
            </div>
        );
    }
    fetchQuote() {
        const mashapeQuote = axios.create({
            baseURL: "https://andruxnet-random-famous-quotes.p.mashape.com/",
            headers: {
                "X-Mashape-Key": "QpurisXPSmmshnfkMbguQ1JqLHY3p1SBG4KjsnglYtpihQuKZ8"
            }
        })
        mashapeQuote
            .get()
            .then((response) => {
                console.log(response);

                this.setState({text: response.data[0].quote, author: response.data[0].author})
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export default App;