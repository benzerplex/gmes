#nginx / angular container
docker build -t gmes-web .
docker run -d --name "gmes-web" -p 3000:80 gmes-web
