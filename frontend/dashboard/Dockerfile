# Use the official Node.js 18 Alpine image as the build image
FROM node:18-alpine as BUILD_IMAGE

# Set the working directory for the build stage
WORKDIR /app/react-app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the project
RUN npm run build

# Create a new image for production
FROM node:18-alpine as PRODUCTION_IMAGE

# Set the working directory for the production stage
WORKDIR /app/dashboard-app

# Copy the built files from the build stage to the production stage
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

# Expose port 4173 (the port your app is running on)
EXPOSE 4173

# Copy package.json and vite.config.js to the container
COPY package.json vite.config.js ./

# Install TypeScript (if needed)
RUN npm install typescript

# Expose port 4173 (the port your app is running on)
EXPOSE 4173

# Define the command to run your application
CMD ["npm", "run", "preview"]
