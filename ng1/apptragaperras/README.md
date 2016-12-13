Basic Angular JS 1.x template, ready to work with local files. 

To run the app you can install [http-server](https://www.npmjs.com/package/http-server)
```
npm install http-server
./node-modules/http-server/bin/http-server
```

Then you will have your app running at http://localhost:8080

To run tests you need to install karma and jasmine:

```
npm install karma karma-jasmine jasmine-core karma-chrome-launcher
```

And then run karma from *js* folder

```
../node_modules/karma/bin/karma start
```


**NOTE**: If you're using npm 3.x.x, you should install jasmine-core globally too.
```
npm install -g jasmine-core
```

More info [here](https://code.ciphertrick.com/2015/08/03/angularjs-unit-testing-tutorial-karma-jasmine/)
