import { render,screen } from "@testing-library/react"
import Sum from "./Sum"


describe('test all component' , ()=>{
    test('sum' , ()=>{
        const results = 6
        render(<Sum a={3} b={3}/>)
        const Element = screen.getByTestId('sumab')
        expect(Element).toBeInTheDocument()
        expect(Element).toHaveTextContent(results)
    })
    test('titleName' , ()=>{
        const resultsinput = 'DafraouiMehdi'
        render(<Sum vinput='DafraouiMehdi'/>)
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument()
        expect(input).toHaveTextContent(resultsinput)
    })
})