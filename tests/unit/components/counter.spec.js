import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component',  () => {
    let wrapper
    
    beforeEach(() => {
        wrapper = shallowMount( Counter )

    })

    // test('debe de hacer match con el snapshot', () =>{
      
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()

    // })
    // test('h2 debe de tener el vlaor por defecto "Counter"', () => {
        
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.find('h2').exists() ).toBeTruthy() // we check if the component exists
    //     const h2Value = wrapper.find('h2').text()
    //     expect( h2Value ).toBe('Counter')
    // })
    test('el valor por defecto de <p> debe de ser 100', () => {
        
        // ptag
        const pTagValue = wrapper.find('[data-testid="counter"]').text()

        //expect p === 100
        expect( parseInt(pTagValue) ).toEqual(100)
    })

    test('incrementar y decrementar en 1 el valor del contador', async () => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('102')

    })
})