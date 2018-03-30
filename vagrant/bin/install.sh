#!/usr/bin/env bash

composer clear-cache && COMPOSER_PROCESS_TIMEOUT=2000 composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition magento2 --prefer-dist --no-dev
