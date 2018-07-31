import React, {Component} from 'react';
import styled from 'styled-components';
import {getImageByUrl} from "../../modules/helpers";
import {styleCode} from "../../styles";
import * as bowser from 'bowser/bundled';

const StyledLogo = styled.div`
    max-width: 310px;
    height: 36px;
    width: 100%;
    margin-bottom: 16px;
    background: url(${(props) => props.bgUrl ? props.bgUrl : ''}) no-repeat top left;
    background-size: ${(props) => props.bgSize ? props.bgSize : '100%'};
`;

class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgSize: '',
            url: ''
        };
    }

    componentDidMount() {
        const widgetStyles = this.props.widgetInfo.widgetStyles;
        if (!widgetStyles) {
            return;
        }
        // png has the highest priority by default
        let url = widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL_PNG]
            || widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL] || '';

        try {
            const browserInfo = bowser.getParser(window.navigator.userAgent).getBrowser();
            if (browserInfo.name !== 'Internet Explorer') {
                // good browsers support svg so it has higher priority
                url = widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL] || widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL_PNG] || '';
            }
        } catch (e) {
            console.log('could not know what the browser is');
        }

        getImageByUrl(url).then((img) => {
            let bgSize = 'auto';
            if (img.width >= 310 || img.height >= 36) {
                bgSize = 'contain';
            }
            this.setState({
                bgSize, url
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                errorLoading: true
            });
        });
    }

    render() {
        return ((this.state.url !== '') ? <StyledLogo bgSize={this.state.bgSize} bgUrl={this.state.url}/> : null)
    }
}

export default Logo;