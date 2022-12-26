// import am5 from '../../../node_modules/@amcharts/amcharts5/index.js';
// import am5xy from '../../node_modules/@amcharts/amcharts5/xy.js';
// import am5radar from '../../node_modules/@amcharts/amcharts5/radar.js';
// import am5Animated from '../../node_modules/@amcharts/amcharts5/Animated.js';

class ClickDataBind {
  constructor(_idx, _chart) {
    this.data = new Array(); // 가져올 데이터
    this.idx; // 버튼에서 가져올 쿼리값
    this.chart = _chart; // 데이터 바꿀 차트
  }

  init(_idx, _chart) {
    this.idx = _idx;
    this.data = new Array();
    this.chart = _chart; // 데이터 바꿀 차트
  }

  // 메서드 생성
  getDatas(_idx, _chart) {
    let data = new Array();
    fetch('assets/component/exdata.json')
      .then((_response) => _response.json())
      .then((_data) => {
        _data.filter((_item) => {
          Number(_item.idx) == Number(_idx) ? (data = _item.data) : data;
          this.chart.data.setAll(data);
        });
      });
    return data;
  }

  set idx(_idx) {
    this.data = this.getDatas(_idx);
    console.log(this.data);
    // this.chart.data.setAll(this.data);
    // console.log(this.chart);
  }
}

window.clickDataBind = new ClickDataBind();
clickDataBind.차트그려죠();

window.줄여주세요 = function (_매개변수) {
  fetch('assets/component/exdata.json').then((_data) => {
    clickDataBind.데이터바꿔죠(_data);
  });
};

window.워크클라우줄여주세요(타겟, 차트데이터);
