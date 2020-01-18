import print from '../helpers/utilities';
import place from '../locations';

const cardPrinter = () => {
  const locationArr = place.locationFunc();
  for (let i = 0; i < locationArr.length; i += 1) {
    const oneLocation = locationArr[i];
    let stringDom = '';
    stringDom += `<div class="card" id="${oneLocation.id}" style="width: 20rem;">
      <img src="${oneLocation.img}" class="card-img-top" alt="location">
      <div class="card-body">
        <h5 class="card-title">${oneLocation.title}</h5>
        <p class="card-text">${oneLocation.description}</p>
        <input type="text" id="${oneLocation.id}Input">
        <button type="button" id="${oneLocation.id}Btn" class="btn btn-info">Submit</button>
      </div>
    </div>`;
    print.printToDom('cardsHere', stringDom);
  }
};

const AkihabaraEvent = () => {
  const AkiButton = document.getElementById('Aki-Btn');
  AkiButton.addEventListener('click', (event) => {
    const mainTravelCard = event.target.parentNode.parentNode.id;
    if (mainTravelCard === 'Aki-') {
      const akiInfo = document.getElementById('Aki-Input').value;
      print.printToDom('diaryInfo', `<p>${akiInfo}</p>`);
      document.getElementById('Aki-Input').value = '';
    }
  });
};
const GermanyEvent = () => {
  const GermanyButton = document.getElementById('Germany-Btn');
  GermanyButton.addEventListener('click', (event) => {
    const mainTravelCard = event.target.parentNode.parentNode.id;
    if (mainTravelCard === 'Germany-') {
      const GermanyInfo = document.getElementById('Germany-Input').value;
      print.printToDom('diaryInfo', `<p>${GermanyInfo}</p>`);
      document.getElementById('Germany-Input').value = '';
    }
  });
};

const BahamasEvent = () => {
  const BahamasButton = document.getElementById('Bahamas-Btn');
  BahamasButton.addEventListener('click', (event) => {
    const mainTravelCard = event.target.parentNode.parentNode.id;
    if (mainTravelCard === 'Bahamas-') {
      const BahamasInfo = document.getElementById('Bahamas-Input').value;
      print.printToDom('diaryInfo', `<p>${BahamasInfo}</p>`);
      document.getElementById('Bahamas-Input').value = '';
    }
  });
};

const GreatBarrierReefEvent = () => {
  const GBRButton = document.getElementById('GBR-Btn');
  GBRButton.addEventListener('click', (event) => {
    const mainTravelCard = event.target.parentNode.parentNode.id;
    if (mainTravelCard === 'GBR-') {
      const GBRInfo = document.getElementById('GBR-Input').value;
      print.printToDom('diaryInfo', `<p>${GBRInfo}</p>`);
      document.getElementById('GBR-Input').value = '';
    }
  });
};

const AntarcticaEvent = () => {
  const AntarcticaButton = document.getElementById('Antarctica-Btn');
  AntarcticaButton.addEventListener('click', (event) => {
    const mainTravelCard = event.target.parentNode.parentNode.id;
    if (mainTravelCard === 'Antarctica-') {
      const AntarcticaInfo = document.getElementById('Antarctica-Input').value;
      print.printToDom('diaryInfo', `<p>${AntarcticaInfo}</p>`);
      document.getElementById('Antarctica-Input').value = '';
    }
  });
};

const printCard = () => {
  cardPrinter();
  AkihabaraEvent();
  GermanyEvent();
  BahamasEvent();
  GreatBarrierReefEvent();
  AntarcticaEvent();
};

export default { printCard };
