# React rerender 

## [The problem](https://github.com/vinicius5581/react-rerender/commit/844a03f68d867106a1f2ca1ce4cc20c20ede24f5)

Because I'm using `React.Component`,  when I've placed a setInterval in the react lifecycle method ComponentDidMount, calling `this.setState` every 2.5 seconds, independently of changing the value of `state.score`, both components, App and Score, will be re-rendered every 2.5 seconds. 

![image](https://user-images.githubusercontent.com/1258955/49054372-db3fee80-f1a8-11e8-8157-1e4ecefc922c.png)


## [Avoiding unwanted re-rendering using shouldComponentUpdate lifecycle method](https://github.com/vinicius5581/react-rerender/commit/6b37b220f96edd7b3fcbf6f37b9b5a43179ea02e)

One way to fix the problem presented on https://github.com/vinicius5581/react-rerender/commit/844a03f68d867106a1f2ca1ce4cc20c20ede24f5, is using the lifecycle method `shouldComponentUpdate` that returns a boolean and only when its true, the component will rerender.

The method `shouldComponentUpdate` takes the `nextProps` and `nextState` as props, allowing me to compare them with the current state and props. I can easly define a boolean expression comparing `this.state.score` and `nextState.score` and return true when they are different. 

![image](https://user-images.githubusercontent.com/1258955/49054499-47225700-f1a9-11e8-9e68-da5e16ff04bc.png)

## [Avoiding unwanted re-rendering using PureComponent](https://github.com/vinicius5581/react-rerender/commit/16c2c60a464570076098ac946bec01028910b83d)

Another way to avoid unnecessary re-rendering when the value of state don't change is using `React.PureComponent` instead of `React.Component`. `PureComponents` do a shallow comparison of the current state with the next state and if they are the same the component won't re-render. 

![image](https://user-images.githubusercontent.com/1258955/49055017-03305180-f1ab-11e8-8e6a-de5a464d2320.png)


## [PureComponent with nested state](https://github.com/vinicius5581/react-rerender/commit/0bfcd36a8204a0e7251e5f74e40926f5ac8ce9b1)

'PureComponent' will rerender if a referenced value (objects, array) gets updated even if the values don't change.  

![image](https://user-images.githubusercontent.com/1258955/49055547-ccf3d180-f1ac-11e8-9431-7970bd8a24dd.png)
