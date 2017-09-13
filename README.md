# Tictactoe example

This is a working example.

Live demo at: https://tictactoe.voglm.de


# Backend

Please add the frontend URL to the `:allow_origin` in `app.rb` at line 13
Also check line 48 for the `redirect`

To run that backend in production mode please use:
 `bundle exec puma -e production -b unix:///var/run/api.sock`

If you want use it in daemon mode add `-d`

# Databse

To crate the database please use:
  `bundle exec rake db:create`
  `bundle exec rake db:migrate`

# Frontend
Please change the `gameUrl` at `/src/app/games/game.service.ts` to your backend URL

To compile the project run `ng build`. Append `--prod` if you want to use it in
production. Also check the if you imported the right `enviroment` in `main.ts`
