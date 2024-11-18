window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementsByClassName("container-header")[0].style.height = "100px"
    document.getElementsByClassName("logo-header")[0].style.display = "none";
    document.getElementsByClassName("logo-scroll")[0].style.display = "block";
    document.getElementsByClassName("nav-container")[0].style.height = "80px"
    document.getElementsByClassName("logo")[0].style.height = "56px"
  } else {
    document.getElementsByClassName("container-header")[0].style.height = "196px";
    document.getElementsByClassName("logo-header")[0].style.display = "block";
    document.getElementsByClassName("logo-scroll")[0].style.display = "none";
    document.getElementsByClassName("nav-container")[0].style.height = "142px"
    document.getElementsByClassName("logo")[0].style.height = "93px"
  }
}

//nav container for height