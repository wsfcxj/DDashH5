window.onGameStart = function()
{
    console.log("OnGameStart");
   // alert("OnGameStart")
}
window.onGetData = function( keys)
{
    console.log("onGetData : " + keys);
   var  ks =keys.split('|');
   var  length = ks.length;
    console.log("length : " + length);
    var mk = new Array();
    for (var i = 0 ; i < length ; i ++)
    {
        mk[i] = ks[i];
    }
    console.log("arr length : " + mk.length);
    FBInstant.player.getDataAsync(mk)
        .then(function(data){
            var  vb = '';
            for (var i = 0 ; i < length ; i ++)
            {
                if (typeof data[ks[i]] !== 'undefined') {
                    vb = vb + data[ks[i]];
                }
                if(i != length -1)
                {
                    vb = vb + '|';
                }
            }
            //调用SendMessage函数访问Unity3D浏览器对象中的脚本函数
            window.gameInstance.SendMessage ('H5Obj', 'OnGetData', vb);
        });

}
window.onSetData = function( data)
{
    console.log("onSetData:"+data);
    var  obj = eval('('+data+')');
    FBInstant.player.setDataAsync(obj).then(function (da) {
       // window.gameInstance.SendMessage ('H5Obj', 'SetDataBack', da);
    });
}