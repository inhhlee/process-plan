# 문서 보기본 생성 도구

[render-plans.cjs](render-plans.cjs)는 개발계획 Markdown에서 HTML 보기본을 생성합니다. 문서 구성은 [개발계획 작성 규칙](../기준/개발계획%20작성%20규칙.md), 표·하위 제목의 실제 구조는 [빈 양식](../기준/양식/개발계획서.md)을 기준으로 합니다.

## 생성 대상과 확인

- 빈 개발계획서와 과제1~5의 과제계획, 총 6개 원본을 읽습니다.
- 모든 원본의 8개 절·하위 제목·표 열·개요 항목·양식 버전을 확인한 뒤 루트의 `보기본/`에 HTML을 생성합니다. 형식이 다르면 생성 전에 중단하고 대상과 항목을 알립니다.
- 빈 양식은 `보기본/개발계획서.html`, 각 과제는 `보기본/과제N_과제계획.html`로 생성합니다. 본문 링크와 원본·보기본 이동 링크는 출력 위치를 기준으로 맞춥니다.
- 원본의 내용과 상태는 바꾸지 않습니다. 보기본의 내용 수정은 Markdown 원본에 반영합니다.

## 실행 방법

Node.js와 `marked`가 필요합니다. 저장소 루트에서 Node와 `marked`를 사용할 수 있는 환경이라면 다음 명령을 실행합니다.

```powershell
node .\도구\render-plans.cjs
```

현재 Codex 번들 경로를 사용하는 예시는 다음과 같습니다. 다른 PC에서는 설치 경로를 확인해 바꿉니다.

```powershell
$env:NODE_PATH = 'C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
& 'C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\도구\render-plans.cjs'
```

생성 후 출력된 6개 파일을 확인하고, 변경한 원본의 본문·표·링크·체크 상태가 보기본에 반영되었는지 확인합니다. 표지·스타일·레이아웃을 바꾼 경우에는 넓은 화면과 좁은 화면에서도 확인합니다.
