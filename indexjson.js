const http = require("http");

function onRequest(request, response){
    response.writeHead(200, {
        "Content-Type" : "application/json",
    })
    const data = {
        judul : "Rafathar Punya Adik",
        isiBerita : "sudah Famous sejak dini"
    }
    response.end(JSON.stringify(data));
}

http.createServer(onRequest).listen(9000)