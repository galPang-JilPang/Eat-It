/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firebase.js */ "./utils/firebase.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav.js */ "./components/nav.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_0__, _nav_js__WEBPACK_IMPORTED_MODULE_4__]);
([_index_js__WEBPACK_IMPORTED_MODULE_0__, _nav_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






let uuid = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db.collection('votes').doc();

const Add = async () => {
  
  const domStr = () =>
    (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`
    ${(0,_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"])()}
    <div id="add">
      <form class="add-form">
      <h1 class="add-title">투표 만들기 <a href="/" class="close">X</a></h1>
      <input type="text" class="vote-title" placeholder="투표 이름을 작성해주세요" />
      <input type="date" class="deadline"/>
      <div class="class-toggle">
      <input type="radio" id="single-vote" class="vote-type" name="vote-type" hidden/>
      <label for="single-vote">단일투표</label>
      <input type="radio" id="multi-vote" class="vote-type" name="vote-type" hidden/>
      <label for="multi-vote">다중투표</label>
      </div>
      <a class="btn-add" href="/makeVoteList/:${uuid.id}">추가하기</a>
      <div class="warning-message">입력되지 않은 항목이 있습니다.</div>
      </form>
    </div>`);

  return domStr();
};

const $root = document.getElementById('root');

$root.addEventListener('click', async e => {
  if (!e.target.matches('.btn-add')) return;

  e.preventDefault();

  const voteId = [...$root.querySelectorAll('.vote-type')].find(type => type.checked)?.id;
  const title = $root.querySelector('.vote-title').value;
  const deadline = $root.querySelector('.deadline').value;
  const voteType = document.querySelector(`label[for=${voteId}]`)?.textContent;

  if (!title || !deadline || !voteId) {
    document.querySelector('.warning-message').style.display = 'block';
    return;
  }

  document.querySelector('.warning-message').style.display = 'none';

  const user = localStorage.getItem('username');

  const data = {
    title,
    deadline,
    voteType,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    stores: [],
  };

  uuid.set({
    owner: user,
    id: uuid.id,
    ...data,
  });

  _utils_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db.collection('users').doc(user).collection('voteList').doc(uuid.id).set({});
  uuid = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_2__.db.collection('votes').doc();

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e));
});

