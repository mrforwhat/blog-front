FROM nginx
LABEL name="blog-front"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
EXPOSE 80
