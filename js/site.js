
function compactCallHandlebars(
  /*@Author: Johann Echavarria*/
  selectorParentElement /* Parent element selector where you will append the template*/
  ,idMainTemplate /* main template id (in script tag) */
  ,arrParcialTemplates /*Array of parcial templates to register (ids script tag)*/
  ,jsonData /*data*/
  ){
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

    if ($('#worked-with-inner').length > 0) {
      compactCallHandlebars("#worked-with-inner", "workedWithTemplate",[], workedWithJSON);   
    }

    $('[data-toggle="tooltip"]').tooltip();


    $('a#donate-trigger').on('click', function(e) {
      e.preventDefault();
      $('form#donate').submit();
    }); 

})(jQuery);
