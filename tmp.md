

***
### docker
kubeflow

本次培训内容包括：Docker基础、容器技术、Docker镜像、数据共享与持久化、Docker三驾马车、Docker实践、Kubernetes基础、Pod基础与进阶、常用对象操作、服务发现、Helm、Kubernetes核心组件原理分析、Kubernetes服务质量保证、调度详解与应用场景、网络、基于Kubernetes的CI/CD、基于Kubernetes的配置管理等，


在run。k8s的地方run 机器学习
docker-compose up -d --build
docker 集群和教程
「走进k8s」Docker三剑客之Docker Compose（七）
Istio
云平台管理

50+ DockerHub public images for Docker & Kubernetes - Hadoop, Kafka, ZooKeeper, HBase, Cassandra, Solr, SolrCloud, Presto, Apache Drill, Nifi, Spark, Mesos, Consul, Riak, OpenTSDB, Jython, Advanced Nagios Plugins & DevOps Tools repos on Alpine, CentOS, Debian, Fedora, Ubuntu, Superset, H2O, Serf, Alluxio / Tachyon, FakeS3 

关于基础镜像
和多个容器的端口
和容器通讯


kubectl create quota best-effort --hard=pods=10 --scopes=BestEffort



[root@k8s-master01 ~]# 


kubectl run nginx-deploy7 --image=nginx:1.14-alpine --port=80 --replicas=3 --dry-run=true  #nginx-deploy表示deployment的名称 --image表示镜像的地址 --port表示pod暴露的端口 --replicas表示副本的个数 --dry-run表示测试，不真正执行命令
\\[root@k8s-master01 ~]# 
kubectl run nginx-deploy7 --image=nginx:1.14-alpine --port=80 --replicas=3

 #测试发现命令正常，执行命令


[root@k8s-master01 ~]# 

kubectl expose deployment nginx-deploy  --name=nginx   --port=80 --target-port=80 --type=NodePort 

 #kubectl get pod    

kubectl get svc -o wide  
kubectl get pod 
kubectl describe svc nginx  

kubectl get pod 
kubectl create -f svc-demo.yaml



kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8088




作者：青春有我
链接：https://www.imooc.com/article/275608
来源：慕课网


Kubernetes主要由以下几个核心组件组成：
* etcd保存了整个集群的状态；
* apiserver提供了资源操作的唯一入口，并提供认证、授权、访问控制、API注册和发现等机制；
* controller manager负责维护集群的状态，比如故障检测、自动扩展、滚动更新等；
* scheduler负责资源的调度，按照预定的调度策略将Pod调度到相应的机器上；
* kubelet负责维护容器的生命周期，同时也负责Volume（CVI）和网络（CNI）的管理；
* Container runtime负责镜像管理以及Pod和容器的真正运行（CRI）；
* kube-proxy负责为Service提供cluster内部的服务发现和负载均衡；
除了核心组件，还有一些推荐的Add-ons：
* kube-dns负责为整个集群提供DNS服务
* Ingress Controller为服务提供外网入口
* Heapster提供资源监控
* Dashboard提供GUI
* Federation提供跨可用区的集群
* Fluentd-elasticsearch提供集群日志采集、存储与查询




***

分布式
***

学会分布式好去做事

分布式锁
分布式锁


锁


分布式锁
分布式总结
1：注册中心
2：配置中心
3：网关
4


分布式锁
锁

***

ZK

***

***

golang
***


***
Java
***
1)  加载：根据查找路径找到相应的class文件，然后导入。类的加载方式分为
隐式加载和显示加载两种。隐式加载指的是程序在使用new关键词创建对象时，会隐式的调用类的加载器把对应的类加载到jvm中。显示加载指的是通过直接调用class.forName（）方法来把所需的类加载到jvm中。
2)  检查：检查夹加载的class文件的正确性。
3)  准备；给类中的静态变量分配内存空间。
4)  解析：虚拟机将常量池中的符号引用替换成直接引用的过程。符号引用就理解为一个标示，而在直接引用直接指向内存中的地址。
5)  初始化：对静态变量和静态代码块执行初始化工作。


