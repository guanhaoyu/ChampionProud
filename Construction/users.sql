#设置客户端的编码utf8
SET NAMES UTF8;
#如果存在dangdang数据库，删除数据库dangdang
DROP DATABASE IF EXISTS construction;
#创建dangdang数据库，指定服务器端编码类型为utf8
CREATE DATABASE construction CHARSET=UTF8;
#进入数据库
USE construction;
#创建一个数据表
CREATE TABLE users(
    uid INT primary key auto_increment,
    uname VARCHAR(64),
    email VARCHAR(32),
    phone VARCHAR(32),
    content VARCHAR(255)
);
#添加数据
INSERT INTO users VALUES(null,"dangdang","1632174062@qq.com","17716906271","这是一个很好的网站，很吸引人");
INSERT INTO users VALUES(null,"dingding","1632171162@163.com","17716906272","这是一个很好的网站，很吸引人...");
INSERT INTO users VALUES(null,"当当","1632174sgh2@sina.com","17716906273","这是一个很好的网站，很吸引人......");
INSERT INTO users VALUES(null,"叮叮","163217lulilu@mail.com","17716906274","这是一个很好的网站，很吸引人........");


CREATE TABLE project_img(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(128),
    title VARCHAR(16),
    details VARCHAR(16)
);
INSERT INTO project_img VALUES
(null,"http://127.0.0.1:3030/images/1491811693240.jpg","漂亮的美丽的房子10","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490338321679.jpg","家庭别墅门面","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490072433234.jpg","漂亮的建筑","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490072989607.jpg","壮观的建筑群","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490073118356.jpg","漂亮的美丽的房子","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490073308708.jpg","灯光很棒的房子","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490075444696.jpg","很不错的游泳池","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490075211271.jpg","漂亮的美丽的房子2","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490074286532.jpg","漂亮的美丽的房子3","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490074376890.jpg","漂亮的美丽的房子5","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1490322673374.jpg","高山上的建筑","高端，大气，优雅安静"),
(null,"http://127.0.0.1:3030/images/1491802317367.jpg","河边的景观房子","高端，大气，优雅安静");


CREATE TABLE services(
    uid INT primary key auto_increment,
    img_url VARCHAR(126),
		title VARCHAR(32),
		exp VARCHAR(64)
);

INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490077085525.png','建筑设计','图片尺寸 236X76');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490075922783.png','城市规划','City planning');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490076036776.png','景观设计','Landscape Design');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490076244647.png','室内设计','Interior design');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490076286323.png','岩土工程','Geotechnical engineering');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490076330843.png','结构工程','Africultural products processing');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490076500816.png','策划咨询','Planning advice');
INSERT INTO services VALUES(null,'http://127.0.0.1:3030/images/1490079371411.png','造价咨询','Cost consultation');