$root.addEventListener('click', e => {
  if (!e.target.matches('.close')) return;

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e));
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase.js */ "./utils/firebase.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav.js */ "./components/nav.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_2__, _nav_js__WEBPACK_IMPORTED_MODULE_4__]);
([_utils_render_js__WEBPACK_IMPORTED_MODULE_2__, _nav_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Home = async () => {
  const homeBody = (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    ${(0,_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"])()}
    <div id="home"></div>
  `);

  const loginedEmail = localStorage.getItem("username");
  const username = loginedEmail.split("@")[0];

  const getUserVoteList = async () => {
    const docs = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db.collection("votes")
      .orderBy("timestamp", "desc")
      .where("owner", "==", loginedEmail)
      .get();

    let vote = [];
    docs.forEach((doc) => {
      vote = [...vote, doc.data()];
    });
    return vote;
  };

  const isVoting = (deadline) => {
    const date = new Date().getTime();
    const voteDate = new Date(deadline).getTime();

    return voteDate > date;
  };

  // prettier-ignore
  const fetchUserVoteList = voteItems => `
    <div class="member-title">${username}님의 투표 목록
     <a href="/add" class="add-vote"><img src="../src/plus.png"/></a>
   </div>
    <div class="vote-list-container">
       ${
        voteItems.length<1? 
        `<div class="empty">투표 목록을 추가해주세요</div>`
        :
        voteItems.map(({ id, title, deadline, stores }) => {
          if(stores.length<1){
            _utils_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db.collection('votes').doc(id).delete(); 
            return ``}
          else return `
        <div class="card" id="${id}">
          <button class ="delete-vote">⨉</button>
          <div class="vote-name">
            ${title}
            <input class="copy-value" value="${window.location.origin}${isVoting(deadline) ? `/voting/:${id}` : `/voted/:${id}`}"/>
            <div class="button-nav">
            <button class="vote-link">링크공유</button>
            <button class="qr-link">QR</button>
            </div>
          </div>
          <div class="vote-date">${deadline}</div>
          <div class="stores">
            ${stores ? stores.map(({ title }, index) => (index < 3 ? `<span>${title}</span>` : '')).join(' ') : ''}
          </div>
          <div class="card-status">
            <div class="${isVoting(deadline) ? 'is-voting' : 'voted'}">${isVoting(deadline) ? '투표중' : '투표 완료'}</div>
            <a href="${isVoting(deadline) ? `/voting/:${id}` : `/voted/:${id}`}" class="more-vote">더보기</a>
          </div>
        </div> 
      `}).join('')}
    </div>
    </div>
    <div id="qr"></div>
    `;

  const voteItems = await getUserVoteList();
  const voteList = fetchUserVoteList(voteItems);
  const voteListElement = (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(voteList);

  homeBody.getElementById("home").append(voteListElement);
  return homeBody;
};

const $root = document.getElementById("root");
// 투표 목록 추가 버튼

$root.addEventListener("click", (e) => {
  if (e.target.closest(".qr-link")) {
    const qrElement = document.querySelector("#qr");

    qrElement.classList.add("active");
    var qrInstance = new QRCode("qr");

    qrInstance.makeCode(
      e.target.closest(".vote-name").querySelector(".copy-value").value
    );
  }
  if (e.target.matches("#qr")) {
    document.getElementById("qr").classList.remove("active");
    document.getElementById("qr").innerHTML = ``;
  }
  if (e.target.closest(".add-vote")) (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
  if (e.target.matches(".more-vote")) (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
  if (e.target.closest(".vote-link")) {
    const $input = e.target.closest(".vote-name").querySelector(".copy-value");
    navigator.clipboard.writeText($input.value);
    alert("링크 복사가 완료되었습니다!");
  }
});

// 투표 삭제
$root.addEventListener("click", async (e) => {
  if (!e.target.matches(".delete-vote")) return;

  const loginedEmail = localStorage.getItem("username");
  const targetId = e.target.closest(".card").id;

  _utils_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db.collection("votes").doc(targetId).delete();
  _utils_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db.collection("users")
    .doc(loginedEmail)
    .collection("voteList")
    .doc(targetId)
    .delete();

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add": () => (/* reexport safe */ _add_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Home": () => (/* reexport safe */ _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Login": () => (/* reexport safe */ _login_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "MakeVoteList": () => (/* reexport safe */ _makeVoteList_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "NotFound": () => (/* reexport safe */ _notFound_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Register": () => (/* reexport safe */ _register_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Voted": () => (/* reexport safe */ _voted_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Voting": () => (/* reexport safe */ _voting_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Welcome": () => (/* reexport safe */ _welcome_js__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./components/home.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ "./components/login.js");
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.js */ "./components/register.js");
/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.js */ "./components/welcome.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.js */ "./components/add.js");
/* harmony import */ var _voting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voting.js */ "./components/voting.js");
/* harmony import */ var _voted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voted.js */ "./components/voted.js");
/* harmony import */ var _makeVoteList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./makeVoteList.js */ "./components/makeVoteList.js");
/* harmony import */ var _notFound_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notFound.js */ "./components/notFound.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_js__WEBPACK_IMPORTED_MODULE_0__, _login_js__WEBPACK_IMPORTED_MODULE_1__, _register_js__WEBPACK_IMPORTED_MODULE_2__, _welcome_js__WEBPACK_IMPORTED_MODULE_3__, _add_js__WEBPACK_IMPORTED_MODULE_4__, _voting_js__WEBPACK_IMPORTED_MODULE_5__, _voted_js__WEBPACK_IMPORTED_MODULE_6__, _makeVoteList_js__WEBPACK_IMPORTED_MODULE_7__, _notFound_js__WEBPACK_IMPORTED_MODULE_8__]);
([_home_js__WEBPACK_IMPORTED_MODULE_0__, _login_js__WEBPACK_IMPORTED_MODULE_1__, _register_js__WEBPACK_IMPORTED_MODULE_2__, _welcome_js__WEBPACK_IMPORTED_MODULE_3__, _add_js__WEBPACK_IMPORTED_MODULE_4__, _voting_js__WEBPACK_IMPORTED_MODULE_5__, _voted_js__WEBPACK_IMPORTED_MODULE_6__, _makeVoteList_js__WEBPACK_IMPORTED_MODULE_7__, _notFound_js__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sign.js */ "./utils/sign.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_sign_js__WEBPACK_IMPORTED_MODULE_1__]);
_utils_sign_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Login = () =>
  (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="auth-wrapper">
      <div id="login">
        <ul class="class-toggle">
          <li class="signin active"><a href="/login">로그인</a></li>
          <li class="signup"><a href="/register">회원가입</a></li>
        </ul>
      <form id="signin" class="signin-form">

        <label for="userid">이메일</label>
        <input type="email" name="userid" autocomplete="off" />
        <div class="error-userid"></div>
        <label for="password">비밀번호</label>
        <input type="password" name="password" autocomplete="off" />
        <div class="error-password"></div>
        <div class="error-message"></div>
        <a href="/" class="signin-btn">로그인</a>
      </form>
    </div>
  </div>
`);

window.addEventListener('click', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.toggleNav);
window.addEventListener('input', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.validate);
window.addEventListener('click', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.submit);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/makeVoteList.js":
/*!************************************!*\
  !*** ./components/makeVoteList.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase.js */ "./utils/firebase.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _renderSelectedStoreList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderSelectedStoreList.js */ "./components/renderSelectedStoreList.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_3__]);
_utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const makeVoteList = (params) => {
  let selectedStoreList = [];

  window.addEventListener("submit", (e) => {
    if (!e.target.matches("#store-keyword")) return;
    e.preventDefault();

    kakao.setMap.search(e.target.querySelector("#keyword").value);
  });

  window.addEventListener("click", async (e) => {
    if (e.target.closest("#menu_select")) {
      document
        .querySelector("#menu_select")
        .addEventListener("click", ({ target }) => {
          if (
            target.closest("li") &&
            target.closest("li").className.includes("item") &&
            !target.matches(".add-store")
          ) {
            const id = target.closest("li").className.split("-")[1];
            document.querySelector(
              "#store-detail"
            ).innerHTML = `<iframe style="height: 100vh;" src="https://place.map.kakao.com/m/${id}">`;
          }
        });
    }
    if (e.target.matches(".add-store")) {
      const $store = e.target.closest("li");
      const selectedStore = {
        countVote: 0,
        id: $store.className.split("-")[1],
        title: $store.querySelector(".store-name").textContent,
        description: $store.querySelector(".store-description").textContent,
        tel: $store.querySelector(".tel").textContent,
        thumbnails: [...$store.querySelectorAll(".store-image")].map(($store) =>
          $store.style.backgroundImage.slice(4, -1).replace(/"/g, "")
        ),
        x: $store.querySelector(".x").textContent,
        y: $store.querySelector(".y").textContent,
      };

      selectedStoreList = [...selectedStoreList, selectedStore];

      e.target.disabled = true;
      (0,_renderSelectedStoreList_js__WEBPACK_IMPORTED_MODULE_4__["default"])(selectedStoreList);
    }
  });

  window.addEventListener("click", async (e) => {
    if (e.target.matches(".map-home")) {
      document.querySelector("#menu_voted").style.display = "none";
      document.querySelector("#menu_wrap").style.display = "block";
      document.querySelector(".map-home").classList.add("active");
      document.querySelector(".map-list").classList.remove("active");
    }
    if (e.target.matches(".map-list")) {
      document.querySelector("#menu_voted").style.display = "block";
      document.querySelector("#menu_wrap").style.display = "none";
      document.querySelector(".map-home").classList.remove("active");
      document.querySelector(".map-list").classList.add("active");
    }
    if (e.target.matches(".remove-btn")) {
      selectedStoreList = selectedStoreList.filter(
        (store) => store.id !== e.target.closest("li").id
      );
      (0,_renderSelectedStoreList_js__WEBPACK_IMPORTED_MODULE_4__["default"])(selectedStoreList);

      const targetId = e.target.closest("li").id;
      const $addStore = document.querySelector(
        `li.item-${targetId} .add-store`
      );
      if ($addStore) $addStore.disabled = false;
    }
    if (e.target.matches(".total-submit-btn")) {
      e.preventDefault();

      if (selectedStoreList.length < 2) {
        window.alert("음식점을 2 곳이상 추가해주세요");
        return;
      }

      try {
        const voteItem = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__.db.collection("votes").doc(params);
        await voteItem.update({
          stores: firebase.firestore.FieldValue.arrayUnion(
            ...selectedStoreList
          ),
        });
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e));
      } catch (err) {
        console.error(err);
      }
    }
  });
  if (!window.kakao) {
    window.addEventListener("load", () => {
      kakao.maps.load(() => {
        kakao.setMap.insert(document.querySelector("#kakao-map"));
        kakao.setMap.search("이태원 맛집");
      });
    });
  }
  return (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="map_wrap">
      <ul class="map-sidebar">
        <li><button class="map-home active">지도 홈</button></li>
        <li><button class="map-list">투표 목록</button></li>
        <li><a href="/home" class="total-submit-btn">투표 생성</a></li>
      </ul>
      <div id="menu_wrap" style="display: flex">
        <div id="menu_select" class="bg_white">
          <div class="option">
            <div>
              <form id="store-keyword">
                <input type="text" id="keyword" size="15" value="강남역 맛집"/>
                <button type="submit"></button>
              </form>
            </div>
          </div>
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>
        <div id="store-detail"></div>
      </div>
      <div id="menu_voted" style="display:none;">
        투표할 음식점이 없습니다. 음식점을 추가해주세요.
      </div>
      <div id="kakao-map" ></div>
    </div>
  `);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeVoteList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
/* harmony import */ var _utils_sign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sign.js */ "./utils/sign.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_0__, _utils_sign_js__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_render_js__WEBPACK_IMPORTED_MODULE_0__, _utils_sign_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Nav = () => {
  return window.localStorage.getItem("username")
    ? `<nav>
      <div class="nav-wrapper">
      <a href="/"><img class="logo-img" src="../src/logo.png"></a>
      <ul>
        <li class="pconly"><a href="/">투표 목록</a></li>
        <li class="pconly"><a href="/add">투표 추가</a></li>
        <li class="user">${
          localStorage.getItem("username").split("@")[0]
        }님</li>
        ${
          localStorage.getItem("username")
            ? `<li class="logout">
                <a href="/login">로그아웃</a>
              </li>`
            : ""
        }
      </ul>
      </div>
    </nav>
  `
    : `<nav>
    <div class="nav-wrapper">
    <a href="/"><img class="logo-img" src="../src/logo.png"></a>
    <ul>
      <li><a href="/add">새로운 투표 만들기</a></li>
    </ul>
    </div>
  </nav>`;
};

window.addEventListener("click", (e) => {
  if (!e.target.matches("nav > ul > li > a")) return;

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
});

window.addEventListener("click", _utils_sign_js__WEBPACK_IMPORTED_MODULE_2__.logout);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/notFound.js":
/*!********************************!*\
  !*** ./components/notFound.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_1__]);
_utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Welcome = () =>
  (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
  <div id="welcome">
  <p class="welcome-emoji">🎉</p>
  <p class="welcome-message">가입이 완료되었습니다!</p>
    <a href="/login" class="login-btn">로그인 하기</a>
    </div>
`);

window.addEventListener("click", (e) => {
  if (!e.target.matches(".login-btn")) return;

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e));
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/register.js":
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sign.js */ "./utils/sign.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_sign_js__WEBPACK_IMPORTED_MODULE_1__]);
_utils_sign_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Register = () =>
  (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
  <div class="auth-wrapper">
    <div id="register">
      <ul class="class-toggle">
        <li class="signin"><a href="/login">로그인</a></li>
        <li class="signup active"><a href="/register">회원가입</a></li>
      </ul>

    <form id="signup" class="signup-form">
      <label for="userid">이메일</label>
      <input type="email" name="userid" autocomplete="off" />
      <div class="error-userid"></div>
      <label for="password">비밀번호</label>
      <input type="password" name="password" autocomplete="off" />
      <div class="error-password"></div>
      <label for="confirm-password">비밀번호 확인</label>
      <input type="password" name="confirm-password" autocomplete="off" />
      <div class="error-confirm-password"></div>
      <div class="error-message"></div>
      <a href="/welcome" class="signup-btn">회원가입</a>
    </form>
    </div>
  </div>
`);

window.addEventListener('click', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.toggleNav);
window.addEventListener('input', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.validate);
window.addEventListener('click', _utils_sign_js__WEBPACK_IMPORTED_MODULE_1__.submit);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/renderSelectedStoreList.js":
/*!***********************************************!*\
  !*** ./components/renderSelectedStoreList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderSelectedStoreList = selectedStoreList => {
  // prettier-ignore
  document.querySelector('#menu_voted').innerHTML = `
    ${
      selectedStoreList<1? `
      <div class="empty-store">
        투표할 음식점이 없습니다.\n
        음식점을 추가해주세요.
      </div>
      `
      :selectedStoreList.map(({ id, title, description, tel, thumbnails }) => `
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSelectedStoreList);


/***/ }),

/***/ "./components/voted.js":
/*!*****************************!*\
  !*** ./components/voted.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase.js */ "./utils/firebase.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./components/nav.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nav_js__WEBPACK_IMPORTED_MODULE_2__]);
_nav_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// prettier-ignore
const Voted = async params => {


  const getVoteItem = async id => {
    /*
      voteItem의 id 값을 params로 전달받습니다.
      로그인한 사용자의 voteList에서 params로 받은 id값으로 voteItem을 가져옵니다.
    */
    const user = localStorage.getItem('username');
    const doc = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__.db.collection('votes').where("id", "==", id).get();
    let voteItem = {}

    doc.forEach(docs => {
      voteItem = docs.data();
    })
    kakao.vote = voteItem
    return voteItem
  }

  const getSortedStores = stores => {
    return stores.sort((prevStore, nextStore) => nextStore.countVote - prevStore.countVote)
  }

  const domStr = stores => (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="voting">
      ${(0,_nav_js__WEBPACK_IMPORTED_MODULE_2__["default"])()}
      <div class="voting-container">        
        <div class="voting-list">
          ${stores.map(({ id, title, description, thumbnails, countVote }, index) => `
            <div class="store-card ${index === 0 ? 'win-vote' : ''}">
              <div class="store-name">${title}</div>
              <div class="store-description">${description}</div>
              <div class="store-images">
              ${thumbnails.map(thumbnail =>
                `<div class="store-image" style="background-image:url(${thumbnail});background-size: contain;"></div>`
                ).join('')}
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div id="kakao-map"></div>
    </div>`)

  const voteItem = await getVoteItem(params);

  const sortedStores = getSortedStores(voteItem.stores)

  return domStr(sortedStores)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Voted);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/voting.js":
/*!******************************!*\
  !*** ./components/voting.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase.js */ "./utils/firebase.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ "./components/nav.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_2__, _nav_js__WEBPACK_IMPORTED_MODULE_3__]);
([_utils_render_js__WEBPACK_IMPORTED_MODULE_2__, _nav_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Voting = async (params) => {
  const isOwner = (owner) => owner === window.localStorage.getItem("username");

  const isVoted = (voteId) => {
    const voteList = JSON.parse(window.localStorage.getItem("voteList")) ?? [];
    return voteList.includes(voteId);
  };

  const getVoteItem = async (id) => {
    const doc = await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__.db.collection("votes").where("id", "==", id).get();
    let voteItem = {};
    doc.forEach((docs) => {
      voteItem = docs.data();
    });
    kakao.vote = voteItem;
    return voteItem;
  };

  const addVoteList = (newVote) => {
    const voteList = JSON.parse(window.localStorage.getItem("voteList")) ?? [];
    window.localStorage.setItem(
      "voteList",
      JSON.stringify([...voteList, newVote])
    );
  };

  const updateSelectedStoreVoteCount = async (voteId) => {
    const selectedStoreList = [...document.querySelectorAll(".voting-btn")]
      .filter(($checkbox) => $checkbox.checked)
      .map(($checkbox) => $checkbox.id);
    const newStoreList = voteItem.stores.map((store) =>
      selectedStoreList.includes(store.id)
        ? { ...store, countVote: store.countVote + 1 }
        : store
    );
    console.log(voteItem.stores);
    await _utils_firebase_js__WEBPACK_IMPORTED_MODULE_1__.db.collection("votes").doc(voteId).update({ stores: newStoreList });
  };

  const routeHome = () => {
    const HOME_PATH = "/";
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["default"])({ path: HOME_PATH });
    window.history.pushState(null, null, HOME_PATH);
  };

  const handleCompleteVote = async (e) => {
    if (!e.target.matches(".end-voting")) return;

    const selectedStoreList = [
      ...document.querySelectorAll(".voting-btn"),
    ].filter(($checkbox) => $checkbox.checked);
    if (selectedStoreList.length === 0) {
      alert("투표한 목록이 없습니다");
      return;
    }

    addVoteList(params);
    await updateSelectedStoreVoteCount(params);

    alert("투표가 완료되었습니다!");

    routeHome();
  };

  const selectOnlyOne = ($input) => {
    [...document.querySelectorAll(".voting-btn")].forEach((checkbox) => {
      checkbox.checked = checkbox === $input;
    });
  };
  // prettier-ignore
  const domStr = voteItem =>
    (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
      ${(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"])()}
      <div class="voting">
        <div class="voting-container">
          <div class="vote-information">
            <span class="vote-name">${voteItem.title}</span>
            <span href="/" class="voting-link">공유링크</span>
            <div class="voting-deadline">마감일 : ${voteItem.deadline}</div>
            <div class="voting-type">투표 방식 : ${voteItem.voteType}</div>
            ${isOwner(voteItem.owner) && isVoted(voteItem.id) ? '' : '<button class="end-voting">투표 완료</button>'}
          </div>
          
          <div class="voting-list">
            ${voteItem.stores
              .map(({ id, title, description, thumbnails }) => `
              <div class="store-card">
              ${
                isOwner(voteItem.owner) && isVoted(voteItem.id)
                  ? ''
                  : '<input type="checkbox" id="${id}" class="voting-btn" name="voting"/>'
              }
              <div class="store-name">${title}</div>
              <div class="store-description">${description}</div>
              <div class="store-images">
              ${thumbnails.map(thumbnail => `
                <div class="store-image" style="background-image:url(${thumbnail});background-size: contain;"></div>
                `
                ).join('')}
              </div>
            </div>
            `
              ).join('')}
          </div>
        </div>
        <div id="kakao-map"></div>
      </div>
    </div>
  `);

  const endVote = () =>
    (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    ${(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"])()}
    <div class="vote-complete">
      <div class="vote-complete-message">투표를 완료했습니다</div>
    </div>
  `);

  const voteItem = await getVoteItem(params);

  window.addEventListener("click", handleCompleteVote);

  window.addEventListener("click", (e) => {
    if (!e.target.matches(".voting-btn")) return;

    if (voteItem.voteType === "단일투표") selectOnlyOne(e.target);

    [...document.querySelectorAll(".voting-btn")].forEach((checkbox) => {
      checkbox
        .closest(".store-card")
        .classList.toggle("selected-vote", checkbox.checked);
    });
  });

  return !isVoted(params) || isOwner(voteItem.owner)
    ? domStr(voteItem)
    : endVote();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Voting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./components/welcome.js":
/*!*******************************!*\
  !*** ./components/welcome.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement.js */ "./utils/createElement.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./utils/render.js");
/* harmony import */ var _utils_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/route.js */ "./utils/route.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_1__]);
_utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Welcome = () =>
  (0,_utils_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
  <div id="welcome">
  <p class="welcome-emoji">🎉</p>
  <p class="welcome-message">가입이 완료되었습니다!</p>
    <a href="/login" class="login-btn">로그인 하기</a>
    </div>
`);

window.addEventListener('click', e => {
  if (!e.target.matches('.login-btn')) return;

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_route_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e));
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render.js */ "./utils/render.js");
/* harmony import */ var _utils_loadMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/loadMap.js */ "./utils/loadMap.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_render_js__WEBPACK_IMPORTED_MODULE_0__]);
_utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



window.addEventListener("popstate", () => {
  console.log("[popstate]", window.location.pathname);
  const [path, params] = window.location.pathname.split("/:");

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ path, params });
});
(0,_utils_loadMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
window.addEventListener("DOMContentLoaded", () => {
  const [path, params] = window.location.pathname.split("/:");
  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ path, params });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./utils/createElement.js":
/*!********************************!*\
  !*** ./utils/createElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = domString => {
  const $temp = document.createElement('template');
  $temp.innerHTML = domString;
  return $temp.content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./utils/fetchimage.js":
/*!*****************************!*\
  !*** ./utils/fetchimage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchImage)
/* harmony export */ });
async function fetchImage(query = '', size = 3) {
  const res = await axios.get(`https://dapi.kakao.com/v2/search/image?query=${encodeURI(query)}&size=${size}`, {
    headers: {
      Authorization: `KakaoAK e905344ef09f503efebe3a02312cb9ef`,
    },
  });
  return res;
}


/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxUWiOdQa_0eTMZe6r7sbnLMpjiVCuxEw',
  authDomain: 'eat-it-6f7b8.firebaseapp.com',
  projectId: 'eat-it-6f7b8',
  storageBucket: 'eat-it-6f7b8.appspot.com',
  messagingSenderId: '457186226254',
  appId: '1:457186226254:web:d444e7ba201025bb97531f',
  measurementId: 'G-8ESSYEFJEW',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


/***/ }),

/***/ "./utils/loadMap.js":
/*!**************************!*\
  !*** ./utils/loadMap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchimage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchimage.js */ "./utils/fetchimage.js");
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.js */ "./utils/firebase.js");


