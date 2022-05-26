var as = document.querySelectorAll("#xdj span");
var zifu = [
	"每一个人都会坚持自己的信念，在别人看来，是浪费时间，Ta却觉得很重要",
	"温馨提示：早餐千万不要在空腹时吃！！",
	"假如生活欺骗了你，不要着急，拿起美颜相机去欺骗生活。",
	"你顺手挽起火焰，化作漫天大雪。——北岛",
	"我想，在这个世界上，虽然没有最美好的相遇，但却应该有为了相遇或者重逢，所做的最美好的努力。-——勒・克莱齐奥 《流浪的星星》",
	"生活嘛、慢慢来、所有的好运都在路上。 ",
	"晚上睡不着，对着空气挥两拳，不为什么就为了干这个世界。",
	"经常熬夜的人会，1、产生幻觉 3、记忆力差 5、不识数 7、神志不清。这九点大家要记住。",
	"一只猪感到被孤立 于是变成了朱古力",
	"无论我们活成什么鬼样子，我都相信我们前途无量。",
	"但愿殊途同归，我能与你讲讲来时的路。",
	"总有一天 你会遇到一个特别的人，他很爱你 对你很好，把你当成生命中最重要的那个，我遇到了!",
	"有些事，发生了就只能接受。有些人，失去了就只有放手。有些路，选择了就没得回头。我们尝试着长大，一路跌跌撞撞然后遍体鳞伤，也许这就是成长的代价。",
	"当你跌入谷底的时候，不要绝望，抬起头，你会看见一片灿烂的星空。",
	"为什么一看书，就困呢？因为书，是梦开始的地方。",
	"圣旨：奉天承运，皇帝召曰：现让你三年不准拉屎，拉屎不准用纸，用纸不过三尺，直到憋死为止，钦此！",
	"我知道你明天会发生什么事哦。真的、我后天告诉你。",
	"生活会让你苦上一阵子 等你适应以后再让你苦上一辈子，可那又怎样呢，开心就好了呀！",
	"我发誓，我今天一定不熬夜，如果再熬夜，我就再发誓。",
	"有钱人终成眷属 没钱人亲眼目睹 我在三轮车上看得清清楚楚",
	"做自己生命的主角，而不是别人生命中的看客。",
	"知己一二胜过泛泛之交。和有趣的人一起浪费人生。",
	"贫穷限制了别人的想象力，但我就不一样了，贫穷限制了我的购买力。",
	"我喜欢日落，月亮，诗歌这些虚无的东西，它们接纳我枯燥的灵魂。可我又常忘却它们徘徊于世俗之间。因为人间烟火四个字，想想就很幸福。而这种期盼幸福的心情使我安定下来，使我对俗世的一切美好抱有爱意。",
	"当天空悄悄的拉上窗帘，蔚蓝色慢慢褪去，黑夜中总会有一颗星星在闪闪发亮，梦中我们曾经向往的生活，也即将到来，我们各自踏上新的旅途。",
	"善良要有底线，大方要有原则。不分青红皂白，只知道对人好，那会辜负自己的一片好心。",
	"人性一个最特别的弱点就是：在意别人如何看待自己。这一程，希望你活得烈马青葱，不为他人的目光所累。",
	"不要跟别人交心吐露太多，因为你迟早会发现自己会后悔的，讲真，交心这件事，很幼稚，我倒不是鼓励你变得复杂，我只是希望你能学会保护自己。",
];
dazi(as,zifu,8000,1);

var sj = document.querySelectorAll("#sj span");
    sj[0].innerHTML = ws(rq(3))+':'+ws(rq(4));
    sj[1].innerHTML = ws(rq(5));
    sj[2].innerHTML = rq(0)+'-'+rq(1)+'-'+rq(2)+'   '+rq(6);
