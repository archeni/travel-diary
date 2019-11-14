import 'bootstrap';
import '../styles/main.scss';
import printCard from './components/printCard/printCard';

const init = () => {
  printCard.cardPrinter();
  printCard.AkihabaraEvent();
};

init();
