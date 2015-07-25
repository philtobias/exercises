'use strict';

function skylineProblem(aryBuildings) {
  var generateSkyline = function(buildings) {
    var len = buildings.length;
    var outlinePointsAry = [];
    var building;
    var mid;
    var firstHalfBuildings;
    var secondHalfBuildings;
    var firstHalfHeight;
    var secondHalfHeight;
    var currentX;
    var firstHalfPoint;
    var secondHalfPoint;
    var point;


    if(len === 1) {
      building = buildings[0];
      outlinePointsAry.push(new Point(building.left, 0));
      outlinePointsAry.push(new Point(building.left, building.height));
      outlinePointsAry.push(new Point(building.right, building.height));
      outlinePointsAry.push(new Point(building.right, 0));
      return outlinePointsAry;
    }

    mid = Math.floor(len / 2);

    // recursively split the list of buildings into two equal halves
    firstHalfBuildings = generateSkyline(buildings.slice(0, mid));
    secondHalfBuildings = generateSkyline(buildings.slice(mid, len));

    // merge each subset of buildings
    // maintain the height of both halves to always find the tallest building for the skyline
    firstHalfHeight = 0;
    secondHalfHeight = 0;

    // maintain the x position in the outline of the skyline
    currentX = 0;

    while(firstHalfBuildings.length && secondHalfBuildings.length) {
      firstHalfPoint = firstHalfBuildings[0];
      secondHalfPoint = secondHalfBuildings[0];

      // make sure we get the outermost outline when we get the lesser than x point
      // we then maintain that half's height and remove the lesser point from the list
      // of that set of the building
      if(firstHalfPoint.x < secondHalfPoint.x) {
        currentX = firstHalfPoint.x;
        firstHalfHeight = firstHalfPoint.y;

        outlinePointsAry.push(
          new Point(currentX, Math.max(firstHalfHeight, secondHalfHeight))
        );

        firstHalfBuildings.shift();
      } else {
          currentX = secondHalfPoint.x;
          secondHalfHeight = secondHalfPoint.y;

          outlinePointsAry.push(
            new Point(currentX, Math.max(firstHalfHeight, secondHalfHeight))
          );

          secondHalfBuildings.shift();
      }
    }

    // we've looped through one of the halves
    // append the remaining points for the other half
    if(firstHalfBuildings.length) {
      while(firstHalfBuildings.length) {
        point = firstHalfBuildings.shift();
        outlinePointsAry.push(new Point(point.x, point.y));
      }
    } else {
      while(secondHalfBuildings.length) {
        point = secondHalfBuildings.shift();
        outlinePointsAry.push(new Point(point.x, point.y));
      }
    }

    return outlinePointsAry;
  };

  var optimizeSkylinePoints = function(aryPoints) {
    var result = [];
    var i = 1;
    // keep a count of duplicate y points on the same line
    // we want it to be -1 because we will be incrementing it for each duplicate
    // a line must consist of at least two points, a starting and ending point
    var duplicateYCount = -1;
    var len = aryPoints.length;

    result.push(aryPoints[0]);

    while(i < len) {
      if(aryPoints[i].y === aryPoints[i - 1].y) {
        duplicateYCount++;
      } else {
        // remove extraneous points on the line
        while(duplicateYCount > 0) {
          // remove second to last item
          result.splice(result.length - 2, 1);
          duplicateYCount--;
        }

        duplicateYCount = -1;
      }

      result.push(aryPoints[i]);
      i++;
    }

    return result;
  };

  if(aryBuildings && aryBuildings.length) {
    // first sort by leftmost x point
    aryBuildings.sort(function(a, b) {
      return a.left - b.left;
    });

    // generate all skyline points
    var outlineAry = generateSkyline(aryBuildings);
    // optimize
    return optimizeSkylinePoints(outlineAry);
  }

  return null;
}