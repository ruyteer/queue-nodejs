import Mail from "../services/Mail";

export default {
  key: "UserReport",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "CompanyReporter <company@gmail.com>",
      to: `Company Admin <admin.company@gmail.com>`,
      subject: "New Report",
      html: `A user has register. So, user data is:
      User name: ${user.name};
      User email: ${user.email}.`,
    });
  },
};
