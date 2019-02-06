# Apps menu

Modified version of [this startpage](https://github.com/Enriquito/startpage), but prepared to use ports.

Favicon was made by [smashicons](https://www.flaticon.com/authors/smashicons).

Made with Create Reacts App

## How to build locally

```bash
yarn install
yarn build
```

## How to build with Docker

```bash
docker build -t apps-menu .
docker run -p 80:80 apps-menu
```

## Adding more apps

If you wish to add more apps, simply modify the `public/links.json` file with a new value.