
# Build Stage
FROM node:16 AS build
# Definir el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto donde React escucha (3000 por defecto)
EXPOSE 3000

# Comando por defecto para iniciar el servidor en desarrollo
CMD ["npm", "start"]