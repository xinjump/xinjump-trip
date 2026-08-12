/* ================================================================
 * 城市数据主入口
 * 每个城市一个数据文件（assets/js/cities/xxx.js），文件名注册到 CITY_LIST。
 * 新增城市两步：
 *   1. 新建 assets/js/cities/xxx.js，往 window.CITY_DATA 里写一条数据
 *   2. 在 CITY_LIST 末尾追加 { name, file }
 * ================================================================ */
window.CITY_DATA = {};

/* 出发地固定为西安；CITY_LIST 顺序即下拉框顺序 */
window.CITY_LIST = [
  { name: '青岛',  file: 'qingdao.js' },
  { name: '北京',  file: 'beijing.js' },
  { name: '昆明',  file: 'kunming.js' },
  { name: '大理',  file: 'dali.js' },
  { name: '丽江',  file: 'lijiang.js' },
  { name: '西双版纳', file: 'xishuangbanna.js' },
  { name: '三亚',  file: 'sanya.js' },
  { name: '威海',  file: 'weihai.js' },
  { name: '大连',  file: 'dalian.js' },
  { name: '厦门',  file: 'xiamen.js' },
  { name: '香港',  file: 'hongkong.js' }
];

/*
 * 城市数据结构说明：
 * {
 *   cover:    'CSS 渐变',
 *   emoji:    '封面图标',
 *   tagline:  '一句话副标题',
 *   bestMonths: '推荐月份，如 5-10月',
 *   intro:    '城市简介 1-2 句',
 *   transport:[ { mode:'🚄 高铁', line:'G2064 西安北 09:37 → 青岛站 15:50', time:'约6小时13分', price:'~643 元' } ],
 *   hotels:   [ { type:'经济型', rec:'如家/汉庭…', price:'200-280 元/晚', note:'…' } ],
 *   foods:    [ { name:'鲅鱼水饺', shop:'船歌鱼水饺、双合园饺子', per:'70-90 元', note:'…' } ],
 *   spots:    [ { name:'栈桥', ticket:'免费', time:'1h', note:'回澜阁、喂海鸥' } ],
 *   days: {   // 3-7 天行程模板
 *     3: [ { title:'D1 主题', tag:'标签', items:[ {t:'上午', x:'…'} ] }, … ],
 *     4: […], 5: […], 6: […], 7: […]
 *   },
 *   budget: {
 *     perDay: [最低, 最高],      // 人均每日目的地消费（住+吃+市内交通+门票）
 *     transport: [最低, 最高],   // 往返大交通人均
 *     note: '预算说明'
 *   },
 *   tips: [ '避坑/提示 数组' ]
 * }
 */
