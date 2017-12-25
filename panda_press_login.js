console.log("panda_press_login is runnning");

var clickMe = document.getElementById("loginLink1");
if (clickMe != null){
  if (clickMe.title == "ログイン"){
    clickMe.click();
  }
}
else{
  var loginLink = document.getElementsByClassName("loginLink")[0];
  if(loginLink != null){
    var clickMe2 = loginLink.getElementsByTagName("a")[0];
    if (clickMe2.text == "ログイン"){
      clickMe2.click();
    }
  }
}
