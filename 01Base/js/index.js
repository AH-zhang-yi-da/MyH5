function $(id){
    return typeof id === "string" ? document.getElementById(id): null;
}
//input name输入框失去焦点
$("name").onblur = function (){
//    获取输入的内容
    var value =this.value;
    //开始检查
    if( isNaN(value) && value.length >=2 && value.length <=5 ){
        if (numberyn(value)){
            $("tiShi1").className = "error";
            $("tiShi1").innerHTML = "名字不能有数字！";
        }else {
            $("tiShi1").className = "right";
            $("tiShi1").innerHTML = "";
        }
    } else{
        $("tiShi1").className = "error";
        $("tiShi1").innerHTML = "请输入正确的名字";
        // alert("请输入正确的名字");
    }
}
//input name输入框得到焦点
$("name").onfocus = function(){
    $("tiShi1").className = "zero";
    $("tiShi1").innerHTML = "姓名";
    $("name").value = "";
}
//input number输入框失去焦点
$("number").onblur = function (){
    var value = this.value;

}
//判断字符串中是否含有数字 返回值 T or F
function numberyn(a){
    var a;
    for (let i = 0; i <= a.length-1; i++) {
        if (isNaN(a[i]) === false){
            // alert(i+1);显示第几个字符是数字
            return true;//是数
            break;
        }
    }
}
//判断字符串中是否都是数字
function numbersyn (a){
    for (let i = 0; i < a.length-1; i++) {

    }
}
function jiancha(){
    var m = document.getElementById("name").value;//名字
    var x = document.getElementById("number").value;//学号

}
