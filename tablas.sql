USE bdd;
DROP TABLE IF EXISTS categories_lectures;
DROP TABLE IF EXISTS readers_lectures;
DROP TABLE IF EXISTS lectures;
DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS subscription_types;
DROP TABLE IF EXISTS coins_pack;

CREATE TABLE coins_pack (
    name VARCHAR(255) PRIMARY KEY,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(255)
);

CREATE TABLE subscription_types (
    name VARCHAR(255) PRIMARY KEY,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    coins_per_day INT NOT NULL,
    duration INT NOT NULL
);

CREATE TABLE categories (
    name VARCHAR(255) PRIMARY KEY,
    description TEXT,
    parent_category VARCHAR(255)
);
CREATE TABLE users (
    nick VARCHAR(255),
    role INT NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    coins INT DEFAULT 0,
    PRIMARY KEY (nick,role)
)
PARTITION BY HASH (role) PARTITIONS 3;


CREATE TABLE purchases (
    id INT AUTO_INCREMENT,
    user_nick VARCHAR(255),
    coin_pack_name VARCHAR(255),
    purchase_date DATE NOT NULL,
    PRIMARY KEY (id,user_nick)
);

CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT,
    user_nick VARCHAR(255),
    subscription_name VARCHAR(255),
    start_date DATE,
    expiration_date DATE,
    PRIMARY KEY (id,user_nick)
);

CREATE TABLE lectures (
    status INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    reviewer VARCHAR(255),
    creator VARCHAR(255) NOT NULL,
    description TEXT,
    path VARCHAR(255) NOT NULL,
    PRIMARY KEY (name,status)
)
PARTITION BY HASH (status) PARTITIONS 3;

CREATE TABLE readers_lectures (
    user_nick VARCHAR(255),
    lecture_name VARCHAR(255),
    last_access TIMESTAMP,
    PRIMARY KEY (user_nick, lecture_name)
);

CREATE TABLE categories_lectures (
    category_name VARCHAR(255),
    lecture_name VARCHAR(255),
    PRIMARY KEY (category_name, lecture_name)
);

CREATE TABLE videos (
    title VARCHAR(255),
    description TEXT,
    url VARCHAR(255),
    PRIMARY KEY (url)
);

CREATE TABLE video_lecture (
    video_url VARCHAR(255),
    lecture_name VARCHAR(255),
    PRIMARY KEY (video_url, lecture_name)
);