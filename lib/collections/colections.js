///////////////////////////////
/// VIEW liv_productos_siniestrados:
///////////////////////////////
Datos = new orion.collection('datos', {
  singularName: 'Producto siniestrado',
  pluralName: 'Productos siniestrados', 
  title: 'Productos siniestrados',

  link: {
    title: 'Productos siniestrados'
// parent: '_template'
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
] }});
///////////////////////////////
/// SCHEMA liv_productos_siniestrados:
///////////////////////////////
Datos.attachSchema(new SimpleSchema({
    nombre:{ type: String, label: 'Nombre'},
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
      return Liv_productos_siniestrados.find();
    });
};

if(Meteor.isClient) {
    Meteor.subscribe('getDatos');
};