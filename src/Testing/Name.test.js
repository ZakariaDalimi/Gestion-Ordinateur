import { render, screen } from "@testing-library/react";
import Name from "./Name";

test('Name', () => {
    const nom = 'Dafraoui';
    render(<Name nom={nom}/>);
    const Element = screen.getByTestId('name');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveTextContent(nom);
})
