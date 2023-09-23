import commonjs from "vite-plugin-commonjs";
import vue from "@vitejs/plugin-vue";
import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
    plugins: [
        vue(),
        commonjs(),
    ],
    define: {
        global: "globalThis",
        process: process
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            fs: "rollup-plugin-node-polyfills/polyfills/empty",
            net: "rollup-plugin-node-polyfills/polyfills/empty",
            dns: "rollup-plugin-node-polyfills/polyfills/empty",
            tls: "rollup-plugin-node-polyfills/polyfills/empty",
            dgram: "rollup-plugin-node-polyfills/polyfills/empty",
            stream: "rollup-plugin-node-polyfills/polyfills/stream",
            process: "rollup-plugin-node-polyfills/polyfills/process-es6",
            assert: "rollup-plugin-node-polyfills/polyfills/assert",
            path: "rollup-plugin-node-polyfills/polyfills/path",
            os: "rollup-plugin-node-polyfills/polyfills/os",
            http: "rollup-plugin-node-polyfills/polyfills/http",
            events: "rollup-plugin-node-polyfills/polyfills/events",
        }
    },
});