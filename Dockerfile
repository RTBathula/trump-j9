# Grab build image
FROM node:12.12.0-alpine
RUN apk add --no-cache bash && npm config set unsafe-perm true

# Copy the entire project, install and build 
COPY . /usr/src/trump-j9
WORKDIR /usr/src/trump-j9
RUN npm install && npm run build

# Clear uneccesary files
RUN rm -r node_modules src public
RUN npm install express \
		body-parser \
		cors dotenv \
		mongoose \
		human-readable-ids moment


RUN sed -i 's/\r$//' ./entrypoint.sh && chmod +x ./entrypoint.sh
ENV STATIC_DIR "/usr/src/trump-j9/dist"

EXPOSE 8400
CMD ["./entrypoint.sh"]
