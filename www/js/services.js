angular.module('starter.services', [])

.factory('Tools', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tools = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return tools;
    },
    remove: function(tool) {
      tools.splice(tools.indexOf(tool), 1);
    },
    get: function(toolId) {
      for (var i = 0; i < tools.length; i++) {
        if (tools[i].id === parseInt(toolId)) {
          return tools[i];
        }
      }
      return null;
    }
  };
});
