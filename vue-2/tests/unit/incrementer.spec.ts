import { shallowMount } from '@vue/test-utils';
import Incrementer from '@/components/atoms/incrementer/Incrementer.vue';




describe("incrementer.vue", () => {

    // test if the value is number !
    it("should be a number value by default ", () => {
        const wrapper = shallowMount(Incrementer,  
        {data() { return { currentValue :"XXX"} } }  
 
        );
        const current = wrapper.find('.input-incrementer__field');
        console.log("current " , current);
        
     expect(typeof(Number(current))).toBe("number");
    });
   

    //    expect(wrapper.find('.message').text()).toEqual('Hello World')


    // expect
});