import { render , renderHook, screen, waitFor } from "@testing-library/react";
import { CountContext } from "./Navigated";
import Valshow from "./Valshow";
import { useContext } from "react";

describe('test counter value', ()=>{
    const {Count} = renderHook(()=>{useContext(CountContext)})
    test('value count', ()=>{
    render(<Valshow />);    
        const v = Count;
        const Element = screen.getByTestId('value');
        expect(Element).toBeInTheDocument();
        expect(Element).toHaveTextContent(`counter is ${v}`);
    })
});