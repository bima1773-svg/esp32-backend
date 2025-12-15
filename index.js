const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/esp32", async (req, res) => {
  try {
    const response = await axios.post(
      "https://heatlhmonitor.kesug.com/api/insert_data.php",
      req.body
    );

    res.json({ status: "ok", php_response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
