FROM php:7-fpm-alpine

ARG USER_ID

RUN adduser --disabled-password --gecos '' --uid $USER_ID php-group
USER php-group
