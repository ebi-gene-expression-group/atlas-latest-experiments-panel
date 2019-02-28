import React from 'react'
import PropTypes from 'prop-types'

import LatestExperimentEntry from './LatestExperimentEntry'

const LatestExperimentsPanel = ({cards, host}) => <div id={`latest-experiments`} style={{padding: `1rem`}}>
  <ul style={{listStyle: `none`, marginLeft: `offset`}}>
    { Array.isArray(cards) && cards.map((card, idx) => <LatestExperimentEntry key={idx} host={host} {...card}/>) }</ul>
</div>

LatestExperimentsPanel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(LatestExperimentEntry.propTypes)).isRequired,
  host: PropTypes.string.isRequired
}

export default LatestExperimentsPanel
