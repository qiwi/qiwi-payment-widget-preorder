import React, {Component} from 'react';
import styled from 'styled-components';
import {getImageByUrl} from "../../modules/helpers";
import {styleCode} from "../../styles";

const StyledLogo = styled.div`
    max-width: 310px;
    height: 36px;
    width: 100%;
    margin-bottom: 16px;
    background-size: ${(props) => props.bgSize ? props.bgSize : '100%'};
    background: url(${(props) => props.bgUrl ? props.bgUrl : ''}) no-repeat top left;
`;

class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgSize: '',
            url: ''
        };
    }

    componentWillMount() {
        try {
            const widgetStyles = this.props.widgetInfo.widgetStyles;
            console.log('Comp');
            const url = (widgetStyles && widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL]) ? widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL] : '';
            getImageByUrl(url).then((img) => {
                let bgSize = 'auto';
                if (img.width >= 310 || img.height >= 36) {
                    bgSize = '100% 100%';
                }
                this.setState({
                    bgSize, url
                });
            });
        } catch (err) {
            this.setState({
                errorLoading: true
            });
        }
    }

    render() {
        console.log('rend');
        return ((this.state.url !== '') ? <StyledLogo bgSize={this.state.bgSize} bgUrl={this.state.url}/>: null)
    }
}

export default Logo;