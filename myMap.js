

            function loadMapScenario() {
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                    credentials: '7EK3kXDJn5Ow5p7qhM6F~eTVkdKsV-84db9jnnZx3gg~Au919kE9EzGVJFubpBRqtmrDqVs1B3fk96G4FK9y_4lJuQKshCNKODsxj9D0yH9b'
                });
                var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/blob/gh-pages/images/pushpin_images/pokemon/1.png',
                    anchor: new Microsoft.Maps.Point(12, 39) });
                map.entities.push(pushpin);
                
            }
