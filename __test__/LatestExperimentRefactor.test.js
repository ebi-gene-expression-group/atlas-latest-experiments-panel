import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { latestExperimentCardsProps } from './TestUtils'

import LatestExperimentPanel from '../src/LatestExperimentPanel'

Enzyme.configure({ adapter: new Adapter() })

describe(`LatestExperimentPanel`, () => {
  const props = {
    cards: latestExperimentCardsProps
  }

  test(`renders latest experiment cards`, async () => {
    const wrapper = mount(<LatestExperimentPanel {...props} />)

    expect(wrapper.find(`LatestExperimentEntry`)).toHaveLength(props.cards.length)
    expect(wrapper.find(`small`)).toHaveLength(props.cards.length)
  })
})
