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
