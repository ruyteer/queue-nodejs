import Mail from "../services/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Company <company@gmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Welcome!",
      html: `Hello, ${user.name}. Welcome to Company!`,
    });
  },
};
