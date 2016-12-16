///////////////////////////////
/// VIEW liv_productos_siniestrados:
///////////////////////////////
Datos = new orion.collection('datos', {
  singularName: 'datos',
  pluralName: 'datos', 
  title: 'datos',

  link: {
    title: 'Datos',
//parent: 'sideBar'
 },
  tabular: {
  scrollX: true,
  dom: 'T<"clear">lfrtip<"clear">R<"clear">C',
  tableTools: {
            "sRowSelect": "os",
            "aButtons": [ "copy", "csv", "pdf", "select_all", "select_none" ],
            "sSwfPath": "/swf/copy_csv_xls_pdf.swf"
  },
  responsive: true,

    columns: [
    { data: "nombre", title: "Nombre"},
    { data: "direccion", title: "Direcciòn"},
    {
    tmpl: Meteor.isClient && Template.imagen
    }
] }});
///////////////////////////////
/// SCHEMA liv_productos_siniestrados:
///////////////////////////////
Datos.attachSchema(new SimpleSchema({
    nombre:{ type: String, label: 'Nombre'},
    direccion:{ type: String, label:'Direccion', optional: true, max:20 },
    imagen: orion.attribute('image', {
    optional: true,
    label: 'Foto'
  }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt'),
    updatedBy: orion.attribute('updatedBy'),
    updatedAt: orion.attribute('updatedAt'),
}));
///////////////////////////////
/// PUBLISH liv_productos_siniestrados:
///////////////////////////////

if(Meteor.isServer) {
  
    Meteor.publish('getDatos', function() {
      return Datos.find();
    });
};

if(Meteor.isClient) {
    Meteor.subscribe('getDatos');
};