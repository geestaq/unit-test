const calculateDistancePoints = (distance, hillSize, kPoint) => {

  if(distance == 0) return 0;

  //zmienne zalezne od wielkosci skoczni (normalna, duza, mamucia)
  //podzial skoczni ze wzgledu na hillSize -> https://en.wikipedia.org/wiki/Ski_jumping
  //normalna
  let basePoints = 60;
  let deltaPointsPerMeter = 2;
  //duza
  if(hillSize > 109) {
    deltaPointsPerMeter = 1.8;
  }
  //mamucia
  if(hillSize > 184) {
    basePoints = 120;
    deltaPointsPerMeter = 1.2;
  }

  //wyliczenie punktow
  const points = basePoints + ((distance - kPoint) * deltaPointsPerMeter);
  return points > 0 ? Math.round(points * 10) / 10 : 0;
};

module.exports = calculateDistancePoints;
