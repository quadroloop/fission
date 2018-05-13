 // Fission.js 2.0
 // Bryce Mercines 2018

 window.onload = function() {
  var bs = new PerfectScrollbar('#body');
  var ps = new PerfectScrollbar('#preferences');
 	setTimeout("input1()",200);
 }

 function input1() {
 	document.getElementById('url').classList.add('expand-active');
    document.getElementById('url').focus();
 	document.getElementsByClassName('banner')[0].classList.add('pulse');
 	document.getElementById('settings').classList.add('pulse');
 }

 function openSettings() {
 	document.getElementById('preferences').style.display = "block";
 }

 function closeSettings() {
 	document.getElementById('preferences').classList.add('hide-left');
 	setTimeout("document.getElementById('preferences').style.display = 'none';",1000);
 	setTimeout("document.getElementById('preferences').classList.remove('hide-left')",1000);
    setTimeout("input1()",500);
 }
  item_count = 0;
  var urx = document.getElementById("url");
     urx.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) { 
       if(urx.value){
       	 main(urx.value);
       }
     }
    });
    var app = document.getElementById("body");
     app.addEventListener("keydown", function (j) {
      if (j.keyCode === 46) { 
         document.getElementsByClassName('window-focus')[0].remove();
       }
      if (j.keyCode === 27) { 
         var data_items = document.getElementsByClassName('item');
          data_items[item_count].click();
            item_count++;
         if(data_items.length == item_count){
            item_count = 0;
         }
       } 
    });   

  var id = 0;   
  var mode="mobile";
  function main(url) {
     var banner = document.getElementsByClassName('banner')[0];
     var link = document.getElementsByClassName('footlinks')[0];
     var home = document.getElementById('home');
         banner.style.display = 'none';
         link.style.display = 'none';
         document.getElementById('menu').style.display = "block";
         home.style = "height: 100%;width: 100%;background: linear-gradient(rgba(0, 0, 0,0.8),rgba(0,0,0,255), rgba(0, 0, 0,255)), url('./img/p1.gif') fixed center center;background-size: cover;position: absolute;";
         document.getElementById('screens').innerHTML += '<iframe src="'+url+'" id="fr'+id+'" class="'+mode+' fade-In" onmouseover="frame_select(&apos;fr'+id+'&apos;);" onmouseleave="frame_unselect(&apos;fr'+id+'&apos;)"></iframe>';
         // var gid = "fr"+id;
         // new PerfectScrollbar(gid);
         id++;
  }

   var citem;
  function itemselect(item) {
    if(citem){
      document.getElementById(citem).classList.remove('item-selected');
      document.getElementById(item).classList.add('item-selected');
      setMode(item);
      citem = item;
    }else{
       document.getElementById(item).classList.add('item-selected');
      setMode(item); 
      citem = item;
    }
  }


function setMode(data) {
  switch(data) {
    case 'append':
      if(document.getElementById("url").value){
      main(document.getElementById("url").value);
    }
    break;
    case 'qr':
     document.getElementById('qr_data').style.display = "block";
     setTimeout("document.getElementById('mcontent').classList.add('react-expand');",1000);
    break;
    default:
      mode = data;
  }
}

function frame_select(frame) {
  document.getElementById(frame).classList.add('window-focus');
}


function frame_unselect(frame) {
  document.getElementById(frame).classList.remove('window-focus');
}

