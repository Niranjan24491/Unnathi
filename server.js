import express from "express";
import bodyParser from "body-parser";
import path from "path";
var nodemailer = require("nodemailer");
var cors = require('cors');

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secureConnection: false,
  port: 587,
  requiresAuth: true,
  domains: ["gmail.com", "googlemail.com"],
  auth: {
    user: "niranjan.sunaada@gmail.com",
    pass: "nchegilsviwcnaup"
  }
});

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

app.post("/contactUs", (req, res) => {
  var mailOptions = {
    from: 'niranjan.sunaada@gmail.com',
    to: "amk.krafters@gmail.com",
    subject: "New Query / Message from Unnathi website",
    text: `This message was sent by ${req.body.name} with email address: ${req.body.mail}. Message: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(200);
    }
  });
});

if (app.get("env") === "production") {
  app.get("/", (req, res) => {
    res.sendFile(`${path.resolve(__dirname, "build")}/index.html`);
  });
}

app.listen(PORT, () => {
  console.log("Express server listening on port %d in %s mode", PORT);
});
