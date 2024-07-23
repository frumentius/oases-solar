export class SolarEnergyPotential {
  constructor(latitude, longitude, altitude, azimuthAngle, elevationAngle, captcha) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
    this.azimuth_angle = azimuthAngle;
    this.elevation_angle = elevationAngle;
    this.captcha = captcha;
  }
}
