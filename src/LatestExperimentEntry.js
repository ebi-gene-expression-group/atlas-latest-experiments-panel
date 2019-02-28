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

const LatestExperimentEntry = ({experimentAccession, experimentDescription, numberOfAssays, lastUpdate, species, host}) =>
  <li>
    <div style={{display: `block`, marginBottom: `1rem`}}>
      <TableCellDiv className={`hide-for-small-only`}>
        <span className={`button`} style={{marginBottom: `0px`, width: `120px`, cursor: `default`, backgroundColor: `#777`}} data-tooltip title={`Number of assays in experiment`}>
          {numberOfAssays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`)} assays</span>
      </TableCellDiv>
      <TableCellDiv className={`hide-for-small-only`}>
        <a className={`button`} style={{marginBottom: `0px`, backgroundColor: `#3497c5`}} href={`${host}/experiments/${experimentAccession}`}>Results</a>
      </TableCellDiv>
      <TableCellDiv style={{paddingLeft: `1rem`}}>
        <small>{lastUpdate}</small><br/>
        <a href={`${host}/experiments/${experimentAccession}`}>
          {experimentDescription} <i>{species}</i>
        </a>
      </TableCellDiv>
    </div>
  </li>

LatestExperimentEntry.propTypes = {
  experimentAccession: PropTypes.string,
  experimentDescription: PropTypes.string,
  numberOfAssays: PropTypes.number,
  lastUpdate: PropTypes.string,
  species: PropTypes.string,
  host: PropTypes.string
}

export default LatestExperimentEntry
