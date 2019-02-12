USE travel_db;

INSERT INTO users
(name, email, group_id, has_voted)
VALUES
("charity", "charityaquinn@gmail.com", 1, 0),
("jordan", "jor@dan.com", 1, 0),
("priyesh", "pri@yesh.com", 1, 0);

INSERT INTO buddies
(vacations, name, group_id)
VALUES
("montreal_jazz_festival", "charity group", 1),
("cancun", "jordan group", 2),
("quebec", "priyesh group", 3);

INSERT INTO user_groups
  (id, group_id)
VALUES
(1, 1),
(2, 1),
(2, 3);

INSERT INTO vacation_options
(name)
VALUES
("montreal jazz festival"),
("cancun"),
("quebec");