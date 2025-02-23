# Next.js 15 API Route Handler Error: res.status is not a function

This repository demonstrates a common error encountered when working with API route handlers in Next.js 15.  The issue arises when the `res.status()` method is used incorrectly within the API route handler. This can happen when using the response object in an incompatible manner or outside of the intended context.

## Problem Description
The bug is caused by attempting to use `res.status()` after the response has already been sent. This leads to an error because the response object is no longer valid.

## Solution
The correct solution involves ensuring that `res.status()` is called before any data is sent to the client. This ensures that the response object is in a valid state when the method is called. Additionally, checking the request method can improve the handling of API requests to prevent potential errors.
