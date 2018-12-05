import PropTypes from 'prop-types'

const latestExperimentCardPropTypes = {
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

export default latestExperimentCardPropTypes
