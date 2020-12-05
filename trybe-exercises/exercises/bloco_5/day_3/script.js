function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  //Exercise One - Adding the days of the month
  function createDaysOfTheMonth() {
    const dezDaysList = [
        29, 30, 1, 2, 3, 4, 5, 
        6, 7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16, 17, 18, 
        19, 20, 21, 22, 23, 24, 
        25, 26, 27, 28, 29, 30, 
        31
    ];
    let ulElement = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let liElement = document.createElement('li');
        liElement.classList.add('day');
        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            liElement.classList.add('holiday');
        }
        if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
            liElement.classList.remove('holiday');
            liElement.classList.add('friday');
        }
        liElement.innerText = dezDaysList[index];
        ulElement.appendChild(liElement);        
    }
  }

  createDaysOfTheMonth();

  //Exercise Two - Creating a holiday button
  function createButton (holidayButtonName, buttonId) {
    let divFather = document.querySelector('.buttons-container');
    let buttonCreated = document.createElement('button');
    buttonCreated.innerText = holidayButtonName;
    buttonCreated.id = buttonId;
    divFather.appendChild(buttonCreated);
  }

  createButton('Feriados', 'btn-holiday');

  //Exercise 3 - Function to mark holidays with color
  function markHolidaysWithColors () {
      let holidays = document.getElementsByClassName('holiday');
      let referenceColor = 'lightblue';
      let currentColor = holidays[0].style.backgroundColor;
      for (let index = 0; index < holidays.length; index += 1) { 
        if (currentColor === referenceColor) {
            holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
        } else {
          holidays[index].style.backgroundColor = 'lightblue';
        }
      }
  }

  let holidayButton = document.querySelector('#btn-holiday');
  holidayButton.addEventListener('mouseup', markHolidaysWithColors);


  //Exercise 4 - Function to create a friday button using previous function created
  createButton('Sexta-Feira', 'btn-friday');

