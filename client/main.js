Template.usuarioFoto.helpers({
	ruta:function(){
		return Meteor.user().profile.picture.url;
	}
})

Template.imagen.onRendered(function(){
	console.log(this);
})