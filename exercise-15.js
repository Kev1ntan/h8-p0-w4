//Logic Challenge: Highest Score
console.log('Logic Challenge: Highest Score');
function highestScore (students) {
    if (students.length === 0) {
        return {};
    }
    var results = {};
    for (let i = 0; i < students.length; i++) {
        if (i === 0) {
            results[students[i].class] = {}
            results[students[i].class].name = students[i].name
            results[students[i].class].score = students[i].score
        }
        else {
            if (results[students[i].class] === undefined) {
            results[students[i].class] = {}
            results[students[i].class].name = students[i].name
            results[students[i].class].score = students[i].score
            }
            else {
                if (results[students[i].class].score < students[i].score) {
                    results[students[i].class].name = students[i].name
                     results[students[i].class].score = students[i].score
                }
            }
        }
    }
    return results;
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}