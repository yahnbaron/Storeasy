insert into "users" ("email", "hashedPassword")
values ('test@test.com', 'pass')
returning *;
