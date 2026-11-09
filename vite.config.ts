/* eslint-disable prettier/prettier */
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

const isGitHubPagesBuild = process.env["GITHUB_PAGES"] === "true";
const repositoryName =
  process.env["GITHUB_REPOSITORY"]?.split("/")[1] ?? "ribas-varginha-fitness";

export default defineConfig(({ command }) => ({
  base: isGitHubPagesBuild ? `/${repositoryName}/` : "/",
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: isGitHubPagesBuild,
        failOnError: true,
      },
    }),
    ...(command === "build" && !isGitHubPagesBuild
      ? [nitro({ preset: "cloudflare-module" })]
      : []),
    react(),
  ],
  resolve: { tsconfigPaths: true },
}));
