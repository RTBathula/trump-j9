# Grab build image
FROM node:12.12.0-alpine AS build
RUN apk add --no-cache bash && npm config set unsafe-perm true

# Copy the entire project, install and build 
COPY . /usr/src/trump-j9
WORKDIR /usr/src/trump-j9
RUN npm install && npm run build

# This results in a single layer image
FROM node:12.12.0-alpine
RUN mkdir -p /usr/src/app/dist
WORKDIR /usr/src/app

COPY --from=build /usr/src/trump-j9/dist ./dist
COPY --from=build /usr/src/trump-j9/server.js .
COPY --from=build /usr/src/trump-j9/entrypoint.sh .

RUN npm init -y -f &> /dev/null && \
	npm install express body-parser cors dotenv \
		mongoose human-readable-ids moment
		
ENV STATIC_DIR "/usr/src/app/dist"

RUN sed -i 's/\r$//' ./entrypoint.sh && chmod +x ./entrypoint.sh
EXPOSE 8400
CMD ["./entrypoint.sh"]

