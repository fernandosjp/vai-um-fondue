$("document").ready(function(){
    $(".btn-danger").click(function(){
        var cid = $(this).attr("id")
        $.ajax({
            url: "/stop",
            type: "POST",
            data: {id:cid}
        })
        .done(function(data){
            window.location.href = "/"
        })
    })

    $(".btn-success").click(function(){
        var cid = $(this).attr("id")
        $.ajax({
            url: "/start",
            type: "POST",
            data: {id:cid}
        })
        .done(function(data){
            window.location.href = "/"
        })
    })
})
