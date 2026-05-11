# Gestión de Créditos — Deploy en Coolify

App: **TanStack Start (React SSR)** · Dominio: `gestiondecreditos.app`

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | TanStack Start (SSR) sobre Vinxi/Nitro |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Build Docker | `vite.config.docker.ts` → preset `node-server` |
| Runtime | Node.js 22 (Alpine) |
| Puerto interno | `3000` |

---

## Archivos agregados para Docker

| Archivo | Propósito |
|---------|-----------|
| `Dockerfile` | Build multi-stage; Stage 1 compila, Stage 2 corre |
| `.dockerignore` | Excluye node_modules, .output, .wrangler, etc. |
| `vite.config.docker.ts` | Config de Vite para Node.js (sin plugin Cloudflare) |
| `package.json` → `build:docker` | Script que usa el config Docker |

> El `vite.config.ts` original queda intacto para desarrollo local y Cloudflare.

---

## Variables de entorno

Esta app **no requiere secrets** en producción (es un sitio de marketing estático renderizado en servidor). Solo se necesita:

| Variable | Valor recomendado | Obligatorio |
|----------|-------------------|-------------|
| `PORT` | `3000` | No (default: 3000) |
| `NODE_ENV` | `production` | No (el Dockerfile lo setea) |

> **No hay base de datos, autenticación ni storage externo.**

---

## Volumes persistentes

**No se necesitan.** Todos los assets (video de demo, logo, magazine) están baked dentro de la imagen en `/app/.output/public/`.

---

## Deploy paso a paso en Coolify

### 1. Subir código a Git

```bash
git add .
git commit -m "chore: add Docker support for Coolify"
git push
```

### 2. Crear recurso en Coolify

1. En Coolify → **New Resource** → **Application**
2. Seleccionar el repo y la rama (ej. `main`)
3. **Build Pack**: `Dockerfile`
4. El `Dockerfile` en la raíz del repo se detecta automáticamente

### 3. Configuración del recurso

| Campo | Valor |
|-------|-------|
| Build Command | *(vacío, el Dockerfile lo maneja)* |
| Port | `3000` |
| Healthcheck path | `/` |

### 4. Variables de entorno en Coolify

Solo agregar si necesitás sobreescribir el puerto:

```
PORT=3000
NODE_ENV=production
```

### 5. Dominio

En **Domains** del recurso:

```
https://gestiondecreditos.app
```

Activar **Force HTTPS** y **WWW redirect** (o configurar según preferencia).

### 6. Deploy

Hacer clic en **Deploy** (o el primer push a la rama lo dispara automáticamente si tenés webhook configurado).

---

## Verificar el build localmente antes de pushear

```bash
# Requiere Docker instalado
docker build -t gestion-creditos .
docker run -p 3000:3000 gestion-creditos
# Abrir http://localhost:3000
```

---

## Flujo interno del Dockerfile

```
node:22-alpine (builder)
  └── npm ci
  └── npm run build:docker        ← usa vite.config.docker.ts
      └── vite build --config vite.config.docker.ts
          └── Nitro preset: node-server
          └── Output: .output/
              ├── server/index.mjs   ← servidor HTTP Node.js
              └── public/            ← assets estáticos

node:22-alpine (runner)
  └── COPY .output/ (solo lo necesario)
  └── node .output/server/index.mjs
```

---

## Actualizar la app

Cada push a la rama configurada en Coolify dispara un nuevo build y deploy automático (zero-downtime si está habilitado).
