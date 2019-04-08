import React, {Component} from 'react';
import styled, {withTheme} from 'styled-components';
import {getImageByUrl, media} from "../../modules/helpers";
import * as bowser from 'bowser/bundled';

const StyledLogo = styled.div`
    max-width: 200px;
    height: 36px;
    width: 100%;
    margin-bottom: 16px;
    background: url(${(props) => props.url ? props.url : ''}) no-repeat top left;
    background-size: ${(props) => props.bgSize ? props.bgSize : '100%'};
    
    @media${media.mobile} {
        margin-bottom: 0px;
    }
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
        let url = this.props.theme.logoPngUrl
            || this.props.theme.logoUrl || '';

        try {
            const browserInfo = bowser.getParser(window.navigator.userAgent).getBrowser();
            if (browserInfo.name !== 'Internet Explorer') {
                // good browsers support svg so it has higher priority
                url = this.props.theme.logoUrl ||
                    this.props.theme.logoPngUrl || '';
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
        return ((this.props.theme.logoUrl || this.props.theme.logoPngUrl) ? <StyledLogo url={this.state.url} bgSize={this.state.bgSize}/> : null)
    }
}

export default withTheme(Logo);