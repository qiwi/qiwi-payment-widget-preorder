import React, {Component} from 'react'

import MultipleChoiceForm from './components/MultipleChoiceForm'
import SingleChoiceForm from './components/SingleChoiceForm'
import {withTheme} from 'styled-components'

class Preselect extends Component {
    render() {
        const {
            theme,
            sumAmount,
            toFormPath,
            redirect,
            history,
        } = this.props

        return theme.fixedAmount ? (
            <SingleChoiceForm
                amount={sumAmount[0]}
                redirect={redirect}
            />
        ) : (
            <MultipleChoiceForm
                sumAmount={sumAmount}
                toFormPath={toFormPath}
                redirect={redirect}
                history={history}
            />
        )
    }
}

export default withTheme(Preselect)