const appendKakaoAPI = () => {
  const script = document.createElement("script");
  //prettier-ignore
  script.src ='//dapi.kakao.com/v2/maps/sdk.js?appkey=c8627785e5fed8e94625831777adf1ea&libraries=services&autoload=false';
  document.head.appendChild(script);

  return script;
};
const makeMap = () => {
  var markers = [];
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  var mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  // 지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);
  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();
  const search = (keyword) => ps.keywordSearch(keyword, placesSearchCB);

  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      displayPlaces(data);

      // 페이지 번호를 표출합니다
      displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
      return;
    }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places) {
    var listEl = document.getElementById("placesList"),
      menuEl = document.getElementById("menu_wrap"),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds(),
      listStr = "";

    removeAllChildNods(listEl);

    removeMarker();

    for (var i = 0; i < places.length; i++) {
      var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = addMarker(placePosition, i),
        itemEl = getListItem(i, places[i]);
      bounds.extend(placePosition);

      (function (marker, title) {
        kakao.maps.event.addListener(marker, "mouseover", function () {
          displayInfowindow(marker, title);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });

        itemEl.onmouseover = function () {
          displayInfowindow(marker, title);
        };

        itemEl.onmouseout = function () {
          infowindow.close();
        };
      })(marker, places[i].place_name);

      fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  }

  // 검색결과 항목을 Element로 반환하는 함수입니다
  function getListItem(index, places) {
    const selectedStoreId = [
      ...document.getElementById("menu_voted")?.querySelectorAll("li"),
    ].map((store) => store.id);
    var el = document.createElement("li"),
      itemStr = `
        <div class="store-name">${places.place_name}</div>
        <div class="store-description">${places.category_name}</div>
        <span class="tel">${places.phone}</span>
        <button class="add-store" ${
          selectedStoreId.includes(places.id) ? "disabled" : ""
        }>추가하기</button>
        <div class="x hidden">${places.x}</div>
        <div class="y hidden">${places.y}</div>
        `;
    el.innerHTML = itemStr;
    el.className = "item-" + places.id;
    (0,_fetchimage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(places.place_name).then(({ data }) => {
      el.insertAdjacentHTML(
        "beforeend",
        "<div class='store-images'>" +
          data.documents
            .map(
              (store) =>
                `<div class="store-image" style="background-image: url(${store.thumbnail_url});background-size: contain;"></div>`
            )
            .join("") +
          "</div>"
      );
    });
    return el;
  }

  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position, idx, title) {
    var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  }

  // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  function displayPagination(pagination) {
    var paginationEl = document.getElementById("pagination"),
      fragment = document.createDocumentFragment(),
      i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild);
    }

    for (i = 1; i <= pagination.last; i++) {
      var el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = (function (i) {
          return function () {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
  }

  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  function displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

    infowindow.setContent(content);
    infowindow.open(map, marker);
  }

  // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

  const insert = (parent) => {
    removeMarker();
    parent.append(mapContainer);
    map.relayout();
    mapContainer.firstChild.style.left = "auto";
  };
  const marker = (stores) => {
    console.log(stores);
    let positions = stores.map(({ title, x, y }) => ({
      title,
      latlng: new kakao.maps.LatLng(y, x),
    }));

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(24, 35);
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
      });

      var customOverlay = new kakao.maps.CustomOverlay({
        position: positions[i].latlng,
        content: `<div style=" border: 1px solid #292929;padding:0.5rem;background:white;margin-bottom:150px;">${positions[i].title}</div>`,
      });
      customOverlay.setMap(map);
    }

    document
      .querySelectorAll(".info-window")
      .forEach((window) =>
        console.log(window.parentElement.parentElement.style.width)
      );

    map.setCenter(new kakao.maps.LatLng(stores[0].y, stores[0].x));
  };
  return { insert, search, marker };
};
const loadMap = () => {
  appendKakaoAPI();

  window.addEventListener("load", () => {
    window.kakao.maps.load(() => {
      kakao.setMap = makeMap();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMap);


/***/ }),

/***/ "./utils/render.js":
/*!*************************!*\
  !*** ./utils/render.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/index.js */ "./components/index.js");
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.js */ "./utils/firebase.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index_js__WEBPACK_IMPORTED_MODULE_0__]);
_components_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const $root = document.getElementById("root");
const routes = [
  { path: "/", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Home },
  { path: "/login", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Login },
  { path: "/register", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Register },
  { path: "/home", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Home },
  { path: "/voting", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Voting },
  { path: "/voted", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Voted },
  { path: "/add", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Add },
  { path: "/welcome", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Welcome },
  { path: "/makeVoteList", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.MakeVoteList },
  { path: "/notFound", component: _components_index_js__WEBPACK_IMPORTED_MODULE_0__.NotFound },
];

const authPath = ["/", "/home", "/add"];

const render = async (url) => {
  /*
    투표 목록에서 더보기 버튼을 누르면 route parameter로 해당 투표의 아이디를 전달합니다.
    path는 /voting/:id -> 다른 방법이 없는지 생각해보겠습니다..
    component의 인수로 params를 전달합니다.
  */
  let _path = url?.path ?? window.location.pathname;
  const params = url?.params;

  const user = localStorage.getItem("username");
  try {
    if (!user && authPath.includes(_path)) {
      _path = "/login";
      window.history.pushState(null, null, _path);
    }
    const component =
      routes.find((route) => route.path === _path)?.component || _components_index_js__WEBPACK_IMPORTED_MODULE_0__.NotFound;
    $root.replaceChildren(await component(params));

    if (window.kakao && document.querySelector("#root .map_wrap #kakao-map")) {
      kakao.setMap.insert(document.querySelector("#root #kakao-map"));
      kakao.setMap.search("강남역 맛집");
    } else if (
      window.kakao &&
      document.querySelector("#root .voting #kakao-map")
    ) {
      kakao.setMap.insert(document.querySelector("#root #kakao-map"));
      console.log(kakao.vote);
      kakao.setMap.marker(kakao.vote.stores);
    }
  } catch (err) {
    console.error(err);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./utils/route.js":
/*!************************!*\
  !*** ./utils/route.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const route = (e) => {
  e.preventDefault();
  const href = e.target.closest("a").getAttribute("href");
  const [path, params] = href.split("/:");
  console.log(path, params);
  if (window.location.pathname === path) return;

  console.log(params ? href : path);
  window.history.pushState(null, null, params ? href : path);

  return { path, params };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (route);


/***/ }),

/***/ "./utils/sign.js":
/*!***********************!*\
  !*** ./utils/sign.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "logoutExpress": () => (/* binding */ logoutExpress),
