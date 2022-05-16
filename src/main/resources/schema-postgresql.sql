DROP TABLE IF EXISTS students;
DROP sequence IF EXISTS hibernate_sequence;

CREATE SEQUENCE hibernate_sequence START WITH 100 INCREMENT BY 1;

CREATE TABLE students (
    id serial  PRIMARY KEY,
    stu_id VARCHAR(10),
    nm VARCHAR(50),
    email VARCHAR(50),
    admitted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    category_id         BIGINT AUTO_INCREMENT,
    category            VARCHAR(255) NOT NULL,

    PRIMARY KEY (category_id)
);

