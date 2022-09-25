#!/usr/bin/env bash

npm run dist && \
 rsync --delete --recursive ./dist cyon:~/www/spelljack && \
 ssh cyon "rm ~/www/spelljack/*.* && mv ~/www/spelljack/dist/*.* ~/www/spelljack && rm -rf ~/www/spelljack/dist"