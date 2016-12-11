# How I built this example

To create this basic jasmine example from scratch, follow these steps

## Install the tools and set up a new folder

First, create a new folder

```
mkdir appmat && cd $_
```

Install those generators (*yo* is not really needed, but if you're using npm 3.x.x, this avoids the *unmet peer dependencies* warning)

```
npm install -g yo generator-jasmine generator-karma
```

Now run them

```
yo jasmine && yo karma
```

Install the PhantomJS launcher. It will load a headless browser to run the tests

```
npm install --save-dev karma-phantomjs-launcher
```

Install the core library and karma runner globally (it saves from errors)

```
npm install -g jasmine-core karma karma-jasmine
```

## Create new file to be tested

Inside *test* folder, create a new file, named *app.js*, with this content

```
MathUtils = function () {};

MathUtils.prototype.sum = function (number1, number2) {
  return number1 + number2;
}

MathUtils.prototype.substract = function (number1, number2) {
  return number1 - number2;
}

MathUtils.prototype.multiply = function (number1, number2) {
  return number1 * number2;
}

MathUtils.prototype.divide = function (number1, number2) {
  return number1 / number2;
}

MathUtils.prototype.average = function (number1, number2) {
  return (number1 + number2) / 2;
}

MathUtils.prototype.factorial = function (number) {
  if (number < 0) {
    throw new Error("There is no factorial for negative numbers");
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
}
```

## Create tests

Put this into *test/spec/test.js*

```
describe("MathUtils", function () {
  var calc;

  //This will be called before running each spec
  beforeEach(function () {
    calc = new MathUtils();
  });

  //Spec for sum operation
  it("should be able to calculate sum of 3 and 5", function () {
    expect(calc.sum(3, 5)).toEqual(8);
  });

  //Spec for multiply operation
  it("should be able to multiply 10 and 40", function () {
    expect(calc.multiply(10, 40)).toEqual(400);
  });

  //Spec for factorial operation for positive number
  it("should be able to calculate factorial of 9", function () {
    expect(calc.factorial(9)).toEqual(362880);
  });

  //Spec for factorial operation for negative number
  it("should be able to throw error in factorial operation when the number is negative", function () {
    expect(function () {
      calc.factorial(-7)
    }).toThrowError(Error);
  });

  //Test for sum operation
  it("should call sum with args 3 and 5", function () {
    spyOn(calc, 'sum');
    //call any method
    calc.sum(3, 5);

    //verify it got executed
    expect(calc.sum).toHaveBeenCalled();
    expect(calc.sum).toHaveBeenCalledWith(3, 5);
  });

});
```


## Set up test/index.html to show HTML report 

First, add the new file

```
<script src="app.js"></script>
```

Now, add this before closing body

```
<script>
    var jasmineEnv = jasmine.getEnv();
  
    // Tell it to add an Html Reporter
    // this will add detailed HTML-formatted results
    // for each spec ran.
    jasmineEnv.addReporter(new jasmine.HtmlReporter());
  
    // Execute the tests!
      jasmineEnv.execute();
  </script>
```

At this point, you can open index.html in you browser to check the tests result.


## Tweak test/karma.conf.js to run the tests

Make sure *files* property looks like this

```
files: [
      'app.js',
      'spec/**/*.js'
    ],
```

Now you can run 

```
npm test
```

To check the test results in the console