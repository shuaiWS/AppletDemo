Page({
    data:{
        pageOptions:'',
        selectHeaderItem:1
    },
    // 头部点击选项卡切换start
    changeHeaderItem:function(e){
        console.log(e.currentTarget.dataset);
        var activeItem=e.currentTarget.dataset.item;
        this.setData({
            selectHeaderItem:activeItem
        })
    },
    // 头部点击选项卡切换end    
    onLoad:function(option){
        // console.log(option);
        this.setData({
            pageOptions:option
        })
    },
    goIndex:function(e){
        console.log()
        wx.navigateTo({
          url: '../test/test?aa='+JSON.stringify(this.data.pageOptions),
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
    }
})