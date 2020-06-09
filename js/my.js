function set_zapoved(zapoved_id)
{
    $("#carousel_block .carousel-inner .item").removeClass("active");
    $("#carousel_block .carousel-inner .item").eq(zapoved_id - 1).addClass("active");
    $("#carousel_block .carousel-indicators li").removeClass("active");
    $("#carousel_block .carousel-indicators li").eq(zapoved_id - 1).addClass("active");
    $(".carousel-inner").hide().fadeIn("slow");
}

function next_zapoved()
{
    for (let i = 0; i < $("#carousel_block .carousel-indicators li").length; i++)
    {
        if ($("#carousel_block .carousel-indicators li").eq(i).hasClass("active"))
        {
            if (i + 2 === $("#carousel_block .carousel-indicators li").length + 1) { set_zapoved(1); break; }
            else { set_zapoved(i + 2); break; }
        }
    }
}

function prev_zapoved()
{
    for (let i = 0; i < $("#carousel_block .carousel-indicators li").length; i++)
    {
        if ($("#carousel_block .carousel-indicators li").eq(i).hasClass("active"))
        {
            if(!i) { set_zapoved($("#carousel_block .carousel-indicators li").length); break; }
            else { set_zapoved(i); break; }
        }
    }
}