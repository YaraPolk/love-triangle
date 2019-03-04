/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  lov = preferences.length;
  Love = 0;
  el1 = 0;
  el2 = 0;
  el3 = 0;
  for (i=0; i < lov; i++) {
    ind1 = preferences[i]; //2
    ind2 = i + 1; //1
    ind3 = preferences[ind1 - 1]; //3
    ind4 = preferences[ind3 - 1];  // 1
    if (i == 0) {
        if (ind4 === ind2 && ind1 !== ind2) {
        Love++;
        el1 = ind1 - 1;
        el2 = ind3 - 1;
        el3 = ind4 - 1;
        delete preferences[el1];
        delete preferences[el2];
        delete preferences[el3];
        };
    } else if (i !== el1 && i !== el2 && i !== el3) {
        if (ind4 === ind2 && ind1 !== ind2) {
            Love++;
            el1 = ind1 - 1;
            el2 = ind3 - 1;
            el3 = ind4 - 1;
            delete preferences[el1];
            delete preferences[el2];
            delete preferences[el3];
        };
    };
};
 return Love;
};

