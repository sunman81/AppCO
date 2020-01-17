const btn = $("#menu-button");
const mobileMenu = $("#mobile-menu-container");

function handleMenu(e) {
  btn.toggleClass("active");
  mobileMenu.slideToggle(500);
}

$(document).on("click", ".menu-button", handleMenu);

function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  btn.removeClass("active");
  mobileMenu.removeAttr("style");

  console.log("is-desktop");
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 900px)",
  onEnter: function() {
    initMobile();
  }
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 900px)",
  onEnter: function() {
    initDesktop();
  }
});
/////////accrodion////////
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$("#slider").slick({
  arrows: false,
  fade: true,
  autoplay: true,
  dots: true,
  appendDots: ".custom-dots",
  autoplaySpeed: 2000,
  loop: true,
  draggable: true,
  infinite: true,
  center: true
});

//////////scrollTop///////
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});
///////valid//////

document.getElementById("tel").addEventListener("input", e => {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : "( " + x[1] + " ) " + x[2] + (!x[3] ? "" : " - " + x[3]);
});

$(function() {
  $("#contactForm1").validate({
    submitHandler:function(form){
      alert(`Thank you ${form.name.value} for your message :)`);
      
    },
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      companyName:{
        required: true,
      }, 
      email:{
        required: true,
      }


    },
    messages: {
      name: {
        minlength: "Mininmum 2 symbols required"
      },
      email: {
        email: "Email is not valid !"
      },
      companyName: {

      }
    }
  });
});