/* harmony export */   "submit": () => (/* binding */ submit),
/* harmony export */   "submitExpress": () => (/* binding */ submitExpress),
/* harmony export */   "toggleNav": () => (/* binding */ toggleNav),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.js */ "./utils/firebase.js");
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.js */ "./utils/route.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_2__]);
_index_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// signin, signup에서 공통으로 사용하는 로직
const signinState = {
  userid: {
    value: '',
    get valid() {
      return (
        this.value &&
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value)
      );
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },
  password: {
    value: '',
    get valid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },
  get valid() {
    return this.userid.valid && this.password.valid;
  },
  error: '이메일과 비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
};

const signupState = {
  ...signinState,
  'confirm-password': {
    value: '',
    get valid() {
      return signupState.password.valid && signinState.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.',
  },
  get valid() {
    return this.userid.valid && this.password.valid && signupState['confirm-password'].valid;
  },
  error: '유효하지 않은 정보입니다. 다시 입력해주세요.',
};

let currentPage = 'signin';
let currentState = signinState;

const setCurrentPage = page => {
  if (currentPage === page) return;

  currentPage = page;
  currentState = page === 'signin' ? signinState : signupState;
};

const toggleNav = e => {
  if (!e.target.closest(`.class-toggle > .signin`) && !e.target.closest(`.class-toggle > .signup`)) return;

  e.preventDefault();

  const isSigninPage = e.target.closest('li').classList.contains('signin');
  setCurrentPage(isSigninPage ? 'signin' : 'signup');

  [...document.querySelectorAll('.class-toggle > li')].forEach($li => $li.classList.toggle('active'));

  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
};

const activateButton = () => {
  document.querySelector(`.${currentPage}-btn`).classList.toggle('active', currentState.valid);
};

const validate = _.debounce(e => {
  if (!e.target.matches(`.signin-form > input`) && !e.target.matches(`.signup-form > input`)) return;

  setCurrentPage(e.target.closest('form').id);

  const { name, value } = e.target;
  currentState[name].value = value.trim();

  document.querySelector(`.error-${name}`).textContent =
    currentState[name].value && !currentState[name].valid ? currentState[name].error : '';

  if (name === 'password' && currentState['confirm-password']?.value) {
    document.querySelector(`.error-confirm-password`).textContent =
      currentState['confirm-password'].value && !currentState['confirm-password']?.valid
        ? currentState['confirm-password'].error
        : '';
  }
  activateButton();
}, 300);

/* 로그인해야 접근할 수 있는 페이지에서 사용할 request */
const authRequest = async () => {
  const firebaseUserIdToken = await _firebase_js__WEBPACK_IMPORTED_MODULE_0__.auth.currentUser?.getIdToken(true);

  /**
   * getIdToken(true): 사용자의 토큰을 refresh 해준다.
   * 기본적으로, 1시간이 지나면 토큰은 만료된다.
   * */

  const response = await fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + firebaseUserIdToken,
    },
  });
};

