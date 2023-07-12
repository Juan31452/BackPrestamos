# utilizar imagen node
FROM node:alpine

# crear directorio dentro contenedor
WORKDIR /app

# Copiar el package.json en el contenedor
COPY package*.json ./

# Ejecutar 
RUN npm install

# Instalar nodemon
RUN npm install -g nodemon

# Copiar codigo a la carpeta del contenedor
COPY . .

#version build
#RUN npm run build

# la aplicacion se ejecuta en el puerto 4000
EXPOSE 4000

# correr el contenedor
CMD ["npm", "start"]
