var username = document.getElementById("name-f")
var err = document.getElementsByClassName("error-message")
var email=document.getElementById("mail-f")
var phone=document.getElementById("phone-f")
var message=document.getElementById("message-f")
var words = /^[a-zA-Z]+$/
var mailformat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var mcheck = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
var work = 0
$("#submit-form").submit((e)=>{
work = 1;
    e.preventDefault()
    checking()
    checkmail()
    checkmob()
    checkmsg()


if(work==5)
{
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbw7T-DNzbDCaL2MIJa5lNN1jwUfFBaKAe0mmrN8vbqElA2Aeiu1Jxb1Au1F_eZWALul/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    
    })
}
})
function checking(){
    // console.log("check")
    if(username.value ==" "){
        err[0].innerHTML = "space not valid"
    }
     else if(username.value.trim() == ""){
        err[0].innerHTML = "space not valid"
 
     }
     else if(words.test(username.value) == false){
        err[0].innerHTML = "only character "
     }
     else{
         err[0].innerHTML = ""
         work=work+1
     }
}
function checkmail(){
   
    
    if(mailformat.test(email.value)==false)
    {
        err[1].innerHTML = "Email Id Not Valid "
    }
    else{
        err[1].innerHTML = ""
        work=work+1
    }
}
function checkmob()
{
    
        m=phone.value
        
        if(m.length<10 || m.length>10){
            err[2].innerHTML="Please Enter 10 digit mobile number"
        }else{
            err[2].innerHTML=""
            work=work+1
        }
        
    }
    function checkmsg()
    {
        v=message.value
        if(v.length<10)
        {
            err[3].innerHTML = "minimum 10 Words"
        }else{
            err[3].innerHTML=""
            work=work+1
        }
    }

