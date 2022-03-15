
document.getElementById("gaodu").addEventListener("click", function(){
    document.getElementById("der_karton").style.height = "450px";
});

document.getElementById("lan_se").addEventListener("click", function(){
    document.getElementById("der_karton").style.backgroundColor = "blue";
});

document.getElementById("tuishai").addEventListener("click", function(){
    document.getElementById("der_karton").style.opacity = ".3";
});

document.getElementById("chongqi").addEventListener("click", function(){
    document.getElementById("der_karton").style.cssText = "height:150px; width:150px; background-color:orange; margin:25px;";
});

document.getElementById("banjing").addEventListener("click", function(){
    document.getElementById("der_karton").style.borderRadius = "100px";
});

document.getElementById("zhongliang").addEventListener("click", function(){
    document.getElementById("der_karton").style.width = "450px";
});