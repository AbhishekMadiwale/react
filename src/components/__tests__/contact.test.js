import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load contact us component",() => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load a button inside Contact component", ()=>{
    render(<Contact/>)
    
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  })

  test("Should load input text inside the contact component",() => {
    render(<Contact/>)

    // getBy means we are expecting one element
    const inputName = screen.getByPlaceholderText('name');

    expect(inputName).toBeInTheDocument();
  })

  test("Should load 2 input boxes",() => {
    render(<Contact/>)

    // getAllByRole expects multiple elemets in the component
    const inputBoxes = screen.getAllByRole('textbox')

    expect(inputBoxes.length).toBe(2);
  })

/**
 * structure of the test cases should be like 
 *  - render
 *  - Querying
 *  - Assertion
 */

// we can use it instead of test for test case
// it("it should load a component",() =>{})