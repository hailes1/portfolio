import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ExperimentTone from '../ExperimentTone.vue'

const mountExperimentTone = (props = {}) =>
  mount(ExperimentTone, {
    props,
    global: {
      stubs: {
        CvBreadcrumb: {
          template: '<div class="cv-breadcrumb-stub"><slot /></div>',
        },
        CvButton: {
          template: '<button class="cv-button-stub" @click="$emit(\'click\')"><slot /></button>',
        },
      },
    },
  })

describe('ExperimentTone', () => {
  it('renders the experiment', () => {
    const wrapper = mountExperimentTone()

    expect(wrapper.text()).toContain('002 - Tone Adjustments and Negative Space')
    expect(wrapper.text()).toContain('Negative Space')
  })

  it('switches between cramped, balanced, and spacious examples', async () => {
    const wrapper = mountExperimentTone()
    const buttons = wrapper.findAll('.cv-button-stub')

    expect(wrapper.vm.activeExample).toBe('balanced')
    expect(wrapper.find('.example-spacing-balanced').exists()).toBe(true)
    expect(wrapper.text()).toContain('This version uses measured spacing.')

    await buttons[0].trigger('click')

    expect(wrapper.vm.activeExample).toBe('cramped')
    expect(wrapper.find('.example-spacing-cramped').exists()).toBe(true)
    expect(wrapper.text()).toContain('This version minimizes spacing.')

    await buttons[2].trigger('click')

    expect(wrapper.vm.activeExample).toBe('spacious')
    expect(wrapper.find('.example-spacing-spacious').exists()).toBe(true)
    expect(wrapper.text()).toContain('This version uses generous spacing.')
  })
})