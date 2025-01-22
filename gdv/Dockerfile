# Usamos una imagen base de Node.js para construir la app
FROM node:16 AS build

WORKDIR /app

# Copia los archivos de dependencias y los instala
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente de la app y construye la aplicación para producción
COPY . . 
RUN npm run build

# Usamos una imagen base de Nginx para servir la app
FROM nginx:alpine

# Copia el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de build generados por React al contenedor de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Ejecuta Nginx
CMD ["nginx", "-g", "daemon off;"]