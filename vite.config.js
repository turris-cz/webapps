import path from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";
import { rimraf } from "rimraf";
import { defineConfig } from "vite";

// Get the equivalent of __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// This plugin removes the Service Worker file from the final build.
const removeMSW = () => ({
    name: "remove-msw",
    closeBundle: async () => {
        await rimraf(path.join(__dirname, "dist", "mockServiceWorker.js"));
    },
});

// https://vitejs.dev/config/
export default defineConfig({
    base: "",
    plugins: [react(), removeMSW()],
    server: {
        open: true,
        port: 3000,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
    },
});
