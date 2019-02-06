FROM node:11.9 as builder

LABEL mantainer="Javier Bullrich <javierbullrich@gmail.com>"

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --silent

COPY . ./

RUN yarn build

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]