(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pic perfect_atlas_", frames: [[0,514,172,151],[0,746,53,90],[174,514,121,122],[80,667,67,59],[127,728,61,60],[297,514,54,239],[0,667,78,77],[174,638,61,60],[55,746,70,58],[514,0,4,564],[0,0,512,512]]}
];


// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["pic perfect_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1293,0.1293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,66.2,66.2), null);


(lib.p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-42.9,-37.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p, new cjs.Rectangle(-42.9,-37.8,86,75.5), null);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-13.25,-22.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(-13.2,-22.5,26.5,45), null);


(lib.erfect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(22.55,-47.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(14.8,-14.35,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-9.25,-13.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-29.85,-59.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(-62.6,-25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(-84.05,-13.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.erfect, new cjs.Rectangle(-84,-59.7,167.1,119.5), null);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-18.5,-14.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c, new cjs.Rectangle(-18.5,-14.3,35,29), null);


// stage content:
(lib.picperfect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("secondwavwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(146));

	// erfect
	this.instance = new lib.erfect();
	this.instance.setTransform(251,-70.15,1,1,0,0,0,0,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({regX:-0.5,regY:0,scaleX:0.8825,x:250.55,y:-58.65},0).wait(1).to({scaleX:0.7649,x:250.6,y:-44.9},0).wait(1).to({scaleX:0.6474,x:250.7,y:-31.15},0).wait(1).to({scaleX:0.5298,x:250.75,y:-17.35},0).wait(1).to({scaleX:0.4123,x:250.8,y:-3.6},0).wait(1).to({scaleX:0.2948,x:250.85,y:10.1},0).wait(1).to({scaleX:0.1772,x:250.9,y:23.9},0).wait(1).to({scaleX:0.0597,x:250.95,y:37.65},0).wait(1).to({scaleX:0.0579,skewY:180,x:251.05,y:51.4},0).wait(1).to({scaleX:0.1754,x:251.1,y:65.15},0).wait(1).to({scaleX:0.2929,x:251.15,y:78.95},0).wait(1).to({scaleX:0.4105,x:251.2,y:92.7},0).wait(1).to({scaleX:0.528,x:251.25,y:106.45},0).wait(1).to({scaleX:0.6456,x:251.3,y:120.25},0).wait(1).to({scaleX:0.7631,x:251.4,y:134},0).wait(1).to({scaleX:0.8806,x:251.45,y:147.75},0).wait(1).to({scaleX:0.9982,x:251.5,y:161.55},0).wait(1).to({scaleX:0.8881,x:251.45,y:169.95},0).wait(1).to({scaleX:0.778,y:178.35},0).wait(1).to({scaleX:0.668,y:186.75},0).wait(1).to({scaleX:0.5579,y:195.2},0).wait(1).to({scaleX:0.4479,x:251.35,y:203.6},0).wait(1).to({scaleX:0.3378,y:212},0).wait(1).to({scaleX:0.2277,y:220.45},0).wait(1).to({scaleX:0.1177,y:228.85},0).wait(1).to({scaleX:0.0076,x:251.3,y:237.25},0).wait(1).to({scaleX:0.1024,skewY:0,y:245.65},0).wait(1).to({scaleX:0.2125,y:254.1},0).wait(1).to({scaleX:0.3226,y:262.5},0).wait(1).to({scaleX:0.4326,x:251.25,y:270.9},0).wait(1).to({scaleX:0.5427,y:279.35},0).wait(1).to({scaleX:0.6527,x:251.2,y:287.75},0).wait(1).to({scaleX:0.7628,y:296.15},0).wait(1).to({scaleX:0.8729,y:304.6},0).wait(1).to({scaleX:0.9829,x:251.15,y:313},0).wait(1).to({scaleX:0.9817,rotation:1.8737,x:251.25,y:309.4},0).wait(1).to({scaleX:0.9805,rotation:3.7474,x:251.35,y:305.7},0).wait(1).to({scaleX:0.9793,rotation:5.6211,x:251.45,y:302.1},0).wait(1).to({scaleX:0.9781,rotation:7.4949,x:251.6,y:298.5},0).wait(1).to({rotation:3.7474,x:251.45,y:306.15},0).wait(1).to({rotation:0,x:251.3,y:313.85},0).wait(1).to({x:253.6,y:309.25},0).wait(1).to({x:255.9,y:304.65},0).wait(1).to({y:307.7},0).wait(1).to({y:310.75},0).wait(1).to({y:313.85},0).wait(1).to({y:312.1},0).wait(1).to({y:310.4},0).wait(1).to({y:316.15},0).wait(55));

	// p_num2
	this.instance_1 = new lib.p();
	this.instance_1.setTransform(150.25,-31.1,1,1,0,0,0,-1.1,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({regX:0,regY:0,rotation:-0.8333,x:151.147,y:-26.5034},0).wait(1).to({rotation:-1.6665,x:150.9438,y:-7.9039},0).wait(1).to({rotation:-2.4998,x:150.7405,y:10.6986},0).wait(1).to({rotation:-3.3331,x:150.5371,y:29.3041},0).wait(1).to({rotation:-4.1664,x:150.3336,y:47.9125},0).wait(1).to({rotation:-4.9996,x:150.1301,y:66.5239},0).wait(1).to({rotation:-5.8329,x:149.9266,y:85.1382},0).wait(1).to({rotation:-6.6662,x:149.7232,y:103.7555},0).wait(1).to({rotation:-7.4994,x:149.5199,y:122.3758},0).wait(1).to({rotation:-8.3327,x:149.3167,y:140.999},0).wait(1).to({rotation:-9.166,x:149.1138,y:159.6251},0).wait(1).to({rotation:-9.9993,x:148.9111,y:178.2542},0).wait(1).to({rotation:-10.8325,x:148.7086,y:196.8863},0).wait(1).to({rotation:-11.6658,x:148.5065,y:215.5213},0).wait(1).to({rotation:-12.4991,x:148.3048,y:234.1592},0).wait(1).to({rotation:-13.3324,x:148.1035,y:252.8001},0).wait(1).to({rotation:-14.1656,x:147.9026,y:271.4439},0).wait(1).to({rotation:-14.9989,x:147.7023,y:290.0906},0).wait(1).to({rotation:-9.9993,x:148.9111,y:283.5876},0).wait(1).to({rotation:-4.9996,x:150.1301,y:277.1905},0).wait(1).to({rotation:0,x:151.35,y:270.9},0).wait(1).to({rotation:-2.4489,x:150.7529,y:277.3657},0).wait(1).to({rotation:-4.8979,x:150.1549,y:283.857},0).wait(1).to({rotation:-7.3468,x:149.5571,y:290.3739},0).wait(1).to({rotation:-9.7957,x:148.9606,y:296.9162},0).wait(1).to({rotation:-4.8979,x:150.1549,y:288.357},0).wait(1).to({rotation:0,x:151.35,y:279.9},0).wait(1).to({y:283.2333},0).wait(1).to({y:286.5667},0).wait(1).to({y:289.9},0).wait(1).to({y:287.9},0).wait(1).to({y:285.9},0).wait(1).to({y:283.9},0).wait(79));

	// c
	this.instance_2 = new lib.c();
	this.instance_2.setTransform(293.35,-36.2,1,1,0,0,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({regX:-1,regY:0.2,rotation:4,x:293.6,y:-30.25},0).wait(1).to({rotation:7.9999,x:293.55,y:-24.6},0).wait(1).to({rotation:11.9999,y:-18.85},0).wait(1).to({rotation:15.9999,x:293.6,y:-13.2},0).wait(1).to({rotation:19.9998,x:293.55,y:-7.5},0).wait(1).to({rotation:23.9998,x:293.5,y:-1.8},0).wait(1).to({rotation:27.9998,y:3.9},0).wait(1).to({rotation:31.9997,y:9.5},0).wait(1).to({rotation:35.9997,y:15.2},0).wait(1).to({rotation:39.9997,x:293.45,y:20.9},0).wait(1).to({rotation:43.9996,x:293.4,y:26.6},0).wait(1).to({rotation:47.9996,y:32.3},0).wait(1).to({rotation:51.9996,y:37.9},0).wait(1).to({rotation:55.9995,x:293.35,y:43.6},0).wait(1).to({rotation:59.9995,y:49.35},0).wait(1).to({rotation:54.9995,x:293.4,y:58.8},0).wait(1).to({rotation:49.9996,y:68.3},0).wait(1).to({rotation:44.9996,y:77.75},0).wait(1).to({rotation:39.9997,x:293.45,y:87.2},0).wait(1).to({rotation:34.9997,x:293.5,y:96.65},0).wait(1).to({rotation:29.9998,y:106.1},0).wait(1).to({rotation:24.9998,y:115.6},0).wait(1).to({rotation:19.9998,x:293.55,y:125.05},0).wait(1).to({rotation:14.9999,x:293.6,y:134.5},0).wait(1).to({rotation:9.9999,x:293.55,y:143.95},0).wait(1).to({rotation:5,x:293.6,y:153.4},0).wait(1).to({rotation:0,x:293.65,y:162.85},0).wait(1).to({regX:-1.3,regY:0,x:293.35,y:213.8},0).wait(1).to({regX:-1,regY:0.2,rotation:7.4995,x:293.55,y:207.15},0).wait(1).to({rotation:14.9989,x:293.6,y:200.4},0).wait(1).to({y:204.95},0).wait(1).to({y:209.5},0).wait(1).to({y:214.05},0).wait(1).to({y:212.4},0).wait(1).to({y:210.8},0).wait(1).to({y:215.35},0).wait(97));

	// i
	this.instance_3 = new lib.i();
	this.instance_3.setTransform(257.9,-44.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({rotation:1.875,y:-28.6062},0).wait(1).to({rotation:3.7499,y:-12.8625},0).wait(1).to({rotation:5.6249,y:2.8813},0).wait(1).to({rotation:7.4998,y:18.625},0).wait(1).to({rotation:9.3748,y:34.3688},0).wait(1).to({rotation:11.2497,y:50.1125},0).wait(1).to({rotation:13.1247,y:65.8563},0).wait(1).to({rotation:14.9996,y:81.6},0).wait(1).to({rotation:16.8746,y:97.3438},0).wait(1).to({rotation:18.7495,y:113.0875},0).wait(1).to({rotation:20.6245,y:128.8313},0).wait(1).to({rotation:22.4994,y:144.575},0).wait(1).to({rotation:24.3744,y:160.3188},0).wait(1).to({rotation:26.2493,y:176.0625},0).wait(1).to({rotation:28.1243,y:191.8063},0).wait(1).to({rotation:29.9992,y:207.55},0).wait(1).to({rotation:17.9995,y:202.0233},0).wait(1).to({rotation:5.9998,y:196.4967},0).wait(1).to({rotation:-5.9999,y:190.97},0).wait(1).to({rotation:-12.749,y:198.43},0).wait(1).to({rotation:-19.498,y:205.89},0).wait(1).to({rotation:-18.0537,y:204.0203},0).wait(1).to({rotation:-16.6094,y:202.1507},0).wait(1).to({rotation:-15.1651,y:200.281},0).wait(1).to({rotation:-7.9989,y:202.3003},0).wait(1).to({rotation:-0.8327,y:204.3197},0).wait(1).to({rotation:6.3335,y:206.339},0).wait(1).to({rotation:4.7501,y:203.917},0).wait(1).to({rotation:3.1667,y:201.495},0).wait(1).to({rotation:1.5834,y:203.5725},0).wait(1).to({rotation:0,y:205.65},0).wait(105));

	// p
	this.instance_4 = new lib.p();
	this.instance_4.setTransform(196.25,-50.85,1,1,0,0,0,-1.1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,rotation:-3.7497,x:197.2855,y:-16.8027},0).wait(1).to({rotation:-7.4994,x:197.2166,y:18.2491},0).wait(1).to({rotation:-11.2492,x:197.1435,y:53.3054},0).wait(1).to({rotation:-14.9989,x:197.0667,y:88.3667},0).wait(1).to({rotation:-12.4991,x:197.1183,y:106.2419},0).wait(1).to({rotation:-9.9993,x:197.1683,y:124.1194},0).wait(1).to({rotation:-7.4994,x:197.2166,y:141.9991},0).wait(1).to({rotation:-4.9996,x:197.263,y:159.8808},0).wait(1).to({rotation:-2.4998,x:197.3075,y:177.7644},0).wait(1).to({rotation:0,x:197.35,y:195.65},0).wait(1).to({rotation:2.9998,x:197.3982,y:189.4589},0).wait(1).to({rotation:5.9996,x:197.4433,y:183.2702},0).wait(1).to({rotation:8.9993,x:197.4851,y:177.0838},0).wait(1).to({rotation:11.9991,x:197.5235,y:170.8994},0).wait(1).to({rotation:14.9989,x:197.5584,y:164.717},0).wait(1).to({rotation:11.2492,x:197.5142,y:172.4453},0).wait(1).to({rotation:7.4995,x:197.4646,y:180.1767},0).wait(1).to({rotation:3.7497,x:197.4098,y:187.9115},0).wait(1).to({rotation:0,x:197.35,y:195.65},0).wait(1).to({rotation:-2.9998,x:197.2988,y:190.3437},0).wait(1).to({rotation:-5.9996,x:197.2447,y:185.0402},0).wait(1).to({rotation:-8.9993,x:197.1879,y:179.7396},0).wait(1).to({rotation:-11.9991,x:197.1285,y:174.4421},0).wait(1).to({rotation:-14.9989,x:197.0667,y:169.1477},0).wait(1).to({rotation:-9.9993,x:197.1683,y:176.7234},0).wait(1).to({rotation:-4.9996,x:197.263,y:184.3078},0).wait(1).to({rotation:0,x:197.35,y:191.9},0).wait(1).to({y:185.025},0).wait(1).to({y:178.15},0).wait(1).to({y:183.775},0).wait(1).to({y:189.4},0).wait(1).to({y:183.15},0).wait(1).to({y:187.525},0).wait(1).to({y:191.9},0).wait(1).to({y:190.65},0).wait(1).to({y:189.4},0).wait(1).to({y:190.65},0).wait(1).to({y:191.9},0).wait(108));

	// flower
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(465.1,237.1,1,1,0,0,0,33.1,33.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).wait(1).to({scaleX:1.0668,scaleY:1.0668,rotation:5.5547,y:237.05},0).wait(1).to({scaleX:1.1336,scaleY:1.1336,rotation:11.1093,x:465.05,y:237.1},0).wait(1).to({scaleX:1.2004,scaleY:1.2004,rotation:16.664,y:237.05},0).wait(1).to({scaleX:1.2672,scaleY:1.2672,rotation:22.2187,x:465.1,y:237.1},0).wait(1).to({scaleX:1.334,scaleY:1.334,rotation:27.7733,x:465.05},0).wait(1).to({scaleX:1.4008,scaleY:1.4008,rotation:33.328},0).wait(1).to({scaleX:1.4676,scaleY:1.4676,rotation:38.8827,y:237.05},0).wait(1).to({scaleX:1.5344,scaleY:1.5344,rotation:44.4373},0).wait(1).to({scaleX:1.6012,scaleY:1.6012,rotation:49.992},0).wait(1).to({scaleX:1.6747,scaleY:1.6747,rotation:55.0715,x:465.1,y:237.1},0).wait(1).to({scaleX:1.7482,scaleY:1.7482,rotation:60.151,x:465.05},0).wait(1).to({scaleX:1.8218,scaleY:1.8218,rotation:65.2305,y:237.05},0).wait(1).to({scaleX:1.8953,scaleY:1.8953,rotation:70.31,x:465.1},0).wait(1).to({scaleX:1.9688,scaleY:1.9688,rotation:75.3895,y:237.1},0).wait(1).to({scaleX:2.0423,scaleY:2.0423,rotation:80.469,y:237.05},0).wait(1).to({scaleX:2.1158,scaleY:2.1158,rotation:85.5485},0).wait(1).to({scaleX:2.1893,scaleY:2.1893,rotation:90.628},0).wait(1).to({scaleX:2.2629,scaleY:2.2629,rotation:95.7075,x:465.05,y:237.1},0).wait(1).to({scaleX:2.3022,scaleY:2.3022,rotation:98.9964,x:465.1},0).wait(1).to({scaleX:2.3415,scaleY:2.3415,rotation:102.2852,x:465.05},0).wait(1).to({scaleX:2.3808,scaleY:2.3808,rotation:105.5741,x:465.1,y:237.05},0).wait(1).to({scaleX:2.4201,scaleY:2.4201,rotation:108.8629},0).wait(1).to({scaleX:2.4594,scaleY:2.4594,rotation:112.1518,x:465.05},0).wait(1).to({scaleX:2.4988,scaleY:2.4988,rotation:115.4406},0).wait(1).to({scaleX:2.5381,scaleY:2.5381,rotation:118.7295,x:465.1},0).wait(1).to({scaleX:2.5774,scaleY:2.5774,rotation:122.0183,x:465.05},0).wait(1).to({scaleX:2.6168,scaleY:2.6168,rotation:125.3072,y:237.1},0).wait(1).to({scaleX:2.6561,scaleY:2.6561,rotation:128.596,x:465.1,y:237.05},0).wait(1).to({scaleX:2.5378,scaleY:2.5378,rotation:131.4106,y:237.1},0).wait(1).to({scaleX:2.4195,scaleY:2.4195,rotation:134.2252,x:465.05},0).wait(1).to({scaleX:2.3012,scaleY:2.3012,rotation:137.0398,x:465.1,y:237.05},0).wait(1).to({scaleX:2.1829,scaleY:2.1829,rotation:139.8544,x:465.05},0).wait(1).to({scaleX:2.0646,scaleY:2.0646,rotation:142.669},0).wait(1).to({scaleX:2.1419,scaleY:2.1419,rotation:133.9795},0).wait(1).to({scaleX:2.2191,scaleY:2.2191,rotation:125.2899},0).wait(1).to({scaleX:2.2964,scaleY:2.2964,rotation:116.6004},0).wait(1).to({scaleX:2.3736,scaleY:2.3736,rotation:107.9108,x:465.1,y:237.1},0).wait(1).to({scaleX:2.4509,scaleY:2.4509,rotation:99.2213,y:237.05},0).wait(1).to({scaleX:2.5281,scaleY:2.5281,rotation:90.5317,x:465.05,y:237.1},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:81.8422,x:465.1,y:237.05},0).wait(2).to({scaleX:2.6054,scaleY:2.6054,rotation:78.6279,x:465.05,y:237.1},0).wait(1).to({rotation:75.4136,y:237.05},0).wait(1).to({rotation:72.1994},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:68.9851,x:465.1,y:237.1},0).wait(1).to({rotation:65.7708,x:465.05},0).wait(1).to({rotation:62.5565},0).wait(1).to({rotation:59.3422,y:237.05},0).wait(1).to({rotation:56.128},0).wait(1).to({rotation:52.9137,y:237.1},0).wait(1).to({rotation:49.6994,x:465.1},0).wait(1).to({rotation:46.4851},0).wait(1).to({rotation:43.2708,y:237.05},0).wait(1).to({rotation:40.0565,x:465.05},0).wait(1).to({rotation:36.8423},0).wait(1).to({rotation:33.628,x:465.1},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:30.4137,x:465.05},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:27.1994,x:465.1},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:23.9851,y:237.1},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:20.7709},0).wait(1).to({rotation:17.5566,x:465.05,y:237.05},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:14.3423,x:465.1},0).wait(1).to({rotation:11.128,x:465.05},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:7.9137,x:465.1},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:4.6995},0).wait(1).to({rotation:1.4852,x:465.05,y:237.1},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:-1.7291,x:465.1},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:-4.9434,y:237.05},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:-8.1577,x:465.05},0).wait(1).to({scaleX:2.6054,scaleY:2.6054,rotation:-11.372,x:465.1,y:237.1},0).wait(1).to({rotation:-14.5862,x:465.05},0).wait(1).to({rotation:-17.8005},0).wait(1).to({scaleX:2.6053,scaleY:2.6053,rotation:-21.0148},0).wait(1).to({rotation:-24.2291,x:465.1},0).wait(1).to({rotation:-27.4434},0).wait(1).to({rotation:-30.6576,x:465.05},0).wait(1).to({rotation:-33.8719},0).wait(1).to({rotation:-37.0862,x:465.1},0).wait(1));

	// line
	this.instance_6 = new lib.CachedBmp_1();
	this.instance_6.setTransform(345.3,95.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(416.5,107.9,172.10000000000002,269.70000000000005);
// library properties:
lib.properties = {
	id: '7DF56C2CE69C2C45A9217A09298751E8',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pic perfect_atlas_.png?1595164151244", id:"pic perfect_atlas_"},
		{src:"sounds/secondwavwav.mp3?1595164151317", id:"secondwavwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DF56C2CE69C2C45A9217A09298751E8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;