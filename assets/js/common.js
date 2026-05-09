$(document).ready(function () {
  // add toggle functionality to award and bibtex buttons
  $(document).on("click", "a.award", function (event) {
    event.preventDefault();
    const container = $(this).closest('[id]');
    container.find(".abstract.hidden.open").removeClass("open");
    container.find(".award.hidden").toggleClass("open");
    container.find(".bibtex.hidden.open").removeClass("open");
  });
  $(document).on("click", "a.bibtex", function (event) {
    event.preventDefault();
    const container = $(this).closest('[id]');
    container.find(".abstract.hidden.open").removeClass("open");
    container.find(".award.hidden.open").removeClass("open");
    container.find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
