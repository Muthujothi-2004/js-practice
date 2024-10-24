function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed."); // Manually throwing an error
        }
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message); // Handling the error
    } finally {
        console.log("Execution completed."); // Always runs
    }
}

divide(10, 2); // Output: Result: 5
divide(10, 0); // Output: Error: Division by zero is not allowed.
               //          Execution completed.
