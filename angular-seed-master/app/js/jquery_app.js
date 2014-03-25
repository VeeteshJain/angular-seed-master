var App = App || {};

$(function() {
  App.clickCallback = function(selector, text) {
    $(selector).text(text);
  };

  App.superSmartFunction = function() {
    return 42;
  };

  // callback as parameter, because otherwise it would be harder to test
  App.ajaxRequest = function(callback) {
    $.ajax({
      type:    "GET",
      url:     "/resource",
      success: callback
    });
  };

  App.changeText = function() {
    App.ajaxRequest(function(response) {
      $("span").text(response);
    });
  };
});
