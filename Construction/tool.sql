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