const submit = async e => {
  if (!e.target.matches('.signin-btn') && !e.target.matches('.signup-btn')) return;

  e.preventDefault();

  try {
    if (currentPage === 'signin') {
      const res = await _firebase_js__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithEmailAndPassword(signinState.userid.value, signinState.password.value);
      localStorage.setItem('username', signinState.userid.value);
      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
    }

    if (currentPage === 'signup') {
      const res = await _firebase_js__WEBPACK_IMPORTED_MODULE_0__.auth.createUserWithEmailAndPassword(signupState.userid.value, signupState.password.value);
      _firebase_js__WEBPACK_IMPORTED_MODULE_0__.db.collection('users').doc(`${signupState.userid.value}`).set({});
      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
    }
  } catch (err) {
    console.error(err);
    document.querySelector(`.${currentPage}-form .error-message`).textContent = currentState.error;
    document.querySelector(`.${currentPage}-btn`).classList.remove('active');
  }
};

/* express를 사용해서 구현한 방법 */
const submitExpress = async e => {
  if (!e.target.matches('.signin-btn') && !e.target.matches('.signup-btn')) return;

  e.preventDefault();

  try {
    const payload = {};
    Object.keys(currentState)
      .filter(name => name !== 'valid')
      .forEach(key => {
        payload[key] = currentState[key].value;
      });

    const res = await axios.post(`/api/${currentPage}`, payload);
    if (res.status === 200) {
      console.log(`${res.data.userid} 성공~!`);
      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
    }
  } catch (err) {
    const { response } = err;
    if (response.status === 400) {
      console.log(response.data);
    }
    console.error(err);
  }
};

const logout = async e => {
  if (!e.target.closest('.logout')) return;

  try {
    await _firebase_js__WEBPACK_IMPORTED_MODULE_0__.auth.signOut();
    localStorage.removeItem('username');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
  } catch (err) {
    console.error(err);
  }
};

const logoutExpress = async e => {
  if (!e.target.closest('.logout')) return;

  try {
    const res = await axios.post(`/api/logout`);
    localStorage.removeItem('username');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_route_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e));
  } catch (err) {
    console.log(err);
  }
};



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map