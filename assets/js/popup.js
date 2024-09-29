function popupOpenClose(popup) {
  if ($(".wrapper").length == 0) {
    $(popup).wrapInner("<div class='wrapper'></div>");
  }
  $(popup).show();
  $(popup).click(function (e) {
    if (e.target == this) {
      if ($(popup).is(":visible")) {
        $(popup).hide();
      }
    }
  });
  $(popup)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup).hide();
    });
}
$(document).ready(function () {
  $("[data-js=open]").on("click", function () {
    popupOpenClose($(".popup"));
  });
});
function popupOpenClose1(popup1) {
  if ($(".wrapper1").length == 0) {
    $(popup1).wrapInner("<div class='wrapper1'></div>");
  }
  $(popup1).show();
  $(popup1).click(function (f) {
    if (f.target == this) {
      if ($(popup1).is(":visible")) {
        $(popup1).hide();
      }
    }
  });
  $(popup1)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup1).hide();
    });
}
$(document).ready(function () {
  $("[data-js1=open1]").on("click", function () {
    popupOpenClose1($(".popup1"));
  });
});
function popupOpenClose2(popup2) {
  if ($(".wrapper2").length == 0) {
    $(popup2).wrapInner("<div class='wrapper2'></div>");
  }
  $(popup2).show();
  $(popup2).click(function (g) {
    if (g.target == this) {
      if ($(popup2).is(":visible")) {
        $(popup2).hide();
      }
    }
  });
  $(popup2)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup2).hide();
    });
}
$(document).ready(function () {
  $("[data-js2=open2]").on("click", function () {
    popupOpenClose2($(".popup2"));
  });
});
function popupOpenClose3(popup3) {
  if ($(".wrapper3").length == 0) {
    $(popup3).wrapInner("<div class='wrapper3'></div>");
  }
  $(popup3).show();
  $(popup3).click(function (h) {
    if (h.target == this) {
      if ($(popup3).is(":visible")) {
        $(popup3).hide();
      }
    }
  });
  $(popup3)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup3).hide();
    });
}
$(document).ready(function () {
  $("[data-js3=open3]").on("click", function () {
    popupOpenClose3($(".popup3"));
  });
});
function popupOpenClose4(popup4) {
  if ($(".wrapper4").length == 0) {
    $(popup4).wrapInner("<div class='wrapper4'></div>");
  }
  $(popup4).show();
  $(popup4).click(function (f) {
    if (f.target == this) {
      if ($(popup4).is(":visible")) {
        $(popup4).hide();
      }
    }
  });
  $(popup4)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup4).hide();
    });
}
$(document).ready(function () {
  $("[data-js4=open4]").on("click", function () {
    popupOpenClose4($(".popup4"));
  });
});
function popupOpenClose5(popup5) {
  if ($(".wrapper5").length == 0) {
    $(popup5).wrapInner("<div class='wrapper5'></div>");
  }
  $(popup5).show();
  $(popup5).click(function (f) {
    if (f.target == this) {
      if ($(popup5).is(":visible")) {
        $(popup5).hide();
      }
    }
  });
  $(popup5)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup5).hide();
    });
}
$(document).ready(function () {
  $("[data-js5=open5]").on("click", function () {
    popupOpenClose5($(".popup5"));
  });
});
