# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers. The error occurs randomly due to a simulated asynchronous operation that sometimes throws an exception.

## Bug Description

The provided `bug.js` code simulates an asynchronous operation within an Express.js route handler.  This operation randomly throws an error. Because the error isn't properly handled, it results in an unhandled promise rejection, causing the server to potentially crash or behave unexpectedly.

## Solution

The `bugSolution.js` demonstrates how to correctly handle the potential error using a `try...catch` block within the asynchronous operation or by using `.catch()` on the promise.