# Base ubuntu image
FROM ubuntu

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    xz-utils \
    && rm -rf /var/lib/apt/lists/*

# set node.js version
ENV NODE_VERSION=24.13.0

# Install nodejs from official binaries
RUN curl -fsSL https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz \
    | tar -xJf - -C /usr/local --strip-components=1

# Verify Node and npm installation
RUN node -v && npm -v

# copy source code
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

# install dependencies
RUN npm install

# start application
ENTRYPOINT [ "node", "main.js" ]