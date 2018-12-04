// Stolen from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const latestExperimentCardsProps = [
  {
    experimentType: `SINGLE_CELL_RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-EHCA-2`,
    experimentDescription: `Melanoma infiltration of stromal and immune cells`,
    lastUpdate: `16-11-2018`,
    numberOfAssays: 6638,
    numberOfContrasts: 0,
    species: `Mus musculus`,
    kingdom: `animals`,
    experimentalFactors: [`single cell identifier`, `sampling site`, `time`],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `SINGLE_CELL_RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-MTAB-5061`,
    experimentDescription: `Single-cell RNA-seq analysis`,
    lastUpdate: `11-10-2018`,
    numberOfAssays: 3514,
    numberOfContrasts: 0,
    species: `Homo sapiens`,
    kingdom: `animals`,
    experimentalFactors: [`single cell identifier`, `disease`],
    arrayDesigns: [],
    arrayDesignNames:[]
  }
]

export {
  getRandomInt,
  latestExperimentCardsProps
}
