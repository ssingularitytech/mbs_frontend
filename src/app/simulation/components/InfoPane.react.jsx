// Import from NPM
// -------------------------------------
import React from "react";
import { Segment, Button, Image, Icon } from "semantic-ui-react";
import Countdown from "react-countdown-now";
import { hashHistory } from "react-router";

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return (
            <Icon.Group>
                <Icon name="clock" />
                <Icon corner name="exclamation" color="red" />
            </Icon.Group>
        );
    } else {
        return (
            <span>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
        );
    }
};

export default class InfoPane extends React.PureComponent {
    goNext = () => {
        if (this.props.link === undefined) this.props.handleSubmit();
        else hashHistory.push(this.props.link);
    };
    render() {
        return (
            <div>
                <Image style={{display: 'block', margin: '0 auto'  }} src={"assets/images/configurable/slogo.png"} />
                {this.props.phaseTime !== undefined && (
                    <a href="/#/info">
                        <Image
                            src={"/assets/images/configurable/help.png"}
                            size="small"
                            style={{ marginTop: "-64px" }}
                        />
                    </a>
                )}
                <Segment raised inverted>
                    <h1 style={{ color: "#ff695e" }}>
                        {this.props.title}
                        {this.props.phaseTime !== undefined && (
                            <span style={{ color: "#ffc900", float: "right" }}>
                                <Countdown
                                    date={
                                        Date.now() +
                                        this.props.phaseTime * 60000
                                    }
                                    renderer={renderer}
                                    onComplete={this.props.addOvertime}
                                />
                            </span>
                        )}
                    </h1>
                    <div>
                    <p style={{fontFamily:'Roboto', fontSize:'18px', fontWeight:'550'}}
                        dangerouslySetInnerHTML={{ __html: this.props.content }}
                    />
                    </div>

                    <br />
                    <Button
                        content={this.props.buttonText}
                        size="huge"
                        primary
                        fluid
                        labelPosition="right"
                        icon="right chevron"
                        onClick={this.goNext}
                        handleSubmit={this.handleSubmit}
                        disabled={this.props.disabled}
                    />
                   
                </Segment>
            </div>
        );
    }
}
