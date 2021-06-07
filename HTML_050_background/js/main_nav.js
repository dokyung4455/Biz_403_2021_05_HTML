document.addEventListener("DOMContentLoaded", () => {
  // nav와 selection을 별도의 변수로 만들기
  const nav = document.querySelector("nav#main_nav"); /* 변수선언 */
  const conts = document.querySelector("section#content");

  // 이벤트 핸들러 함수 선언
  const navClick = (e) => {
    let tagName = e.target.tagName;
    /*
    class="art1" 인 li tag를 클릭하면 클래스 이름의 문자열 art1과 #을 결합하여 #art1 문자열을 만들고

    querySelector()로 art1 id 가 설정된 article box를 selector 하고

    article box의 크기, 좌표 정보를 getter 하고 그 정보에서 top의 좌표만 추출

    window.scrollBy() 함수에 top은 article box의 top으로 설정
    left 화면 왼쪽 끝인 0으로 설정, smooth 속성을 부여하여 자연스럽게 화면이 스크롤 되도록 설정

    */

    if (tagName === "LI") {
      let className = e.target.className;

      let art = document.querySelector("#" + className);

      // art 객체(DOM 객체)의 현재 위치, 모양값을 getter 해달라
      let bound = art.getBoundingClientRect();

      // art 객체(box)의 화면의 위에서부터 좌표값
      let artTop = bound.top;

      window.scrollBy({
        top: artTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  // nav에 click event 설정
  nav.addEventListener("click", navClick);
});

/*






코드를 작성하게 되면 Browser, System에 막대한 자원을 소모한다.
이러한 불편함을 없애기 위해 임의의 flag 변수(ticking)를 하나 만들고 처음 이벤트가 시작되어 화면에 그리는 코드가 실행될 때
flag를 세팅하여 다시 코드가 중복 실행되는 것을 방지
*/
let ticking = false;
const scrollTop_nav_tick = (e) => {
  if (!ticking) {
    ticking = true;
    console.log(e.target.tagName);

    // 화면에 fix된 nav box의 하단 라인 좌표를 조회
    let nav_bound = nav.getBoundingClientRect();
    let nav_bottom = nav_bound.bottom;

    // 실제로 article의 element를 추출하기
    // nav box의 제일 하단 라인에 걸려있는 box tag가 누구인가 getter
    // box tag가 누구인가 getter하여 art에 담기
    let ele = document.elementFromPoint(0, nav_bottom);
    let art = document.elementFromPoint(0, nav_bottom);
    // 현재 선택된 tag(ele에 담겨있는 tag) 에서 id값을 추출하여
    // li 중에 클래스가 id값과 같은 tag를 선택
    // li.art1
    let li = nav.querySelector("ul li." + ele.id);
    // 그리고 선택된 tag active 클래스를 추가하라
    let actives = nav.querySelectorAll("ul li.active");
    for (let i = 0; i < actives.length; i++) {
      actives[i].classList.remove("active");
    }
    li.classList.add("active");
    ticking = false;
  }
};
