jQuery(document).ready(function($) {
	// $(":input").attr("disabled",true);
	$(":input").addClass('mi-clase');
	$(":input").click(function(event) {
		console.log("Click");
	});
	// console.log("LIsto")
});
// ReactiveTemplates.request('collections.datos.update');
ReactiveTemplates.events('collections.datos.update',{
	// "keyup :input[name='nombre']":function(evt){
	"keyup :input":function(evt){
		evt.target.value = evt.target.value.toUpperCase();
	}
});

ReactiveTemplates.onRendered('collections.datos.update',function(){
	console.log("Hola");
});



// ReactiveTemplates.set('collections.datos.update', 'mitemplate');
