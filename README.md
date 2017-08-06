# React Exercise from codeSchool 'WatchUsBuild-React'

![demo](https://github.com/SusanLulu/React-watchUsBuild/raw/master/csreact.gif)

##### video1
1. template from 'powering up with react'
2. speedup by **transpiling through gulp**
3. **separate component.js** into 'components' folder
##### video2
4. extract **onDelete** component
5. refactor the **bind** strategy
###### including : 

```
{...comment}  
this._handleDelete = this._handleDelete.bind(this);
```

##### video3
>npm install react-router --save-dev
6. add **router and redirect** to homepage
7. add **apiUrl** to commentBox and **hashHistory** to parent Router

---
#### Babel with Gulp
Starter code for transpiling ES2015 (including modules) with Babel, Gulp and Browserify.


##### Installing

1.Clone the repo `git clone https://github.com/codeschool/WatchUsBuild-React `
</br>
2. `npm install -g gulp` to install Gulp globally.
</br>
3. `npm install` to resolve project dependencies.

##### Using

Run `npm start` from the command line and you are good to go!

The project is currently setup to transpile code under the _/src_ folder using the _/src/app.js_ file as an entry point.

Our resulting code ends up in the `public` directory.



