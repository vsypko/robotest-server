CREATE TABLE robots (
  id SERIAL PRIMARY KEY,
  name VARCHAR (10) UNIQUE NOT NULL,
  pose_x NUMERIC(7, 2)
  pose_z NUMERIC(7, 2)
);

CREATE TABLE missions (
  id SERIAL PRIMARY KEY,
  name VARCHAR (20) UNIQUE NOT NULL,
  description: TEXT,
  robot_id INT REFERENCES robots(id)
);