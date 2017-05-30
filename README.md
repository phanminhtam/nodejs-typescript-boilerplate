# nodejs-typescript-boilerplate

### Prepare
1. Install [nodejs](https://nodejs.org/en/)
2. Install [typescript](https://www.typescriptlang.org/)
3. TIP: you should use [Visual Studio Code](https://code.visualstudio.com/)

### I. Install
```
You can clone this repository or you can do below tutorial
```

- New project folder
- Initialization npm: > npm init (will create file package.json)
```
package.json

{
  ...
  "scripts": {
    "build": "gulp build; tsc",
    "rebuild": "gulp re-build; tsc",
    "start": "node index",
    "release": "gulp re-build --env=production; tsc"
  },
  ...
}

```

- Initialization typescript: > tsc --init (will create file tsconfig.json)
```
tsconfig.json

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "typeRoots": [ "node_modules/@types" ],
        "rootDir": "src",
        "outDir": "dist"
    },
    "exclude": [
        "node_modules"
    ]
}
```

- Install libs
```
> npm install --save express body-parser morgan cors lodash moment express-validator
> npm install --save-dev @types/node @types/express @types/body-parser @types/cors @types/morgan @types/lodash @types/moment gulp del gulp-merge-json

```

- Then create folder and files folow structure
```
ROOT
|-- asset (optional - content public file: css, js, image)
|-- config (config folder)
|-- src (source code typescript)
    |-- controllers
    |-- database
    |-- helpers
    |-- models
    |-- repositories (database)
    |-- services
    |-- uitils
    |-- validators
    |-- servers.ts
|-- task
|-- views
|-- package.json
|-- tsconfig.json
```

### II. Run
1. Install package
```
> npm install
```

2. Build
```
> npm run build OR npm run build --env=development
> npm run build --env=production

Note
* config in file package.json 
* use gulp tasks
* template: npm run build --env=[name-env]
```

3. Run
```
> npm start
```