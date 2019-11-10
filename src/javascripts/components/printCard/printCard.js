import print from '../helpers/utilities';
import place from '../locations';

const cardPrinter = () => {
  const locationArr = place.locationFunc();
  for (let i = 0; i < locationArr.length; i += 1) {
    const oneLocation = locationArr[i];
    let stringDom = '';
    stringDom += `<div class="card" style="width: 20rem;">
      <img src="${oneLocation.img}" class="card-img-top" alt="location">
      <div class="card-body">
        <h5 class="card-title">${oneLocation.title}</h5>
        <p class="card-text">${oneLocation.description}</p>
        <input type="text" id="${oneLocation.title}">
        <button type="button" class="btn btn-info">Submit</button>
      </div>
    </div>`;
    print.printToDom('cardsHere', stringDom);
  }
};

export default { cardPrinter };
