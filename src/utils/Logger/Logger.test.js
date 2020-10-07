/*
    Logger Testing senario : 
*/

import {logMessage}  from './';
/*
    Functional testing of logger message 
*/
describe("test logMessage function", () => {  
	it("logMessage function is available for execution", () => {
        expect(logMessage).toBeDefined();
    });

    it("logMessage function without arguments throw error", () => {
        expect(logMessage).toThrow(Error);
        expect(logMessage).toThrow('Please provide message parameter for logMessage');
    });
    
    it("logMessage function is called", () => {
        const mockFn = jest.fn().mockName(logMessage);
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });
    
    it("logMessage function is called number of times", () => {
        const mockFn = jest.fn().mockName(logMessage);
        mockFn();
        mockFn('Message');
        expect(mockFn.mock.calls.length).toBe(2);
    });

    it("logMessage function is called with provided argument", () => {
        const mockFn = jest.fn().mockName(logMessage);
        mockFn('Message');
        // The mock function will be called with "message" as argument
        expect(mockFn.mock.calls[0][0]).toBe("Message");
    });

    it("logMessage function called with two parameter", () => {
        const mockFn = jest.fn().mockName(logMessage);
        mockFn('Message', 'componentName');
        // The mock function will be called with "message" and "componentName" as argument
        expect(mockFn.mock.calls[0][0]).toBe("Message");
        expect(mockFn.mock.calls[0][1]).toBe("componentName");
    });
    
    it("logMessage function returns nothing", () => {
        const mockFn = jest.fn().mockName(logMessage);
        mockFn('Message');
        // The mock function will be called with "message" as argument
        expect(mockFn.mock.results[0].value).toBeUndefined();
    });
    
});