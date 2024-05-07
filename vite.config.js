import { defineConfig } from "vite";
import { rimraf } from "rimraf";
import react from "@vitejs/plugin-react";
import path from "path";

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
