const apiKey = "md-ndF3Gs1phPl4XRrsq78NaA";
const mailchimp = require("@mailchimp/mailchimp_transactional")(apiKey);


// async function run() {
//   const response = await mailchimpTx.users.ping();
//   console.log(response);
// }

// run();


const message = {
  from_email: "contact@kunalukey.com",
  subject: "Test Email",
  text: "Welcome to Mailchimp Transactional!",
  to: [
    {
      email: "contact@kunalukey.com",
      type: "to"
    }
  ]
};

async function run() {
  const response = await mailchimp.messages.send({
    message
  });
  console.log(response);
}
run();