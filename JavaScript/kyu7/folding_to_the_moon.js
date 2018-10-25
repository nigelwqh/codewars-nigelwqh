function foldTo(distance) {
  let noOfFolds = 0;
  let paperThickness = 0.0001;

  if (distance <= 0) {
    return null;
  } else {
    while (paperThickness < distance) {
      paperThickness *= 2;
      noOfFolds++;
    }
  }
  return noOfFolds;
}

console.log(foldTo(384000000));