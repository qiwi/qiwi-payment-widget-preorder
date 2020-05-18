import React from 'react'
import {Helmet} from 'react-helmet'
import {withTheme} from 'styled-components'

function ThemedHelmetComponent({theme}) {
    return (<Helmet>
        <meta name="theme-color" content={theme.primaryColor || "#ff8c00"}/>
    </Helmet>)
}

export default withTheme(ThemedHelmetComponent)
