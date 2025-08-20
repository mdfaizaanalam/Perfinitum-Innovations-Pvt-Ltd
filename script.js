/*    ----------------------Slide Bar--------------------------*/
    
var sidemenu = document.querySelector(".nav-links");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


/*---------------------Navigation Bar-------------------------*/

// Function to update the active link based on scroll position
function updateActiveLink() {
  var sections = document.querySelectorAll('section'); // Assuming sections are wrapped in <section> tags
  var scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Remove 'active' class from all links
          document.querySelectorAll('nav ul li').forEach(function (link) {
              link.classList.remove('active');
          });

          // Add 'active' class to the current section's corresponding link
          var currentLink = document.querySelector(`nav ul li a[href="#${id}"]`);
          if (currentLink) {
              currentLink.parentNode.classList.add('active');
          }
      }
  });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Optionally, call updateActiveLink on page load to set the initial active link
document.addEventListener('DOMContentLoaded', updateActiveLink);





/*---------------------Logo change according to page-------------------------*/
window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");
  const menuIcon = document.querySelector(".menu-btn");
  const pages = ["home", "services", "about", "more", "contact"];
  const scrollPosition = window.scrollY;

  function setPageClass(pageClass) {
    document.body.classList.remove(...pages.map(page => `page-${page}`));
    document.body.classList.add(pageClass);
  }

  if (scrollPosition < document.getElementById("services").offsetTop) {
    setPageClass("page-home");
    logo.src = "/img/White-Logo.webp";
    logo.style.height = "30px";
    if (menuIcon) menuIcon.style.color = "white";
  } else if (scrollPosition < document.getElementById("about").offsetTop) {
    setPageClass("page-services");
    logo.src = "/img/Black-Logo.webp";
    logo.style.height = "35px";
    if (menuIcon) menuIcon.style.color = "black";
  } else if (scrollPosition < document.getElementById("more").offsetTop) {
    setPageClass("page-about");
    logo.src = "/img/White-Logo.webp";
    logo.style.height = "30px";
    if (menuIcon) menuIcon.style.color = "white";
  } else if (scrollPosition < document.getElementById("contact").offsetTop) {
    setPageClass("page-more");
    logo.src = "/img/Black-Logo.webp";
    logo.style.height = "35px";
    if (menuIcon) menuIcon.style.color = "black";
  } else {
    setPageClass("page-contact");
    logo.src = "/img/Black-Logo.webp";
    logo.style.height = "35px";
    if (menuIcon) menuIcon.style.color = "black";
  }
});





//----------------------------------Form Submission--------------------------------------
