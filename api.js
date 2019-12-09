//var url = 'https://openweathermap.org/data/2.5/weather?q=London&units=imperial,uk&appid=b6907d289e10d714a6e88b30761fae22';
//var api = 'https://openweathermap.org/data/2.5/weather?q=';
//var city = 'London';
//var apiKey = '&appid=b6907d289e10d714a6e88b30761fae22';
//e5a5f0368eb8c2ff170b7bf5dddbbd0e
//var units = '&units=imperial';

$(document).ready(function(){
    
    $('#submit').click(function(){
        var city = $('#city').val();
        var key = 'b6907d289e10d714a6e88b30761fae22';
        
        $.ajax({
            url: 'https://openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q:city, appid: key, units: 'imperial'},
        
        success: function(data){
            var wf = '';
            $.each(data.weather, function(index, val){
                wf += '<p><b>' + data.name + '</b><img src="http://openweathermap.org/img/w/' + val.icon + '.png"></p>' + data.main.temp +  '&deg;F ' + ' | ' + val.main + ", " + val.description            
            });
            
            $("#results").html(wf);
        }
            
        })
    })
    
});
