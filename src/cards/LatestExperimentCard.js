import React from 'react'
import PropTypes from 'prop-types'
import latestExperimentCardPropTypes from './latestExperimentCardPropTypes'

const LatestExperimentCard = ({numberOfAssays, host, experimentAccession, lastUpdate, experimentDescription, species}) => 
  <li>
    <div className="media-object stack-for-small">
      <div className="media-object-section middle hide-for-small-only">
        <span className="button secondary no-action fixed-width-medium has-tip" data-tooltip="fmjj2g-tooltip" title="" 
          aria-describedby="o0u550-tooltip" data-yeti-box="o0u550-tooltip" data-toggle="o0u550-tooltip" 
          data-resize="o0u550-tooltip" data-events="resize">{numberOfAssays.toString()} assays</span>
      </div>
      <div className="media-object-section middle hide-for-small-only ">
        <a className="button" href={`${host}/experiments/${experimentAccession}`}>Results</a>
      </div>
      <div className="media-object-section middle">
        <small>{lastUpdate}</small><br/>
        <a href={`${host}/experiments/${experimentAccession}`}>
          {experimentDescription} <i>{species}</i>
        </a>
      </div>
    </div>
  </li>

LatestExperimentCard.propTypes = latestExperimentCardPropTypes

export default LatestExperimentCard
