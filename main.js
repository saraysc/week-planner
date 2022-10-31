var clickCount = 0;

function popUp(event) {
  clickCount++;
  if (clickCount % 2 !== 0) {
    $entryModal.classList.remove('hidden');
  }
}

var $addEntry = document.querySelector('.buttondiv');
$addEntry.addEventListener('click', popUp);
var $entryModal = document.querySelector('.modal');
