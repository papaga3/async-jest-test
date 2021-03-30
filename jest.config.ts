import type {Config} from "@jest/types";

const config: Config.InitialOptions = {
    verbose : true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    setupFilesAfterEnv : ["./src/setupTests.ts"],
    testPathIgnorePatterns: ["\\.snap$", "/node_modules/"],
    transform: {
        "\\.(ts|tsx)$": "ts-jest",
    }
}

export default config;