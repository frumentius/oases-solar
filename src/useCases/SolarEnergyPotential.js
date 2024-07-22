import { SolarEnergyPotential } from "../entities/SolarEnergyPotential.js";
import { SolarEnergyPotentialRepo } from "../adapters/SolarEnergyPotentialRepo.js";
import { objectToURLSearchParams } from "../utilities/parsers.js";

export class CalculateInsolIrrad {
  constructor() {
    this.repo = new SolarEnergyPotentialRepo();
  }

  execute(latitude, longitude, altitude, azimuthAngle, elevationAngle, captcha) {
    let sep = new SolarEnergyPotential(latitude, longitude, altitude, azimuthAngle, elevationAngle, captcha);
    return this.repo.send(objectToURLSearchParams(sep));
  }
}
