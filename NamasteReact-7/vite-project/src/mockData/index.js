import restraunt1 from "./restraunt1.js";
import restraunt2 from "./restraunt2.js";
import restraunt3 from "./restraunt3.js";
import restraunt4 from "./restraunt4.js";

const mockIndex = {
  [restraunt1.data.cards[2].card.card.info.id]: restraunt1,
  [restraunt2.data.cards[2].card.card.info.id]: restraunt2,
  [restraunt3.data.cards[2].card.card.info.id]: restraunt3,
  [restraunt4.data.cards[2].card.card.info.id]: restraunt4,
};
export default mockIndex;