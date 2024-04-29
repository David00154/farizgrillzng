$(document).ready(function () {
  $("#nav-icon4").click(function () {
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $("#wa-widget-send-button").hide();
      $(".nav").css("left", "0%");
    } else {
      $("#wa-widget-send-button").show();
      $(".nav").css("left", "-100%");
    }
  });
  $(".close-menu-clicked").click(function () {
    $("#nav-icon4").toggleClass("open");
    if ($("#nav-icon4").hasClass("open")) {
      $("#wa-widget-send-button").hide();
      $(".nav").css("left", "0%");
    } else {
      $("#wa-widget-send-button").show();
      $(".nav").css("left", "-100%");
    }
  });
  $(
    ".close-modal-cart,.kitchen-open .price-info .price, .overlay-modal-cart"
  ).click(function () {
    $(".modal-cart-content").css("right", "-100%");
    $(".modal-cart-content .kitchen-open").css("right", "-1000%");
    $(".modal-cart-content .kitchen-open").css("z-index", "-1");
    $(".modal-cart-content .kitchen-closed").css("right", "-1000%");
    $(".modal-cart-content .kitchen-closed").css("z-index", "-1");
    $(".modal-cart-content").css("z-index", "-1");
    $(".overlay-modal-cart").css("z-index", "-1");
    $(".overlay-modal-cart").css("opacity", "1");
  });
  $("body").on("click", ".profile-cart .cart", function () {
    $(".modal-cart-content").css("right", "0");
    $(".modal-cart-content .kitchen-open").css("right", "0%");
    $(".modal-cart-content .kitchen-open").css("z-index", "2");
    $(".modal-cart-content .kitchen-closed").css("right", "0%");
    $(".modal-cart-content .kitchen-closed").css("z-index", "2");
    $(".modal-cart-content").css("z-index", "100");
    $(".overlay-modal-cart").css("z-index", "2");
    $(".overlay-modal-cart").css("opacity", "1");
  });
  $("body").on("click", "#viewCrt", function () {
    $(".modal-cart-content").css("right", "0");
    $(".modal-cart-content .kitchen-open").css("right", "0%");
    $(".modal-cart-content .kitchen-open").css("z-index", "2");
    $(".modal-cart-content .kitchen-closed").css("right", "0%");
    $(".modal-cart-content .kitchen-closed").css("z-index", "2");
    $(".modal-cart-content").css("z-index", "100");
    $(".overlay-modal-cart").css("z-index", "2");
    $(".overlay-modal-cart").css("opacity", "1");
  });
  $("body").on("click", "#login-section", function () {
    $(".register-section").hide();
    $(".log-in-section").show();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("body").on("click", "#register-section", function () {
    $(".register-section").show();
    $(".log-in-section").hide();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  $("body").on("click", ".profile", function () {
    $(".register-section").hide();
    $(".log-in-section").show();
    $("#register-section").removeClass("active");
    $("#login-section").addClass("active");
  });
  $("body").on("click", ".close-msg-kitchen-closed", function () {
    $(".msg-kitch-closed").hide();
  });
  $("body").on("click", "#toggle-sec", function () {
    var total = $(this)
      .closest(".product_data")
      .find(".total-price")
      .attr("data-value");
    var priceModified = $(this)
      .closest(".product_data")
      .find(".prod-price-modified")
      .attr("data-value");
    var qty = $(this).closest(".product_data").find(".qty").val();
    var prod_id = $(this).closest(".product_data").find(".prod_id").val();
    var upgrade_price = $(this).attr("data-value");
    isChecked = $(this).is(":checked");
    if (isChecked) {
      $(".upgrade-options").slideDown();
      let x = parseInt(priceModified) + parseInt(upgrade_price);
      let multiply = x * qty;
      $(this)
        .closest(".product_data")
        .find(".prod-price-modified")
        .attr("data-value", x);
      $(".total-price").attr("data-value", multiply);
      $(".modal-total-price").text(multiply.toLocaleString());
      $(this).val(1);
    } else {
      $(".upgrade-options").slideUp();
      let x = parseInt(priceModified) - parseInt(upgrade_price);
      let multiply = x * qty;
      $(this)
        .closest(".product_data")
        .find(".prod-price-modified")
        .attr("data-value", x);
      $(".total-price").attr("data-value", multiply);
      $(".modal-total-price").text(multiply.toLocaleString());
      $(this).val(0);
    }
  });
  $("body").on("click", "#takeaway", function () {
    $(".more-details").hide();
    $(".del-order").hide();
    $(".show-no-delivery").show();
    $(".show-delivery").hide();
  });
  $("body").on("click", "#delivery", function () {
    $(".more-details").show();
    $(".del-order").show();
    $(".show-no-delivery").hide();
    $(".show-delivery").show();
  });
  function calcModalItemTotal(optPrice = null, element, operator = null) {
    var total = element
      .closest(".product_data")
      .find(".total-price")
      .attr("data-value");
    var priceModified = element
      .closest(".product_data")
      .find(".prod-price-modified")
      .attr("data-value");
    var qty = element.closest(".product_data").find(".qty").val();
    var prod_id = $(this).closest(".product_data").find(".prod_id").val();
    if (operator != "" && operator === "plus") {
      x = parseInt(priceModified) + parseInt(optPrice);
      multiply = parseInt(total) + parseInt(optPrice) * parseInt(qty);
    } else {
      x = parseInt(priceModified) - parseInt(optPrice);
      multiply = parseInt(total) - parseInt(optPrice) * parseInt(qty);
    }
    element
      .closest(".product_data")
      .find(".prod-price-modified")
      .attr("data-value", x);
    $(".total-price").attr("data-value", multiply);
    $(".modal-total-price").text(multiply.toLocaleString());
  }
  $("body").on("click", ".single-select-opt", function () {
    $(this).parent().find(":input").toggleClass("checked");
    $(this).parent().siblings().find(":input").prop("checked", false);
    if ($(this).parent().find(":input").hasClass("checked")) {
      $(this).parent().siblings().addClass("disabled");
      $(this).parent().siblings().css("cursor", "not-allowed");
    } else {
      $(this).parent().siblings().removeClass("disabled");
      $(this).parent().siblings().css("cursor", "auto");
    }
  });
  $("body").on("click", ".input-check", function () {
    minimum = $(this).closest(".parent").attr("data-min");
    maximum = $(this).closest(".parent").attr("data-max");
    var checkboxes_checked_count = $(this)
      .closest(".parent")
      .find("input[type=checkbox]:checked").length;
    var $el = $(this);
    if (
      (maximum > 0 && checkboxes_checked_count <= maximum) ||
      (minimum > 0 &&
        maximum > 0 &&
        checkboxes_checked_count >= minimum &&
        checkboxes_checked_count <= maximum) ||
      maximum == "" ||
      minimum == ""
    ) {
      if ($el.is(":checked")) {
        price_opt = $el.closest(".box").find(".opt-price").attr("data-value");
        calcModalItemTotal(price_opt, $el, "plus");
        if ($(this).closest(".parent").hasClass("multiple-selection")) {
          if (maximum > 0 && checkboxes_checked_count == maximum) {
            $(this)
              .closest(".parent")
              .find(".box")
              .each(function (e, index) {
                if (!$(this).find(".input-check").prop("checked")) {
                  $(this).addClass("disabled");
                }
              });
          }
        }
      } else {
        price_opt = $el.closest(".box").find(".opt-price").attr("data-value");
        calcModalItemTotal(price_opt, $el, "moinus");
        if ($(this).closest(".parent").hasClass("multiple-selection")) {
          $(this)
            .closest(".parent")
            .find(".box")
            .each(function (e, index) {
              $(this).removeClass("disabled");
            });
        }
      }
    } else {
      $(this).prop("checked", false);
    }
  });
  $("body").on("click", ".upgrade-opt-up", function () {
    let maximum = $(this).parent().parent().parent().attr("data-max");
    let $el = $(this);
    $sumQty = 0;
    $(this)
      .closest(".repeat-selections")
      .find(".repeat-selection")
      .each(function () {
        $sumQty += Number($(this).find(".qty-upgrade").val());
      });
    if (maximum == "" || (maximum > 0 && $sumQty < maximum)) {
      $(this).parent().find(".upgrade-opt-down").removeClass("hidden");
      $(this).parent().find("span").removeClass("hidden");
      let qtyInc = parseInt($(this).parent().find(".price").text()) + 1;
      $(this).parent().find(".qty-upgrade").val(qtyInc);
      $(this).parent().find("span").text(qtyInc);
      price_exist = $(this)
        .parent()
        .parent()
        .find(".rs-opt-price")
        .attr("data-value");
      if (price_exist) {
        calcModalItemTotal(price_exist, $el, "plus");
      }
    }
    if ($sumQty + 1 == maximum) {
      $(this)
        .closest(".repeat-selections")
        .find(".repeat-selection")
        .each(function () {
          $qtyOptUpg = $(this).find(".qty-upgrade").val();
          if ($qtyOptUpg == 0) {
            $(this).addClass("disabled");
          }
        });
    }
  });
  $("body").on("click", ".upgrade-opt-down", function () {
    let quantity = $(this).closest(".btns-box").find(".qty-upgrade").val();
    let minimum = $(this).parent().parent().parent().attr("data-min");
    let $el = $(this);
    if (quantity > 0) {
      $sumQty = 0;
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".repeat-selection")
        .each(function () {
          $sumQty += Number($(this).find(".qty-upgrade").val());
          $(this).removeClass("disabled");
        });
      if (minimum == "" || minimum > 0) {
        let qtyDec = parseInt($(this).parent().find(".price").text()) - 1;
        $(this).parent().find(".qty-upgrade").val(qtyDec);
        $(this).parent().find("span").text(qtyDec);
        if (qtyDec == 0) {
          $(this).addClass("hidden");
          $(this).parent().find("span").addClass("hidden");
        }
        price_exist = $(this)
          .parent()
          .parent()
          .find(".rs-opt-price")
          .attr("data-value");
        if (price_exist) {
          calcModalItemTotal(price_exist, $el, "moins");
        }
      }
    }
  });
  $("body").on("click", ".up", function () {
    var priceModified = $(this)
      .closest(".product_data")
      .find(".prod-price-modified")
      .attr("data-value");
    var qty = $(this).closest(".product_data").find(".qty").val();
    var prod_id = $(this).closest(".product_data").find(".prod_id").val();
    let sum = parseInt($(this).parent().find("#qty-id-1").text()) + 1;
    $(this).parent().find(".qty").val(sum);
    $(this).parent().find("#qty-id-1").text(sum);
    let multiply = parseInt(priceModified) * sum;
    $(".total-price").attr("data-value", multiply);
    $(".modal-total-price").text(multiply.toLocaleString());
  });
  $("body").on("click", ".down", function () {
    var priceModified = $(this)
      .closest(".product_data")
      .find(".prod-price-modified")
      .attr("data-value");
    var qty = $(this).closest(".product_data").find(".qty").val();
    var prod_id = $(this).closest(".product_data").find(".prod_id").val();
    if (parseInt($(this).parent().parent().find("#qty-id-1").text()) > 1) {
      let decrease =
        parseInt($(this).parent().parent().find("#qty-id-1").text()) - 1;
      $(this).parent().parent().find(".qty").val(decrease);
      $(this).parent().parent().find("#qty-id-1").text(decrease);
      let multiply = priceModified * decrease;
      $(".total-price").attr("data-value", multiply);
      $(".modal-total-price").text(multiply.toLocaleString());
    }
  });
  $("body").on("click", ".product_data .add-to-cart", function () {
    $("#error-required").html("");
    $("#error-required-content").remove();
    $("#error-required").append('<div id="error-required-content"></div>');
    $(".val-required").each(function (e, index) {
      var counterReq = 0;
      var name = $(this).attr("data-name");
      var checkboxes_checked_count = $(this).find(
        "input[type=checkbox]:checked"
      ).length;
      if (checkboxes_checked_count) {
        if (checkboxes_checked_count > 0) {
          counterReq++;
        }
      } else {
        $sumQty = 0;
        $(this)
          .find(".btns-box")
          .each(function (e, index) {
            $sumQty += Number($(this).find(".qty-upgrade").val());
          });
        if ($sumQty > 0) {
          counterReq++;
        }
      }
      if (counterReq == 0) {
        event.preventDefault();
        message = `${name} is required`;
        toastr.options = { closeButton: true, progressBar: true };
        toastr.error(message);
      }
    });
    $(".multiple-selection").each(function (e, index) {
      var counter = 0;
      var name = $(this).attr("data-name");
      var minimum = $(this).attr("data-min");
      var maximum = $(this).attr("data-max");
      var checkboxes_checked_count = $(this).find(
        "input[type=checkbox]:checked"
      ).length;
      if (
        (minimum = "" && maximum > 0) ||
        (maximum == "" && minimum > 0) ||
        (minimum > 0 &&
          maximum > 0 &&
          checkboxes_checked_count >= minimum &&
          checkboxes_checked_count <= maximum)
      ) {
        counter++;
      }
      if (counter == 0) {
        var minimum = $(this).attr("data-min");
        var maximum = $(this).attr("data-max");
        if (
          minimum > 0 &&
          maximum > 0 &&
          checkboxes_checked_count < minimum &&
          checkboxes_checked_count > maximum
        ) {
          event.preventDefault();
          message = `Please choose minimum ${minimum} ${name} and maximum ${maximum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        } else if (minimum > 0 && checkboxes_checked_count < minimum) {
          event.preventDefault();
          message = `Please choose minimum ${minimum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        } else if (maximum > 0 && checkboxes_checked_count > maximum) {
          event.preventDefault();
          message = `Please choose maximum ${maximum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        }
      }
    });
    $(".repeat-selections").each(function (e, index) {
      var counter = 0;
      var name = $(this).attr("data-name");
      var minimum = $(this).attr("data-min");
      var maximum = $(this).attr("data-max");
      $sumQty = 0;
      $(this)
        .find(".btns-box")
        .each(function (e, index) {
          $sumQty += Number($(this).find(".qty-upgrade").val());
        });
      if (
        (minimum = "" && maximum > 0) ||
        (maximum == "" && minimum > 0) ||
        (minimum > 0 && maximum > 0 && $sumQty >= minimum && $sumQty <= maximum)
      ) {
        counter++;
      }
      if (counter == 0) {
        var minimum = $(this).attr("data-min");
        var maximum = $(this).attr("data-max");
        if (
          minimum > 0 &&
          maximum > 0 &&
          $sumQty < minimum &&
          $sumQty > maximum
        ) {
          event.preventDefault();
          message = `Please choose minimum ${minimum} ${name} and maximum ${maximum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        } else if (minimum > 0 && $sumQty < minimum) {
          event.preventDefault();
          message = `Please choose minimum ${minimum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        } else if (maximum > 0 && $sumQty > maximum) {
          event.preventDefault();
          message = `Please choose maximum ${maximum} ${name}`;
          toastr.options = { closeButton: true, progressBar: true };
          toastr.error(message);
        }
      }
    });
  });
});
