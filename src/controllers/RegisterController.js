import User from "../entities/User";
import Queue from "../services/Queue";

export default class RegisterController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = new User({
        name,
        email,
        password,
      });

      await user.save();

      Queue.add("RegistrationMail", { user });
      Queue.add("UserReport", { user });

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  }
}
