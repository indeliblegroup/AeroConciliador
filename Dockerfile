# Build args (override as needed)
ARG NODE_VERSION=20
ARG CACHE_BUST=2025-12-10-01

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

RUN echo "cache bust $CACHE_BUST"

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

