$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        var email = $('#txt-email').val();
        var text = $('#txt-text').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);

        localStorage.setItem('email',email);
        localStorage.setItem('text',text);
    });

    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('text');
    
});
function crear(){
    document.write("usuario: " +localStorage.getItem("usuario") +"."+ "<br>" ); 
    document.write("password: " + localStorage.getItem("password")+"."+ "<br>" );
    document.write("email: "+ localStorage.getItem("email")+"."+ "<br>" );
    document.write("text: " + localStorage.getItem("text")+"."+ "<br>" );

}
