import restraunt1 from "./restraunt1.js";
import restraunt2 from "./restraunt2.js";
import restraunt3 from "./restraunt3.js";
import restraunt4 from "./restraunt4.js";
import restraunt5 from "./restraunt5.js";
import restraunt6 from "./restraunt6.js";
import restraunt7 from "./restraunt7.js";
import restraunt8 from "./restraunt8.js";
import restraunt9 from "./restraunt9.js";
import restraunt10 from "./restraunt10.js";
import restraunt11 from "./restraunt11.js";
import restraunt12 from "./restraunt12.js";
import restraunt13 from "./restraunt13.js";
import restraunt14 from "./restraunt14.js";
import restraunt15 from "./restraunt15.js";
import restraunt16 from "./restraunt16.js";
import restraunt17 from "./restraunt17.js";
import restraunt18 from "./restraunt18.js";
import restraunt19 from "./restraunt19.js";

import restraunt20 from "./restraunt20.js";
import restraunt21 from "./restraunt21.js";
import restraunt22 from "./restraunt22.js";
import restraunt23 from "./restraunt23.js";
import restraunt24 from "./restraunt24.js";
import restraunt25 from "./restraunt25.js";


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
  restraunts.map((res) => [res.data.cards[2].card.card.info.id, res]),
);
export default mockIndex;
