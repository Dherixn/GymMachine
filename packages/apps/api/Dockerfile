FROM node:20-alpine
WORKDIR /app
COPY packages/apps/api ./packages/apps/api
COPY packages/utils ./packages/utils
COPY packages/config ./packages/config
WORKDIR /app/packages/apps/api
RUN npm install && npm run build
CMD ["node", "dist/index.js"]
