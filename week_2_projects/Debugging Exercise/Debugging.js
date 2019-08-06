function onClick() {
    // TODO check if input is empty 
    updateLabel();
  }
  function checkEmptyInput() {
    if (getNumber1() === '' || getNumber2() === '') {
      // TODO return true or false
    }
  }
  function updateLabel() {
    var parameter1 = getNumber1();
    var parameter2 = getNumber2();
    var sum = parseInt(parameter1) + parseInt(parameter2);
    label.textContent = parameter1 + ' + ' + parameter2 + ' = ' + sum;
  }
  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }
  console.log("hello TTS students!")
  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.querySelector('button');
  button.addEventListener('click', onClick);  