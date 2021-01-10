/*
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
CoderX    :  https://andreiabd.github.io/CoderX/index.html
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
*/

window.addEventListener("load", function () { //Loader Screen JAVA Script
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

var // variables: Run, Clear, Theme Dark, Theme Sun, Codes, Result, Clean, About, Refresh, Setauto, Contact.
    run = document.getElementById("run"),
    clear = document.getElementById("clear"),
    themedark = document.getElementById("themedark"),
    themesun = document.getElementById("themesun"),
    codes = document.getElementById("codes"),
    result = document.getElementById("result"),
    clean = document.getElementById("clean"),
    about = document.getElementById("about"),
    refresh = document.getElementById("refresh"),
    setauto = document.getElementById("setauto"),
    contact = document.getElementById("contact");

function helpuser(){ // Contact dialog, Cick Show or Click Hide
    var x = document.getElementById("helpuserdiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function setautocode(){ // F, Set Automaticlly Codes
    var y = document.getElementById("codesautoset");
    if (y.style.display === "none") {
        codes.style.display = "none";
        y.style.display = "block";
    } else {
        codes.style.display = "block";
        y.style.display = "none";
    }
}

function CustomAlert() { // About and Contact, Box Alert. 
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById("dialogoverlay");
        var dialogbox = document.getElementById("dialogbox");
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH +"px";
        dialogbox.style.left = (winW/2) - (250 * .5)+"px";
        dialogbox.style.top = "50px";
        dialogbox.style.display = "block";
        document.getElementById("dialogboxbody").innerHTML = dialog;
        document.getElementById("dialogboxfooter").innerHTML = '<button style="margin: 10px;border-radius: 5px;border: 1px solid black;color: #000;" onclick="Alert.ok()"><i class="fas fa-remove"></i></button>';
    }
    this.ok = function(){
        document.getElementById("dialogbox").style.display = "none";
        document.getElementById("dialogoverlay").style.display = "none";
    }
}
var Alert = new CustomAlert();

function darkin() { // F, of Dark
    document.getElementById("body").style.backgroundColor = "rgb(74 74 74)";
    document.getElementById("nave").innerHTML =
    '<nav class="navbar navbar-dark bg-dark"><div class="container"><a class="navbar-brand"><img src="img/logo.png" height="60" alt="logo" loading="lazy"/><img id="pipe" src="img/pipe.png" height="40" alt="logo" loading="lazy"/></a></div>';
    document.getElementById("nave").style.boxShadow = "2px 2px 20px black";
    document.getElementById("codes").style.backgroundColor = "#272727";
    document.getElementById("codes").style.color = "#fff";
    document.getElementById("codes").style.boxShadow = "2px 2px 5px black";
    document.getElementById("codesautoset").style.backgroundColor = "#272727";
    document.getElementById("codesautoset").style.color = "#fff";
    document.getElementById("codesautoset").style.boxShadow = "2px 2px 5px black";
    document.getElementById("result").style.boxShadow = "2px 2px 5px black";
    document.getElementById("back-to-top-btn").style.backgroundColor = 'rgb(74 74 74)';

};

function lightin() { // F, of light
    document.getElementById("body").style.backgroundColor = "#fff";
    document.getElementById("nave").innerHTML =
    '<nav class="navbar navbar-light bg-light"><div class="container"><a class="navbar-brand"><img src="img/logo.png" height="60" alt="logo" loading="lazy"/><img id="pipe" src="img/pipe.png" height="40" alt="logo" loading="lazy"/></a></div>';
    document.getElementById("nave").style.boxShadow = "2px 2px 20px grey";
    document.getElementById("codes").style.backgroundColor = "#fff";
    document.getElementById("codes").style.color = "#000";
    document.getElementById("codes").style.boxShadow = "2px 2px 5px black;";
    document.getElementById("codesautoset").style.backgroundColor = "#fff";
    document.getElementById("codesautoset").style.color = "#000";
    document.getElementById("codesautoset").style.boxShadow = "2px 2px 5px black;";
    document.getElementById("back-to-top-btn").style.backgroundColor = '#fff';
    
};

setauto.onclick = ()=>{ // open new screen with html5 codes, copy, past.
    setautocode();
    document.getElementById("ALERT2").innerHTML = 
    '<div class="alert alert-warning" role="alert">Copy & Past, result into Codes Main Screen</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
}

contact.onclick = ()=>{ // help, usage, user help information
    helpuser();
}

refresh.onclick = ()=>{ // refresh 'reload', page with quation.
    var q = confirm ("Do you want to reloud this page?");
    if (q === true){
        window.location.reload();
    } else {
        document.getElementById("ALERT2").innerHTML =  
        '<div class="alert alert-warning" role="alert">Cancle reload page</div>';
        setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
    }
};

savecodein.onclick = ()=> { // SAVE Buttom on Click , Alret div cloesed after 5 sec 
    localStorage.setItem("Codes" , codes.value);
    document.getElementById("ALERT2").innerHTML =  
    '<div class="alert alert-success" role="alert">The data has been saved successfully</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
};

themedark.onclick = ()=> { // Theme Button on Click, Changed into Dark theme, Alret div cloesed after 5 sec 
    darkin();
    document.getElementById("ALERT2").innerHTML =  
    '<div class="alert alert-primary" role="alert">Theme Changed Into Dark Mode</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
};

themesun.onclick = ()=> { // Theme Button on duble Click, Changed into Light theme, Alret div cloesed after 5 sec 
    lightin();
    document.getElementById("ALERT2").innerHTML =  
    '<div class="alert alert-primary" role="alert">Theme Changed Into Light Mode</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
};

clear.onclick = ()=> { // CLEAR Buttom on Click , Alret div cloesed after 5 sec 
    localStorage.removeItem("Codes");
    document.getElementById("ALERT2").innerHTML = 
    '<div class="alert alert-success" role="alert">The data has been deleted successfully</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
};

run.onclick = ()=> { // RUN Buttom on Click,  Alret div cloesed after 5 sec
    if (run = codes.value) { 
        result.style.display = "block";
        result.innerHTML = codes.value;
        document.getElementById("ALERT2").innerHTML = 
        '<div class="alert alert-warning" role="alert">RESULT</div>';
        setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
    } else {
        result.style.display = "none";
        document.getElementById("ALERT2").innerHTML = 
        '<div class="alert alert-danger" role="alert">There is no codes value to run result !</div>';
        setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
    }
};

clean.onclick = ()=> { // CLEAN Buttom on Click ,Alret div cloesed after 5 sec 
    result.innerHTML = '';
    document.getElementById("ALERT2").innerHTML = 
    '<div class="alert alert-warning" role="alert">Output Clear</div>';
    setTimeout(()=> (document.getElementById("ALERT2").innerHTML = ''), 5000);
};

onload = ()=> { // refresh or reload INDEX page
    codes.value = localStorage.getItem("Codes");
};

about.onclick = ()=>{
    Alert.render('<i class="fa fa-info-circle"></i><u><strong> About:</strong></u><br>All copyrights resived ©2021 <strong>CoderX</strong>.<br>This site Designed and Developed By <strong>Andrei Abd</strong> under the programer name <strong>X</strong>,as simple app site tool helped programers to check,edit or build codes.<br><i class="fa fa-info-circle"></i><u><strong> Contact & Info:</u></strong><br><a href="https://github.com/AndreiAbd" target="blank"><i class="fa fa-external-link"></i> Github</a><br><a href="https://www.facebook.com/andreiaabd/" target="blank"><i class="fa fa-external-link"></i> Facebook</a><br><a href="https://www.linkedin.com/in/andreiabd" target="blank"><i class="fa fa-external-link"></i> Linkedin</a><br><a href="https://www.instagram.com/andrei_abd/" target="blank"><i class="fa fa-external-link"></i> Instagram</a><br>');
}

// Back to Top Button, Show, Hide, Click
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
if (window.pageYOffset > 300) { // Show backToTopButton
if(!backToTopButton.classList.contains("btnEntrance")) {
  backToTopButton.classList.remove("btnExit");
  backToTopButton.classList.add("btnEntrance");
  backToTopButton.style.display = "block";
}
}
else { // Hide backToTopButton
if(backToTopButton.classList.contains("btnEntrance")) {
  backToTopButton.classList.remove("btnEntrance");
  backToTopButton.classList.add("btnExit");
  setTimeout(function() {
  backToTopButton.style.display = "none";
  }, 250);
}
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;

window.requestAnimationFrame(step);

function step(timestamp) {
if (!start) start = timestamp;
const progress = timestamp - start;
window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t*t + b;
t -= 2;
return c/2*(t*t*t + 2) + b;
};


