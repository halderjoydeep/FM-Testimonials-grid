$(".card").hover(
  function () {
    $(this).siblings(".card").addClass("card-hover");
  },
  $(".card").hover(function () {
    $(this).siblings(".card").removeClass("card-hover");
  })
);
