const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1473, 1473, 1473, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 1473, 1473, 1473, 1473, 1473, 1473, 0, 0, 0, 0,
    0, 0, 1473, 1473, 0, 0, 1473, 1473, 1473, 0, 1473, 1473, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0,
    0, 0, 1473, 0, 0, 0, 0, 0, 1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0,
    1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 1473, 1473, 0, 1473, 1473, 1473, 1473, 1473, 0, 0, 0,
    0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 1473, 1473, 0, 1473, 1473, 1473, 1473, 1473, 0, 0, 0,
    0, 0, 0, 1473, 1473, 1473, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 1473, 0, 0, 0, 0, 0, 1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1473, 1473, 1473, 1473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]