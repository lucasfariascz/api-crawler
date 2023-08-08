# hub.docker.com/search
#Definição da imagem
FROM node:18.17.0

#Cria um diretorio onde será rodado a aplicação
WORKDIR /app

#Copia package.json para dentro do diretorio (acima)
COPY package*.json ./
COPY tsconfig.json ./
COPY .eslintrc.json ./

#Roda npm para baixar as denpedencias
RUN npm install

COPY . .

# Execute o ESLint para verificar se o código TypeScript está de acordo com as regras definidas
RUN npm run eslint

EXPOSE 3000
EXPOSE 9229

CMD ["npm", "run", "dev"]
