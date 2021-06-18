import React from 'react';
import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';


const testColor = {
    orange: '#d45d0c',
    blue: '#495f85',
    red: '#af1f1f',

}
test("Renders without errors", ()=> {
    render(<BubblePage color='null'/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage color={testColor}/>);

    const bubbles = screen.getByText(/color/i);
    expect(bubbles).toBeInTheDocument();
});