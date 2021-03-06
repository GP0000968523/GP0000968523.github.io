java中很多地方会涉及到锁，比如java代码并发场景，DB中的并发场景，分布式中的锁....你知道几种呢？下面来看看常见的11种锁
 
1. 乐观锁/悲观锁
这两个概念是人们对java中各种锁总结提出的模型，不是特指某种类型的锁。 乐观锁预期数据的并发操作不会发生修改而不需要进行加锁的操作，悲观锁则相反。在java中的乐观锁一般采用CAS算法或者版本控制，典型的应用如原子类操作。悲观锁则应用的比较广泛如Synchronized等等。
综上：
乐观锁适用于读操作比较多的场景，
悲观锁适用于写操作比较多的场景。
 
2.独享锁/共享锁
独享锁也称独占锁，是指该锁每次只能被一个线程占有，共享锁则可以被多个线程使用。
例如ReentrantReadWriteLock里的读锁是共享的，但是它的写锁是独享的。锁的共享可保证并发读是非常高效的，但是读写和写写，写读都是互斥的。
 
3.互斥锁/读写锁
互斥锁：
互斥意味着一个锁某一时刻只能被一个线程持有，其它试图获取锁的线程都会被阻塞，直至当前锁释放，该锁上的其它线程进入就绪状态，准备抢占锁，例如synchronized, 在jdk1.5版本之后又出现了Lock锁，它提供了比synchronized机制更加广泛的锁操作，后续将会单独开篇文章详细介绍这两种锁
读写锁：
包含了上文提到的独享锁/共享锁，写既是独享锁，读是共享锁，读远远大于写的场景非常需要用到它。相比于传统的锁，读读是不互斥的只有涉及到写才会互斥，这样就比传统锁提高了cpu资源利用率，可以说读写锁就是为了优化这种场景而设计的。
在DB中：一般读锁也叫共享锁，写锁称为独占锁。
 
4.行锁/表锁/页锁
MySQL的锁机制比较简单，其最显著的特点是不同的存储引擎支持不同的锁机制。行锁，表锁，页锁主要是从锁的粒度上来进行划分的.
MySQL大致可归纳为以下3种锁：
表级锁：开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高，并发度最低。
行级锁：开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低，并发度也最高。
页面锁：开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般
 
5.间隙锁
MySQL中当我们用范围条件检索数据，并请求共享或排他锁时，InnoDB会给符合条件的已有数据记录的索引项加锁；对于键值在条件范围内但并不存在的记录，叫做"间隙(GAP)"。InnoDB也会对这个"间隙"加锁，这种锁机制就是所谓的间隙锁(Next-Key锁)。
 
6.公平锁/非公平锁
公平锁：是指多个线程按照申请锁的顺序来获取锁。
非公平锁：不是按照顺序来获取锁，这意味着它存在这线程饥饿或优先级反转问题。
 
这里有第一个问题 ？为什么sychronizied的实现采用的是非公平锁且lock默认的锁机制也是非公平锁呢？
因为 非公平锁的效率更高。
 
这里有第二个问题？为什么说公平锁的性能比非公平锁的性能低 
      在没有深入了解内部机制及实现之前，先了解下为什么会存在公平锁和非公平锁。公平锁保证一个阻塞的线程最终能够获得锁，因为是有序的，所以总是可以按照请求的顺序获得锁。不公平锁意味着后请求锁的线程可能在其前面排列的休眠线程恢复前拿到锁，这样就有可能提高并发的性能。这是因为通常情况下挂起的线程重新开始与它真正开始运行，二者之间会产生严重的延时。因此非公平锁就可以利用这段时间完成操作。这是非公平锁在某些时候比公平锁性能要好的原因之一。 
 
这里有第三个问题？ 网上很多说法说非公平锁获取锁时各线程的的概率是随机的，非公平锁真的是随机的吗？
非公平锁并非真正随机，其获取锁还是有一定顺序的 
参照：公平锁与非公平锁
https://blog.csdn.net/zhilinboke/article/details/83104597
查看ReentrantLock源码实现
 
7.偏向锁/轻量级锁/重量级锁
这几个概念是jdk1.5版本提出的，为了优化synchronized提升效率，这三种锁的状态是通过对象监视器在对象头中的字段来表明的。
偏向锁:
是指锁一直被一个线程持有，再没有其它线程竞争该锁的情况下，当前线程可自由获取该锁，降低了获取锁的代价。
轻量级锁：
当锁处于偏向锁状态时，这时候有其它线程来尝试获取该锁，则发生了竞争态势，该锁会从偏向升级为轻量级锁，其它线程会通过自旋来尝试获取锁，不会阻塞从而提高效率。不过需要注意的是，轻量级锁并不是用来代替重量级锁的，它是状态的一种过渡。
重量级锁：
当锁处于轻量状态的时候，其它线程虽然是自旋，但自旋不会一直持续下去，当自旋一定次数的时候，还没有获取到锁，就会进入阻塞，该锁膨胀为重量级锁。重量级锁会让其他申请的线程进入阻塞，性能降低。这就是jdk1.5之前为什么称synchronized为重量级锁的原因，它会使其它线程直接进入阻塞状态，从而非常影响性能，1.5版本开始提出这些锁的状态，改变了synchronized重量级的包袱。
 
8.可重入锁
所谓重入锁，指的是以线程为单位，当一个线程获取对象锁之后，这个线程可以再次获取本对象上的锁，而其他的线程是不可以的，它的意义在于防范死锁
 
9.分段锁
分段锁是一种锁的设计，而并不是指某一具体的锁，比如我们常见的ConcurrentHashMap，它是并发安全高效的集合。 分段锁的目的是细化锁的粒度，尽量避免资源的竞争使线程阻塞。
 
10.自旋锁
是指当一个线程在获取锁的时候，如果锁已经被其它线程获取，那么该线程将循环等待，然后不断的判断锁是否能够被成功获取，直到获取到锁才会退出循环。
对于互斥锁，如果资源已经被占用，资源申请者只能进入睡眠状态。但是自旋锁不会引起调用者睡眠，如果自旋锁已经被别的执行单元保持，调用者就一直循环在那里看是否该自旋锁的保持者已经释放了锁，”自旋”一词就是因此而得名。java中如何实现自旋，我们后面会详细介绍
 
11.死锁
死锁产生的原因是等待需要的资源而一直拿不到，就会导致线程一直处于等待中。比较专业的定义是：一组互相竞争资源的线程因互相等待，导致“永久”阻塞的现象。
并发程序一旦死锁，一般没有特别好的方法，很多时候我们只能重启应用。因此，解决死锁问题最好的办法还是规避死锁。
 
12.分布式锁
很多时候我们需要保证一个方法在同一时间内只能被同一个线程执行。在单机环境中可以很容易解决，但是在分布式环境下就比较复杂了。分布式锁有三种方式:数据库，redis,zk
db设计思路：新建一张有method字段的表，method字段创建唯一索引，作插入操作以尝试获取锁，作删除操作以释放锁
redis设计思路：用到 setnx命令，expire，dtt命令。setnx （set if it not exist）的唯一性。
zk设计思路：利用zk的一个根目录下不能有重命子结点去获取锁，释放锁。
