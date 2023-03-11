# Define a base image, but we want to accept an argument to change this
# Can overwrite when building with `docker build -t <tag> --build-arg BASE_IMAGE`
ARG NODE_VERSION=18.13.0
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json \
  tsconfig.json \
  yarn.lock \
  ./
COPY src/ src/

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:${NODE_VERSION}-alpine AS app-runner

WORKDIR /app

COPY --from=builder \
  /app/package.json \
  /app/yarn.lock \
  ./
COPY --from=builder /app/dist/ ./dist/
RUN yarn --production --frozen-lockfile

EXPOSE 8080

ENTRYPOINT [ "yarn", "run" ]
CMD [ "serve" ]
