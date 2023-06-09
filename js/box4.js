let fssGhChart = null;

function fss_ghChart() {
	var dom = document.getElementById("fss_gh");
	if (fssGhChart == null) {
		fssGhChart = echarts.init(dom);
	}
	else{
		fssGhChart.clear();
	}
	fssGhChart.resize();
	var app = {};

	var option;

	/**
	 * 图标所需数据
	 */
	var data = {
		id: "echartPieyyyy",
		value: [10, 22, 22, 12, ],
		textStyle: {
			fontSize: 12, //字体大小
			color: '#ffffff' //字体颜色
		},
		legend: ["未响应", "未处理", "处理中", "已反馈"],
		color: ["#D9001B", "#E16757", "#F59A23", "#70B603"],
		// tooltipShow:false,    //设置悬浮提示显示              --默认显示true
		// hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
		title: "",
	};

	////////////////////////////////////////

	/**
	 * 数据处理
	 */
	var seriesData = [];
	data.value.forEach(function(item, index) {
		seriesData.push({
			value: item,
			name: data.legend[index],
		});
	});
	////////////////////////////////////////

	var option = {
		title: {
			x: "2%",
			y: "2%",
			textStyle: {
				fontWeight: 400,
				fontSize: 14,
				color: "#ffffff",
			},
			text: data.title || "",
		},
		tooltip: {
			trigger: "item",
			show: data.tooltipShow === false ? false : true,
			//   formatter: "{b}: {c} ({d}%)"
		},
		legend: {
			orient: "horizontal",
			top: 10,
			icon: "circle",
			selectedMode: false,
			itemWidth: 6,
			itemHeight: 6,
			itemGap: 6,
			borderRadius: 6,
			data: data.legend,
			textStyle: data.textStyle
		},
		series: [{
			type: "pie",
			top: '14%',
			// clickable:false,
			// selectedMode: 'single',//单点击设置
			hoverAnimation: data.hoverAnimation === false ? false : true,
			radius: ["40%", "90%"],
			color: data.color,
			label: {
				normal: {
					position: "inner",
					// formatter: '{d}%',
					formatter: function(param) {
						if (!param.percent) return "";
						var f = Math.round(param.percent * 10) / 10;
						var s = f.toString();
						var rs = s.indexOf(".");
						if (rs < 0) {
							rs = s.length;
							s += ".";
						}
						while (s.length <= rs + 1) {
							s += "0";
						}
						return s + "%";
					},
					textStyle: {
						color: "#ffffff",
						fontSize: 16,
					},
				},
			},
			labelLine: {
				normal: {
					show: false,
				},
			},
			data: seriesData,
		}, ],
	};


	if (option && typeof option === 'object') {
		fssGhChart.setOption(option);
	}
}
