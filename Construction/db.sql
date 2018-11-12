SET NAMES UTF8;
DROP DATABASE IF EXISTS construction;
CREATE DATABASE construction CHARSET=UTF8;
USE construction;
CREATE TABLE project_img(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(128),
    title VARCHAR(16),
    details VARCHAR(16)
);
INSERT INTO project_img VALUES
(null,"http://127.0.0.1:3030/img/1491811693240.jpg","漂亮的美丽的房子10","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490338321679.jpg","家庭别墅门面","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490072433234.jpg","漂亮的建筑","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490072989607.jpg","壮观的建筑群","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490073118356.jpg","漂亮的美丽的房子","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490073308708.jpg","灯光很棒的房子","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490075444696.jpg","很不错的游泳池","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490075211271.jpg","漂亮的美丽的房子2","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490074286532.jpg","漂亮的美丽的房子3","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490074376890.jpg","漂亮的美丽的房子5","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1490322673374.jpg","高山上的建筑","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/img/1491802317367.jpg","河边的景观房子","高端，大气，优雅安静");