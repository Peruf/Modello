<template>
    <h1>Pagina 1</h1>
</template>

<script>

    export default{

    }
</script>



<!--$(function() {
    $.ajax("https://www.boardgameatlas.com/api/search?limit=20&client_id=vuxWmH7cLW", {
        success: function(data) {
            for (i = 0; i < data.games.length; i++) {
                var li = $("<li>");
                var a = $("<a>");

                a.text(data.games[i].name);
                a.attr("href", data.games[i].url);
                
                li.append(a);
                $("#elenco").append(li);

                console.log(data.games[i]);
            }

            // console.log(data.games.length);
            // console.log(data);
        }
    });
});-->