setInterval(function(){
    if(sj[0].innerHTML != ws(rq(3))+':'+ws(rq(4))){sj[0].innerHTML = ws(rq(3))+':'+ws(rq(4));}
    if(sj[1].innerHTML != ws(rq(5))){sj[1].innerHTML = ws(rq(5));}
    if(sj[2].innerHTML != rq(0)+'-'+rq(1)+'-'+rq(2)+'   '+rq(6)){sj[2].innerHTML = rq(0)+'-'+rq(1)+'-'+rq(2)+'   '+rq(6);}
},1000);


(function () {
	var a_idx = 0;
	window.onclick = function (event) {
		var a = ["富强", "(*^▽^*)", "民主", "(^_−)☆", "文明", "o(´^｀)o", "和谐", "o(╥﹏╥)o", "自由", "ψ(*｀ー´)ψ", "平等", "(•́へ•́╬)", "公正", "ヽ(ー_ー)ノ", "法治", "┗( ▔, ▔ )┛", "爱国", "(ಥ_ಥ)", "敬业", "(✪ω✪) |ू･ω･` )", "诚信", "Thanks♪(･ω･)ﾉ", "友善", "ᕙ༼ ͝°益° ༽ᕗ"];
		var heart = document.createElement("b"); //创建b元素
		heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
		document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
		a_idx = (a_idx + 1) % a.length;
		heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
		var f = 16, // 字体大小
			x = event.clientX - f / 2, // 横坐标
			y = event.clientY - f, // 纵坐标
			c = randomColor(), // 随机颜色
			a = 1, // 透明度
			s = 1.2; // 放大缩小
		var timer = setInterval(function () { //添加定时器
			if (a <= 0) {
				document.body.removeChild(heart);
				clearInterval(timer);
			} else {
				heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
					c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
					s + ");";
				y--;
				a -= 0.016;
				s += 0.002;
			}
		}, 15)
	}
	// 随机颜色
	function randomColor() {
		return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
	}
}());

var gds = document.querySelector("#toubu>div:nth-child(2)>div");
var gd = document.querySelectorAll("#toubu>div:nth-child(2)>div a");
var g=1,r=1;
if(IsPhone()){
	let body = document.querySelector("body");
	let hj = document.createElement("div");
	hj.id="a65";
	body.appendChild(hj);
	document.querySelector("#toubu>ul").onclick=function(){
		g+=1;
		if(g%2==0){
			document.getElementById('a65').classList.add("a65");
			document.querySelector("#toubu>div:nth-child(2)").style.zIndex="99"
			document.querySelector("#toubu>ul").style.zIndex="99"
			document.querySelector("#toubu>div:nth-child(2)").style.left="0px";
		}else{
			document.getElementById('a65').classList.remove("a65");
			document.querySelector("#toubu>div:nth-child(2)").style.left="-180px";
		}
	}
	document.getElementById('a65').onclick=function(){
		document.getElementById('a65').classList.remove("a65");
		document.querySelector("#toubu>div:nth-child(2)").style.left="-180px";
		g+=1;
	}
	document.querySelector("#toubu>div:nth-child(2)>div>div>span").onclick=function(){
		if(IsPhone()){
			let gdsg = document.querySelector("#toubu>div:nth-child(2)>div span").clientHeight;
			r+=1;
			if(r%2==0){
				gds.style.height=gdsg*(gd.length+1)+"px"
			}else{
				gds.style.height=gdsg+'px'
			}
		}
	}
}else{
	document.querySelector("#toubu").removeChild(document.querySelector("#toubu>ul"));
	let gdsg = document.querySelector("#toubu>div:nth-child(2)>div span").clientHeight;
	gds.onmouseenter=function(){
		gds.style.height=gdsg*(gd.length+1)+"px"
		gds.style.boxShadow="0 0 0 0.5px #fff"
	}
	gds.onmouseleave=function(){
		gds.style.height=gdsg+'px'
		gds.style.boxShadow="0 0 0 0 #fff"
	}
}
