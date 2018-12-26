import React, {Component} from 'react'
import {
    Card,
    Placeholder,
    CardMeta,
    Button,
    PlaceholderLine
} from 'semantic-ui-react'
import './quoteBox.css'

export default class quoteBox extends Component {

    render() {
        return (
            <div id={'quote-box'}>

                <Card>
                    <Card.Content>
                        <Card.Header as="h1" textAlign={"center"}>
                            QuoteBox
                        </Card.Header>
                        {this.props.text === ''
                            ? (
                                <Placeholder><PlaceholderLine/><PlaceholderLine/>
                                </Placeholder>
                            )
                            : (
                                <div>
                                    <div id="text">
                                        <q>-{this.props.text}</q>
                                    </div>
                                    <CardMeta id="author">{this.props.author}</CardMeta>
                                </div>
                            )}
                            <br/>
                        <Button onClick={this.props.fetchQuote} primary id="new-quote">New Quote</Button>

                        <Button
                            as="a"
                            href="twitter.com/intent/tweet"
                            id="tweet-quote"
                            color="twitter">
                            Twitter
                        </Button>

                    </Card.Content>
                </Card>
            </div>
        )
    }
}