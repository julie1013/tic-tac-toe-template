# curl --include --request "POST" "http://tic-tac-toe.wdibos.com/" \
#   --header "Content-Type: application/json" \
#   --data $'{
#     "game": {
#       "player_x": "Some random guy",
#       "id": "1",
#       "email": example@example.com
#     }
#   }'

curl "http://tic-tac-toe.wdibos.com/" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data $"{
 \"credentials\": {
   \"email\": \"email@example.com\",
   \"password\": \"lalala\",
   \"password_confirmation\": \"lalala\"
 }
}"
