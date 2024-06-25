const rangeSlider = document.getElementById('range-slider');
const rangeValue = document.getElementById('range-value');

rangeSlider.addEventListener('input', (e) => {
  rangeValue.textContent = e.target.value;
});