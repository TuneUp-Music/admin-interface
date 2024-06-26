# Use the node image as the base
FROM node:latest as node
WORKDIR /app

# Copy the application files
COPY . .

# Accept a build argument for the branch name
ARG BRANCH_NAME

# Set environment variable to skip Puppeteer download
ENV PUPPETEER_SKIP_DOWNLOAD=true

# Install dependencies
RUN npm install --force

RUN echo "Building for branch $BRANCH_NAME"

# Conditional build steps based on the branch name
RUN npm run build

# Create a directory for build results
RUN mkdir /app/build-result/
