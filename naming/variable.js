// BAD:listは配列を想起させるので不適切
const averageList = {
  japanese: 70,
  math: 100,
  society: 80,
  english: 60,
};

// GOOD:
const AVERAGE_SCORE = {
  japanese: 70,
  math: 100,
  society: 80,
  english: 60,
};

// BAD:適切な命名が行われていない
// 配列を昇順に並び替えて返却する関数
function orderChar(array) {
  return array.sort((first, second) => first - second);
}

// GOOD:
function sortAscending(array) {
  return array.sort((first, second) => first - second);
}
