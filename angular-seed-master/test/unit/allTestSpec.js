'use strict';

/* jasmine specs for controllers go here */

describe("A spy", function() {
  var foo, bar = null;
  var setBar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
        console.log("aa1 "+bar);
      },
      getBar: function() {
        return bar;
      }
    };

    /*setBar = function(value) {
        bar = value;
        console.log("setBar "+bar);
      };*/


	//A spy can stub any function and tracks calls to it and all arguments
    spyOn(foo, 'setBar');
    //spyOn(setBar);
    //setBar(1234);

    //the spy will still track all calls to it but in addition it will delegate to the actual implementation.
    //spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    console.log("ZZ1 "+bar);
    foo.setBar(456, 'another param');
    console.log("ZZ2 "+bar);
  });

  it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
      //expect(foo).toBe(jasmine.any(Function));
    });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
    //expect(setBar).toHaveBeenCalled();
  });

  xit("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  xit("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});

/*describe("A spy, when configured to throw an error", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function() {
    //expect(function() {foo.setBar(123)}).toThrowError("quux");
  });
});*/

/*describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar').and.callThrough();
  });

  it("can call through and then stub in the same spec", function() {
    foo.setBar(123);
    expect(bar).toEqual(123);

    foo.setBar.and.stub();
    bar = null;

    foo.setBar(123);
    expect(bar).toBe(null);
  });
});*/