eclipse 不能卸载，需要重新安装
 
 开发环境从eclipse 到idea的问题


springmvc到springboot的问题

最近准备把java的一些基础知识复习一遍，列了个列表
1 JVM规范
   class加载过程
   class file大概结构
   invoke指令
   
2 Servlet规范
   API
   Servlet生命周期
   异步Servlet
 
3 JVM
     内存区域
         Java堆
         方法区
         Java方法栈
         本地方法栈
    GC
     代
       新生代
          Eden
          Survivor
       旧生代
       持久代
 
     不同类型GC
        Serial
        ParNew
        Parallel Scavenge
        Serial Old
        Parallel Old
        CMS
        G1
     Reference
        Strong
        Weak
        Soft
   JVM options
   OOM
   常用java性能诊断工具
      jps
      jstat
      jmap
      jstack
      jinfo
      jConsole
      jVisualVM
      BTrace
 
4 Java Concurrent
   keyword
       synchronized
       volatile
   锁
   原子性/可见性
   并发相关的一些数据结构
      ConcurrentHashMap
      LinkedBlockQueue
      AtomicXxx
  Executor框架
  Future
  Java内存模型
 
5 Java NIO
   Buffer
   Channel
   Selector
 
6 集合类
   JDK内置的集合类的实现方式以及使用场景
   List
     ArrayList
     LinkedList
  Set
    HashSet
    LinkedSet
    TreeSet
 Map
   HashMap
   TreeMap
 等 
 
欢迎大家补充




***
网络安全

***

http://www.hackerxfiles.net/


http://www.hackjason.com/


举个例子，吴翰清，P11(17年是P10，按照职级现在该11了)，阿里首席安全科学家，阿里云安全负责人。吴翰清又名道哥，搞互联网安全的都知道【道哥的黑板报】，网名刺，业内称为刺总。

***



所以我们的消息体也就是json先压缩再base64。也没用protobuf那些二进制的，因为万一遇到问题，二进制可读性差，缺乏自描述，不容易排查。

http://blog.takipi.com/





redis 集群
K8s
的二次开发


生成


关于docker compose的学习





容器的几点好处：
持续部署与测试
跨平台支持
环境标准化和版本控制
高资源利用率和隔离
容器跨平台性与镜像
易于理解应用的镜像仓库


容器云定义：
以资源分割额调度单位封装整个软件的运行环境
接近于pass  也接近于iass


Docker 子命令


docker 代理节点？
haproxy


注意跨主机通讯，
—link是同主机下容器互联


【环境搭建】使用Jekyll搭建Github博客

前言




apache
/
hudi






https://leesf.github.io/


gem install jekyll bundler

3. 
jekyll new myblog

4. 


cd myblog

5. 



bundle exec jekyll serve

6. 






* Jenkins：http://jenkins-ci.org/
* Travis CI：http://travis-ci.org/
* Bamboo：http://www.atlassian.com/software/bamboo
* Hudson：http://hudson-ci.org/
* QuickBuild：http://www.pmease.com/
* 其他：http://www.oschina.net/project/tag/344/ci?lang=0&os=0&sort=view&p=1
* 好的网络文章介绍：


redis 主从架构


1，增加对数字、语言、图形的敏感度。2，怎样增加敏感度呢？大量的训练、大量的浸泡。就像钢琴家听到一次旋律就可以重复弹出来。再举个小例子，如果有一串数字89642117291415775821，如果你知道6+4事件、211大学、9的三次方、圆周率后4位、7758=亲亲我吧、21=爱你等，这20个数字你几乎可以在10秒内记住。当然你还需要用联想记忆法串联起来。3，这个问题去看大脑先生博赞的几本书，启动大脑、快速阅读等等，里面会有全部答案！总是在临睡觉出现自己想要回答的拿手问题的人伤不起哇！！还想多举几个例子来着。。。

作者：马占凯
链接：https://www.zhihu.com/question/20449170/answer/15169515
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



