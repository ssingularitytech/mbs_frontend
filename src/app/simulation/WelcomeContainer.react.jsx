// Import from NPM
// -------------------------------------
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Button, Image, Grid } from "semantic-ui-react";
import { hashHistory } from "react-router";

// Import Actions and Helpers
// -------------------------------------

// Import from Config
// -------------------------------------
import { getAppConfig } from "config/client.config";
import { welcomeText } from "./components/seeds";

// Import Components
// -------------------------------------
import FlexBox from "globals/flexbox/FlexBox.react";
import HTMLSlider from "globals/carousel/HTMLSlider.react";

/**
 * The CourseEditorContainer is the top level component connected to the redux store.
 */
export class WelcomeContainer extends React.Component {
    componentDidMount() {
        if (this.props.simParams.lastLocation !== "#")
            hashHistory.push(this.props.simParams.lastLocation);
    }
    startSim = () => {
        hashHistory.push(welcomeText.link);
    };

    render() {
        let presentation = _.times(8, n => {
            return (
                <Image
                    src={`/assets/images/configurable/welcome/Slide${n +
                        1}.JPG`}
                    fluid
                />
            );
        });
        return (
            <FlexBox>
                <div
                    className="isRelative"
                    style={{
                        // height: "100%",
                        padding: "10px 50px",
                        width: "100%",
                        background: "#ffffff",
                        color: "#ffffff"
                    }}
                >
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                {/* 
                                <Image
                                    src={
                                        getAppConfig().apiUrls.assetLib +
                                        "/images/configurable/cologo.png"
                                    }
                                    style={{ margin: "0 auto" }}
                                    size="medium"
                                />
                                */}
                                <Image
                                    src={
                                        getAppConfig().apiUrls.assetLib +
                                        "/images/configurable/logo.png"
                                    }
                                    style={{ margin: "0 auto" }}
                                    size="small"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <h3
                                    dangerouslySetInnerHTML={{
                                        __html: welcomeText.content
                                    }}
                                    style={{ marginTop: "5px" , color: "black"}}
                                /> 
                                <br />
                                <Button
                                    size="huge"
                                    primary
                                    content={welcomeText.buttonText}
                                    onClick={this.startSim}
                                    style={{display: 'block', margin: '0 auto'}}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </FlexBox>
        );
    }
}

const mapStateToProps = /* istanbul ignore next - redux function */ state => {
    return {
        auth: state.auth,
        simParams: state.simParams
    };
};

const mapDispatchToProps = /* istanbul ignore next - redux function */ dispatch => {
    return {
        actions: {}
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeContainer);
