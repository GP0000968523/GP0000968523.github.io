进程间通信
网络通信。 
共享内存。 
kubeflow

在run。k8s的地方run 机器学习

hive。

 hudi
hdfs 加hbase

解编优执

stm32
docker-compose up -d --build

tidb
db2
kafka
airflow

airflow

kafka对java程序员重要性

zk
db

dubbo。熔断


kafka做一下

设计模式

反射 

单例
工厂
策略
代理
代理
装饰


http://c.biancheng.net/view/3174.html

docker 集群和教程




* Internet Service Providers (ISP/互联网服务提供商) 
* Management Systems (管理系统, ISO, IEC, BS) 
* Education (教育) 
* Healthcare System (医疗保健系统) 
* Commission Management (委托和佣金管理) 
* Document & Knowledge Management (文档和知识管理) 
* Carriers And Deliveries Management (运输和交付管理) 
* Travel(旅行) 
* Hotel Management(酒店管理) 

五、odoo开发


「走进k8s」Docker三剑客之Docker Compose（七）
￼
IT人故事会
关注




https://www.icode9.com/content-4-85387.html



docker kafka 集群


今天的任务是zk啊

学会分布式好去做事

学习ZK
0：结构是树状的
1：关于CRUD这个不是重点
2：关于CAP   Paxos    BAse   两段提交和三段提交（能提交，预提交，提交），
ZAB：
leader生成一个全局的唯一事务，
2分发给所有的follower
超过半数的follower同意
leader那么同意commit,提交对应的之前让投票的那个事务


典型的应用场景
1：事件监听
2：Master选举
3：分布式锁
4：分布式计数器
5

数据的发布和订阅
动态的DNS
命名服务
分布式的协调通知
集群的管理
分布式的日志回收
选举
分布式锁
分布式队列
* 《ZooKeeper 分布式过程协同技术详解》
* 《从Paxos到Zookeeper 分布式一致性原理与实践》


可以用Curator轻易的实现一个分布式锁：



数据发布/订阅
负载均衡
命名服务
分布式协调/通知
集群管理
Master选举
分布式锁
分布式队列



L 领导
F 跟随者
O  观察值

数据节点

数据模型是一棵树


想到了两者通信的三次握手

这都是知识啊  哈哈哈

如果能深刻理解分布式系统，那么会对生活有什么帮助

zk集群搭建


zk是从集中式处理到分布式处理的一个分水岭，当你意识到的时候
和当你明白的时候
和你熟练运用的时候



ZAB：
leader生成一个全局的唯一事务，
2分发给所有的follower
超过半数的follower同意
leader那么同意commit,提交对应的之前让投票的那个事务


https://item.jd.com/12612884.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1001542270_2008285544_0_1911348737&utm_term=17252237fb0547f8be71b71edf9a71b2



关于京东推广



zk和其他中心
分布式锁

公平锁

水滴等待实践最长，谁有机会获得锁

非公平锁就是随机的



简单回顾一下CAS算法
CAS是英文单词Compare and Swap（比较并交换），是一种有名的无锁算法。无锁编程，即不使用锁的情况下实现多线程之间的变量同步，也就是在没有线程被阻塞的情况下实现变量的同步，所以也叫非阻塞同步（Non-blocking Synchronization）。CAS算法涉及到三个操作数
* 需要读写的内存值 V
* 进行比较的值 A
* 拟写入的新值 B



　因此就需要有一种机制可以不让等待的线程一直无期限地等待下去（比如只等待一定的时间或者能够响应中断），通过Lock就可以办到。




violet
synchronized
threadlocal
local




synchronized的底层是使用操作系统的mutex lock实现的。


博客和代码的关系
代码和博客的关系
博客和素材的关系


http://www.itguai.com




http://www.simen.cn

运行到这里了 


视频添加顺序，

然后添加音乐

foreach (string file in fileNames.OrderBy(name => name))


    foreach(string
file in fileNames.OrderBy(name= > name))




多线程
设计模式
内存模型

ZK

分布式锁

dubbo 



单例
工厂
代理
策略



dubbo




motan


 RMI 或 Hessian 等工具

分布式调度


时序图

流程图




9中协议的demo和新概念的demo



dubbo 断路



做一遍分布式事务



研究下代码生成


基本的RBCA用户权限模


线程

锁


分布式锁


vue

15、SpringBoot 实现热部署有哪几种方式？
主要有两种方式：
* Spring Loaded
* Spring-boot-devtools　　





序列化

Zk
Redis
搜索引擎
排序引擎


