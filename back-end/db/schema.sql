-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS animes_dev;

-- step 2 create the db
CREATE DATABASE animes_dev;

-- step 3 connect to it
\c animes_dev;

-- step 4 blueprint out any tables we need
CREATE TABLE anime (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    release INT
);



-- psql -U postgres -f db/schema.sql