
map_manager = {
    "map":null,
    "map_items":[]
}

map_manager.map_items = [
    {
        "pokemon_id":13,
        "expire":1481867157,
        "longitude":-73.46,
        "latitude":40.75
    },
        {
        "pokemon_id":1,
        "expire":1481867157,
        "longitude":-73.45,
        "latitude":40.75
    }
    
]


function query_pokemon_data(){
    var bounds = map_manager.map.getBounds();
    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        north: bounds.getNorth(),
        east: bounds.getEast(),
        south: bounds.getSouth(),
        west: bounds.getWest(),
    };
    
    
    console.log(params);
   
    apigClient.mapPokemonGet(params, {}, {})
        .then(function(result){
            map_manager.map_items = result.data;
            console.log(result.data);
            
            //This is where you would put a success callback
        }).catch( function(result){
            //This is where you would put an error callback
            console.log(result);
        });
}

function getCountDown(expire){
    var now_time = new Date().getTime()/1000;
    var left_time = Math.floor(expire-now_time);
    var seconds = left_time % 60;
    var minutes = Math.floor(left_time / 60);
    return minutes + " : " + seconds;
}


function refresh(){
    //prepare the push pins.
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    for (var i in map_manager.map_items){
        
        var map_item = map_manager.map_items[i];
        var iconurl = 'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item['pokemon_id']+'1.png'
        var count_down = getCountDown(map_item["expire"]);
        
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), { 
            icon: iconurl,
            title: count_down
             });
        //map.entities.push(pushpin);
        pushpins.push(pushpin);
     }
    layer.add(pushpin);
    
    //clear old pushpins;
    map_manager.map.layers.clear();
    
    //add new pushpins;
    map_manager.map.layers.insert(layer);
    
    
}
function loadMapScenario() {
   
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: '7EK3kXDJn5Ow5p7qhM6F~eTVkdKsV-84db9jnnZx3gg~Au919kE9EzGVJFubpBRqtmrDqVs1B3fk96G4FK9y_4lJuQKshCNKODsxj9D0yH9b'
    });
    
    map_manager.map = map;
    window.setInterval(query_pokemon_data,5000);
    window.setInterval(refresh,1000);
    
    
}
