import Component from '../../../core/Component.js';

class Sidebar extends Component {
  domStr() {
    return `
      <ul class="map-sidebar">
        <li><button class="map-home active">지도 홈</button></li>
        <li><button class="map-list">투표 목록</button></li>
        <li><a href="/home" class="total-submit-btn">투표 생성</a></li>
      </ul>
    `;
  }

  addEventListener() {
    const { handlerMapMenu, handlerTotalSubmit } = this.props;

    return [
      { type: 'click', selector: '.map-home', handler: handlerMapMenu },
      { type: 'click', selector: '.map-list', handler: handlerMapMenu },
      //prettier-ignore
      { type: 'click', selector: '.total-submit-btn', handler: handlerTotalSubmit,},
    ];
  }
}

export default Sidebar;
