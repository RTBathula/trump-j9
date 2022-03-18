# Grab build image
FROM node:12.12.0-alpine AS build
RUN apk add --no-cache bash && npm config set unsafe-perm true

# Copy the entire project, install and build 
COPY . /usr/src/trump-j9
WORKDIR /usr/src/trump-j9

RUN sed -i 's/\r$//' ./docker-build-package.json && chmod +x ./docker-build-package.json
RUN npm install && npm run build

# This results in a single layer image
FROM node:12.12.0-alpine
RUN mkdir -p /usr/src/app/dist
RUN mkdir -p /usr/src/app/backend-orchestrator
WORKDIR /usr/src/app

COPY --from=build /usr/src/trump-j9/dist ./dist
COPY --from=build /usr/src/trump-j9/server.js .
COPY --from=build /usr/src/trump-j9/entrypoint.sh .
COPY --from=build /usr/src/trump-j9/docker-build-package.json .
COPY --from=build /usr/src/trump-j9/backend-orchestrator ./backend-orchestrator

RUN mv docker-build-package.json package.json
RUN npm install
ENV STATIC_DIR "/usr/src/app/dist"

RUN sed -i 's/\r$//' ./entrypoint.sh && chmod +x ./entrypoint.sh
EXPOSE 8400
CMD ["./entrypoint.sh"]

