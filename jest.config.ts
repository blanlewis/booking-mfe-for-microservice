
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "!src/components/**/*.test.{ts,tsx}",
    "!src/components/**/index.ts",
  ],
};

export default createJestConfig(config);
