const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klick
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// untuk menghilangkan hamburger menu ketika di klick
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

const container = document.querySelector('.container-gambar');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    // thumbs.forEach(function (thumb) {
    //   if (thumb.classList.contains('active')) {
    //     thumb.classList.remove('active');
    //thumb.classList = 'thumb'; ini memaksa semua classnya menjadi thumb
    //   }
    // });
    for (let i = 0; i < thumbs.length; i++) {
      if (thumbs[i].classList.contains('active')) {
        thumbs[i].classList.remove('active');
      }
    }
    // setelah itu tambahkan class active hanya ketika fi click saja
    e.target.classList.add('active');
  }
});
