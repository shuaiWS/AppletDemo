//index.js
//获取应用实例
var app = getApp();
var start=1;
function digui(){
  var n=1;
  // return function (){
    if(start>100)return;
    console.log(n+start);
    start++;
  // }
  //  digui();
};
// digui();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    // 轮播广告start
    slidImages:['https://img1.360buyimg.com/da/jfs/t3853/313/1444971816/82803/95e50260/587d8fe3N7caf9d58.jpg','https://m.360buyimg.com/mobilecms/s720x322_jfs/t3259/137/5850861379/198298/e232cb40/5886bc18N9ea2dde4.jpg!q70.jpg','https://img1.360buyimg.com/da/jfs/t3076/57/5556520557/94390/d49c3484/58735f7aNdb13e6ef.jpg','https://m.360buyimg.com/mobilecms/s720x322_jfs/t3277/63/5840783427/97535/f77f6cfb/5886ecbeN738aad72.jpg!q70.jpg'],
    // 轮播广告end
    //限时抢购start
    limitTimer:{
      hours:"00", 
      minutes:"00",
      seconds:"00",
    },
    limitTimeInfo:{
      title:"10点购go",
      subtitle:"一年之计在于春",
      timer:new Date().getTime()-10000000,
      goods:[{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        },{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        },{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        },{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        },{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        },{
        title:"商品名称",
        salePrice:'1000.00',
        goodsPrice:'1200.00',
        goodsImg:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3013/4/1396511027/63266/198af44e/57c38da5N26a50469.jpg!q70.jpg'
        }]
    },
    //限时抢购end
         
    guideArray:[{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:"京东超市"
    },
    {
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'全球购'
    },
    {
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'服装城'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'京东海鲜'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'京东到家'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'充值中心'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'惠赚钱'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'领券'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'物流查询'
    },{
      img:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3214/325/5867296844/6495/710cedb1/58887268Ndda9d444.png',
      text:'我的关注'
    }],
    // 活动专题
    activePanel:[{
        title:'https://m.360buyimg.com/mobilecms/jfs/t2878/152/3484829401/8909/e1cf0ca/578de36bNae7bb54a.png!q70.jpg',
        panelArea:[{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        }],
        panelActive:[{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        }],
        panelBanner:['https://img10.360buyimg.com/da/jfs/t2716/126/3351651677/38903/bad759dd/578859b3Na0725360.jpg',
        'https://m.360buyimg.com/mobilecms/jfs/t3844/364/3322680567/134289/bf8c3616/588566feN9ed2ab12.jpg!q70.jpg']
    },{
        title:'https://m.360buyimg.com/mobilecms/jfs/t3910/235/1201548030/8292/e6734ea8/586c5dfdNe496351a.png!q70.jpg',
        panelArea:[{
          title:'全球尖货',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3061/18/5884094062/20718/768cc388/5887295cNba23f76f.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'玩转3C',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        }],
        panelActive:[{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'爱宝宝',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        }],
        panelBanner:['https://img10.360buyimg.com/da/jfs/t2716/126/3351651677/38903/bad759dd/578859b3Na0725360.jpg',
        'https://m.360buyimg.com/mobilecms/jfs/t3844/364/3322680567/134289/bf8c3616/588566feN9ed2ab12.jpg!q70.jpg']
    },{
        title:'https://m.360buyimg.com/mobilecms/jfs/t2677/290/3439129728/9956/4d607f09/578de9fcNb59b6153.png!q70.jpg',
        panelArea:[{
          title:'时尚馆',
          text:'全场件2件9折',
          image:"https://m.360buyimg.com/mobilecms/jfs/t4093/228/1650286184/15148/734109ff/5885c956N60bcb387.jpg!q70.jpg"
        },{
          title:'美食城',
          text:'爆款直降',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3808/72/3272546336/22027/b4352d41/5881da4dNc7c9f7de.jpg!q70.jpg"
        },{
          title:'手机数码',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/mobilecms/jfs/t3274/172/5848683641/4853/887c4f63/5893db0aNa392ec63.jpg!q70.jpg"
        },{
          title:'大家电馆',
          text:'诺基亚6 试用',
          image:"https://m.360buyimg.com/n1/jfs/t2878/184/2932910536/97050/f921895f/577b3fe2Nddee677c.jpg!q70.jpg"
        }],
        panelActive:[{
          title:'母音馆',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t4000/355/1642426458/19011/d32a4a4a/58844dd1N0d6827b3.jpg!q70.jpg'
        },{
          title:'电脑办公',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3085/234/5904824760/16376/fd5b3e87/58952939N63bb11e6.jpg!q70.jpg'
        },{
          title:"鞋靴箱包",
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3160/176/5748553859/21367/83b9533f/587ed09aN8a2dd816.jpg!q70.jpg'
        },{
          title:'小家电馆',
          text:'满300减20',
          image:'https://m.360buyimg.com/n1/jfs/t922/101/457950072/87343/b69a3a22/55262107N59348740.jpg!q70.jpg'
        },{
          title:'生鲜馆',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3973/156/1686767257/16794/919b2ab3/5886fabbN3b579a3a.jpg!q70.jpg'
        },{
          title:'医药保健',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3937/79/1414359188/6391/cfdf6091/5877687cN64f85dc5.jpg!q70.jpg'
        },{
          title:'图书音像',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3859/22/1624855439/13993/9e7e412e/58806727N4db4af18.jpg!q70.jpg'
        },{
          title:'运动户外',
          text:'满300减20',
          image:'https://m.360buyimg.com/mobilecms/jfs/t3859/22/1624855439/13993/9e7e412e/58806727N4db4af18.jpg!q70.jpg'
        }],
        panelBanner:['https://m.360buyimg.com/mobilecms/jfs/t3121/223/5857240173/98093/ba9b768c/58870a90N2e8eac93.jpg!q70.jpg']
    }],
    pannelList:[{
      title:'https://m.360buyimg.com/mobilecms/jfs/t3262/58/5673226654/6672/fcc818b3/587c8b2bNec769cc1.png!q70.jpg',
      list:[{
          title:'精选',
          subtitle:'20家好店为你精心推荐',
          isIcon:false,
          icon:'',
          isText:true,
          text:'SupFire京东自营专区',
          isFooterIcon:false,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          moreCover:true,
          cover:['https://m.360buyimg.com/n1/jfs/t3664/279/1440655947/170580/e269caa8/5826a38bNb0a77cf5.jpg',
          'https://m.360buyimg.com/n1/jfs/t1060/329/454563495/112007/7086165c/55261d53N10ca186a.jpg']
      },{
          title:'女装',
          subtitle:'女神教室',
          isIcon:false,
          icon:'',
          isText:true,
          text:'森马自营旗舰店',
          isFooterIcon:false,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          moreCover:true,
          cover:['https://m.360buyimg.com/n1/jfs/t3286/28/2927758796/330933/ac10e8bc/57e89574N9869c10d.jpg',
          'https://m.360buyimg.com/n1/jfs/t3049/1/2890345489/330933/ac10e8bc/57e895b3Nc038fff7.jpg']
      }]
    },{
      title:'https://m.360buyimg.com/mobilecms/jfs/t2869/357/3404860902/7661/26de821/578dee17N69a6ac0b.png!q70.jpg',
      list:[{
          title:'新年换新机',
          subtitle:'15款高性价比国产手机推荐',
          isIcon:false,
          icon:'',
          isText:false,
          text:'SupFire京东自营专区',
          isFooterIcon:false,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          moreCover:true,
          cover:['https://m.360buyimg.com/mobilecms/s386x386_jfs/t3502/149/1442706783/302122/91048536/5825a5a6Nde8ecb75.jpg!q70.jpg',
          'https://m.360buyimg.com/mobilecms/s386x386_jfs/t3175/98/4506474928/251187/914831b7/5844f3a1N233450bb.jpg!q70.jpg']
      },{
          title:'随时听音乐',
          subtitle:'音效？入耳式耳机和你更配',
          isIcon:false,
          icon:'',
          isText:false,
          text:'森马自营旗舰店',
          isFooterIcon:false,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          moreCover:true,
          cover:['https://m.360buyimg.com/mobilecms/s386x386_jfs/t2047/240/1351601184/19033/883cd3c2/56945f8dNe898f583.jpg!q70.jpg',
          'https://m.360buyimg.com/mobilecms/s386x386_jfs/t574/94/1379454558/62086/e9b5ad7/54d1d3f1N1e1dedd9.jpg!q70.jpg']
      }]
    },{
      title:'https://m.360buyimg.com/mobilecms/jfs/t3772/343/1287610868/4307/19445fcc/5821896aN934a58f3.png!q70.jpg',
      list:[{
          title:'数码玩物',
          subtitle:'压岁钱用来买啥游戏硬件',
          isIcon:true,
          icon:'https://st.360buyimg.com/m/images/index/live-icon.png',
          isText:false,
          text:'月球上',
          isFooterIcon:true,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          cover:['https://m.360buyimg.com/live/jfs/t3181/140/5820649993/271379/8e3041e5/58847139N8be273be.jpg!q70.jpg'],
          moreCover:false,
      },{
          title:'运动空间',
          subtitle:'这身材居然是我的大学老师',
          isIcon:true,
          icon:'https://st.360buyimg.com/m/images/index/live-icon.png',
          isText:false,
          text:'月球上',
          isFooterIcon:true,
          footerIcon:'https://st.360buyimg.com/m/images/index/location.png',
          cover:['https://m.360buyimg.com/live/jfs/t3169/84/5838324463/124439/eeb775/58845cc8Ned9059f9.jpg!q70.jpg'],
          moreCover:false,
      }]
    }],
    // 为您推荐
    recommendList:[{
      goodsName:'艾跑 哈雷电动车　两轮电动车 新款电动车 可配减震 防盗器 定金链接具体咨询客服',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t3103/66/2595888392/61831/210eeb05/57e3656aNd5637597.jpg!q70.jpg'
    },{
      goodsName:'【京东超市】雀巢 （Nestle）脆脆鲨 巧克力味威化 640g',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t1966/149/1538695976/184515/a798f487/56c67c5bN4daaa04b.jpg!q70.jpg'
    },{
      goodsName:'艾跑 哈雷电动车　两轮电动车 新款电动车 可配减震 防盗器 定金链接具体咨询客服',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t3103/66/2595888392/61831/210eeb05/57e3656aNd5637597.jpg!q70.jpg'
    },{
      goodsName:'【京东超市】雀巢 （Nestle）脆脆鲨 巧克力味威化 640g',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t1966/149/1538695976/184515/a798f487/56c67c5bN4daaa04b.jpg!q70.jpg'
    },{
      goodsName:'艾跑 哈雷电动车　两轮电动车 新款电动车 可配减震 防盗器 定金链接具体咨询客服',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t3103/66/2595888392/61831/210eeb05/57e3656aNd5637597.jpg!q70.jpg'
    },{
      goodsName:'【京东超市】雀巢 （Nestle）脆脆鲨 巧克力味威化 640g',
      goodsPrice:'50000.00',
      goodsUrl:'../detail/detail',
      sameUrl:'../test/test',
      goodsId:'123456',
      goodsImage:'//m.360buyimg.com//mobilecms/s276x276_jfs/t1966/149/1538695976/184515/a798f487/56c67c5bN4daaa04b.jpg!q70.jpg'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    // console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(arguments);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  gotoDetail:function(e){
    var goodsId=e.currentTarget.dataset.id;
    var sendArray=[1,2,3,1,56,78];
    console.log(e);
    console.log(goodsId);   
    wx.navigateTo({
      url: '../detail/detail?id='+goodsId+'&array='+sendArray,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    }) 
  },
  onReady:function(){
    // 这里是页面加载完成后执行的代码段
    var allDate=this.data.limitTimeInfo.timer;
    // var allDate=new Date().getTime()-5000;
    var nowDate=new Date().getTime();
    console.log(nowDate);
    var that=this;
    var limitTimer=setInterval(function(){
      var seconds=(nowDate-allDate)/1000;
      var hours=parseInt(seconds/3600);
      var minutes=parseInt((seconds%3600)/60);
      var seconds=parseInt(seconds%60);
      hours<10?hours="0"+hours:hours=hours;
      minutes<10?minutes="0"+minutes:minutes=minutes;
      seconds<10?seconds="0"+seconds:seconds=seconds;
        that.setData({
        limitTimer:{
          hours:hours,
          minutes:minutes,
          seconds:seconds
        }
      });
      if(nowDate-allDate<=0){
        clearInterval(limitTimer);
      }
      nowDate-=1000;
    },1000)
  }

})