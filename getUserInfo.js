$("#btn1").on("click", function()  {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let message = `������${year}�N${month}��${day}���ł�`
  // jQuery���g���ĉ�ʂɃ��b�Z�[�W��\������
  $("#tBox").val(message);
});