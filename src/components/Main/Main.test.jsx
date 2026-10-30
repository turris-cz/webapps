import { afterEach, describe, expect, test, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";

import Main from "./Main";
import dummyApps from "../../mocks/apps";
import { worker } from "../../mocks/node";

describe("Main Component", () => {
    const originalLocation = window.location;

    afterEach(() => {
        vi.unstubAllEnvs();
        Object.defineProperty(window, "location", {
            configurable: true,
            value: originalLocation,
        });
    });

    test("should redirect immediately when there is only one app", async () => {
        vi.stubEnv("DEV", false);
        const replace = vi.fn();
        Object.defineProperty(window, "location", {
            configurable: true,
            value: { ...originalLocation, replace },
        });
        const [app] = dummyApps.apps;
        worker.use(
            http.get("/api/apps.json", () =>
                HttpResponse.json({ ...dummyApps, apps: [app] })
            )
        );

        const { queryByText } = render(<Main />);

        await waitFor(() => expect(replace).toHaveBeenCalledWith(app.url));
        expect(queryByText(app.title)).not.toBeInTheDocument();
    });

    test("should list apps when there are more of them", async () => {
        const { findByText } = render(<Main />);

        expect(await findByText(dummyApps.apps[0].title)).toBeInTheDocument();
    });
});
