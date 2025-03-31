const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
      res.send('Hello, CI/CD with jenkins and Docker');
});

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
}
);
// Export the app for testing