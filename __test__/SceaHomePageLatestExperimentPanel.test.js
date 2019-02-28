import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { latestExperimentCardsProps } from './TestUtils'

import SceaHomePageLatestExperimentPanel from '../src/SceaHomePageLatestExperimentPanel'

Enzyme.configure({ adapter: new Adapter() })

describe(`SceaHomePageLatestExperimentContainer`, () => {
  const props = {
    cards: latestExperimentCardsProps,
    host: `url`
  }

  test(`renders latest experiment cards`, async () => {
    const wrapper = mount(<SceaHomePageLatestExperimentPanel {...props} />)

    expect(wrapper.find(`LatestExperimentEntry`)).toHaveLength(props.cards.length)
    expect(wrapper.find(`small`)).toHaveLength(props.cards.length)
  })
})
