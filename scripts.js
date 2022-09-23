window.onload = function() {
    variable=document.querySelector("#main")
    mylist=""
    $.ajax({
        url: "http://localhost/Backend/news/news.php",
        success: function (data) {
          data = JSON.parse(data);
        for (let i=0; i<data.length; i++) {
            title=data[i].title;
            text=data[i].text;
            image=data[i].image;
                block=`<h2>${title}</h2>
                <p>${text}</p>
                <div class="card" style="width:400px">
                <img class="card-img-top" src="${image}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text"></p>
                </div>`
                mylist+=block
        },
        variable.innerHTML+=mylist
        });




}