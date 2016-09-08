curl --include --request "POST" "http://localhost:3000" \
  --header "Content-Type: application/json" \
  --data $'{
    "game": {
      "player_x": "Some random guy",
      "id": "1",
      "email": example@example.com
    }
  }'
