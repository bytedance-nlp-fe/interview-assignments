import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

describe("App", () => {
    it("should render correctly", () => {
        render(<App />);
        expect(screen.getByText("Option")).toBeInTheDocument();
    });
}
);