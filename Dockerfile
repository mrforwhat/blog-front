FROM nginx
LABEL name="blog-front"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./blog-front-nginx.conf /etc/nginx/conf.d
EXPOSE 80