1. RandomLoadBalance:随机负载均衡。随机的选择一个。是Dubbo的默认负载均衡策略。
2. RoundRobinLoadBalance:轮询负载均衡。轮询选择一个。
3. LeastActiveLoadBalance:最少活跃调用数，相同活跃数的随机。活跃数指调用前后计数差。使慢的 Provider 收到更少请求，因为越慢的 Provider 的调用前后计数差会越大。
4. ConsistentHashLoadBalance:一致性哈希负载均衡。相同参数的请求总是落在同一台机器上。



d
r
h
h
w
t
m
r
r
g






* 		 Spring Boot 简介
* 		 MySQL 简介
* 		 Spring Boot 接口开发
* 		 Spring Boot 单元测试
* 		 消息转换器
* 		 Thymeleaf 讲解
* 		 Thymeleaf 语法详解
* 		 Spring Boot 整合 FreeMarker 流程
* 		 Spring Boot 连接 MySQL 流程
* 		 Spring Boot 整合 MyBatis
* 		 Redis 缓存介绍
* 		 @Scheduled 实现定时任务
* 		 自定义错误页面
* 		 Swagger 接口测试
* 		 Spring Boot Admin 介绍及整合使用
* 		 Maven 简介
* 		 Spring Boot 目录结构介绍
* 		 Spring Boot 日志
* 		 Spring Boot 静态资源
* 		 Spring Boot 整合 JSP 流程
* 		 Spring Boot 整合 Thymeleaf 流程
* 		 FreeMarker 讲解
* 		 Spring Boot 文件上传
* 		 Spring Boot 整合 Druid 数据源
* 		 Spring Boot 事务处理
* 		 Spring Boot 整合 Redis 操作缓存模块
* 		 quartz 定时任务
* 		 Spring Boot 集成 Swagger
* 		 Spring Boot 项目 jar 包和 war 包部署
* 		 咨询管理信息系统开发实战







namespace 和cgroup 



进程间通讯
信号量消息队列和共享内存


网络隔离避免端口占用


cgroup计算使用量


cgroup control  group 
资源限制
优先级分配
ziyuan tongji 
任务控制



docker  两种模式’



开发者监控的话使用stats api 进行监控


cAdvisor

datadog
Promemetheus




etcd  配置共享和服务发现


1：服务发现
2：消息发布与订阅
3：负载均衡
4：分布式通知与协调
5：分布式锁与竞选
6：分部式队列
7：集群监控
8：




compose
machine
swarm
    













进程间通信
网络通信。 
共享内存。 
hive。

 hudi
hdfs 加hbase

解编优执

stm32

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


￼
IT人故事会
关注




https://www.icode9.com/content-4-85387.html



docker kafka 集群


今天的任务是zk啊



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
数据发布/订阅
负载均衡
命名服务
分布式协调/通知
集群管理
Master选举
分布式锁
分布式队列



可以用Curator轻易的实现一个分布式锁：







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


新技术兴起了一波又一波：ios、andrioid、搜索、大数据、区块链、算法、AI。最终他们就像拼图的一个小块，成为整个工程中中一个小工具。


rmi  和rpc

Kylin，hive
熟练运用SQL、Tableau、Excel、PPT。 专业知识:




spring 源码


为什么觉得 观察者      工厂  策略模式有点像


责任链
和
中介

过滤器

备忘录


索引和执行计划
极客时间 -《MySQL实战45讲》 
掘金小册 -《MySQL 是怎样运行的：从根儿上理解 MySQL》 
博文视点 -《高性能MySQL》


MtThrift


http://blog.didispace.com/spring-cloud-learning/





1、新建module,在主程序类加入断点，启动springboot
2、首先进入SpringAplication类run方法
3、run方法新建SpringApplication对象
4、SpringApplication对象的run方法，首先创建并启动计时监控类
5、接着通过configureHeadlessProperty设置java.awt.headless的值
6、接着调用getRunListeners创建所有spring监听器
7、接着DefaultApplicationArguments初始化应用应用参数
8、接着prepareEnvironment根据运行监听器和参数准备spring环境
9、接着调用createApplicationContext方法创建应用上下文
10、通过prepareContext准备应用上下文
11、refreshContext方法刷新上下文
12、调用stop方法停止计时监控器类
13、调用started发布应用上下文启动完成事件
14、callRunners方法执行所有runner运行器
15、调用running发布应用上下文就绪事件
16、最后返回应用上下文






