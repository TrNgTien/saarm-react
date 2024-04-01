#!/bin/sh

echo "Install dependencies...."
npm install -g pnpm


echo "Cleaning up...."

cd "$(dirname "$0")"

sh ./clean.sh

echo "Install packages...."
yarn 

echo "Building application...!"
yarn build:dev

echo "Building Done......"
