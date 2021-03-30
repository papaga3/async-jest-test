import React from "react";
import {mount} from "enzyme";
import {describe, it, expect} from "@jest/globals";
import App from "./App";
import * as testController from "./controller/testController";

const runAllPromise = () => new Promise(setImmediate);

describe("basic testing", () => {
    let wrapper: ReturnType<typeof mount>;
    const preventDefault = jest.fn();
    beforeEach(() => {
        wrapper = mount(<App/>);
        wrapper.update();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Test when the test controller is successful", async () => {
        // create a mock on test controller
        const jestSpy = jest.spyOn(testController, "test")
            .mockResolvedValueOnce({
                id: 123,
                name: "Huy"
            });
        
        // Create a spy on console.log
        const logSpy = jest.spyOn(console, "log")
            .mockImplementation(jest.fn());
        
        // Submit form
        wrapper.find("#form").simulate("submit", {preventDefault});
        await runAllPromise();
        wrapper.update();
        
        // assertion and clean up
        expect.assertions(2);
        expect(logSpy).toHaveBeenCalled();
        expect(jestSpy).toHaveBeenCalled();
        logSpy.mockRestore();
        jestSpy.mockRestore();
    });

    it("Test when the test controller is not successful", async () => {
        // create a mock on test controller
        const jestSpy = jest.spyOn(testController, "test")
            .mockRejectedValueOnce("Failed");
        
        // create a spy on console.error
        const errorSpy = jest.spyOn(console, "error")
                .mockImplementation(jest.fn());
        
        // submit form
        wrapper.find("#form").simulate("submit", {preventDefault});
        await runAllPromise();
        wrapper.update();

        // assertion and clean up
        expect.assertions(2);
        expect(errorSpy).toHaveBeenCalled();
        expect(jestSpy).toHaveBeenCalled();
        errorSpy.mockRestore();
        jestSpy.mockRestore();
    });
});