https://www.656463.com/article/kpjyspringmvctomcatqdspringbootszy_9


自己拿spring写一个项目



计算机网络、数据结构、算法、操作系统等课内基础知识:掌握 Java 基础知识:掌握 JVM 虚拟机(Java内存区域、虚拟机垃圾算法、虚拟垃圾收集器、JVM内存管理):掌握 高并发、高可用、高性能系统开发:掌握 Struts2、Spring、Hibernate、Ajax、Mybatis、JQuery :掌握 SSH 整合、SSM 整合、 SOA 架构:掌握 Dubbo: 掌握 Zookeeper: 掌握 常见消息队列: 掌握 Linux:掌握 MySQL常见优化手段:掌握 Spring Boot +Spring Cloud +Docker:了解 Hadoop 生态相关技术中的 HDFS、Storm、MapReduce、Hive、Hbase :了解 Python 基础、一些常见第三方库比如OpenCV、wxpy、wordcloud、matplotlib:熟悉 


Spring Boot的项目终止以jar包的形式进行打包，这种jar包可以通过可以通过命令（java -jar xxx.jar）来运行的，这种jar包不能被其他项目所依赖，即使被依赖了也不能直接使用其中的类。普通的jar包，解压后直接就是包名，包里就是我们的代码，而 Spring Boot 打包成的可执行 jar 解压后，在 \BOOT-INF\classes 目录下才是我们的代码，因此无法被直接引用。如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。
下面是不同jar包的目录结构
————————————————
版权声明：本文为CSDN博主「小鱼儿_karl」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_33249725/article/details/95470178




使用 volatile 可以禁止 JVM 的指令重排，保证在多线程环境下也能正常运行。 

https://afoo.me/



YouTube历史上应用有效的其他召回方式也同时在线上运行，如基于用户观看历史相似性、基于搜索行为、基于协同行为等方式




程池中的几种重要的参数
corePoolSize就是线程池中的核心线程数量，这几个核心线程，只是在没有用的时候，也不会被回收
maximumPoolSize就是线程池中可以容纳的最大线程的数量
keepAliveTime，就是线程池中除了核心线程之外的其他的最长可以保留的时间，因为在线程池中，除了核心线程即使在无任务的情况下也不能被清                                除，其余的都是有存活时间的，意思就是非核心线程可以保留的最长的空闲时间，
util，就是计算这个时间的一个单位。
workQueue，就是等待队列，任务可以储存在任务队列中等待被执行，执行的是FIFIO原则（先进先出）。
threadFactory，就是创建线程的线程工厂。
handler,是一种拒绝策略，我们可以在任务满了之后，拒绝执行某些任务。



限流
和熔断


降级



docker网络通信
spring事务
设计模式
hashmap和 并发hashmap
mysql优化
mysql锁
java1.8语法

springboot

mybits缓存


zk的分布式锁

dubbo限流

 mq


dubbo序列号



关于有弹幕的网站


收看阿里云的新闻


什么是pod 
pod的通信方式

控制类型
 
 
 
 
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



最怕技术出身的人
不以技术为屠龙刀


今天做搜索

图片识别。做曲线图

图像化自己的需求的知识点


高频动作项目

zk
dubbo源代码


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


hive。

 hudi
hdfs 加hbase

解编优执

stm32

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


1. Prerequisites
    * JavaScript
    * NPM
    * Node.js
    * ES6/ES7
2. General Development Skills
    * Learn GIT, create a few repositories on GitHub, share your code with other people
    * Know HTTP(S) protocol, request methods (GET, POST, PUT, PATCH, DELETE, OPTIONS)
    * Don't be afraid of using Google, Power Searching with Google
    * Read a few books about algorithms and data structures
3. Web Frameworks
    * Express.js
    * Adonis.js
    * Meteor.js
    * Nest.js
    * Sails.js
    * Koa.js
    * Loopback.js
    * egg.js
    * midway
