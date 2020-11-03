$("#btn1").on("click", function()  {
  // jQueryを使って画面にメッセージを表示する
  document.getElementById('eid_href').innerHTML = '現在開いているURL：' + window.location.href; // 現在開いているURLを取得する
  // document.getElementById('eid_search').innerHTML = window.location.search; // URL内のクエリ情報を抽出して取得する
  // document.getElementById('eid_hash').innerHTML = widnow.location.hash; // URL内のハッシュ情報を抽出して取得する
  // document.getElementById('eid_ori').innerHTML = window.location.origin; // プロトコル・ポート情報を含めたURLを取得する
  // document.getElementById('eid_apN').innerHTML = window.navigator.appName; // ブラウザの正式名称を取得する
  // document.getElementById('eid_lang').innerHTML = window.navigator.language; // ブラウザの言語情報を取得する
  document.getElementById('eid_ua').innerHTML = window.navigator.userAgent; // ブラウザのユーザーエージェントを取得する
  document.getElementById('eid_apV').innerHTML = window.navigator.appVersion; // ブラウザのバージョン情報を取得する
  document.getElementById('eid_ref').innerHTML = window.document.referrer; // 直前に閲覧していたWebページのURLを取得する
  document.getElementById('eid_width').innerHTML = window.screen.width; // 画面スクリーンの横幅を取得する
  document.getElementById('eid_height').innerHTML = window.screen.height; // 画面スクリーンの高さを取得する
});