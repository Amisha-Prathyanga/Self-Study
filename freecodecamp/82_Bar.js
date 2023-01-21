function calculateTotalBarLengthReq(
  width,
  height,
  rowHeightPercentage,
  barthickness
) {
  let maxRowHeight = (height * rowHeightPercentage) / 100;

  let rows = Math.ceil(height / maxRowHeight);

  let rowHeight = height / rows;

  let circleWidth = width / (rows * 2 - 1);

  let diameter = circleWidth * 0.8;

  let totalLength =
    (width + barthickness) * 2 +
    (height - rowHeight + barthickness) * 2 +
    Math.PI * (diameter + barthickness);

  if (
    Math.round(rowHeight) !== Math.round(height / rows) ||
    Math.round(circleWidth) !== Math.round(width / (rows * 2 - 1))
  ) {
    return "Cannot create a symmetrical design with the given inputs";
  }
  return totalLength;
}

let width = 100;
let height = 100;
let rowHeightPercentage = 20;
let barthickness = 10;
console.log(
  calculateTotalBarLengthReq(width, height, rowHeightPercentage, barthickness)
); // Output: 825.44

//-----------------------------------------------------------------------------------

// function calculateTotalBarLengthReq(
//   gateWidth,
//   gateHeight,
//   rowHeightPercentage,
//   barthickness
// ) {
//   let maxRowHeight = (gateHeight * rowHeightPercentage) / 100;

//   let rows = Math.ceil(gateHeight / maxRowHeight);

//   let rowHeight = gateHeight / rows;

//   let circleWidth = gateWidth / (rows * 2 - 1);

//   let diameter = circleWidth * 0.8;

//   let radius = diameter / 2;

//   let numberOfCircles = rows * 2 - 1;

//   let totalLength =
//     (gateWidth + barthickness) * 2 +
//     (gateHeight - rowHeight + barthickness) * 2 +
//     numberOfCircles * 2 * Math.PI * radius;

//   if (
//     Math.round(rowHeight) !== Math.round(gateHeight / rows) ||
//     Math.round(circleWidth) !== Math.round(gateWidth / (rows * 2 - 1))
//   ) {
//     return "Cannot create a symmetrical design with the given inputs";
//   }
//   return "Total bar length requirement = " + totalLength.toFixed(2) + "cm.";
// }
// console.log(calculateTotalBarLengthReq(500, 500, 20, 10));
