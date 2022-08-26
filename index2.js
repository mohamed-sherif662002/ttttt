let side_nav_id1 = document.getElementById("side_nav_id");
let side_menu_id1 = document.getElementById("side_menu_id");
let close1 = document.getElementById("close");
side_nav_id1.onclick = function(){
  side_menu_id1.style.width = "100%";
}
close1.onclick = function(){
  side_menu_id1.style.width = "0%";
}
let developer1 = document.getElementById("developer");
let projects1 = document.getElementById("projects");
let help1 = document.getElementById("help");
developer1.onclick = function(){
  location.href = "index3.html";
}
projects1.onclick = function(){
  location.href = "index1.html";
}
help1.onclick = function(){
  let confirm_test = confirm("we_will_helps_you");
  if(confirm_test === true){
       alert(" user_name => MOHAMED_SHERIF@FRONTEND.com \n password => 12345678910 \nthis website primary \n developer => END_..Mohamed_sherif \n department => frontend \n work => freelancer\n whats =>01091655479");
  }
}

let par1_test = document.getElementById("par_id1");
let par2_test = document.getElementById("par_id2");
let par3_test = document.getElementById("par_id3");
let btn_next = document.getElementById("btn1");
let btn_prev = document.getElementById("btn2");
let arr = [par1_test , par2_test ,par3_test];
let i = 0;
btn_next.onclick = function(){
if(i < arr.length){
  console.log(arr[i]);
  i++;
}
else{
  i = 0;
}
}


 let j = 3;
btn_prev.onclick = function(){
  if( arr.length >= j){
    j--;
    console.log(arr[j]);
  }
  if(j === 0){
    j = 3;
  }
}