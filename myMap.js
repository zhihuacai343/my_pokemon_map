
map_manager = {
    "map":null,
    "map_items":[]
}

map_manger.map_items = [
    {
        "pokemon_id":13,
        "expire":1481867157,
        "longitude":-73.45,
        "latitude":40.75
    },
        {
        "pokemon_id":1,
        "expire":1481867157,
        "longitude":-73.45,
        "latitude":40.75
    }
    
]
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: '7EK3kXDJn5Ow5p7qhM6F~eTVkdKsV-84db9jnnZx3gg~Au919kE9EzGVJFubpBRqtmrDqVs1B3fk96G4FK9y_4lJuQKshCNKODsxj9D0yH9b'
    });
    
    map_manager.map = map;
    
    for (var i in map_manger.map_items){
        
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), { 
            icon: 'https://raw.githubusercontent.com/chenditc/mypokemon.io/gh-pages/images/pushpin_images/pokemon/' + map_item['pokemon_id']+'1.png',
            anchor: new Microsoft.Maps.Point(12, 39) });
        map.entities.push(pushpin);
    }
}
