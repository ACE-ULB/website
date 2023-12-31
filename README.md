# ACE Website

The website is created using [create-react-app](https://github.com/facebook/create-react-app "create react app") and was made to run as a statical website requiring little to no maintenance through the years.

This code is inspired by the Cercle Informatique de l'ULB [website](https://cercle-informatique.be) : [Their code here](https://github.com/Cerkinfo/website)

## How To Update

Coming soon...

## Requirements

### NPM

- Debian based distro: [follow this link](https://github.com/nodesource/distributions/blob/master/README.md "nodejs on Github")
- Arch based distro: `pacman -S nodejs npm`

### Project

```txt
> git clone "https://github.com/ACE-ULB/website"
> cd website
> npm install # or yarn install if you prefer
```

## Run Dev Instance

```txt
> npm run start
```

To create the index for the statical assets (pdf, markdown files and make them
visible for the website) you should also run these commands once.

```txt
> npm run compile
```

## Uploading new PV

```txt
npm run pv
```

## Compress Images

```txt
npm run compressor 
```
A new folder with the compressed images will be in a "compressed_images" folder outside the website folder (in the "../" direction).
You will need to replace the images manually.


## Deploying

To deploy the website you need the 'write' rights on this repository.

```txt
> npm run deploy
```

## Any Question Problem or Ideas

Contact: `web@ace-ulb.be`
