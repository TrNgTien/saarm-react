#!/bin/sh

echo "Cleaning up...."

cd "$(dirname "$0")"

sh ./clean.sh

echo "Install yarn...."
npm i -g yarn

echo "Install packages...."
yarn install

echo "Building application...!"
yarn build:dev

echo "Building Done......"
