#!/bin/bash

profile=$1 # aws-cli profile

if [ -z "$profile" ]; then
  profile=default
fi

# build
yarn build:prod

mv dist/index.js dist/index.$CIRCLE_BUILD_NUM.js && \
mv dist/style.css dist/style.$CIRCLE_BUILD_NUM.css

sed "s/BUILD_NUMBER/$CIRCLE_BUILD_NUM/g" ./dist/index.html

# upload
aws s3 cp dist s3://badweatherfront --exclude "index.html" --recursive --acl public-read \
--storage-class REDUCED_REDUNDANCY --metadata-directive REPLACE \
--cache-control max-age=31536000 \
--profile $profile

aws s3 cp dist/index.html s3://badweatherfront/ --acl public-read \
--storage-class REDUCED_REDUNDANCY --metadata-directive REPLACE \
--cache-control max-age=300 \
--profile $profile
