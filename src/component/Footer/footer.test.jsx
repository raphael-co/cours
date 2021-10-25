import { render, screen } from "@testing-library/react"
import Footer from "./footer.jsx"

test("print hello world to the user", () => {
    render(<Footer/>);

    const foot = screen.getByText("titre 1");
    expect(foot).toBeInTheDocument();
    expect(foot).toMatchSnapshot();
})