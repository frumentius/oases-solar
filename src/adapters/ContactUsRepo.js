import { ApiService } from "../frameworks/services/APIServices.js";
import * as CONFIG from "../utilities/config.js";

export class ContactUsRepo {
  constructor() {
    this.apiService = new ApiService();
  }

  async send(data) {
    return this.apiService.post(
      CONFIG.BACK_END_URL + "/api/send-contact-form-mail",
      data
    );
  }
}
