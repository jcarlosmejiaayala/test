var problemOne = (function() {
  var message;
  var messages = [];
  var i = 1;
  var fizz = 'fizz';
  var buzz = 'buzz';

  function isModWithThree(num) {
    return !(num % 3);
  }

  function isModWithFive(num) {
    return !(num % 5);
  }
  for (; i <= 200; i++) {
    message = isModWithThree(i) && isModWithFive(i) ? fizz + buzz : isModWithThree(i) ? fizz : isModWithFive(i) ? buzz : null;
    if (message) {
      messages.push(message);
    }
  }
  return messages;
}());

var problemTwo = (function(word) {
  return [word.match(/[aeiou]/gi).length];
}('afnkfnaknrkaraaaraoqoqoqoq'));

var problemThree = (function(dateOne, dateTwo) {
  dateOne = new Date(dateOne);
  dateTwo = new Date(dateTwo);
  return [dateOne.toString(), dateTwo.toString()].indexOf('Invalid Date') !== -1 ? ['Some of arguments was a invalid date'] : [Math.floor((Math.abs(dateOne - dateTwo) / 1000) / 60)];
}('2011/10/09 00:00', '2011/10/09 12:00'));

var problemFour = (function(arr) {
  return arr[0].map(function(i, k) {
    return arr.map(function(j) {
      return j[k];
    });
  });
}([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]
]));

var problemFive = (function() {
  var movies = [{
    title: 'Titanic',
    starring: ['Leonardo DiCaprio', 'Kate Winslet'],
    isFavorite: false,
    score: 7.5
  }, {
    title: 'Man of steel',
    starring: ['Henry Cavill', 'Amy Adams'],
    isFavorite: true,
    score: 5
  }, {
    title: 'The dark knight',
    starring: ['Christian Bale', 'Heath Ledger'],
    isFavorite: true,
    score: 10
  }, {
    title: 'Spider-man',
    starring: ['Tobey Maguire', 'Kirsten Dunst'],
    isFavorite: true,
    score: 6
  }, {
    title: 'The avengers',
    starring: ['Robert Downey Jr.', 'Chris Evans'],
    isFavorite: false,
    score: 9.5
  }, {
    title: 'Iron man',
    starring: ['Robert Downey Jr.', 'Eric Loomis'],
    isFavorite: true,
    score: 7
  }, {
    title: 'Captain America',
    starring: ['Chris Evans', 'Red Brown'],
    isFavorite: false,
    score: 8.5
  }, {
    title: 'Hulk',
    starring: ['Mark Ruffalo', 'Lou Ferrigno'],
    isFavorite: false,
    score: 4
  }, {
    title: 'Thor',
    starring: ['Chris Hemsworth', 'Tom Hiddleston'],
    isFavorite: true,
    score: 3
  }, {
    title: 'Batman v Superman',
    starring: ['Ben Affleck', 'Gal Gadot'],
    isFavorite: false,
    score: 9
  }];

  function sort(filter) {
    return movies.sort(function(i, j) {
      return i[filter] < j[filter] ? -1 : i[filter] > j[filter] ? 1 : 0;
    });
  }

  function print() {
    return movies.map(function(i) {
      return [i.title, 'starring', i.starring.toString(), 'has a score', i.score].join(' ');
    });
  }
  return {
    sort: sort,
    print: print
  };
}());

var problemSix = (function(word) {
  wordNoSpaces = word.replace(/\s/g, '');
  return [wordNoSpaces === wordNoSpaces.split('').reverse().join('')];
}('anita lava la tina'));

var problemSeven = (function(word) {
  var distinct = {};
  var i = 0;

  function recur(word, prefix) {
    if (word.length === 0) {
      return [prefix];
    } else {
      var out = [];
      for (; i < word.length; i++) {
        var pre = word.substring(0, i);
        var post = word.substring(i + 1);
        out = out.concat(recur(pre + post, word[i] + prefix));
      }
      return out;
    }
  }
  recur(word, "").forEach(function(result) {
    distinct[result] = true;
  });
  return [Object.keys(distinct)];
}('abc'));

var problemEight = (function(arr) {
  var longestWordLength = arr.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  }).length;

  function repeat(l, c) {
    return new Array(l).join(c);
  }
  return [repeat(longestWordLength + 4, '#') + '\n', arr.map(function(i) {
    return ['# ', i, repeat(longestWordLength - i.length, ' '), ' #\n'].join('');
  }).join(''), repeat(longestWordLength + 4, '#')];
}(["November", "is", "the", "coolest", "month", "of", "the", "Year"]));

var problemNine = (function(arrOne, arrTwo) {
  return [
    [].concat.apply([], arrOne.map(function(i, k) {
      return [i, arrTwo[k]];
    }))
  ];
}(['x', 'y', 'z'], [10, 20, 30]));

var problemTen = (function(word) {
  var currentChar;
  var count = 1;
  var i = 1;
  var previousChar = word.charAt(0);
  var compressedWord = '';
  var wordLength = word.length;

  for (; i < wordLength; i++) {
    currentChar = word[i];
    if (previousChar === currentChar) {
      count++;
    } else if (count === 1) {
      compressedWord += previousChar;
      previousChar = currentChar;
    } else {
      compressedWord += previousChar + count;
      previousChar = currentChar;
      count = 1;
    }
  }

  if (count === 1) {
    compressedWord += currentChar;
  } else {
    compressedWord += currentChar + count;
  }
  return [compressedWord];
}("aabcccccaaa"));

//console.log.apply(console, problemOne);
//console.log.apply(console, problemTwo);
//console.log.apply(console, problemThree);
//console.log.apply(console, problemFour);
//console.log.apply(console, problemFive.sort());
//console.log.apply(console, problemFive.print());
//console.log.apply(console, problemSix);
//console.log.apply(console, problemSeven);
//console.log.apply(console, problemEight);
//console.log.apply(console, problemNine);
//console.log.apply(console, problemTen);
