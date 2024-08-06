import {render, screen} from "@testing-library/react";
import {MainLayout} from "./MainLayout.tsx";

describe("MainLayout Component", () => {
    it("Children", () => {
        render(<MainLayout><h1 data-testid="test-component">test</h1></MainLayout>)

        const currentComponent: HTMLElement = screen.getByTestId("test-component")
        expect(currentComponent).toBeInTheDocument()
    })
})
