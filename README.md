## spa-demo-frontend
### desc
> The project is working for XXXX that is in charge of frontend engineer.
> 
> The main features of the platform consist of 'XXXX, 'XXX' and so on.

### How to install
1. Clone it from gitlab to your local.
```
git clone XXX
```
2. Use npm to install dependencies, make sure your node version >= 6.
```
npm install
```

### How to run

1. Open the auto compiler, and you can get more info from cmd.
```
npm run dev
```
2. Open the node server, and the default server port is 1700.
```
npm run mock
```

### How to public

There are four envs for public. You can use option to set diff envs.
```
npm run build:[option]
```

> **option**: use to describe the public env.
> 
> Recognised type values are: **qa**, **test**, **ali** and **aws**

* You must optimize the config in */src/assets/js/tools.js:20-31*. 

* The url matched the env is significant to ajax.

