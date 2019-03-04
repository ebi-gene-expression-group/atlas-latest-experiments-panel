import withFetchLoader from './FetchLoader'
import LatestExperimentsPanel from './LatestExperimentsPanel'

const _LatestExperimentsPanel = withFetchLoader(LatestExperimentsPanel)

export {_LatestExperimentsPanel as LatestExperimentsPanel}
