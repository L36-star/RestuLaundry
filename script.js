const navMenu = document.getElementById('navMenu');
const hamburger = document.querySelector('.hamburger');

function toggleMenu(){
  navMenu.classList.toggle('show');
}

// Tutup menu jika klik link menu
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Tutup menu jika klik di luar menu & hamburger
document.addEventListener('click', function(e){
  if (
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMenu.classList.remove('show');
  }
});

// Lightbox
function openLightbox(src){
  document.getElementById('lightbox').style.display='flex';
  document.getElementById('lightboxImg').src=src;
}
function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}




// Interaksi button cucian
document.querySelectorAll('.wash-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
