const menuBtn = document.querySelector('.btn-menu'),
	nav = document.querySelector('.nav'),
	submenu = document.querySelectorAll('.menu-2'),
	submenuHeader = document.querySelector('.nav__header'),
	submenuArrow = document.querySelectorAll('.collapsed-arrow'),
	headerImageMobile = `<img src="images/image-hero-mobile.png" alt="Hombre con computadora">`,
	headerImageDesktop = `<img src="images/image-hero-desktop.png" alt="Hombre con computadora">`;


const removeMenuStyle = () => {
	nav.classList.remove('active');
	submenu.forEach(el => el.removeAttribute('style'))
	submenuArrow.forEach(el => el.classList.remove('rotate-arrow'))
}

const changeHeroImage = () => {
	const headerImage = document.querySelector('.hero-img');

	if (window.innerWidth >= 900) {
		headerImage.innerHTML = headerImageDesktop;
	}
	else {
		headerImage.innerHTML = headerImageMobile;
	}
}


menuBtn.addEventListener('click', () => {
	nav.classList.toggle('active');
	if (nav.classList.contains('active')) {
		nav.querySelector('.menu').style.transition = "all 0.5s ease";
		document.querySelector('.capa').style.transition = "all 0.5s ease";
	}
	else removeMenuStyle();
})

document.addEventListener('click', (e) => {
	if (e.target.matches(".nav__header")) {
		e.target.lastElementChild.classList.toggle('rotate-arrow');
		const submenuLinks = e.target.nextElementSibling;

		if (window.screen.availWidth >= 900) {
			if (e.target.lastElementChild.classList.contains('rotate-arrow')) {
				submenuLinks.style.height = `${submenuLinks.scrollHeight}px`;
			}
			else submenuLinks.removeAttribute('style');
		}
		else {
			submenuLinks.style.height = `${submenuLinks.scrollHeight}px`;
		}		
	}

	if (e.target.matches(".nav-item a") ||
		e.target.matches(".collapsed-link") || 
		e.target.matches(".collapsed-link img") || 
		e.target.matches(".nav-cta") ||
		e.target.matches(".capa")){
			nav.classList.remove('active');
			removeMenuStyle();
	}

	// Remove menu style for desktop
	if (window.screen.availWidth >= 900) {
		submenuArrow.forEach(arrow => {
			if (arrow.classList.contains('rotate-arrow') && !e.target.matches(".nav__header")) {
				removeMenuStyle();
			}
		})
	}

})

window.addEventListener('resize', () => {
	changeHeroImage();
	if (window.innerWidth >= 900) {
		removeMenuStyle();
		nav.querySelector('.menu').removeAttribute('style');
		document.querySelector('.capa').removeAttribute('style');
	}
})

window.addEventListener('scroll', () => {
	removeMenuStyle()
})


changeHeroImage()