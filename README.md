<br/>

# Markdown으로 문서 편집을 간단하게!
<p></p>

<br/>

## 🤩주요 서비스

Markdown Editor는 기본적으로 `모바일 반응형`과 `Dark Mode`를 지원합니다.

<br/>

### Markdown Editor

<div align="center">
<img width="47%" src="https://imgur.com/v5WA4YH.png" alt="Develog Mark"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img width="47%" src="https://imgur.com/49okVIj.png" alt="Develog Mark"/>
</div>
<p></p>

> 기본적인 디자인은 Velopert 님의 Velog 서비스를 Clone 하였습니다.
<br/>
Tool Bar <img width="50%" src="https://imgur.com/1nitOT6.png" alt="Tool Bar">
<br/>

**기능** 

1. Tool Bar를 이용해서 한번에 작성중인 문서를 편집할 수 있습니다. (Bold, Italic, Header, Quote, Check Box, Img, Table, Code 등)
2. Tool Bar를 이용한 문서 편집 시 Cursor를 자동으로 상황에 맞게 이동시켜 바로 작업에 돌입할 수 있습니다! (편집 방식에 따라 상이)
3. 문서에 Tag를 추가하여 검색 시 편리하고, 문서들을 세부적으로 분류할 수 있습니다.
4. 글을 작성하면 바로바로 Preview틀 통해 실시간으로 확인할 수 있습니다!
5. Text의 변화가 있다면(Header, Bold, Italic 등) 글의 작성란에도 반영이 됩니다.
6. Drag and Drop 및 파일 선택으로 Img를 바로 호스팅하고 글에 적용할 수 있습니다. (Imgur API 사용)
7. 표(Table) 추가를 시각적으로 편리하게 할 수 있습니다. (아래 사진 참고)


<div align="center">
<img width="47%" src="https://imgur.com/9Fdsj8M.png" alt="Markdown example"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img width="47%" src="https://imgur.com/Nh8JRRu.png" alt="Table example"/>
</div>

**기술적인 경험 및 개발한 기능**

- Toolbar를 제공하여 사용자가 문서 편집에 편리하도록 개발
    - Bold, Italic, Header, Quote, Check Box, Img, Table, Code, Link
- Toolbar를 이용한 편집 이후에 커서를 자동으로 이동시켜 UX 향상 (편집 종류에 따라 다르게 동작)
- 현재 Cursor의 위치, Selection의 여부에 따라 다른 동작을 하여, 직관적인 문서 편집이 가능하도록 구현 (HackMD 방식 차용)
- 이미지를 Drag & Drop으로 추가할 수 있도록 구현
- 이미지 호스팅 기능 구현
- 이미지의 업로드 중, 업로드 진행 상태를 실시간으로 확인할 수 있도록 구현
- 표 추가 시 직관적으로 추가할 수 있도록 Microsoft Word의 표 추가 방식 구현
- Context API 를 이용한 상태 관리
- Class를 사용하여 Edit Logic을 분리하고, Edit이 추가될 때를 대비하여 코드 구조를 설계
- 미디어 쿼리를 이용한 반응형 웹 제작
- Dark Mode 와 Light Mode 지원

**발생한 이슈 및 해결 방법**

- 문서 작성 공간을 Textarea로 사용하여 Textarea 내 Text의 크기나 Style을 컨트롤 할 수 없는 이슈
    
    → Div와 contenteditable를 이용하여 Textarea를 대체하기로 하였고, 이와 커서의 위치까지 함께 제공해주는 Codemirror 라이브러리를 사용
    
- Toolbar에 새로운 Edit 방식이 추가될 경우 구조가 매우 복잡하여 각 로직이 엉키는 경우 발생
    
    → 각 Edit을 담당하는 Class를 생성하고, 각 Edit별로 공통점이나 차이점을 기준으로 Class의 계층구조를 분리함. 이로써 로직을 실행시키는 Execute Method에 Instance만 갈아 끼워 주는 방식으로 변경(새로운 Edit 방식 추가에 용이). 또한, interface로 설계를 추상화하여 앞으로 추가될 방식에서도 휴먼 에러를 방지함.
    
- Client의 사용자 화면이 매우 작아지면 편집하기 어려워지는 이슈.
    
    → 미디어 쿼리를 이용하여 특정 크기 디스플레이 이하에서는 지원 불가 메시지 표시
