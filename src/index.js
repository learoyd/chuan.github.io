import './style.less';

// document.addEventListener("DOMContentLoaded", () => {
//   const a = 'test1222';
//   // document.body.innerHTML = a;
//
// }, false);

$(document).ready(function () {
  $.ajax({
    url: '../api/issueList.json',
    async: false,    success: function (data) {
      console.log(data)
    }
  });
});
