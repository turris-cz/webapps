import { expect, test, describe } from "vitest";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    test("should render without crashing", async () => {
        const { getByText } = render(<App />);

        await waitFor(() => {
            expect(getByText(/turris is developed/i)).toBeInTheDocument();
        });
    });
});
