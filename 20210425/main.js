$(function(){
    $("input").on("click",function(){
        var a1  = $("li").length;
        var a2  = Math.floor(Math.random()*a1);
        var a3 = ["https://d20aeo683mqd6t.cloudfront.net/zh-hant/articles/title_images/000/038/935/medium/pixta_34301578_M.jpg","https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg","https://foodpicks.tw/wp-content/uploads/2019-11-03_114250-696x406.jpg"]; 
        $("h1").text($("li").eq(a2).text());
        $("img").attr("src",a3[a2]);


        // $<"img">.attr("src",text(a3[a2].text())

    });
});