import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { expect, afterEach, beforeAll, afterAll } from "vitest";

import { worker } from "./mocks/node";

expect.extend(matchers);

afterEach(() => {
    cleanup();
});

// Start worker before all tests
beforeAll(() => {
    worker.listen();
});

//  Close worker after all tests
afterAll(() => {
    worker.close();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
    worker.resetHandlers();
});

// Mocking window.matchMedia
window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addEventListener: function () {},
            removeEventListener: function () {},
        };
    };
