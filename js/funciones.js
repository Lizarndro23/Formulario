$(document).ready(function(){

    var validar = new Formulario();
    
    $("#nombre").focusout(function(){
        validar.validarTexto("nombre");
    });

    $("#documento").focusout(function(){
        validar.validarNumeros("documento");
    });
    
    $("#email").focusout(function(){
        validar.validarCorreo("email");
    });
    
    $("#password").focusout(function(){
        validar.validarContrasena("password");
    });
    
    $("#telefono").focusout(function(){
        validar.validarNumeros("telefono");
    });

    $("#restablecer").click(function(){
        e.preventDefault();
        validar.formClear();
    });

    $("#deshabilitar").click(function(e){
        e.preventDefault();
        validar.formDisable();
    });
    
    $("#habilitar").click(function(e){
        e.preventDefault();
        validar.formEnable();
    });

    $("#editarHabilitacion").click(function(e){
        e.preventDefault();
        validar.formDisableEdit();
    });
    $("#formulario").submit(function(event) {
        if ($('input[name="hobby"]:checked').length === 0) {
            alert("Debe seleccionar una opción.");
            event.preventDefault(); // Evita que se envíe el formulario
            $("#"+id).addClass('error');
        }
    });

});

 // todo lo que este en este bloque se ejecuta luego de que el DOM (HTML) esté cargado


class Formulario {

    validarTexto(id) {
        var valor = "";
        valor = $("#"+id).val();
        var expRegularTexto=/^[A-Z a-z]+$/;

        $("#"+id).removeClass('error');
        if (!expRegularTexto.test(valor)){
            alert("No es valido, por favor introduzca solo letras")
            $("#"+id).val('');
            $("#"+id).addClass('error');
        }
    }
    
    validarNumeros(id) {
        var valor = "";
        valor = $("#"+id).val();
        var expRegularNumeros=/^[0-9]+$/;

        $("#"+id).removeClass('error');
        if (!expRegularNumeros.test(valor)){
            alert("No es valido, digite un numero valido")
            $("#"+id).val('');
            $("#"+id).addClass('error');
        }
    }
    validarCorreo(id) {
        var valor ='';
        valor = $("#"+id).val();
        var expRegularCorreo=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        $("#"+id).removeClass('error');
        if (!expRegularCorreo.test(valor)){
            alert("No es valido, digite una direccion de correo valida")
            $("#"+id).val('');
            $("#"+id).addClass('error');
        }
        
    }
    validarContrasena(id) {
        var valor ='';
        valor = $("#"+id).val();
        var expRegularContraseña=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i;
    
        $("#"+id).removeClass('error');
        if (!expRegularContraseña.test(valor)){
            alert("No es valida la contraseña, debe tener minino 8 caracteres, maximo 15, minimo una letra mayuscula, una minuscula, un numero y un caracter especial")
            $("#"+id).val('');
            $("#"+id).addClass('error');
        }
    }
    validarCheckBox(id){
        $('input[type=checkbox]').on('change', function() {
            if ($(this).is(':checked') ) {
                console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Seleccionado");
            } else {
                console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Deseleccionado");
            }
        });
    }

    formClear(){
        $("#nombre, #documento, #fechaNac, #genero, #tipoDoc ,#email, #password, #telefono").val('');
    }
    
    formDisable(){
        $("#nombre, #documento, #fechaNac, #genero, #tipoDoc ,#email, #password, #telefono").prop('disabled', true);
        $("input[name*='habilidades'], [name*='hobby']").prop('disabled', true);
    }
    
    formEnable(){
        $("#nombre, #documento, #fechaNac, #genero, #tipoDoc ,#email, #password, #telefono").prop('disabled', false);
        $("input[name*='habilidades'], [name*='hobby']").prop('disabled', false);
    }

    formDisableEdit(){
        $("#documento, #fechaNac, #genero, #tipoDoc").prop('disabled', true);
    }

  }

