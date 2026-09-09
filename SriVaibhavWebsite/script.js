// Loading Screen

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    }, 2000);

});
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
};