4. Databases
    * Relational
        * SQL Server
        * PostgreSQL
        * MariaDB
        * MySQL
    * Cloud Databases
        * CosmosDB
        * DynamoDB
    * Search Engines
        * ElasticSearch
        * Solr
        * Sphinx
    * NoSQL
        * MongoDB
        * Redis
        * Apache Cassandra
        * LiteDB
        * RavenDB
        * CouchDB
5. Caching
    * Node-Cache
    * Distributed Cache
        * Redis
        * Memcached
    * Memory Cache
6. Logging
    * Log Frameworks
        * Node-Loggly
        * Winston
        * Node-Bunyan
        * Morgan
    * Log Management System
        * Sentry.io
        * Loggly.com
7. Template Engines
    * Mustache.js
    * Handlebars
    * EJS
    * Pug
    * Nunjunks.js
8. Real-Time Communication
    * Socket.IO
9. Typed Superset
    * TypeScript
    * Flow
10. API Clients
    * REST
        * Request
        * Node-Rest-Client
        * Axios
    * GraphQL
11. Good to Know
    * Async.js
    * PM2
    * Commander.js
    * Passport
    * Nodemailer
    * Marked
    * JSHint
12. Testing
    * Unit, Behavior, Integration Testing
        * Jest
        * Jasmine
        * Chai
        * Mocha
        * Enzyme
        * Sinon
    * E2E Testing
        * Selenium
        * Puppeteer
13. Task Scheduling
    * Agenda
    * Cronicle
    * Node-Schedule
14. MicroServices
    * Message-Broker
        * RabbitMQ
        * Apache Kafka
        * ActiveMQ
        * Azure Service Bus
    * Message-Bus
        * Distribus
        * BusMQ
15. Design-Patterns 
16. JavaScript Algorithms and Data Structures 



深入浅出nodejs


中
原
策
观
中
单
状 




* git clone https://github.com/pchab/ProjectRTC.git
* cd ProjectRTC/
* npm install
* npm start




herkou



kfk链接过程


****

****



 
Kafka最强教程 - 二百四十九先森的博客 - CSDN博客
Kafka最强教程 - 二百四十九先森的博客 - CSDN博客
 
 
机器学习及flinkML算法学习 - 康 健的专栏 - CSDN博客
机器学习及flinkML算法学习 - 康 健的专栏 - CSDN博客
 
 
图灵社区
 
何选择 Flink
 
图灵社区
 
 
Clickhouse初体验 - 阿知賀 - 简书
Clickhouse初体验
 
 
基于spark集群的券商个性化推荐系统架构设计最佳实践 - windix - twt企业IT交流平台
基于spark集群的券商个性化推荐系统架构设计最佳实践 - windix - twt企业IT交流平台
 
 
Flink自学教程 - weixin_43342277的博客 - CSDN博客
Flink自学教程 - weixin_43342277的博客 - CSDN博客
 
 
王知无出品，Flink最强学习资源合集！ - 王知无 - 博客园
王知无出品，Flink最强学习资源合集！ - 王知无 - 博客园
寻找数据统治力：比较Spark和Flink | 易学教程
 
 
最简单流处理引擎——Kafka Streams简介 - 实时计算的个人空间 - OSCHINA
最简单流处理引擎——Kafka Streams简介 - 实时计算的个人空间 - OSCHINA
Kafka Streams简介: 让流处理变得更简单 - ido - 博客园
 
 
李知周 Big data scientist at Morgan Stanley 在“8点后”，约TA聊聊吧！ | 8点后
李知周 Big data scientist at Morgan Stanley 在“8点后”，约TA聊聊吧！ | 8点后
 
百度新闻
 
蚂蚁金服、陆金所、京东金融的风控模型有什么不同？
 
百度新闻
 
 
 
 
大数据
Hadoop学习之路（八）在eclispe上搭建Hadoop开发环境 - 扎心了，老铁 - 博客园




* 		会话缓存
    * 		session
