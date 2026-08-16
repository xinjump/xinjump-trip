/* ================================================================
 * 城市注册表（唯一入口）
 *
 * 目录结构（按 地区 → 线级 分层，方便扩展）：
 *   assets/js/cities/
 *   ├── cn/          # 中国内地
 *   │   ├── tier1/   #   一线
 *   │   ├── tierNew/ #   新一线
 *   │   ├── tier2/   #   二线
 *   │   └── tier3/   #   三线及以下
 *   ├── hk-mo-tw/    # 港澳台
 *   └── overseas/    # 海外（预留：未来按国家/大洲再建子目录）
 *
 * 新增城市：
 *   1. 数据文件放进对应地区/线级目录（见上）
 *   2. 在下方 CITY_LIST 按分组插入一条记录：
 *        { name: '城市名', region: 'cn', tier: 'tier1', file: 'cn/tier1/xxx.js' }
 *      region: cn / hk-mo-tw / overseas
 *      tier:   tier1(一线) / tierNew(新一线) / tier2(二线) / tier3(三线及以下) / overseas(海外)
 *   列表会在运行时按「线级优先、地区次之」自动排序，无需手动排位置。
 * ================================================================ */

/* 排序权重：线级优先、地区次之（决定目的地下拉顺序） */
var TIER_ORDER = { tier1: 0, tierNew: 1, tier2: 2, tier3: 3, overseas: 4 };
var REGION_ORDER = { cn: 0, 'hk-mo-tw': 1, overseas: 2 };

window.CITY_LIST = [
  /* ---- 中国内地 · 一线 ---- */
  { name: '北京',  region: 'cn',       tier: 'tier1',   file: 'cn/tier1/beijing.js' },
  { name: '上海',  region: 'cn',       tier: 'tier1',   file: 'cn/tier1/shanghai.js' },
  { name: '广州',  region: 'cn',       tier: 'tier1',   file: 'cn/tier1/guangzhou.js' },
  { name: '深圳',  region: 'cn',       tier: 'tier1',   file: 'cn/tier1/shenzhen.js' },

  /* ---- 中国内地 · 新一线 ---- */
  { name: '成都',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/chengdu.js' },
  { name: '杭州',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/hangzhou.js' },
  { name: '重庆',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/chongqing.js' },
  { name: '合肥',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/hefei.js' },
  { name: '武汉',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/wuhan.js' },
  { name: '苏州',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/suzhou.js' },
  { name: '西安',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/xian.js' },
  { name: '南京',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/nanjing.js' },
  { name: '长沙',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/changsha.js' },
  { name: '天津',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/tianjin.js' },
  { name: '郑州',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/zhengzhou.js' },
  { name: '东莞',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/dongguan.js' },
  { name: '佛山',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/foshan.js' },
  { name: '青岛',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/qingdao.js' },
  { name: '沈阳',  region: 'cn',       tier: 'tierNew', file: 'cn/tierNew/shenyang.js' },

  /* ---- 中国内地 · 二线 ---- */
  { name: '厦门',  region: 'cn',       tier: 'tier2',   file: 'cn/tier2/xiamen.js' },
  { name: '大连',  region: 'cn',       tier: 'tier2',   file: 'cn/tier2/dalian.js' },
  { name: '哈尔滨', region: 'cn',      tier: 'tier2',   file: 'cn/tier2/haerbin.js' },
  { name: '宁波',  region: 'cn',       tier: 'tier2',   file: 'cn/tier2/ningbo.js' },
  { name: '昆明',  region: 'cn',       tier: 'tier2',   file: 'cn/tier2/kunming.js' },
  { name: '贵阳',  region: 'cn',       tier: 'tier2',   file: 'cn/tier2/guiyang.js' },

  /* ---- 中国内地 · 三线及以下 ---- */
  { name: '三亚',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/sanya.js' },
  { name: '威海',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/weihai.js' },
  { name: '大理',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/dali.js' },
  { name: '丽江',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/lijiang.js' },
  { name: '西双版纳', region: 'cn',    tier: 'tier3',   file: 'cn/tier3/xishuangbanna.js' },
  { name: '榆林',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/yulin.js' },
  { name: '延安',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/yanan.js' },
  { name: '洛阳',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/luoyang.js' },
  { name: '开封',  region: 'cn',       tier: 'tier3',   file: 'cn/tier3/kaifeng.js' },

  /* ---- 港澳台 ---- */
  { name: '香港',  region: 'hk-mo-tw', tier: 'tier1',   file: 'hk-mo-tw/hongkong.js' },
  { name: '澳门',  region: 'hk-mo-tw', tier: 'tier1',   file: 'hk-mo-tw/macau.js' },
  { name: '台湾',  region: 'hk-mo-tw', tier: 'tier1',   file: 'hk-mo-tw/taiwan.js' },

  /* ---- 海外（示例，取消注释即可启用；tier 可按当地定位填） ---- */
  // { name: '东京', region: 'overseas', tier: 'overseas', file: 'overseas/japan/tokyo.js' }
];

/* 按 线级 → 地区 → 名称 排序，保证下拉展示稳定有序 */
(function () {
  window.CITY_LIST.sort(function (a, b) {
    var t = (TIER_ORDER[a.tier] == null ? 99 : TIER_ORDER[a.tier]) - (TIER_ORDER[b.tier] == null ? 99 : TIER_ORDER[b.tier]);
    if (t) return t;
    var r = (REGION_ORDER[a.region] == null ? 99 : REGION_ORDER[a.region]) - (REGION_ORDER[b.region] == null ? 99 : REGION_ORDER[b.region]);
    if (r) return r;
    return a.name.localeCompare(b.name, 'zh');
  });
})();
