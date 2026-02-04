const express = require("express");
const axios = require("axios");

const app = express();

// ⚠️ CHANGE SHEET NAME IF NEEDED
const SHEET_ID = "2PACX-1vSz6yxxLfrAYP-n7R8tqgV9WQp6K4unu8IUtY-_Vkj_EGhLyNj5C5YxAkReDEgjfg-SXNbipajncJqm";
const SHEET_NAME = "Sheet1";

app.get("/data", async (req, res) => {
  const url = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`;
  const response = await axios.get(url);
  res.json(response.data);
});

app.listen(3000);
