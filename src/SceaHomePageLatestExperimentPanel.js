import React from 'react'
import PropTypes from 'prop-types'

const LatestExperimentPanel = ({numberOfAssays, host, experimentAccession, lastUpdate, experimentDescription, species}) =>
    <li>
        <div style={{display: 'block', marginBottom: '1rem'}}>
            <div className={'hide-for-small-only'} style={{paddingRight: '0px', verticalAlign: 'middle', display: 'table-cell'}}>
                <span className={'button'} style={{marginBottom: '0px', width: '120px', cursor: 'default', backgroundColor: '#777'}}
                    data-tooltip title={'Number of assays in experiment'}>

                    {numberOfAssays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} assays</span>
            </div>
            <div className={'hide-for-small-only'} style={{paddingRight: '0px', verticalAlign: 'middle', display: 'table-cell'}}>
                <a className={'button'} style={{marginBottom: '0px', backgroundColor: `#3497c5`}} href={`${host}/experiments/${experimentAccession}`}>Results</a>
            </div>
            <div style={{paddingRight: '0px', paddingLeft: '1rem', verticalAlign: 'middle', display: 'table-cell'}}>
                <small>{lastUpdate}</small><br/>
                <a href={`${host}/experiments/${experimentAccession}`}>
                    {experimentDescription} <i>{species}</i>
                </a>
            </div>
        </div>
    </li>

const SceaHomePageLatestExperimentPanel = ({cards, host}) =>
    <div id={'latest-experiments'} style={{padding: '1rem'}}>
        <ul style={{listStyle: 'none', marginLeft: 'offset'}}>
            { Array.isArray(cards) && cards.map((card, idx) => <LatestExperimentPanel key={idx} host={host} {...card}/>) }
        </ul>
    </div>


LatestExperimentPanel.propTypes = {
    experimentType: PropTypes.string,
    experimentAccession: PropTypes.string,
    experimentDescription: PropTypes.string,
    lastUpdate: PropTypes.string,
    numberOfAssays: PropTypes.number,
    numberOfContrasts: PropTypes.number,
    species: PropTypes.string,
    kingdom: PropTypes.string,
    experimentalFactors: PropTypes.arrayOf(PropTypes.string),
    arrayDesigns: PropTypes.array,
    arrayDesignNames: PropTypes.array
}

SceaHomePageLatestExperimentPanel.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape(LatestExperimentPanel.propTypes)).isRequired,
    host: PropTypes.string.isRequired
}

export default SceaHomePageLatestExperimentPanel