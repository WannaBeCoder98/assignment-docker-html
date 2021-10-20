SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS msisdb;

USE msisdb;
   
CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL DEFAULT '',
    author VARCHAR(24) NOT NULL DEFAULT '',
    yearPublished int NOT NULL DEFAULT 0,
	publisher VARCHAR(24) NOT NULL DEFAULT '',
    pageNumber int NOT NULL DEFAULT 0,
    MSRP VARCHAR(24) NOT NULL DEFAULT ''
);

INSERT INTO book (id, title, author, yearPublished, publisher, pageNumber, MSRP) VALUES 
(1, 'The Hunger Games', 'Suzanne Collins', 2008, 'Scholastic Press', 347, '$10.69'),
(2, 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', 'J.K. Rowling, Mary GrandPré (Illustrator)', 2004, 'Scholastic Inc', 870, '$6.98'),
(3, 'To Kill a Mockingbird', 'Harper Lee', 2006, 'Harper Perennial Modern Classics', 324, '$7.19'),
(4, 'Pride and Prejudice', 'Jane Austen, Anna Quindlen (Introduction)', 2000, 'Modern Library', 279, '$6.99'),
(5, 'Twilight (The Twilight Saga, #1)', 'Stephenie Meyer', 2006, 'Little, Brown and Company', 501, '$10.99');