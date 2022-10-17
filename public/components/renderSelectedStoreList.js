const renderSelectedStoreList = selectedStoreList => {
  // prettier-ignore
  document.querySelector('#menu_voted').innerHTML = `
    ${selectedStoreList.map(({ id, title, description, tel, thumbnails }) => `
      <li id=${id}>
        <div class="store-name">${title}</div>
        <div class="store-description">${description}</div>
        <span class="tel">${tel}</span>
        <button class="remove-btn">삭제하기</button>
        <div class="store-images">
        ${thumbnails.map(thumbnail =>
          `<div class="store-image" style="background-image:url(${thumbnail});background-size: contain;"></div>`
        ).join('')}
        </div>
      </li>`
    )
    .join('')}
  `;
};
export default renderSelectedStoreList;
