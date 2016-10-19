$(document).ready(function() {

 	//carousel de imagens
 	$('.carousel').bxSlider({
 		slideWidth: 280,
	    minSlides: 2,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 10,
	    pager: false
 	});

 	//accordion
	$( "#descricao" ).accordion({
		/*collapsible: true,*/
		heightStyle: 'content'
	});

	//mascara para telefone no form
	$('.telefone').mask('(99) 99999.9999');

	//validando os campos no form
	$(".formulario").validate({
		rules : {
             nome:{
                    required:true,
                    minlength:3
             },
             email:{
                    required:true,
                    email:true
             },
             telefone:{
                    required:true
             },
             mensagem:{
                    required:true
             }                                
       },
       messages:{
             nome:{
                    required:"Este campo é obrigatório.",
                    minlength:"O nome deve ter pelo menos 3 caracteres"
             },
             email:{
                    required:"É necessário informar um email",
                    email:"Digite um email válido."
             },
             telefone:{
             		required:"Coloque seu telefone por favor."
             },
             mensagem:{
                    required:"Escreva uma mensagem por favor."
             }     
       }

	});
});