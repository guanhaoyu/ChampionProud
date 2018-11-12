SET NAMES UTF8;
DROP DATABASE IF EXISTS jianniang;
CREATE DATABASE jianniang CHARSET=UTF8;
USE jianniang;

CREATE TABLE jianniang_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category CHAR(4),
    title VARCHAR(64),
    jianniang_info_time CHAR(10)
);
CREATE TABLE jianniang_stra(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category CHAR(6),
    title VARCHAR(64),
    jianniang_stra_time CHAR(10)
);

INSERT INTO jianniang_info VALUES
(NULL,"【公告】","2018.7.27封号名单","2018-07-27"),
(NULL,"【活动】","7月建造养成活动公告","2018-07-16"),
(NULL,"【活动】","“风乃&米娅”系列活动&夏日礼包公告","2018-07-13"),
(NULL,"【活动】","世界杯大竞猜活动","2018-07-06"),
(NULL,"【活动】","2018.7.6维护公告&战利品活动公告","2018-07-05"),
(NULL,"【活动】","2018.6.7维护公告&立体强袭活动公告","2018-06-05"),
(NULL,"【新闻】","安卓及ios新服开启&俾斯麦维护","2016-06-20"),
(NULL,"【新闻】","安卓新服开启","2016-01-15"),
(NULL,"【新闻】","IOS正式上线！","2016-01-20"),
(NULL,"【新闻】","iOS新服开启","2016-01-20"),
(NULL,"【活动】","夏日系列活动预告","2018-08-13"),
(NULL,"【公告】","2018.8.17维护公告","2018-08-16"),
(NULL,"【公告】","有关于部分玩家未能正常获得活动图第四关船只参与章、斩杀章的奖章补发方案","2018-08-17"),
(NULL,"【公告】","《战舰少女R》随机抽取类玩法概率公示","2018-08-22"),
(NULL,"【公告】","2018.9.5维护公告&战利品活动公告","2018-09-04"),
(NULL,"【公告】","2018年9月8日维护公告","2018-09-07");

INSERT INTO jianniang_stra VALUES
(NULL,"【新人指南】","出征篇","2017-01-03"),
(NULL,"【新人指南】","建造篇","2017-01-03"),
(NULL,"【新人指南】","改造篇","2017-01-03"),
(NULL,"【新人指南】","船坞篇","2017-01-03"),
(NULL,"【新人指南】","誓约篇","2017-01-03"),
(NULL,"【进阶挑战】","新手向5图攻略","2016-04-19"),
(NULL,"【进阶挑战】","6-1攻略","2016-04-20"),
(NULL,"【进阶挑战】","6-2攻略","2016-04-20"),
(NULL,"【进阶挑战】","6-3攻略","2017-01-05"),
(NULL,"【进阶挑战】","6-4攻略","2017-01-05");