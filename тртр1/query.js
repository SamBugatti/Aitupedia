$("li").hover(
      function () {
        $(this).append($("color", "black"));
      }, 
      function () {
        $(this).find("color", "black").remove();
      }
    );