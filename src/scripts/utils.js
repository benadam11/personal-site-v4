export const random = (min, max) => Math.random() * (max - min) + min;
export const clamp = (n, min, max) => Math.max(Math.min(n, max), min);
export const degreesToRads = (degrees) => (degrees / 180) * Math.PI;
export const radsToDegrees = (radians) => (radians * 180) / Math.PI;
export const randomInt = (min, max) => min + Math.random() * (max - min + 1);
export const sortDate = ({ published: d1 }, { published: d2 }) =>
  new Date(d2) - new Date(d1);
