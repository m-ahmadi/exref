arr.toSorted(?compareFn=(a,b)=>)
arr.toSpliced(start, ?deleteCount, ?...items)
arr.toReversed()

a = [3,2,1];
b = a.toSorted();
b // [1,2,3]

a = [1,2,3];
b = a.toSpliced(1, 0, 44);
b // [1, 44, 2, 3]

a = [1,2,3];
b = a.toReversed();
b// [3,2,1]
