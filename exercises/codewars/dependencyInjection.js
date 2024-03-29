var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  var deps = this.dependency,
      args = func.toString().match(/^function\s*\((.*)\)/)[1].split(',').map(function (dep) {
        return deps[dep.trim()];
      }).filter(function (a) { return a; });

  return function () {
    return func.apply(null, args);
  };
}



var deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
};

var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

console.log(myFunc());
console.log('this is dep1 -> this is dep2 -> this is dep3')
