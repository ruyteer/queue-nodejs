import nodemailer from "nodemailer";
import mailConfig from "../config/nodemailer";

export default nodemailer.createTransport(mailConfig);
