$(function(){ 
var h = $(document).height();
  hide_url();
  //螢幕轉動時執行
  $(window).resize(function() {
    hide_url();
  });
  
});

//隱藏網址欄
function hide_url(){
  //內容太少高度不夠就將body增高
  screen_h = document.documentElement.clientWidth / screen.width * screen.height * 0.94 + 'px';
  $("#all_height").css("height",screen_h);
  //移動到x座標1的位址
  setTimeout(function(){
    window.scrollTo(0, 1)
  }, 0);
  //alert(document.documentElement.clientWidth);//網頁製作的大小640
  //alert(screen.width);//螢幕解析的寬度
  //alert(screen.height);//螢幕解析的高度
}
//關於跳出
function about_show(m_id){
  $("body").prepend('<div id="about_box"><div id="c_box"></div></div>');//在被選元素的開頭（仍位於內部）插入指定內容
  $("#about_box").fadeIn();
  $.ajax({
  type: "GET",//POST或GET默認為GET
  url:"about.php",
  data: {m_id: m_id},
  success: function(data) {//成功後的回調函數
             $("#c_box").html(data);
			 var h = $(document).height();//抓取遮罩高度(可視範圍大小)
             $("#about_box").css("height",h);//調整遮罩的高度
           }
  });
  
}
//寫下祝福跳出
function po_show(m_id){
  $("body").prepend('<div id="about_box"><div id="c_box"></div></div>');//在被選元素的開頭（仍位於內部）插入指定內容
  $("#about_box").fadeIn();
  $.ajax({
  type: "GET",//POST或GET默認為GET
  url:"po.php",
  data: {m_id: m_id},
  success: function(data) {//成功後的回調函數
             $("#c_box").html(data);
			 var h = $(document).height();//抓取遮罩高度(可視範圍大小)
             $("#about_box").css("height",h);//調整遮罩的高度
           }
  });
  
}
//關閉關於
function about_close(){
  $("#about_box").fadeOut();
}