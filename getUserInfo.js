$("#btn1").on("click", function()  {
  let ua = window.navigator.userAgent;
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  //let message = `今日は${year}年${month}月${day}日です`
  let message = `UserAgent:${ua}`
  // jQueryを使って画面にメッセージを表示する
  document.getElementById('eid_ua').innerHTML = ua;
  $("#tBox").val(message);
});