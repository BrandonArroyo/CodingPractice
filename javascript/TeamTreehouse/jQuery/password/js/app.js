
var $password = $("#password");
var $confirmPassword =$("#confirm_password");
$("form span").hide();
function passwordEvent(){
        if($password.val().length > 8){
            $password.next().hide();
        }else{
            $password.next().show();
        }
}
function confirmPasswordEvent(){

    if($password.val() === $confirmPassword.val()){
        $confirmPassword.next().hide();
    }
    else{
        $confirmPassword.next().show();

    }

}
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//$password.focus(passwordEvent).keyup(passwordEvent);
//$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
