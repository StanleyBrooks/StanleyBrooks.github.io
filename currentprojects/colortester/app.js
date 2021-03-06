/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//DECLAIRING VARIABLES
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//BACKGROUND COLOR TARGETS
/////////////////////////////////////////////////////////////////////
const navLogo = document.querySelector('.navLogo');
const mainHeader = document.querySelector('.mainHeader');
const mainFooter = document.querySelector('.mainFooter');
const allNav = document.querySelectorAll('.main-nav');
//TEXT COLOR TARGETS
const navLogoA = document.querySelector('.navLogo a');
const headerItemsA = document.querySelectorAll('.header-item a');
const footerItemsA = document.querySelectorAll('.footer-item a');
const allNavA = document.querySelectorAll('.nav-item a');
//HOVER BACKGROUND COLOR TARGETS
const hLogo = document.querySelector('.navLogo');
//const hMainHeader = document.querySelector('.mainHeader a:hover');
//const hMainFooter = document.querySelector('.mainFooter a:hover');
//const hAllNav = document.querySelectorAll('nav a:hover');
/////////////////////////////////////////////////////////////////////
//BUTTONS AND INPUTS
/////////////////////////////////////////////////////////////////////
//BACKGROUND COLOR BUTTONS AND INPUTS
const logoInput = document.querySelector('#logoInput');
const logoButton = document.querySelector('#logoButton');
const mainHeaderInput = document.querySelector('#mainHeaderInput');
const mainHeaderButton = document.querySelector('#mainHeaderButton');
const mainFooterInput = document.querySelector('#mainFooterInput');
const mainFooterButton = document.querySelector('#mainFooterButton');
const allNavInput = document.querySelector('#allNavInput');
const allNavButton = document.querySelector('#allNavButton');
//TEXT COLOR BUTTONS AND INPUTS
const logoTextInput = document.querySelector('#logoTextInput');
const logoTextButton = document.querySelector('#logoTextButton');
const headerTextInput = document.querySelector('#headerTextInput');
const headerTextButton = document.querySelector('#headerTextButton');
const footerTextInput = document.querySelector('#footerTextInput');
const footerTextButton = document.querySelector('#footerTextButton');
const allTextInput = document.querySelector('#allTextInput');
const allTextButton = document.querySelector('#allTextButton');
//HOVER BACKGROUND
const hLogoInput = document.querySelector('#hLogoInput');
const hLogoButton = document.querySelector('#hLogoButton');
//const hHeaderInput = document.querySelector('#hHeaderInput');
//const hHeaderButton = document.querySelector('#hHeaderButton');
//const hFooterInput = document.querySelector('#hFooterInput');
//const hFooterButton = document.querySelector('#hFooterButton');
//const hAllNavInput = document.querySelector('#hAllNavInput');
//const hAllNavButton = document.querySelector('#hAllNavButton');
//HOVER TEXT
//
//ACTIVE BACKGROUND
//
//ACTIVE TEXT
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//BACKGROUND COLORS
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//LOGO BACKGROUND
/////////////////////////////////////////////////////////////////////
logoButton.addEventListener('click', () => {
    navLogo.style.background = logoInput.value;
});
/////////////////////////////////////////////////////////////////////
//HEADER BACKGROUND
/////////////////////////////////////////////////////////////////////
mainHeaderButton.addEventListener('click', () => {
    mainHeader.style.background = mainHeaderInput.value;
});
/////////////////////////////////////////////////////////////////////
//FOOTER BACKGROUND
/////////////////////////////////////////////////////////////////////
mainFooterButton.addEventListener('click', () => {
    mainFooter.style.background = mainFooterInput.value;
});
/////////////////////////////////////////////////////////////////////
//HEADER AND FOOTER BACKGROUND
/////////////////////////////////////////////////////////////////////
//Needs to Include navLogo 
allNavButton.addEventListener('click', () => {
//USE FOR LOOP TO CHANGE MULTIPLE CLASSES
//NEEDS TO ALSO INCLUDE navLogo IN THE RESULTS
    for (let i = 0; i < allNav.length; i +=1) {
  allNav[i].style.background = allNavInput.value;
    };
});
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//TEXT COLORS
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//LOGO TEXT COLOR
/////////////////////////////////////////////////////////////////////
//
logoTextButton.addEventListener('click', () => {
    navLogoA.style.color = logoTextInput.value;
});
/////////////////////////////////////////////////////////////////////
//HEADER TEXT COLORS
/////////////////////////////////////////////////////////////////////
//NEEDS A FOR LOOP TO APPLY TO ALL ITEMS IN ARRAY
headerTextButton.addEventListener('click', () => {
    for (let i = 0; i < headerItemsA.length; i +=1) {
    headerItemsA[i].style.color = headerTextInput.value; 
    };
});
/////////////////////////////////////////////////////////////////////
//FOOTER TEXT COLORS
/////////////////////////////////////////////////////////////////////
footerTextButton.addEventListener('click', () => {
    for (let i = 0; i < footerItemsA.length; i +=1) {
    footerItemsA[i].style.color = footerTextInput.value; 
    };
});
/////////////////////////////////////////////////////////////////////
//ALL TEXT COLORS
/////////////////////////////////////////////////////////////////////
allTextButton.addEventListener('click', () => {
    for (let i = 0; i < allNavA.length; i +=1) {
    allNavA[i].style.color = allTextInput.value; 
    };
});
//
//
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//HOVER BACKGROUND COLORS
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//HOVER LOGO BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
hLogo.addEventListener('mouseover', () => {
		hLogo.style.background = hLogoInput.value;
	});
/////////////////////////////////////////////////////////////////////
//HOVER HEADER BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//HOVER FOOTER BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//HOVER ALL BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//HOVER TEXT COLORS
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//HOVER LOGO TEXY COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//HOVER HEADER TEXT COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//HOVER FOOTER TEXT COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//HOVER ALL TEXT COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//ACTIVE BACKGROUND COLORS
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//ACTIVE LOGO BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//ACTIVE HEADER BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//ACTIVE FOOTER BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//ACTIVE ALL BACKGROUND COLOR
/////////////////////////////////////////////////////////////////////