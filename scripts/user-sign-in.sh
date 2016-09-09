curl "http://tic-tac-toe.wdibos.com/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "dog@cat.com",
    "password": "123"
  }
}'
