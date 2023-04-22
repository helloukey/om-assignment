require("dotenv").config();
const mailchimpClient = require("@mailchimp/mailchimp_transactional")(process.env.API_KEY);
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Initiate server
const PORT = process.env.PORT || 5001
app.listen(5000, () => {
  console.log(`Connected to PORT: ${PORT}`);
});

// routes
app.get("/", (req, res) => {
  res.status(201).json({ success: "Connected to backend!" });
});

app.post("/send", async (req, res) => {
  try {
    const response = await mailchimpClient.messages.sendTemplate({
      template_name: "om-assignment",
      template_content: [],
      message: {
        from_email: "contact@kunalukey.com",
        subject: "OM - Assignment Test",
        text: "This is OM test!",
        to: [
          {
            email: "contact@kunalukey.com",
            type: "to",
          },
        ],
      },
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});