程序员替老板写代码
保姆替程序员打扫卫生
农场主替保姆种地




增量索引配置

https://www.jobui.com/rank/company/view/xian/ruanjian/2014/?n=1




生成带有语音和字幕的视频



视频的速率是多少，
那么语音的速率




根据语音生成文本







控制字的速率，




另外一个根据获取音频卡点



python 手机群控
、、


单个背景 


推送分两步

全推
和订阅推送



Cookie、Session、Token、JWT 详解
auth2 


分销和传销

看产品


java 锁

是否锁住资源分为  悲观锁和乐观锁
乐观锁在Java中是通过使用无锁编程来实现，最常采用的是CAS算法，Java原子类中的递增操作就通过CAS自旋实现的。



按照同步失败是否阻塞，  不阻塞的话有自旋锁和自适应锁
自旋锁
:TicketLock、CLHlock和MCSlock，

按照同步资源的流程是否有区别，分为  无 偏 轻重

按照竞争锁是否要排队  分为  公平锁和非公平锁

一个线程中的多个流程是否能获取同一把锁  分为  可重入锁  和非可重入锁


多个线程能不能共享一把锁 分为  共享锁 和排他锁




https://tech.meituan.com/2018/11/15/java-lock.html



TensorFlow就是他团队的作品。就在不久前，他还发表了新论文，提出了使用机器学习索引来替代B-Trees，能够提速3倍，


王仲远在微软亚洲研究院6年多，从校招生一直做到主管研究员，负责了微软研究院知识图谱项目和对话机器人项目。他一直专注于自然语言处理、知识图谱及其在文本理解方面的研究，取得了不少成绩，在国际顶级学术会议如 VLDB、ICDE、IJCAI、CIKM 等发表论文 30 余篇，并获得 ICDE 2015 最佳论文奖。


现有的方案
为了解决这些问题，业内也出现了一些手机管理和在线调试使用的工具或平台，比较常见的有:
* OpenSTF
* 百度MTC的远程真机调试
* Testin的云真机
* 腾讯WeTest的云真机
* 阿里MQC的远程真机租用
其中OpenSTF是开源项目，其他的平台大多也都是基于OpenSTF原理实现的。因此，我们对OpenSTF项目进行了深入研究。


OpenSTF

云真机


https://www.gaoyaxuan.net/blog/300.html

关于docker 能给老百姓带来什么


云数据仓库
云数据库



webrtc是一个方向




注册中心
配置中心
熔断
降级
负载


分布式总结
1：注册中心
2：配置中心
3：网关
4

最怕技术出身的人
不以技术为屠龙刀


今天做搜索

图片识别。做曲线图

图像化自己的需求的知识点


高频动作项目

zk
dubbo源代码

分布式锁
锁


idea 的好的插件

如果2020是运动时期。 我们该怎么过



http://www.zzs5.com/




https://www.cnblogs.com/yuyijq/p/3438829.html


zk源代码分析


观察者模式


* 关于逻辑时钟，我们的分布式大牛Leslie Lamport曾写过一篇论文：Time, Clocks, and the Ordering of Events in a Distributed System


1：是什么

2:干什么


3:配置

4：启动

5：选举

6：客户端


可干什么



 Bloom Filter算法：http://en.wikipedia.org/wiki/Bloom_filter


感谢所有工院网络联盟群里的网友们，
有很多问题都是和你们说着说着就想明白了



https://www.cnblogs.com/davidwang456/gallery/1372532.html


linux 命令
查看端口号
lsof -i:5181

jute的序列化
zookeeper的序列化

shardingsphere



分库分表

问题37：解释如何调整Kafka以获得最佳性能。
答：因此，调优Apache Kafka的方法是调优它的几个组件：
* 		调整Kafka生产者
* 		Kafka代理调优
* 		调整Kafka消费者
* 

springcloud的个个组件的启动过程和依赖关系


注册中心的启动过程


feign
ribbon




数据异构的武器。 binlog. +mq


linux.  io模型


reactor通讯模型

python 教程

	     i=“西瓜”
		print (i)
		


快慢分离异地多活

logback——待学

https://www.jdon.com/workflow/Airflow-vs-Azkaban-vs-Conductor-vs-Oozie-vs-Amazon-Step-Functions.html

Forst R zhou



triggger
几周不断折腾尝试的搭建、使用和实际开发的过程下来，其实涉及了很多开发云原生服务常用的 DevOps 工具和组件，比如 Helm、Kubernetes 和 Docker，能得心应手的使用这些工具需要一段时间的学习实践来积累知识和经验。要想在 Kubernetes 环境下玩转 Airflow，了解这些周边支撑的工具也是不可或缺极其重要的一部分。



