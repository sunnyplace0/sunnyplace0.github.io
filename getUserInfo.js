$("#btn1").on("click", function()  {
  // jQueryを使って画面にメッセージを表示する
  document.getElementById('eid_useragent').innerHTML = window.navigator.userAgent;
  document.getElementById('eid_referrer').innerHTML = window.document.referrer;
  //document.getElementById('eid_ua').innerHTML = window.navigator.userAgent;
});