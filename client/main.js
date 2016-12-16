Template.usuarioFoto.helpers({
	ruta:function(){
		return Meteor.user().profile.picture.url;
	}
})