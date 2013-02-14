/**
* Agregar comentarios
* @submodule add-comment
* @main index
*/
miniApp.addModule('index/index/add-comment/', (function() {
    /*private*/

    


    var defaults = {},
    dom = {
        inputComment : $('#input-comment'),
        btnSend : $('#send'),
        commentWrapper : $('.comment-wrapper')
    },
    names = new Array(),
    setNames = function() {      
        names[1]='Erik Flores';
        names[2]='Brayan Borda';
        names[3]='Jaime Rodriguez';
        names[4]='Andres Muñoz';
        names[5]='Jan Sanchez A';
        names[6]='Leila Salazar';
    },
    getId = function() {
        var id = Math.floor((Math.random()*names.length)+1);
        return id < names.length ? id : getId();
    },
    getComment = function() {      
        return dom.inputComment.val();
    },
    clearComment = function() {      
        dom.inputComment.val('');
    },
    showComment = function(comment){      
        var id = getId();
        clearComment();        
        dom.commentWrapper
        .append('<div class="comment"><img alt="'+names[id]+'" src="img/'+id+'.jpg"><p>'+names[id]+'</p><span>'+comment+'</span></div>');
        dom.commentWrapper.children().last().css('display','none').fadeIn(500);
    },
    init = function(st) {
        console.log(st.param1);
        console.log(st.param2);
        setNames();
        dom.btnSend.bind('click', function() {
            showComment(getComment());
            console.log('comentario agregado');
        });
    },
    destroy = function(args) {

    };
    /*public*/
    return {
        init : init,
        destroy : destroy
    }
}()));