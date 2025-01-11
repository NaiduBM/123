const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
     _______________________
    < Hello from Wisecow! >
     -----------------------
            \\   ^__^
             \\  (oo)\\_______
                (__)\\       )\\/\\
                    ||----w |
                    ||     ||
  `);
});

app.listen(port, () => {
  console.log(`Wisecow app listening at http://localhost:${port}`);
});