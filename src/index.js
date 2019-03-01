/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
   Love=0;
   num2 = 0;
   num3 = 0;
   for (var i = 0; i < preferences.length; i++) {
    sp1 = preferences[i];
    num1 = i;
      for (var j = 0; j < preferences.length; j++) {
        if (preferences[j] == sp1 + 1) {
          sp2 = preferences[j];
          num2 = j+1; 
        } else if (preferences[j] == sp1 - 1) {
          sp3 = preferences[j];
          num3 = j+1;
        };
      };
    if (num1 < num2) {
      if (num3 > num2) {
        Love++;
      };
    };
};
 return Love;
};

