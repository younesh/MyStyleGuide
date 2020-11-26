
import { shallowMount } from '@vue/test-utils'
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder/ImagePlaceholder.vue';
describe('ImagePlaceholder.vue', () => {
  it('T1 : renders the correct url for New York images', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'newyork' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/newyork')
  })

  it('T2 : renders the correct url for Random images if not specified', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200 } // on a pas mis la propos images !
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/random')
  })

  it('T3 : renders a square image if height is not specified', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width : 500 }  
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/500/random')
  }) 

 /*
  it('....', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: {   }  
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('')
  }) 
  */
})