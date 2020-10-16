function drag(selector){
     let ele = document.querySelector(selector);
     ele.onmousedown = function (evt){
         let e = evt || window.event;
         let distX = e.offsetX;
         let distY = e.offsetY;
         document.onmousemove = function(evt){
            let e = evt || window.event;
            ele.style.left = e.pageX  - distX + "px";
            ele.style.top = e.pageY - distY + "px";
         }
         document.onmouseup = function(){
             document.onmousemove = null;
         }
         document.ondragstart = function(){
             return false;
         }
     }
}