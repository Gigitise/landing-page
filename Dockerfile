FROM node:18-alpine as builder

WORKDIR /landing_page
COPY package.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /landing_page/dist /var/www/gigitise.com

# COPY ./nginx/gigitise.com /etc/nginx/sites-available