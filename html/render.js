import React from 'react'
import ReactDOM from 'react-dom'

import { LatestExperimentsPanel } from '../src/index'

const renderLatestExperimentContainer = (options, target) => {
  ReactDOM.render(<LatestExperimentsPanel {...options} />, document.getElementById(target))
}


export {renderLatestExperimentContainer}
