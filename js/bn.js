var index = 0;
var alphabet = [];
var choosedLetters = [];
var choosedNumbers = [];
var choosedShips = [];
var container = document.getElementsByClassName('container')[0];
container.addEventListener('click', btnClick);

for (let i = 65; i <= 74; i++) {
  alphabet.push(String.fromCharCode(i));
}

for (index; index < 10; index++) {
  let row = document.createElement('div');
  row.innerHTML = `<div class="row">
  <div class="col-xs-10">
  </div>
</div>`;
  container.appendChild(row);

  for (col = 1; col < 11; col++) {
    let cel = document.createElement('button');
    cel.setAttribute('type', 'button');
    cel.setAttribute('class', 'mt-2 mr-2 btn-top btn btn-info btn-custom');
    cel.setAttribute('id', (alphabet[index] + col));
    cel.innerHTML = cel.id;
    document.getElementsByClassName('col-xs-10')[index].appendChild(cel);
  }
}

for (randChoice = 1; randChoice < 5; randChoice++) {

  orientation = Math.floor(Math.random() * 2);

  if (orientation == 0) {

    choosedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    choosedLetters.push(choosedLetter);
    shipLength = Math.floor(Math.random() * 5) + 2;

    for (ship = 1; ship < shipLength; ship++) {
      choosedShips.push(choosedLetter + ship);
    }

  } else {

    choosedNumber = Math.floor(Math.random() * 10) + 1;
    choosedNumbers.push(choosedNumber);
    shipLength = Math.floor(Math.random() * 5) + 2;

    for (ship = 1; ship < shipLength; ship++) {
      choosedShips.push(alphabet[ship] + choosedNumber);
    }
  }
}

function btnClick() {
  if (event.target.type === 'button') {

    if (choosedShips.includes(event.target.id)) {
      event.target.innerHTML = '<i class="fas fa-ship"></i>';
    } else {
      event.target.innerHTML = '<i class="fas fa-water"></i>';
    }

  }
}

