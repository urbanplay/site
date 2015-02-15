
function compactCallHandlebars(
  /*@Author: Johann Echavarria*/
  selectorParentElement /* Parent element selector where you will append the template*/
  ,idMainTemplate /* main template id (in script tag) */
  ,arrParcialTemplates /*Array of parcial templates to register (ids script tag)*/
  ,jsonData /*data*/
  ){
    debugger;
    //Compile template:
    var theTemplate = Handlebars.compile ( $( "#" + idMainTemplate ).html() ); 
    //Add parcials with the same name as id:
    $.each(
      arrParcialTemplates, 
      function( index, value ) {
        Handlebars.registerPartial( value, $( "#" +  value ).html() );            
      });                
    //Append template to parent with data:                
    $( selectorParentElement ).append( theTemplate( jsonData ) );  
  }


(function($){

    compactCallHandlebars("#worked-with-inner", "workedWithTemplate",[], workedWithJSON);   

    $('[data-toggle="tooltip"]').tooltip();

})(jQuery);
