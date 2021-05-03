import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AddBudgetForm } from "./features/Budget/AddBudgetForm";

test("renders correct content", () => {
    const { getByText, getByLabelText } = render(<AddBudgetForm />);

    getByText("Create your budget!");
    getByLabelText("Car Payment");
})

test("allows user to add the amount of the car payment in the input field"), () => {
    const { getByText, getByLabelText } = render(<AddBudgetForm />);

    // get input
    const input = getByLabelText("Car Payment");
    // assert value in input is a number
    fireEvent.change(input, { target: { value: Number()}});
    fireEvent.click(getByText("Create Budget"))
}