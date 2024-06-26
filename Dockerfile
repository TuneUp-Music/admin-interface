# Use the node image as the base
FROM node:latest as node
WORKDIR /app

# Copy the application files
COPY . .

# Set environment variable to skip Puppeteer download
ENV PUPPETEER_SKIP_DOWNLOAD=true

# Install dependencies
RUN npm install --force

RUN npm run build

# Create a directory for build results
RUN mkdir /app/build-result/
