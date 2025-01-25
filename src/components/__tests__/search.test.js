import { render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../Mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"

// We are creating mock function
global.fetch = jest.fn(() => {
     return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA); 
        }
     })
});

test("We are doing integration testing" , async () => {
//     await act(async() => {
        render(<Body/>) 

   const searchBtn = screen.getByRole('button',{name: 'Search'})

   expect(searchBtn).toBeInTheDocument();
})