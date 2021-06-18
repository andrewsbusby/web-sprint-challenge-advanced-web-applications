import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';
import { handlers } from '../mocks/handlers';


const testColor = {handlers};

test("Renders without errors with blank color passed into component", () => {
    render(<Color hex={testColor}/>);
});
  
test("Renders the color passed into component", () => {
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});