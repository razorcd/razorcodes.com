FROM nginx

MAINTAINER Cristian Dugacicu - www.razorcodes.com

ENV WORKDIR=/usr/share/nginx/html

RUN mkdir -p $WORKDIR && cd $WORKDIR

COPY dist/ $WORKDIR

EXPOSE 80 443
