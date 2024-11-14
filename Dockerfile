# use an official Node.js image as a base
FROM node:18

# set the working directory in the container
WORKDIR /app

# copy package.json and package-lock.json
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY . .

# expose port 3000
EXPOSE 3000

# command to run the development server
CMD ["npm", "start"]
