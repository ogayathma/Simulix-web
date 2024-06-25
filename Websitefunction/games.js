// JavaScript
var cards = document.querySelectorAll('.card');
var selectBtns = document.querySelectorAll('.select-btn');

for (var i = 0; i < selectBtns.length; i++) {
	selectBtns[i].addEventListener('click', function() {
		for (var j = 0; j < cards.length; j++) {
			cards[j].classList.remove('selected');
		}
		this.parentNode.classList.add('selected');
	});
}