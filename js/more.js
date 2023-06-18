let btns = document.querySelectorAll('.btn-more');

for (btn of btns) {
  btn.addEventListener('click', function () {
    let container = this.closest('.container-gen');
    let dots = container.querySelector('.dots');
    let more = container.querySelector('.more');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      more.style.display = 'none';
      this.textContent = 'Детальніше';
    } else {
      dots.style.display = 'none';
      more.style.display = 'inline';
      this.textContent = 'Приховати';
    }
  });
}
