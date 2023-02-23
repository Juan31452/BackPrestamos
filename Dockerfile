# Use an existing Docker image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Instalar nodemon
RUN npm install -g nodemon

# Copy the rest of the application code to the container
COPY . .

#version build
#RUN npm run build

# Expose the port that the application will listen on
EXPOSE 4000

# Specify the command to run when the container starts
CMD ["npm", "start"]
