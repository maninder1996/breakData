
// Event listener for clicks outside the menu
var ulElement = document.querySelector(".navigation_wrap");
document.addEventListener("click", function (event) {
  var isClickedInsideMenu = ulElement.contains(event.target);
  if (!isClickedInsideMenu) {
    // Remove the 'ekit-dropdown-open-onclic' class from all elements
    var divElements = ulElement.querySelectorAll(".nav_wrap .nav > li");
    for (var i = 0; i < divElements.length; i++) {
      divElements[i].classList.remove("active");
    }
    // Reset the previously clicked element
    previousElement = null;
  }
});
// Event listener for clicks outside the menu
var filterElement = document.querySelector(".filter_main_wrap");
document.addEventListener("click", function (event) {
  var isClickedInsideMenu = filterElement.contains(event.target);
  if (!isClickedInsideMenu) {
    // Remove the 'ekit-dropdown-open-onclic' class from all elements
    var divElements = document.querySelectorAll(".filer_box");
    for (var i = 0; i < divElements.length; i++) {
      divElements[i].classList.remove("filter_show_dropdown");
    }
    // Reset the previously clicked element
    previousElement = null;
  }
});
$('.cross_btn_filter')
$(document).ready(function () {
  $('.cross_btn_filter').click(function () {
    $(this).parent().parent().removeClass('filter_show_dropdown');
  });
  $('.confirm button').click(function () {
    $(this).parent().parent().parent().parent().removeClass('filter_show_dropdown');
  });
  
  $(".cart_search_wrap .search_btn").click(function () {
    $(".search_box").slideToggle();
  });
  $(".cerrar_buscador").click(function () {
    $(".search_box").slideUp();
  });

  $(".toggle_mobile").click(function () {
    $(".navigation_wrap").addClass("show_sidebar");
  });
  $(".cross_btn").click(function () {
    $(".navigation_wrap").removeClass("show_sidebar");
  });
  $(".overlay").click(function () {
    $(".navigation_wrap").removeClass("show_sidebar");
  });

  $(".nav li").click(function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

  var previouslyClickedElement = null;

  $(".filter_main_wrap .filer_box .filer_text").click(function () {
    if (
      previouslyClickedElement !== null &&
      !$(this).is(previouslyClickedElement)
    ) {
      // Remove the class from the previously clicked element if it exists
      $(previouslyClickedElement)
        .parent()
        .removeClass("filter_show_dropdown");
    }

    // Toggle the class on the currently clicked element
    $(this).parent().toggleClass("filter_show_dropdown");

    // Update the previouslyClickedElement variable with the current element
    previouslyClickedElement = this;
  });
  $(".dropdown-menus").click(function () {
    $(this).parent().siblings().removeClass("open");
    $(this).parent().toggleClass("open");
  });
  $(".child-link li.childlink").click(function () {
    $(".child-link li.childlink").removeClass("site-border");
    $(this).addClass("site-border");
  });

  //Product-title change
  $(".conteos").click(function () {
    $(this).parent().siblings().removeClass("title_change_product");
    $(this).parent().toggleClass("title_change_product");
  });

  //show more text
  $(".lerer_mas").click(function () {
    $(".leer_mas_data").toggleClass("show-more-height");
  });

  /**********table hide show***** */
  $(".conteos_plus").click(function () {
    let $elem = $(this);
    $target = $(this).parent().parent().parent().find(".conteos_table");
    $elem.toggleClass("active");
    $target.toggle();
    $(".conteos_plus").not($elem).removeClass("active");
    $(".conteos_table").not($target).hide();
  });
  $(".desglose_plus").click(function () {
    let $elem = $(this);
    $target = $(this).parent().parent().parent().find(".desglose_table");
    $elem.toggleClass("active");
    $target.toggle();
    $(".desglose_plus").not($elem).removeClass("active");
    $(".desglose_table").not($target).hide();
  });
  $(".conteos_sub_plus").click(function () {
    let $elem = $(this);
    $target = $(this).parent().parent().parent().find(".conteos_sub_table");
    $elem.toggleClass("active");
    $target.toggle();
    $(".conteos_sub_plus").not($elem).removeClass("active");
    $(".conteos_sub_table").not($target).hide();
  });


});
