import { render, screen } from "@testing-library/react"
import RestaunrantCard from "../RestaunrantCard"
import MOCK_DATA from "../../Mocks/RestaurantMockData.json"
import "@testing-library/jest-dom"

test("It should render restaurant card with some props data", () => {
    // we are sending the mock data
    render(<RestaunrantCard resData ={MOCK_DATA}/>)
    
    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})