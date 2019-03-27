const { User } = require("../models");

const Mail = require("../services/MailService");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    Mail.send({
      from: "Thiago de Souza <email@thiagodesouza.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "New access in your account",
      text: "Hello, world!"
    });

    return res.status(200).json({ token: await user.generateToken() });
  }
}

module.exports = new SessionController();