查看我最新的文章，欢迎 RSS 订阅我的个人博客：Blog of Maples7。知乎专栏将延期数天到数月不等不完全同步博客中

要实现数据抓取和数据存储之间的隔离，我们可以采用「发布 / 订阅模式」 

cdh    hadoop  

进程间通信
网络通信。 
共享内存。 
kubeflow

在run。k8s的地方run 机器学习

hive。

 hudi
hdfs 加hbase

解编优执

stm32
docker-compose up -d --build

tidb
db2
kafka
airflow

airflow

kafka对java程序员重要性

zk
db

dubbo。熔断


kafka做一下

设计模式

反射 

单例
工厂
策略
代理
代理
装饰


app爬虫。 

毕竟新软件都不会特别的安全

开源在线课堂软件

the.  phone.  
数据采集。  nlp
Go后台管理系统 Gfast 管理系统
`
深度学习入门
本机装一个airflow 和一个odoo

odoo env
python3 /Users/apple/Downloads/odoo-14.0/odoo-bin -c debian/odoo.conf


http://bj2014.archsummit.com/node/596/

https://www.52nlp.cn/most-influential-nlp-papers     nlp



https://github.com/cyanharlow/purecss-francine

html画画

google research

http://research.google.com/papers 



https://gitee.com/whsnow/awesome-architecture?_from=gitee_search#https://weekly.manong.io/bounce?url=https%3A%2F%2Ftoutiao.io%2Fk%2Fjuvljt6&aid=18284&nid=289

系统工程
CDC
触发器
增量
时间戳


dubbo，thrift，DSF... 

mysql 的主从架构
log 4 j 2漏洞修复

https://www.oschina.net/project/top_cn_2020


https://archive.apache.org/dist/   

apache file list

https://developer.aliyun.com/special/ffa2021/live


tcc





'ffmpeg -i ' “ /Users/apple/py_l_gp/test_ffmpeg/File/33家实体名单/Video3.avi

                -i   /Users/apple/py_l_gp/test_ffmpeg/File/小侯 - 为什么最迷人的最危险 (抖音最火版).mp3
 + ' -strict -2 -f avi '
                + outfile_name, shell=True



GeoTrellis

一格空间


https://databricks.com/sparkaisummit/north-america/sessions?eventName=Summit%202019



Java
集合
线程
线程安全

线程池
数据结构



双向链表



hbase


https://www.cs.usfca.edu/~galles/visualization/BTree.html


树结构
二叉树
平衡二叉树
B树是它是一种平衡的多叉树，称为B树（或B-树、B_树）。




红黑树和二叉树

红黑树是一种特化的AVL树（平衡二叉树），都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而获得较高的查找性能。 [2]




当在10亿数据进行不到30次比较就能查找到目标时，不禁感叹编程之魅力！人类之伟大呀！ —— 学红黑树有感。






红黑树是一种含有红黑结点并能自平衡的二叉查找树。它必须满足下面性质：
* 性质1：每个节点要么是黑色，要么是红色。
* 性质2：根节点是黑色。
* 性质3：每个叶子节点（NIL）是黑色。
* 性质4：每个红色结点的两个子结点一定都是黑色。
* 性质5：任意一结点到每个叶子结点的路径都包含数量相同的黑结点。





作者：安卓大叔
链接：https://www.jianshu.com/p/e136ec79235c
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




Istio


1. 负责服务端技术选型和架构； 
2. 负责产品功能模块的设计，开发和维护； 
任职要求：
1. 1~3年以上Golang开发经验； 
2. 熟悉服务端接口开发，熟悉http，protobuf，grpc； 
3. 熟悉goroutine，channel，sql，http等模块； 
4. 掌握mysql，pgsql，redis基本使用； 
5. 掌握linux，shell，docker优先； 
6. 有个人技术博客优先。 


1. 熟悉MySQL，熟悉数据库原理和常用性能优化技术，同时熟悉其他数据库（如Redis、MongoDB等）者优先； 4.熟悉微服务架构、gRPC、Istio、OpenTracing、Prometheus、Grafana、k8s中任意一项者优先；




Golang, gRPC, go-micro            // 开发语言及其 RPC 框架
Google Cloud, MongoDB            // 云平台与数据存储
Docker, Kubernetes, Terrafrom      // 容器化与集群架构
NATS, CircleCI     




sip
voip
webrtc


java 类的加载过程

spring 的加载过程


云平台管理





