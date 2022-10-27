const express = require("express");
const app = express();
const hostname = "0.0.0.0";
const port = 8000;

app.get("", (req, res) => {
  res.json({
    slackUsername: "Okolo Ifeanyi Christian",
    backend: true,
    age: 37,
    bio: "I am a backend development looking forward to collaborate. I enjoy analyzing and solving problems",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
