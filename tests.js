///////////////////////////////////////
// POSTFIX
///////////////////////////////////////
UserProfileSchema = new SimpleSchema({
  // name: {
  //   type: String,
  //   label: orion.helpers.getTranslation('accounts.schema.profile.name')
  // },
  // ubicacion : {
  //   type: String,
  //   label: "Ubicaciòn",
  //   allowedValues: [ 'CDMX','MTY'], autoform: {firstOption: true}
  // },

  picture: orion.attribute('image', {
    optional: true,
    label: 'Foto'
  }),
/*  bio: {
    type: String,
    label: 'Bio'
  },
  */

});

orion.accounts.profileSchema = new SimpleSchema({
  profile: {
    type: UserProfileSchema
  }
});
