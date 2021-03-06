// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require pace/pace.min.js
//= require toastr/toastr.min.js
//= require idle-timer/idle-timer.min.js
//= require sweet-alert/sweetalert.min
//= require Chart/Chart.min.js
//= require bootstrap-datepicker/core
//= require bootstrap-datepicker/locales/bootstrap-datepicker.ua.js
//= require Counter-Up/jquery.counterup.min
//= require waypoints/jquery.waypoints.min
//= require_tree .

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
