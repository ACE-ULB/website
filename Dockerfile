# Use Node.js official alpine image
FROM node:alpine

# Install build tools and glibc for compatibility, forcing the overwrite of /etc/nsswitch.conf
RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    build-base \
    jpeg-dev \
    nasm \
    python3 \
    bash \
    curl \
    binutils \
    && curl -Lo /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
    && curl -Lo /glibc.apk https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r0/glibc-2.35-r0.apk \
    && apk add --force-overwrite /glibc.apk

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]