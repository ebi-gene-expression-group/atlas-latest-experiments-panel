import React from 'react'
import PropTypes from 'prop-types'
import latestExperimentCardPropTypes from './latestExperimentCardPropTypes'

const LatestExperimentCard = ({numberOfAssays, host, experimentAccession, lastUpdate, experimentDescription, species}) => 
  <li>
    <div className={`media-object stack-for-small`}>
      <div className={`media-object-section middle hide-for-small-only`}>
         <span className={`button secondary no-action fixed-width-medium`} data-tooltip title={`Number of assays in experiment`}>{numberOfAssays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} assays</span>
      </div>
      <div className={`media-object-section middle hide-for-small-only`}>
        <a className={`button`} href={`${host}/experiments/${experimentAccession}`}>Results</a>
      </div>
      <div className={`media-object-section middle`}>
        <small>{lastUpdate}</small><br/>
        <a href={`${host}/experiments/${experimentAccession}`}>
          {experimentDescription} <i>{species}</i>
        </a>
      </div>
    </div>
  </li>

LatestExperimentCard.propTypes = latestExperimentCardPropTypes

export default LatestExperimentCard
