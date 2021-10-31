# Typescript, Express, Jest, ESLint and Prettier Template Project

This is a basic and bare bones/base project to be used as a template and build upon (or tear things out of if not needed). It is not meant to have an exhaustive/final list of modules/packages included - instead it is to act as a jumping off point.

- `Express` - For serving content as a web server
- `Jest` & `supertest` - For testing
- `ESLint` - For some opinionated code rules
- `Prettier` - For some opinionated code formatting

The `package.json` has some commands (scripts) pre-defined to get started with.

### Alternative/Other packages of interest

- `Express`, while tried, tested and battle hardened could be swapped out for 'new kid on the block' `fastify`.
- TypeStack's `class-validator` looks to be an interesting package, making use of annotations on class properties to define 'valid' states/values for those properties. TypeStack have a lot of other cool tools, worth checking out.
- Swagger could be added for 'automatic' API document generation.

## Building and Running

### `.env` files and values

We expect many of the values to be fed in to the application via Environment Variables, here we are using the popular `dotenv` package to load a `.env` file and allow you to make use of them in the application.

You can run `cp .env-example.env .env` (or just create a new `.env` file) and populate it with any values needed. I advise _not_ committing the `.env` file to the repository (it is currently included in the `.gitignore` file).

### Running the project locally

#### As Dev

Running the project using `nodemon` pointing at the entrypoint file (in our case `src/index.ts`) will run the project with an active 'file watcher'. Whenever a file is changed the project will restart itself.

- `yarn`
- `yarn dev`

#### As Build

Alternatively, you can do a 'clean build', compiling the Typescript files in to Javascript files to the `./dist` directory and serve the build project.

This is similar to what the `Dockerfile` will be doing when building the final image to be used. The other major difference by default is that the `Dockerfile` will be doing a clean install of 'production only' dependencies.

- `yarn`
- `yarn clean` - Clean your local project of old build files
- `yarn build` - Compile the project .ts to .js files
- `yarn serve` - Serve the project

_Alternatively you can use the 'all in one' command..._

- `yarn`
- `yarn clean:build:serve`

### Running the project with Docker

You can also build and run the docker image with the below commands.

```sh
docker build -t me/ts-express-template .

docker run \
  -p 8080:8080 \
  --name ts-express-app \
  --env-file .env \
    me/ts-express-template
```
