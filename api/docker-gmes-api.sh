docker build -t gmes-api .
docker run -d --name "gmes-api" -p 5000:80 gmes-api
