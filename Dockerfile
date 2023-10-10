FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
        && pecl install redis \
        && docker-php-ext-enable redis \
        && docker-php-ext-install mysqli \
        && docker-php-ext-enable mysqli

WORKDIR /var/www/html

EXPOSE 80

ENTRYPOINT ["php-fpm"]
                                            