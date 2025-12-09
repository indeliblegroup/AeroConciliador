# Build args (override as needed)
ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Default upload dir inside container (can be overridden)
ENV UPLOAD_DIR=/data/uploads
RUN mkdir -p $UPLOAD_DIR

# Expose port and start
EXPOSE 8080
CMD ["node", "server/index.js"]

