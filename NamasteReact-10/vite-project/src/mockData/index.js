import restraunt1 from "./restraunt1.json";
import restraunt2 from "./restraunt2.json";
import restraunt3 from "./restraunt3.json";
import restraunt4 from "./restraunt4.json";
import restraunt5 from "./restraunt5.json";
import restraunt6 from "./restraunt6.json";
import restraunt7 from "./restraunt7.json";
import restraunt8 from "./restraunt8.json";
import restraunt9 from "./restraunt9.json";
import restraunt10 from "./restraunt10.json";
import restraunt11 from "./restraunt11.json";
import restraunt12 from "./restraunt12.json";
import restraunt13 from "./restraunt13.json";
import restraunt14 from "./restraunt14.json";
import restraunt15 from "./restraunt15.json";
import restraunt16 from "./restraunt16.json";
import restraunt17 from "./restraunt17.json";
import restraunt18 from "./restraunt18.json";
import restraunt19 from "./restraunt19.json";

import restraunt20 from "./restraunt20.json";
import restraunt21 from "./restraunt21.json";
import restraunt22 from "./restraunt22.json";
import restraunt23 from "./restraunt23.json";
import restraunt24 from "./restraunt24.json";
import restraunt25 from "./restraunt25.json";

const restraunts = [
  restraunt1,
  restraunt2,
  restraunt3,
  restraunt4,
  restraunt5,
  restraunt6,
  restraunt7,
  restraunt8,
  restraunt9,
  restraunt10,
  restraunt11,
  restraunt12,
  restraunt13,
  restraunt14,
  restraunt15,
  restraunt16,
  restraunt17,
  restraunt18,
  restraunt19,
  restraunt20,
  restraunt21,
  restraunt22,
  restraunt23,
  restraunt24,
  restraunt25,
];
const mockIndex = Object.fromEntries(
  restraunts.map((res) => [res?.data?.cards[2]?.card?.card?.info.id, res]),
);
export default mockIndex;
