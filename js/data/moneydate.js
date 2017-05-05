var data=[
   {
  	"source":"来自掌上高安的红包",
  	"money":"666"
  	},
//	{
//	"source":"来自初阳的红包",
//	"money":"110"
//	},
//	{
//	"source":"来自帅哥的红包",
//	"money":"119"
//	},
//	{
//	"source":"来自缓存加载中的红包",
//	"money":"112"
//	}
  ]


function createData(){
      		var datasource=data;
			var l=datasource.length;
			var table = document.querySelector('.mui-table-view');
			for(var i=0;i<l;i++)
			{
				var dep=datasource[i];
				var bigUl=document.getElementById('take_money');
				
				var boxLi=document.createElement('li');
				bigUl.appendChild(boxLi);
				boxLi.className='red_box';
				
				var titleP=document.createElement('p');
				boxLi.appendChild(titleP);
				titleP.className='red_title';
				titleP.innerHTML=dep.source;
				
				var red_moneyh1=document.createElement('h1');
				red_moneyh1.className='red_money';
				titleP.appendChild(red_moneyh1);
				red_moneyh1.innerHTML=dep.money;
				
				var red_forwordP=document.createElement('p');
				red_forwordP.className='red_forword';
				red_moneyh1.appendChild(red_forwordP);
				
				var clike = document.createElement('span');
				clike.className='clike';
				red_forwordP.appendChild(clike);
				clike.innerHTML = '猛戳';
				
				var get_money = document.createElement('span');
				get_money.className='get_money';
				clike.appendChild(get_money);
				get_money.innerHTML = '下载应用,红包统统拿去';
				
				var red_friend = document.createElement('span');
				red_friend.className='red_friend';
				get_money.appendChild(red_friend);
				red_friend.innerHTML = '分享给好友';
				table.insertBefore(boxLi, table.firstChild);
			}
}
