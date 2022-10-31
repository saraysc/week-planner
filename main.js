var clickCount = 0;
var $container2 = document.querySelector('.container2');

function popUp(event) {
  clickCount++;
  if (clickCount % 2 !== 0) {
    $entryModal.classList.remove('hidden');
    $container2.className = 'black';
  }
}

var $addEntry = document.querySelector('.buttondiv');
$addEntry.addEventListener('click', popUp);
var $entryModal = document.querySelector('.modal');

var $submit = document.querySelector('button.row');
