angular.module('starter.services', [])

.factory('Tools', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tools = [{
    id: 0,
    name: 'Gratitude',
    lastText: 'Think of 5 things that you are grateful for.',
    face: 'img/buds.jpg'
  }, {
    id: 1,
    name: 'Exercise',
    lastText: 'Work out hard.',
    face: 'img/swim1.jpg'
  }, {
    id: 2,
    name: 'Distraction',
    lastText: 'Pay attention to something external. Get out of your head, if it is doing crazy-making things',
    face: 'img/turtle3.jpg'
  }, {
    id: 3,
    name: 'Cut off negative thoughts',
    lastText: 'Pull out that sword!',
    face: 'img/sword1.jpg'
  }, {
    id: 4,
    name: 'Make time to breathe. It\s worth it!',
    lastText: 'This is wicked good ice cream.',
    face: 'img/turtle1.jpg'
  }, {
    id: 5,
    name: 'Are you contracted? If yes, expand. Stand up straight. Pull your shoulders back. Look up. Smile.',
    lastText: '',
    face: 'img/expand.jpg'
  }, {
    id: 6,
    name: 'Do something nice for someone else.',
    lastText: '',
    face: 'img/flower1.jpg'
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
