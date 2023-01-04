// BAD:マジックナンバー・マジックキャラクターは避ける
// 徳島：36
// 香川：37
// 愛媛：38
// 高知：39
isShikoku = code === "36" || code === "37" || code === "38" || code === "39";

// GOOD
const PREFECTURE = {
  tokushima: "36",
  kagawa: "37",
  ehime: "38",
  kochi: "39",
};


