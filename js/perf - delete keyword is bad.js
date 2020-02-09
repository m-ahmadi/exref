// ordered from slowest to fastest

// operations per second:
o["p"] = null      // 3,958,459 fastest
o.p = null         //   468,085
o.p = ''           //   447,885
o.p = undefined    //   389,015
o["p"] = undefined //   375,748
delete o.p         //    98,906
delete o["p"]      //    98,281 slowest (40x slower than fastest)