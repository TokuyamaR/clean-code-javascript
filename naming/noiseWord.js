// BAD:重複した意味は命名が冗長となり不要
const descriptionText = "説明文";
const coldIceCreamFlavorList = ["チョコ", "バニラ", "ミント"];
const verticalAxisLine = "y-axis";
const mouthColorOnFace = "red";

// GOOD:不要なものを消す
const description = "説明文";
const iceCreamFlavorList = ["チョコ", "バニラ", "ミント"];
const verticalAxis = "y-axis";
const mouthColor = "red";
