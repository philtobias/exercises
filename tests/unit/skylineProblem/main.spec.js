'use strict';

describe('skylineProblem()', function() {
  var buildings;

  beforeEach(function() {
    buildings = [];
  });

  it('works with 0 buildings', function() {
    expect(skylineProblem(buildings)).toBe(null);
  });

  it('works with 1 building', function() {
    buildings.push(new Building(1.5, 3, 8));
    expect(skylineProblem(buildings)).toEqual([
        new Point(1.5, 0),
        new Point(1.5, 8),
        new Point(3, 8),
        new Point(3, 0)
      ]);
  });

  it('works with 2 buildings', function() {
    buildings.push(new Building(1, 3, 8));
    buildings.push(new Building(2, 4, 5));
    expect(skylineProblem(buildings)).toEqual([
        new Point(1, 0),
        new Point(1, 8),
        new Point(3, 8),
        new Point(3, 5),
        new Point(4, 5),
        new Point(4, 0)
      ]);
  });

  it('works with 4 buildings', function() {
    buildings.push(new Building(3, 5, 4));
    buildings.push(new Building(4, 7, 2));
    buildings.push(new Building(6, 8, 3));
    buildings.push(new Building(1, 2, 2));
    expect(skylineProblem(buildings)).toEqual([
        new Point(1, 0),
        new Point(1, 2),
        new Point(2, 2),
        new Point(2, 0),
        new Point(3, 0),
        new Point(3, 4),
        new Point(5, 4),
        new Point(5, 2),
        new Point(6, 2),
        new Point(6, 3),
        new Point(8, 3),
        new Point(8, 0)
      ]);
  });

  it('works with 5 buildings', function() {
    buildings.push(new Building(0, 2, 2));
    buildings.push(new Building(1, 3, 3));
    buildings.push(new Building(1, 5, 4));
    buildings.push(new Building(2.5, 4, 5));
    buildings.push(new Building(3, 5, 6));
    expect(skylineProblem(buildings)).toEqual([
        new Point(0, 0),
        new Point(0, 2),
        new Point(1, 2),
        new Point(1, 4),
        new Point(2.5, 4),
        new Point(2.5, 5),
        new Point(3, 5),
        new Point(3, 6),
        new Point(5, 6),
        new Point(5, 4),
        new Point(5, 4),
        new Point(5, 0)
      ]);
  });
});