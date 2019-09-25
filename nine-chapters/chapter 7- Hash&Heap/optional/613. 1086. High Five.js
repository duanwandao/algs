// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.
//
//   Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.
//
//
//   Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]



  var highFive = function(items) {
  const students = {};

  for (let student of items) {
    let [id, score] = student;

    if (!students[id]) {
      students[id] = [score];
    } else {
      students[id].push(score);
    }
  }

  const res = [];

  for (let id in students) {
    const avg = Math.floor(
      (students[id]
        .sort((a, b) => b - a)
        .slice(0, 5)
        .reduce((accum, currVal) => accum + currVal)) / 5
    );
    res.push([id, avg]);
  }
  return res;


};


highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]);
