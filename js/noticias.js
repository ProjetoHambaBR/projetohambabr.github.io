(function() {
    $.getJSON( "dados/documentos.json", function( dados ) {
        var htmlStr = [];
        $.each( dados, function(e) {
            documento = dados[e];
            item = '';

            if (e === 0) {
                item += '<div class="row">';
            } else if ((e % 3) === 0) {
                item += '<div class="row mt-5">';
            }

            item += '<div class="col-lg-4">';
            item +=     '<div class="card wow fadeIn">';
            item +=         '<div class="card-body team-member">';
            item +=             '<h5 class="card-title">'+ documento.titulo +'</h5>';
            item +=             '<p class="card-text">'+ documento.descricao +'</p>';
            item +=             '<p class="card-text"> <i>'+ documento.versao +'</i> </p>';
            item +=             '<a class="social-link rounded-circle " data-toggle="tooltip" data-placement="bottom" title="Ver Documento" target="_blank" href="'+ documento.linkDoc +'">';
            item +=                 '<i class="icon-eye"></i>';
            item +=             '</a>';
            item +=         '</div>'
            item +=     '</div>'    
            item += '</div>';

            if (e > 0 && (e % 3) === 2) {
                item += '</div>';  
            } else if (e === dados.length) {
                item += '</div>'; 
            }

            htmlStr.push( item );
        });
        $('#documentos').append(htmlStr.join(""));
      });
})();