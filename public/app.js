const cursor = document.querySelector(".cursor");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


//CURSOR

let timeout;

document.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;

	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

	//function to stop animation
	function mouseStopped() {
		cursor.style.display = "none";
	}
	//hiding animation
	clearTimeout(timeout);
	timeout = setTimeout(mouseStopped, 1000);

})

//stopping animation off the screen
document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
})

//CURSOR ends


//Changing language of the site

console.log("hm");

function loadLanguage(lang) {
  fetch(`${lang}.json`)
    .then(response => response.json())
    .then(translations => {
    	 console.log(translations);
      document.querySelectorAll('[data-i18n]').forEach(el => {

      
        const key = el.getAttribute('data-i18n');
        	console.log(translations[key]);

        el.textContent = translations[key];

      });
    })
    .catch(error => console.error('Error loading the language file:', error));
}

//Test
// loadLanguage('en');
let langSelector = document.getElementById('language-selector');

langSelector.addEventListener('change', function(e) {
  loadLanguage(e.target.value);
  console.log("it works");
});



//Changing language of the site ends


//Swiper JS

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

//Swiper JS ends