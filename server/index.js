const apiKey = "md-ndF3Gs1phPl4XRrsq78NaA";
const mailchimpClient = require("@mailchimp/mailchimp_transactional")(apiKey);
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// Initiate server
app.listen(5000, () => {
  console.log("Connected to PORT: 5000");
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
