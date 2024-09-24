#  Stage 1 : Build
FROM node:20 AS builder
LABEL authors="IACA Electronique"

WORKDIR /app
COPY . .

RUN npm i && npm run build


# Stage 2 : Runtime
FROM node:20
LABEL authors="IACA Electronique"
WORKDIR /app
COPY --from=builder /app/dist/* .

ENTRYPOINT ["node", "main.js"]