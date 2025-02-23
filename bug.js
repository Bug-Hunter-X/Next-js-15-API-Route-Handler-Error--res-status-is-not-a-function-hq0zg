```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because res.status is not a function in the API route handler
  res.status(404).json({ name: 'John Doe' });
}