* 		控制访问频率
    * 		防止洪水攻击
        * 		限制IP在一段时间的最大访问量
* 		社交列表
    * 		Hash类型
        * 		用户收藏列表
* 		社交场景
    * 		交集、并集、差集
        * 		共同收藏
        * 		共同爱好
* 		最新动态
    * 		sorted set类型
* 		缓存
    * 		热点数据，如可能读取数十万的数据
        * 		分类栏目
    * 		基于内存存储数据
* 		时效性
    * 		有效期
        * 		验证码超时控制
* 		计数器
    * 		原子递增
        * 		收藏数
* 		记录用户判断信息
    * 		用户是否已收藏
* 		热门列表与排行榜
    * 		排序
        * 		排行榜
* 		消息队列
    * 		list类型
        * 		LPUSH，添加到链表头
        * 		BRPOP，从链表尾部取出  




注册中心
配置中心
服务网关


lucene  

solr


elk



到推荐系统




结论是：
如果是CPU密集型应用，则线程池大小设置为N+1 
如果是IO密集型应用，则线程池大小设置为2N+1 




王仲远博士，美团点评高级研究员、高级总监，美团 AI 平台部 NLP 中心负责人、大众点评搜索智能中心负责人。加入美团点评前，担任美国 Facebook 公司 Research Scientist，负责 Facebook 产品级 NLP Service。在 Facebook 之前，担任微软亚洲研究院的主管研究员，负责微软研究院知识图谱项目和对话机器人项目。多年来专注于自然语言处理、知识图谱及其在文本理解方面的研究，在国际顶级学术会议如 VLDB、ICDE、IJCAI、CIKM 等发表论文 30 余篇，获得 ICDE 2015 最佳论文奖，并是 ACL 2016 Tutorial “Understanding Short Texts”的主讲人，出版学术专著 3 部，获得美国专利 5 项。在 NLP 和 KG 研究领域及实际产品系统中均有丰富经验，研究领域包括自然语言处理、知识图谱、深度学习、数据挖掘等。



两阶段提交和三次握手原理

elk
spingboot
springcloud
k8s


反射
线程池
ioc
类加载
=


openstack

这个是虚拟化的，请不断增加他的描述

* 		kafka消息会固化，存文件，nsq默认是不保存的
* 		kafka消息因为固化下来，所以是保序的，nsq传递时候通常是无序的，当然你也可以保留下信息去check时间戳，因此nsq更适合处理数据量大但是彼此间没有顺序关系的消息。


v
rust

Maxwell vs Canal
	Canal(服务端)	Maxwell(客户端+服务端)
语言	Java	Java
活跃度	活跃	活跃
HA	支持	定制 但是支持断点还原功能
数据落地	定制	落地到Kafka
分区	支持	支持
bootstrap	不支持	支持
数据格式	格式自由	json(格式固定)
文档	较详细	较详细
随机读	支持	支持




地落警报控监的统系个整善完动推能，术技关相等 anafarG&suehtemorP悉熟-题问到位定速快能候时的障故现出群集，sk悉熟-mleH用使练熟-:项分加行运定稳时小天统系障保-术技维运 关相究研，序维维运化优，案方术技维运定制 - 作操等服合，署部服统系 - 控监，份备据数，优调能性，除排障故，护维常日的器务服统系 - 署部化动 自，境环行运统系建搭，署部境环器务服责负 - :责职位岗力能发开的定一有，tiG用使练熟 - 库删不稳手，识意全安的烈强有 - 具工IC它其或ic-baltig /snikneJ用使练熟-等xnigN，SND，BDairaM/LQSyM，BDognoM，sideR如例，置配的务服种各下统系xuniL悉熟-化动自作工的复重将行进本 脚的SJedoN / lreP / hsaB / oG / nohtyP写编练熟能 - 件组setenrebuK等snderoc / lennalF / ssergnI悉熟 - 验经维运的sk rekcoD有 - 云里阿用使练熟 能-:求要本基目项regduJ与参-统系志日，控监地落和进推-率效发研品产升提，务服础基的流一建搭队团发研为-护维常日群集sk-:容内作工 







