import React from 'react'
import PropTypes from 'prop-types'
import latestExperimentCardPropTypes from '../cards/latestExperimentCardPropTypes'

import LatestExperimentCard from '../cards/LatestExperimentCard'

const SceaHomePageLatestExperimentContainer = ({cards, host}) =>
  <div id="latest-experiments" className="tabs-panel is-active" role="tabpanel" aria-labelledby="latest-experiments-label">
    <ul className="clear">
    {
      Array.isArray(cards) &&
      cards.map((card, idx) =>
        <LatestExperimentCard key={idx} host={host} {...card}/>
      )
    }
    </ul>
  </div>

SceaHomePageLatestExperimentContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(latestExperimentCardPropTypes)).isReq
}

export default SceaHomePageLatestExperimentContainer