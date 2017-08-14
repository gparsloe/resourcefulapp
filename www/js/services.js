angular.module('starter.services', [])

.factory('Tools', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tools = [{
    id: 0,
    name: 'Gratitude',
    lastText: 'Think of 5 things that you are grateful for. Consider sending someone a thank you email or mailing them a card.',
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
    lastText: 'Pull out that sword. Tame your beasty mind!',
    face: 'img/sword1.jpg'
  }, {
    id: 4,
    name: 'Make time to breathe. ',
    lastText: 'Slow down. Breathe. It\s worth it! A few breaths can change your state for the rest of the day.',
    face: 'img/turtle1.jpg'
  }, {
    id: 5,
    name: 'Expand. ',
    lastText: 'Stand up straight. Pull your shoulders back. Look up. Smile.',
    face: 'img/expand.jpg'
  }, {
    id: 6,
    name: 'Do something nice for someone else.',
    lastText: '',
    face: 'img/hands1.jpg'
  }, {
    id: 7,
    name: 'Take care of something that needs to get done.',
    lastText: '',
    face: 'img/todo1.jpg'
  }, {
    id: 8,
    name: 'Clean something for 10 minutes.',
    lastText: '',
    face: 'img/dishes1.jpg'
  }, {
    id: 9,
    name: 'Listen to music that shifts your state.',
    lastText: '',
    face: 'img/listen1.jpg'
  }, {
    id: 10,
    name: 'Massage your own feet or shoulders.',
    lastText: '',
    face: 'img/feetInWater.jpg'
  }, {
    id: 11,
    name: 'Pay attention externally. ',
    lastText: 'Look all that\s around you, get outside of your mind. Name 3 things that you see, 3 things that you hear, 3 things that you feel. Look up and smile.',
    face: 'img/water2.jpg'
  }, {
    id: 12,
    name: 'Take a bath.',
    lastText: 'Enjoy the preparation and anticipation of climbing in.',
    face: 'img/HappyBabyBath.jpg'
  }, {
    id: 13,
    name: 'Connect with a friend.',
    lastText: 'If no one is around to be with or to talk to, imagine them in your mind and what you love about them. Consider sending them an email and telling them how much you love them. Feel free to be very specific about what you love about them.',
    face: 'img/call1.jpg'
  }, {
    id: 14,
    name: 'Go outside. Consider taking a walk or just being outdoors and doing anything. Get outside your mind by noticing what\s around you.',
    lastText: '',
    face: 'img/flower3.jpg'
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
