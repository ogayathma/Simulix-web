const cards = document.querySelectorAll('.card');

		cards.forEach((card) => {
			card.addEventListener('click', () => {
				cards.forEach((otherCard) => {
					otherCard.classList.remove('card-selected');
				});
				card.classList.add('card-selected');
			});
		});