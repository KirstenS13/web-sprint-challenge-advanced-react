import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

    //arrange
    const firstNameInput = getByLabelText(/first name:/i);
    const lastNameInput = getByLabelText(/last name:/i);
    const addressInput = getByLabelText(/address:/i);
    const cityInput = getByLabelText(/city:/i);
    const stateInput = getByLabelText(/state:/i);
    const zipInput = getByLabelText(/zip:/i);
    const checkout = getByTestId("checkout")

    //act
    fireEvent.input(firstNameInput, {target: {value: "Kirsten"}});
    fireEvent.input(lastNameInput, {target: {value: "Smith"}});
    fireEvent.input(addressInput, {target: {value: "5678 Numbers Lane"}});
    fireEvent.input(cityInput, {target: {value: "Mathematics City"}});
    fireEvent.input(stateInput, {target: {value: "Trig"}});
    fireEvent.input(zipInput, {target: {value: "31415"}});

    fireEvent.click(checkout);

    //assert
    getByText(/Kirsten Smith/);
    getByText(/5678 Numbers Lane/);
    getByText(/Mathematics City, Trig 31415/); 
});
