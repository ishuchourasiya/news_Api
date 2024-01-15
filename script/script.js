var baseUrl= "https://newsapi.org/v2/everything"
var apiKey = "58f2b068faa144c68a5d42dbb551921b;"

$('#getNews').click(function(){
var searchNews = $('#newsSearch').val();
var date = $('#newsDate').val();

// console.log(searchNews);
// console.log(date);
$.get(`${baseUrl}?q=${searchNews}&${date}&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
        function(data,status){
        randerNews(data.articles);
});
});

$(document).ready(function(){
    $.get(`${baseUrl}?q=popular&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
        function(data,status){
        randerNews(data.articles);
        });
    });

    $('#homeNews').click((a)=>{
            $.get(`${baseUrl}?q=local&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
            function(data,status){
             randerNews(data.articles);
        });
    });

    $('#worldsNews').click((a)=>{
    $.get(`${baseUrl}?q=world&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
         randerNews(data.articles);
         });
    });

$('#indiaNews').click((a)=>{
    $.get(`${baseUrl}?q=India&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
        function(data,status){
        randerNews(data.articles);
        })
    });

$('#techNews').click((a)=>{
    $.get(`${baseUrl}?q=teachnology&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#businessNews').click((a)=>{
    $.get(`${baseUrl}?q=business&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#politicalNews').click((a)=>{
    $.get(`${baseUrl}?q=political&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#healthNews').click((a)=>{
    $.get(`${baseUrl}?q=health&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#eduNews').click((a)=>{
    $.get(`${baseUrl}?q=education&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#sportNews').click((a)=>{
    $.get(`${baseUrl}?q=sports&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
        })
    });

$('#EntNews').click((a)=>{
    $.get(`${baseUrl}?q=Entertainment&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
    })
});

$('#fashionNews').click((a)=>{
    $.get(`${baseUrl}?q=fashion&news&sortBy=publishedAt&apiKey=58f2b068faa144c68a5d42dbb551921b`,
    function(data,status){
        randerNews(data.articles);
    })
});

$(document).ready(a=>{

    $.get(`https://api.openweathermap.org/data/2.5/weather?q=indore&metric&appid=72bfc213ee77dab65b17f5d2abb1938b`,function(data,status){
    var kelvin = (data.main.temp);
    var celsius = parseInt(kelvin-273);
    console.log(celsius);
    $('#weatherTemp').html("INDORE &nbsp"+celsius+"°C");
    
    });
});





function randerNews(data){
    console.log(data);
    newsString="";
    data.forEach((a) => { 
        if(a.author && a.title && a.description && a.urlToImage){
            newsString += `<div class="col-lg-3 col-md-3 col-sm-12 mt-1">
        <div class= "card bg-dark text-white" style="height:400px; overflow:auto">
        <h4 class="card-title">${a.title}</h4 >
        <img src="${a.urlToImage}" class="card-img-top">
        <div class=""card-body">
        <p class="card-text">${a.description}</p>
        <h3 class="card-header">${a.author}</h3>
        </div>
        </div>
        </div>`;
        }
    });
    $('#rowOutput').html(newsString);
}
