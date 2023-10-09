import {screen, render, fireEvent} from "@testing-library/react"
import { Button } from "./components/button"

test("button should dissapear", () => {
    render(<Button/>)
    const buttonElement = screen.getByRole(`button`, {name: `Click Me`})
    fireEvent.click(buttonElement)
    expect(buttonElement).not.toBeVisible

})