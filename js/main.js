var mostrarChat = true;
var mostrarNoticias = true;
var preload =  document.getElementById('sitewelcome');
var principalsite = document.getElementById('site');


function showChat(){
    if(mostrarChat==true){
        document.getElementById('show_chat').style.display="block";
        document.getElementById('open_chat').style.bottom="296px";
        mostrarChat=false;
    }
    else
   {
        document.getElementById('show_chat').style.display="none";
        document.getElementById('open_chat').style.bottom="0";
        mostrarChat=true;
   }
}

function floatingNews(){
    if(mostrarNoticias==true){
        document.getElementById('content_floatingnews').style.display="block";
        document.getElementById('container_floatingnews').style.right="468px";
        mostrarNoticias=false;
    }
    else
   {
        document.getElementById('content_floatingnews').style.display="none";
        document.getElementById('container_floatingnews').style.right="0";
        mostrarNoticias=true;
   }
}

function preloadPanel(){
    setTimeout(function() {
        principalsite.classList.add('close-site');
        preload.classList.add('open-site');
    },500);
    setTimeout(function() {
        location.href="consumptions.html";
    },2000);
}