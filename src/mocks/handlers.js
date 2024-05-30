import { http, HttpResponse } from "msw";

import dummyApps from "./apps";

export const handlers = [
    http.get("/api/apps.json", () => {
        return HttpResponse.json(dummyApps);
    }),

    http.get("/login.json", () => {
        return HttpResponse.json({ accesstime: null });
    }),
];
