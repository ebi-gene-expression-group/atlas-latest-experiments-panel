import React from 'react'
import ReactDOM from 'react-dom'

import { SceaHomePageLatestExperimentContainer } from '../src/index'

const renderLatestExperimentContainer = (options, target) => {
    ReactDOM.render(<SceaHomePageLatestExperimentContainer {...options} />, document.getElementById(target))
}


export {renderLatestExperimentContainer}
