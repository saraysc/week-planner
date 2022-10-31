var $container2 = document.querySelector('.container2');

function popUp(event) {
  $entryModal.classList.remove('hidden');
  $container2.classList.add('black');
  $tableTitle.textContent = 'Add Entry';
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

var $update = document.querySelector('.update');
var $tableTitle = document.querySelector('.entry');
$update.addEventListener('click', upDate);

function upDate(event) {
  $entryModal.classList.remove('hidden');
  $container2.classList.add('black');
  $tableTitle.textContent = 'Update Entry';
}
