import { shallowMount } from '@vue/test-utils';
import Incrementer from '@/components/atoms/incrementer/Incrementer.vue';

describe("incrementer.vue", () => {

     // input-incrementer 
    // test if the value is number !
    it(" test if propos startCompte =2 is asset to component in input text ", () => {
       const wrapper = shallowMount(Incrementer, {
        propsData: {startCompte : 2  }
       }); 
      const val = wrapper.find('input.input-incrementer__field').attributes("data-val");
      expect(Number(val)).toBe(2)
    });
   
    it(" Should increment a data-value by one step when we click on (+) button ! ", async  () => {
        const wrapper = shallowMount(Incrementer, {
         propsData: {startCompte : 0, step : 4  }
        }); 
       await wrapper.find('.input-incrementer__btn--increment').trigger('click');
       const val = wrapper.find('input.input-incrementer__field').attributes("data-val");
       expect(Number(val)).toBe(4);
     });

     it("Should icrement by atlease by 1 , even if step is less 1", async () => {
        const wrapper = shallowMount(Incrementer, {
            propsData: {startCompte : 0, step :-3  }
           });
        await wrapper.find('.input-incrementer__btn--increment').trigger('click');
        const val = wrapper.find('input.input-incrementer__field').attributes("data-val");
        expect(Number(val)).toBe(1);
     }); 

    //    expect(wrapper.find('.message').text()).toEqual('Hello World')


    // expect
});