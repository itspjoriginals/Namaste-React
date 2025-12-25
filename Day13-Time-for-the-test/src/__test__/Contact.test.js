import {render, screen} from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"


it("Should load contact us component", () =>{

    render(<Contact/>);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();

});

it("Should load button inside contact us component", () =>{

    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});