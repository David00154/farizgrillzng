if ("serviceWorker" in navigator) {
  // window.addEventListener("load", () => {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((req) => {
      if (!req.active) {
        console.log("Service Worker: Registering...");
      }
    })
    .catch((err) => console.error(`Service Worker ${err}`));
}
//
// $(document).ready(function () {
//   setTimeout(function () {
//     $(".popup").css("display", "flex");
//   }, 5000);

//   //   $("body").on("click", ".close-btn", function () {
//   //     $.ajax({
//   //       type: "POST",
//   //       url: "https://jaysdinerng.com/close-popup",
//   //       data: {
//   //         _token: "AugglWL7Kj1smqyux08eJpAMba5mRNPzhj0s8oem",
//   //       },
//   //       success: function (data) {
//   //         $(".popup").css("display", "none");
//   //       },
//   //       error: function (data) {
//   //         alert("Unknown Error. Please try again later.");
//   //       },
//   //     });
//   //     $("#popup").css("display", "none");
//   //   });
//   if (localStorage.getItem("readAnn") !== null) {
//     let date = "2023-12-22 19:12:12";
//     let data = JSON.parse(localStorage.getItem("readAnn"));
//     if (date == data.date) {
//       $("#msgCon").hide();
//     } else {
//       $("#msgCon").removeClass("d-none");
//     }
//   } else {
//     $("#msgCon").removeClass("d-none");
//   }
// });
$(document).ready(function () {
  // if (localStorage.getItem("readAnn") !== null) {
  //   let date = "2023-12-22 19:12:12";
  //   let data = JSON.parse(localStorage.getItem("readAnn"));
  //   if (date == data.date) {
  //     $("#msgCon").hide();
  //   } else {
  //     $("#msgCon").removeClass("d-none");
  //   }
  // } else {
  //   $("#msgCon").removeClass("d-none");
  // }

  if (localStorage.getItem("readAnn") == null) {
    $("#msgCon").removeClass("d-none");
  } else {
    let date = "2023-12-22 19:12:12";
    let data = JSON.parse(localStorage.getItem("readAnn"));
    if (date == data.date) {
      $("#msgCon").hide();
    } else {
      $("#msgCon").removeClass("d-none");
    }
  }
});
function addToStorage() {
  let red_ann = {
    message: true,
    date: "2023-12-22 19:12:12",
  };
  localStorage.setItem("readAnn", JSON.stringify(red_ann));
  $("#msgCon").hide();
}
//
// $("#forgetModal").click(function () {
//   // Close Modal 1
//   $("#authenticationModal").modal("hide");

//   // Open Modal 2
//   $("#ForgetPassowrdModal").modal("show");
// });
//
$("body").on("click", ".show-modal", function (e) {
  var product_id = $(this).data("product");

  $.ajax({
    type: "POST",
    url: "https://jaysdinerng.com/product/show",
    data: {
      _token: "AugglWL7Kj1smqyux08eJpAMba5mRNPzhj0s8oem",
      product_id: product_id,
    },
    success: function (data) {
      $("#addToCartModal").remove();
      $("#dynamic_modal_view").append(data);
      $("#addToCartModal").modal("show");
    },
    error: function (data) {
      alert("Unknown Error. Please try again later.");
    },
  });
});
//
$(".slider").owlCarousel({
  loop: true,
  items: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  nav: false,
  autoplayHoverPause: true,
  animateOut: "fadeOut",

  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".slider-best-sellers").owlCarousel({
  loop: true,
  items: 3,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  smartSpeed: 1000,
  margin: 10,
  nav: false,
  autoplayHoverPause: true,
  stagePadding: 50,

  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
//
// $(document).ready(function () {
//   $(".hideRegMsg").click(function () {
//     $.ajax({
//       type: "POST",
//       url: "https://jaysdinerng.com/forget-session",
//       data: {
//         _token: "AugglWL7Kj1smqyux08eJpAMba5mRNPzhj0s8oem",
//       },
//       success: function (data) {},
//       error: function (data) {},
//     });
//   });
// });
//
window.onscroll = function () {
  stickyFunction();
};

var navbar = $(".navy");

let withoutSticky = document.querySelectorAll(".logo-without-sticky");
let withSticky = document.querySelectorAll(".logo-with-sticky");

var sticky = navbar.offset().top;

function stickyFunction() {
  if (window.scrollY >= sticky + 200) {
    // navbar.classList.remove("home");
    navbar.removeClass("home");
    withoutSticky.forEach((element) => {
      element.classList.add("d-none");
    });
    withSticky.forEach((element) => {
      element.classList.remove("d-none");
    });
  } else {
    // navbar.classList.add("home");
    navbar.addClass("home");
    withoutSticky.forEach((element) => {
      element.classList.remove("d-none");
    });
    withSticky.forEach((element) => {
      element.classList.add("d-none");
    });
  }
}
