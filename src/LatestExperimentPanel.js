import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableCellDiv = styled.div`
{
 padding-right: 0px;
 vertical-align: middle;
 display: table-cell;
}
`

const LatestExperimentEntry = ({numberOfAssays, host, experimentAccession, lastUpdate, experimentDescription, species}) =>
  <li>
    <div style={{display: 'block', marginBottom: '1rem'}}>
      <TableCellDiv className={'hide-for-small-only'}>
        <span className={'button'} style={{marginBottom: '0px', width: '120px', cursor: 'default', backgroundColor: '#777'}}
          data-tooltip title={'Number of assays in experiment'}>
          {numberOfAssays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} assays</span>
      </TableCellDiv>
      <TableCellDiv className={'hide-for-small-only'}>
        <a className={'button'} style={{marginBottom: '0px', backgroundColor: '#3497c5'}} href={`${host}/experiments/${experimentAccession}`}>Results</a>
      </TableCellDiv>
      <TableCellDiv style={{paddingLeft: '1rem'}}>
        <small>{lastUpdate}</small><br/>
        <a href={`${host}/experiments/${experimentAccession}`}>
          {experimentDescription} <i>{species}</i>
        </a>
      </TableCellDiv>
    </div>
  </li>

const LatestExperimentPanel = ({cards, host}) =>
  <div id={'latest-experiments'} style={{padding: '1rem'}}>
    <ul style={{listStyle: 'none', marginLeft: 'offset'}}>
      { Array.isArray(cards) && cards.map((card, idx) => <LatestExperimentEntry key={idx} host={host} {...card}/>) }
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

LatestExperimentPanel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(LatestExperimentPanel.propTypes)).isRequired,
  host: PropTypes.string.isRequired
}

export default LatestExperimentPanel