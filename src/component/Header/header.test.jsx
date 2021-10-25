import { render, screen } from "@testing-library/react"
import Header from "./header.jsx"

test("print hello world to the user", () => {
    render(<Header/>);

    const head = screen.getByText("Hello Friend");
    expect(head).toBeInTheDocument();
    expect(head).toMatchSnapshot();
})