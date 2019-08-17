const minMoveStep = function (init_state, final_state) {
  const initState = convertStateToString(init_state);
  const finalState = convertStateToString(final_state);
  const queue = [initState];
  const set = new Set();
  set.add(initState);
  let step = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i ++) {
      const currState = queue.shift();

      if (currState === finalState) {
        return step;
      }
      const nextStates = buildNextState(currState);

      for (let nextState of nextStates) {
        if (set.has(nextState)) {
          continue;
        }
        set.add(nextState);
        queue.push(nextState);
      }
    }
    step ++;
  }
  return -1;
}

const convertStateToString = (state) => state.map((elems) => elems.join("")).join("");

const buildNextState = (stateString) => {
  const nextStates = [];
  let zeroIndex = stateString.indexOf("0");
  const deltaX = [-1, 0, 1, 0];
  const deltaY = [0, 1, 0, -1];
  let x = Math.floor(zeroIndex / 3);
  let y = zeroIndex % 3;


  for (let i = 0; i < 4; i ++) {
    const _x = x + deltaX[i];
    const _y = y + deltaY[i];
    if (!inBound(_x, _y)) {
      continue;
    }

    const stateArr = stateString.split("");      //string转化为array

    stateArr[zeroIndex] = stateArr[_x * 3 + _y];  // 0与另外一个数字互换，注意index的算法
    stateArr[_x * 3 + _y] = "0";

    nextStates.push(stateArr.join(""));
  }
  return nextStates;
}

const inBound = (x, y) => {
  return x >= 0 && x < 3 && y >=0 && y < 3;
}


const init = [[0,1,2],[3,4,5],[6,7,8]];
const final = [[1,2,3],[4,5,6],[7,8,0]];


console.log(minMoveStep(init, final))


