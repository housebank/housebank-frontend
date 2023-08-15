#Fetching the latest node image on alpine linux
FROM node:alpine AS development

#Declare environment variable here
ENV NODE_ENV development

#set up working directory
WORKDIR /frontend

#Install dependencies
COPY ./package.json /frontend
RUN npm install

#Copy all files in project
COPY . .

#Build application
RUN npm run build

#Fetch latest nginx image
FROM nginx

#Copy build files/assets from build directory
COPY --from=development /frontend/build /usr/share/nginx/html

#Copy nginx conf file
COPY nginx.conf /etc/nginx/conf.d/default.conf