var clickCount = 0;
var $container2 = document.querySelector('.container2');

function popUp(event) {
  clickCount++;
  if (clickCount % 2 !== 0) {
    $entryModal.classList.remove('hidden');
    $container2.classList.add('black');
  }
}

var $addEntry = document.querySelector('.buttondiv');
$addEntry.addEventListener('click', popUp);
var $entryModal = document.querySelector('.modal');

var $submit = document.querySelector('button.row');

$submit.addEventListener('click', close);

function close(event) {
  $entryModal.classList.add('hidden');
  $container2.classList.remove('black');
}

var $weekday = document.querySelector('.week');
$weekday.addEventListener('click', selectedDay);

var $selected = document.getElementById('selected-day');
function selectedDay(event) {
  console.log(event.target.innerText);
  $selected.textContent = 'Scheduled Events for ' + event.target.innerText;
}
