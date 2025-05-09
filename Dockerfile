# Usa una imagen base de Nginx
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos tus archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Nginx se ejecuta por defecto con CMD en esta imagen base
