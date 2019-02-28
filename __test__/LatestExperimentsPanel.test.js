import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { latestExperimentCardsProps } from './TestUtils'

import '@babel/polyfill'
import LatestExperimentsPanel from '../src/LatestExperimentsPanel'
import LatestExperimentEntry from '../src/LatestExperimentEntry'

Enzyme.configure({ adapter: new Adapter() })

describe(`LatestExperimentsPanel`, () => {
  const props = {
    cards: latestExperimentCardsProps,
    host: `url`
  }

  test(`renders latest experiment entries`, async () => {
    const wrapper = mount(<LatestExperimentsPanel {...props} />)

    expect(wrapper.find(LatestExperimentEntry)).toHaveLength(props.cards.length)
    expect(wrapper.find(`small`)).toHaveLength(props.cards.length)
  })
})
