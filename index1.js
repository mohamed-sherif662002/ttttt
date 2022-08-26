var i = 0;
var txt = "log in";
function text(){
    if(i < txt.length){
        document.getElementById("text").innerHTML+=txt.charAt(i);
        setTimeout(text,200);
        i++;
    }
}
/* second fun*/ 
let showdata = document.getElementById("show_data");
showdata.onclick = function(){
alert("user_name => MOHAMED_SHERIF@FRONTEND.com \n password => 12345678910");
}
/*three fun*/
let input_test = document.getElementById("text1");
let pass_test = document.getElementById("password1");
let sub_test = document.getElementById("submit1");
sub_test.onclick = function(){
    if(input_test.value === "MOHAMED_SHERIF@FRONTEND.com" & pass_test.value === "12345678910"){
        location.href="index2.html";
    }
    else{
        alert("user_name => false || password => false");
    }
}
