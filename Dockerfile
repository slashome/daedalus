FROM node:20-alpine AS base
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM deps AS builder
COPY . .
RUN npm run build

FROM base AS development
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS production
COPY --from=builder /app/.output ./.output
EXPOSE 3000
CMD ["node", "server/index.mjs"]
