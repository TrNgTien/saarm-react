#!/bin/sh

echo "Cleaning up...."

cd "$(dirname "$0")"

sh ./clean.sh

echo "Install packages...."
npm 

echo "Building application...!"
npm run build:dev

echo "Building Done......"
