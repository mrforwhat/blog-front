FROM node
LABEL name="blog-front"
LABEL version="1.0"
COPY ./dist /usr/local/nginx/html
COPY ./blog-front-nginx.conf /usr/local/nginx/myconf
EXPOSE 80
