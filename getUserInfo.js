$("#btn1").on("click", function()  {
  // jQueryを使って画面にメッセージを表示する
  let data = `JavaScript実行結果`;
  document.getElementById('eid_href').innerHTML = `現在開いているURL：${window.location.href}`;
  document.getElementById('eid_ua').innerHTML = `ブラウザのユーザーエージェント：${window.navigator.userAgent}`;
  document.getElementById('eid_apV').innerHTML = `ブラウザのバージョン情報：${window.navigator.appVersion}`;
  document.getElementById('eid_width').innerHTML = `画面スクリーンの横幅：${window.screen.width}`;
  document.getElementById('eid_height').innerHTML = `画面スクリーンの高さ：${window.screen.height}`;
  $.get("https://ipinfo.io", function(res) {
 
      document.getElementById('eid_ip').innerHTML = `IPアドレス：${res.ip}`;
 
  }, "jsonp");
  $.ajax({
    url: "https://ipinfo.io",
    dataType: "jsonp",
    success: function(res){
         $(".ip-address").text(res.ip);
    }
});
  document.getElementById('eid_message').innerHTML = data;
  /*
  data += 'URL内のクエリ情報：' + window.location.search;
  data += 'URL内のハッシュ情報：' + widnow.location.hash;
  document.getElementById('eid_ori').innerHTML = 'プロトコル・ポート情報を含めたURL：' + window.location.origin;
  document.getElementById('eid_apN').innerHTML = 'ブラウザの正式名称：' + window.navigator.appName;
  document.getElementById('eid_lang').innerHTML = 'ブラウザの言語情報：' + window.navigator.language;
  document.getElementById('eid_ref').innerHTML = `直前に閲覧していたWebページのURL：${window.document.referrer}\n`;
  */
});