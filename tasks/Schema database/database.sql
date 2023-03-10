CREATE DATABASE film_information;

CREATE TABLE person 
(
	person_id SERIAL UNIQUE PRIMARY KEY,
	person_name VARCHAR(64) NOT NULL,
  person_last_name varchar(64) NOT NULL
);

CREATE TABLE film
(
	film_id SERIAL UNIQUE PRIMARY KEY,
  film_name VARCHAR(64) NOT NULL,
  film_description TEXT,
	year INT NOT NULL,
	country VARCHAR(64) NOT NULL,
  rating FLOAT,
  assessments INT,
  reviews INT,
  slogan TEXT,
  audio_track VARCHAR(64),
  subtitles VARCHAR(64),
  quality VARCHAR(64),
  budget MONEY,
  marketing MONEY,
  fees_USA MONEY,
  fees_world MONEY,
  premiere_Russia DATE,
  premiere_world DATE,
  released_DVD DATE,
  age INT,
  ranking_MPAA VARCHAR(64),
  duration INT,
  filmmaker INT NOT NULL, 
  FOREIGN KEY (filmmaker) REFERENCES person(person_id),
  script INT NOT NULL,
  FOREIGN KEY (script) REFERENCES person(person_id),
  producer INT NOT NULL,
  FOREIGN KEY (producer) REFERENCES person(person_id),
  operator INT NOT NULL,
  FOREIGN KEY (operator) REFERENCES person(person_id),
  composer INT NOT NULL,
  FOREIGN KEY (composer) REFERENCES person(person_id),
  painter INT NOT NULL,
  FOREIGN KEY (painter) REFERENCES person(person_id),
  installation INT NOT NULL,
  FOREIGN KEY (installation) REFERENCES person(person_id)
);

CREATE TABLE leading_role
(
  leading_role_id SERIAL UNIQUE PRIMARY KEY,
  role_name VARCHAR(64) NOT NULL,
  role_last_name varchar(64) NOT NULL
);

CREATE TABLE film_leading_role
(
  film_leading_role_id SERIAL UNIQUE PRIMARY KEY,
  film_id INT NOT NULL,
  leading_role_id INT NOT NULL,
  FOREIGN KEY (film_id) REFERENCES film(film_id),
  FOREIGN KEY (leading_role_id) REFERENCES leading_role(leading_role_id)
);

CREATE TABLE duplicate_role
(
  duplicate_role_id SERIAL UNIQUE PRIMARY KEY,
  role_name VARCHAR(64) NOT NULL,
  role_last_name varchar(64) NOT NULL
);

CREATE TABLE film_duplicate_role
(
  film_duplicate_role_id SERIAL UNIQUE PRIMARY KEY,
  film_id INT NOT NULL,
  duplicate_role_id INT NOT NULL,
  FOREIGN KEY (film_id) REFERENCES film(film_id),
  FOREIGN KEY (duplicate_role_id) REFERENCES duplicate_role(duplicate_role_id)
);

CREATE TABLE genre 
(
	genre_id SERIAL UNIQUE PRIMARY KEY,
	genre_name VARCHAR(64) NOT NULL,
	film_id INT NOT NULL,
  FOREIGN KEY (film_id) REFERENCES film(film_id)
);

CREATE TABLE country_viewer
(
	country_viewer_id SERIAL UNIQUE PRIMARY KEY,
	country VARCHAR(64) NOT NULL,
	amount INT NOT NULL,
  film_id INT NOT NULL,
  FOREIGN KEY (film_id) REFERENCES film(film_id)
);
