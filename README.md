# TffT! A simple countdown clock

A simple countdown clock to help you tick down the seconds to that thing you're looking forward to.

Hosted at: [tfft.dholmes.co.uk](https://tfft.dholmes.co.uk/). Read more on the [blog post](https://dholmes.co.uk/blog/tfft-simple-countdown-clock/)

This project uses:

1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
2. [Node v14.17.6](https://nodejs.org/en/)
3. [SaSS](https://sass-lang.com/)
4. [Parcel Bundler](https://parceljs.org/)
5. [ESLint](https://eslint.org/)
6. [Prettier](https://prettier.io/)

## Development

1. `npm i`: Install dependencies
1. `npm start`: Start local dev server

## Deploying

1. Clone the GitHub page repo into the .gitignore'd [./dist](./dist) directory (eg: [github.com/desholmes/tfft.dholmes.co.uk.github.io](https://github.com/desholmes/tfft.dholmes.co.uk.github.io))
1. `npm run build`: Builds the js and css files to [./dist](./dist)
1. `npm run build:serve`: Statically serves the [./dist](./dist) directory (for QA)
1. `npm run deploy`: Builds and deploys the site to GitHub pages

## Commands

|Command|Description|
|---|---|
|`npm run clean`|Cleans the [./dist](./dist) directory|
|`npm run build`|Runs `npm run clean` and `parcel build`|
|`npm run build:serve`|Runs `serve dist/` to statically serve the build in the [./dist](./dist) directory|
|`npm run lint`|Runs [ESLint](https://eslint.org/) with 0 warnings argument|
|`npm run lint:fix`|Runs [ESLint](https://eslint.org/) with 0 warnings and `--fix` arguments|
|`npm run prettier`|Runs [Prettier](https://prettier.io/) with `--check` argument|
|`npm run prettier:fix`|Runs [Prettier](https://prettier.io/) with `--write` argument|
|`npm run prettier-lint:fix`|Runs `prettier:fix` and `lint:fix` NPM scripts|
|`npm start`|Runs a local development server using the [Parcel Bundler](https://parceljs.org/)|
