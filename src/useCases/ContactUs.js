import { ContactUs } from "../entities/ContactUs.js";
import { ContactUsRepo } from "../adapters/ContactUsRepo.js";
import { objectToURLSearchParams } from "../utilities/parsers.js";

export class SendMessage {
  constructor() {
    this.repo = new ContactUsRepo();
  }

  execute(name, organization, email, message, captcha) {
    let contact_us = new ContactUs(name, organization, email, message, captcha);
    return this.repo.send(objectToURLSearchParams(contact_us));
  }
}
