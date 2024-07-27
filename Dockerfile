# Stage 1: Build the application
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# copy package*.json files
COPY package*.json ./

#Install the dependencies
RUN npm install

# Copy application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS runner

# Copy the built application from the builder stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.js ./
COPY --from=base /app/package*.json ./

# Install production dependencies
RUN npm install --only=production

# Expose the Next.js application port
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm" , "start"]
