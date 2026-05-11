# =====================================================================
# Stage 1: Build
# =====================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Instalar dependencias primero (aprovecha el cache de Docker)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copiar fuentes y assets
COPY . .

# Build para Node.js (preset node-server, output en .output/)
RUN npm run build:docker

# =====================================================================
# Stage 2: Production runner
# =====================================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# PORT es leído por el servidor generado por TanStack Start/Nitro
ENV PORT=3000

# Solo copiamos el output del build (incluye assets estáticos)
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
