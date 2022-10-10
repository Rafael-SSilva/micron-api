#uses the smallest version of node
FROM node:alpine

#create a working directory
WORKDIR /usr/src/app

#copy all package json files to the workdir
COPY package*.json .
#using npm ci (continuous integrations) instead of npm install is a good practice.
RUN npm ci

#After installing, we copy all the folders and files to workdir (unless they are listed in .dockerignore)
COPY . .

#starts the prod server
#CMD ["npm", "start"]

EXPOSE 3000
#starts the dev server

#entrypoint for custom commands
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]