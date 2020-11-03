$("#btn1").on("click", function()  {
  // jQueryを使って画面にメッセージを表示する
  //if (!window.location.href) {
    document.getElementById('eid_href').innerHTML = '現在開いているURL：' + window.location.href;
  //}
  //if (!window.location.search) {
  //  document.getElementById('eid_search').innerHTML = 'URL内のクエリ情報：' + window.location.search;
  //}
  //if (!widnow.location.hash) {
    document.getElementById('eid_hash').innerHTML = 'URL内のハッシュ情報：' + widnow.location.hash;
  //}
  //if (!window.location.origin) {
    document.getElementById('eid_ori').innerHTML = 'プロトコル・ポート情報を含めたURL：' + window.location.origin;
  //}
  //if (!window.navigator.appName) {
    document.getElementById('eid_apN').innerHTML = 'ブラウザの正式名称：' + window.navigator.appName;
  //}
  //if (!window.navigator.language) {
    document.getElementById('eid_lang').innerHTML = 'ブラウザの言語情報：' + window.navigator.language;
  //}
  //if (!window.navigator.userAgent) {
    document.getElementById('eid_ua').innerHTML = 'ブラウザのユーザーエージェント：' + window.navigator.userAgent;
  //}
  //if (!window.navigator.appVersion) {
    document.getElementById('eid_apV').innerHTML = 'ブラウザのバージョン情報：' + window.navigator.appVersion;
  //}
  //if (!window.document.referrer) {
    document.getElementById('eid_ref').innerHTML = '直前に閲覧していたWebページのURL：' + window.document.referrer;
  //}
  //if (!window.screen.width) {
    document.getElementById('eid_width').innerHTML = '画面スクリーンの横幅：' + window.screen.width;
  //}
  //if (!window.screen.height) {
    document.getElementById('eid_height').innerHTML = '画面スクリーンの高さ：' + window.screen.height;
  //}
});