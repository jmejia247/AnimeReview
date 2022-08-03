-- step 1 connect to database
\c animes_dev;

-- step 2 add pre made data to be able to add
INSERT INTO anime (name, release) VALUES 
('One Piece', 1999),
('Naruto', 2002),
('Jujutsu Kaisen', 2020),
('Cowboy Bebop', 1998);