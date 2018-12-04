import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { latestExperimentCardsProps } from './TestUtils'
import LatestExperimentCard from '../src/cards/LatestExperimentCard'

import SceaHomePageLatestExperimentContainer from '../src/containers/SceaHomePageLatestExperimentContainer'

Enzyme.configure({ adapter: new Adapter() })

describe(`SceaHomePageLatestExperimentContainer`, () => {
  const props = {
    cards: latestExperimentCardsProps
  }

  test(`renders latest experiment cards`, async () => {
    const wrapper = mount(<SceaHomePageLatestExperimentContainer {...props} />)

    expect(wrapper.find(LatestExperimentCard)).toHaveLength(props.cards.length)
    expect(wrapper.find(`.tabs-panel.is-active`).exists()).toBe(true)
    expect(wrapper.find(`.media-object.stack-for-small`)).toHaveLength(props.cards.length)
  })
})
