# amr-control-system-demo Issue 초안과 작업 순서

- 작성·확인일: 2026-10-07 / 수정일: 2026-10-20 / 버전: v0.33
- 대상: [inhhlee/amr-control-system-demo](https://github.com/inhhlee/amr-control-system-demo), 로컬 코드 `C:\amr-control-system-demo`
- 문서 원본: `C:\process-plan`

2026-10-20 후속 보관: 재리뷰·병합 확인 근거 192개 파일을 기존 #6 브랜치의 [20950a2](https://github.com/inhhlee/amr-control-system-demo/commit/20950a2132bd39917013418928412772ea701559)로 커밋·푸시했다. 이 문서의 #6 관련 변경과 C1~C4 검증결과 5개·과제1 HTML을 이번 문서 커밋에 포함한다. 이전 기록의 미커밋 표시는 당시 상태이며 별도 사용자 변경인 과제2 HTML은 제외한다. 이번 단계는 근거 보관으로 제품 코드·시험 결과·#6 완료 상태를 바꾸지 않는다.

**2026-10-20 최신 후속 요청 — PR #31 develop 반영·#6 완료 종료:** [PR #31](https://github.com/inhhlee/amr-control-system-demo/pull/31)을 develop에 merge commit 방식으로 병합했다. 병합 커밋 [e4bd66a](https://github.com/inhhlee/amr-control-system-demo/commit/e4bd66acc6612c6d5206b3ef3929c7f7640a40c3)의 전체 파일 트리가 재리뷰한 55ac854와 동일하며 로컬 develop과 origin/develop의 일치를 확인했다. [Issue #6](https://github.com/inhhlee/amr-control-system-demo/issues/6)의 원래 완료조건 8개와 최종 근거를 확인한 뒤 completed로 종료했다. [병합 확인](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-pr31-merge-01/README.md). 재리뷰 이후 코드 차이 0·미해결 리뷰 0·완료조건 8/8. 이번 제품 재시험 없음, 과제1 전체 미완료·다른 보류·과제2 #28 예정·미정 기한 유지.

**2026-10-20 앞선 후속 요청 — PR #31 재리뷰 완료:** PR #31의55ac854 재리뷰에서 P2 두 건 해결을 확인했고 수정 범위의 추가 필수 결함은 발견하지 않았다. 도구30건 재실행 통과·실제4회귀 원본 감사·제품/xUnit60파일 동일을 확인했다. COMMENT 재리뷰를 게시했으며 코드 수정/추가 커밋·푸시/Issue체크 변경/병합은 없다. 남은 단계는 요청된 develop 병합·반영 확인 후 Issue 종료다. [COMMENT](https://github.com/inhhlee/amr-control-system-demo/pull/31#pullrequestreview-5580657608)·[근거](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-pr31-rereview-01/README.md). 다른 보류·과제2예정·미정기한 유지.

**2026-10-20 앞선 후속 요청 — PR #31 P2 수정·푸시 완료:** PR #31의 P2 두 건을 검증 도구 코드에서 수정하고 55ac854를 같은 #6 브랜치에 커밋·푸시했다. 새 재현 시험30건과 실제 C1/C2/C3a/C3b 회귀4실행 통과. 제품 코드·기존 합격 기준은 유지하며 기존768건은 소스 동일 근거로 재사용한다. PR·Issue 근거 갱신, 재검토·병합·종료 대기. 다른 보류·과제2 #28 예정·미정 기한·과제1 전체 미완료 유지. [검증 근거](https://github.com/inhhlee/amr-control-system-demo/blob/55ac85491bed143f1eb33162fa9a601eec9d2853/evidence/COM-03/20261020-pr31-p2-fix-01/README.md).

**2026-10-20 앞선 후속 요청 — PR #31 리뷰·수정 필요:** da1e640의 #6/명세/원본 증거 대조 후 P2 2건을 재현했다. 프록시 block 대기 중stop 불응과 로그 실패 시 컨테이너 정리 생략이다. [COMMENT 리뷰](https://github.com/inhhlee/amr-control-system-demo/pull/31#pullrequestreview-5580054400)·[상세 재현](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-pr31-review-01/README.md). 기존 정상768건/실제 측정은 유효하나 수정·재검토 전 병합 보류. 제품 수정/푸시·Issue체크 변경 없음, 다른 보류·과제2 예정 유지.

**2026-10-20 앞선 후속 요청 — #6 PR 게시·8조건 갱신:** 같은 feature/6-mqtt-keepalive의 코드/근거 bccb461·게시 문서 da1e640을 커밋·푸시하고 [PR #31](https://github.com/inhhlee/amr-control-system-demo/pull/31)을 develop 대상으로 생성했다. #6 Issue에 최종768건·실제 C1~C3b·A~C 대조 및 PR을 연결해 원래8조건 체크. [담당 기록](04_COM-03_연결유지와_끊김감지.md)·[게시 확인](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-pr-publication-01/README.md). PR/Issue open·미병합, 리뷰·병합·종료 대기. 다른 보류·과제2 예정 유지.

**2026-10-20 앞선 후속 요청 — #6 C4 검증·A~C 최종 취합:** 신규7건 포함 자동768건·빌드 경고/오류0, 중복 단절·늦은 알림·두 종료 순서 통과. 실제 C1~C3b 근거를 최종 코드에 연결해 #6 조건7개 충족·실제 게시 연결1개 부분 충족으로 정리했다. [담당 C4](04_COM-03_연결유지와_끊김감지.md#com03-c4)·[검증결과](../산출물/2026-10-20_COM03-C4_경합과최종취합_20261020-c4-unit-02_검증결과.md). 미커밋·PR 없음·open, 리뷰/병합/종료는 남음. 다른 보류·과제2 예정 범위 유지.

**2026-10-20 앞선 후속 요청 — #6 C1·C2 부분 재개:** 같은 feature/6-mqtt-keepalive에서 C2 단절 진단·실제 Broker 종료 감지 53.4907ms·정리·종료 1과 동일 Broker 재기동 후 새 콘솔 접속·12.0829546초/PING 2쌍/종료 0을 확인했다. 최종 자동761건·빌드 경고/오류 0, 시험 자원 정리·기존 3개 상태 보존이다. [담당 C2](04_COM-03_연결유지와_끊김감지.md#com03-c2)·[검증결과](../산출물/2026-10-20_COM03-C2_Broker종료_20261020-c2-mqtt-01_검증결과.md). #6은 진행 중이며 C3·C4 추가 범위가 남아 있다. 코드·도구·근거는 미커밋이며 다른 보류·과제2 예정 범위는 유지한다. 아래 다음 작업·보류 선택은 해당 시점 기록이다.
- 관련 계획: [과제1](../과제계획.md#solo-task1) v0.39 · [전체일정](../../전체일정.md#solo-demo) v0.29 · [개발 진행 절차](../../../기준/개발%20진행%20절차.md#2-작업-나누기와-issue-생성) v0.6
- 현재 단계: COM01-B [#21](https://github.com/inhhlee/amr-control-system-demo/issues/21)은 [PR #22](https://github.com/inhhlee/amr-control-system-demo/pull/22)로 develop에 병합됐고 Issue 종료를 확인했다. 기존 자동시험 529건·실제 MQTT 근거는 PR에 연결돼 있다. COM01-C [#23](https://github.com/inhhlee/amr-control-system-demo/issues/23)은 [PR #24](https://github.com/inhhlee/amr-control-system-demo/pull/24)의 develop 병합(e207614)을 확인하고 완료조건 5개를 체크해 종료했다. 자동시험 547건·실제 MQTT 정상/종료/새 세션·Broker 중단을 확인했다. [최종 검증결과](https://github.com/inhhlee/amr-control-system-demo/blob/e2076145615d1310e1a52405cd5c35d66ca71a5e/evidence/COM-01/20261019-queue-pr-unit-02/README.md). 실제 MQTT 과부하·장시간 부하·네트워크 무응답은 미검증이다.

앞선 병합 기록: COM03-B [#5](https://github.com/inhhlee/amr-control-system-demo/issues/5)는 [PR #25](https://github.com/inhhlee/amr-control-system-demo/pull/25)를 develop에 merge commit 방식으로 병합한 뒤 완료조건 7개를 확인해 completed로 종료했다. 병합 커밋은 [b4265af](https://github.com/inhhlee/amr-control-system-demo/commit/b4265aff198ead9d234c592cfaf9b89f9e217024)이며 전체 파일 트리는 검토한 2d1e394와 동일하다. 기존 자동시험 566건·실제 TCP/MQTT 6개 시나리오와 AI COMMENT 리뷰가 근거다. 이번 병합 단계에서 재시험은 하지 않았고, CI 검사 결과·필수 보호 규칙·미해결 리뷰 지적은 없다. COM-03 전체·과제1 전체는 미완료이며 과제1 재개 시 다음 기능은 #6이다.

**2026-10-20 후속 요청:** COM05-A만 [#29](https://github.com/inhhlee/amr-control-system-demo/issues/29)로 게시·재개하여 로컬 구현·자동758개·실제 MQTT/Seq 시험을 완료했다. [담당 문서](23_COM-05_Command_발행.md). [PR #30](https://github.com/inhhlee/amr-control-system-demo/pull/30) develop 병합(d777ab7)·#29 완료 종료를 확인했으며 다른 보류 기능과 과제2 #28 예정 범위는 유지한다. 아래 보류 선택은 당시 기록이다.

**2026-10-20 당시 사용자 선택 — 이후 #29와 #6만 별도 요청으로 완료:** 과제1의 남은 개발은 보류하고 [과제2 첫 실행본](../../과제2/과제계획.md#task2-first-run)을 먼저 진행한다. 현재 다음 예정 업무는 [10/21 과제2](../../../일일업무/2026-10-21.md)다. 아래 추천 순서는 과제1 재개 시 참고하며 #6과 미게시 8개 초안의 범위·선행 조건·미완료 상태는 보존한다. [보류 범위·재조율 조건](../../전체일정.md#task2-priority).

이 폴더의 현재 계획 범위는 **과제1 COM-01~06 전체**다. 2026-10-08 사용자 승인으로 A2 #8·A3 #9를 #8 하나로 통합했다. A1 #7은 유지하고 #4는 원래 완료조건을 보존하는 총괄이다. 05번은 A1 원본, 06번은 통합 #8 원본, 07번은 #9 통합 안내·이전 본문 보관이다. #5·#6 학습 안내와 08~15번 연결 문서는 유지한다.

2026-10-08 앞선 요청의 학습 단계 통합·A1~A3 별도 게시 이력은 보존한다. 현재 A2·A3는 #8 내부 학습 단계다. [#4](02_COM-03_접속과_정상종료.md)의 기존 앵커는 해당 원본으로 연결하며 [#5의 B1~B3](03_COM-03_접속실패_처리.md#com03-b1), [#6의 C1~C4](04_COM-03_연결유지와_끊김감지.md#com03-c1)도 같은 Issue 안에서 진행한다. 질문 → 답변 확인 → 필요한 설명 → 해당 단계 작업 방식을 유지한다. 문서 반영은 제품 완료가 아니다.

한 사람이 한 작업을 공부 → 구현 → 필요한 시험 → PR 검토 순으로 마친다. Issue 수는 목표 숫자가 아니라 관찰할 결과·선행 조건에 따라 정한 초안이다. 하루 완료를 보장하지 않으며 첫 작업의 실제 소요·막힌 부분을 보고 이후 크기를 조정한다. 기존 `C:\practice`의 구현·통과 기록은 참고이며 새 실습의 완료 증거가 아니다.

## 준비 완료와 확인한 현재 상태

2026-10-12 앞선 확인 기록(현재 단계는 위 요약·작업 표 참조): PR #13은 2026-10-11 develop 병합(c34f380728d914aed9d0fe5f3427d698493d2ab6). #4 원래 완료조건 7개를 대조·체크했고 [총괄 통합 검증 PR #14](https://github.com/inhhlee/amr-control-system-demo/pull/14)를 develop 대상으로 생성했다. 사용자 요청으로 추가 검증 도구·결과 파일을 제거하고 기존 시험 근거 대응표를 유지했다. 제품 재시험 없음. PR #14 리뷰·병합 대기, #4·#8 open·미종료, main 반영 미결정. COM-03 전체·과제1 전체는 미완료다. [총괄 상세](02_COM-03_접속과_정상종료.md), [일일업무](../../../일일업무/2026-10-12.md) 참조.

**2026-10-08 당시 확인:** A1 [PR #12](https://github.com/inhhlee/amr-control-system-demo/pull/12)는 develop에 병합됐다(병합 커밋 `b91fc8e22ef56b208b3c2edeca99f5e2807474ef`). [A1 실행 근거](https://github.com/inhhlee/amr-control-system-demo/blob/9f6de0af5b23134bd036659c929d01af8413f16a/evidence/COM-03/20261008-a1-broker-01/README.md)는 시험 당시 설정의 기동·관리 결과다. 현재 브랜치는 `feature/8-mqtt-connect`, HEAD는 `855d76d28a8fd096f2328aefe306c3161c13eb26`이며 통합 문서 수정 전 작업 트리는 깨끗했다. Broker 현재 실행 상태·MQTT 접속은 이번 문서 작업에서 재시험하지 않았다. 아래는 **준비 단계인 2026-10-07의 조회 기록**이며 현재 상태와 구분한다.

- 사용자가 전달한 병합 결과를 GitHub에서 다시 조회했다. [준비 Issue #2](https://github.com/inhhlee/amr-control-system-demo/issues/2)는 `closed / completed`, [PR #3](https://github.com/inhhlee/amr-control-system-demo/pull/3)은 `merged`이며 대상은 main이다. 병합 시각은 2026-10-07 17:41:04 KST다.
- 원격 main과 로컬 HEAD는 `963a1fa8d48f432aaa87f07f15a61db57e22db88`다. 검증 원본 `0d757940ff23061a96e59e5b0575499204032142`가 병합 커밋의 부모에 포함된다. 로컬 조회 브랜치는 `develop`이고 미커밋 변경은 없다. 새 기능 착수 때 현재 Git 상태와 원격 기준 브랜치를 다시 확인한다.
- 솔루션·라이브러리·콘솔·시험 프로젝트, MQTTnet 5.2.0.1603 참조와 Docker 설정이 존재한다. 콘솔은 준비 안내만 출력하며 연결 소스·제품 기능 시험은 아직 없다.
- 프로젝트 전용 Compose는 `amr-demo / mosquitto`, 이미지 `eclipse-mosquitto:2.1.2-alpine`, 주소 `127.0.0.1:1884`다. 실제 기동·접속은 후속 범위이며 현재 실행 상태를 이번 문서 작업에서 조회·시험하지 않았다. 기존 `amr-mosquitto / 1883`을 실습용으로 중단하지 않는다.
- 기존 준비 시험 결과는 복원 종료 0, 빌드 경고·오류 0 및 종료 0, 준비 콘솔 재시험 종료 0, xUnit 탐색 정상·기능 시험 0건, Compose 모델 검사 종료 0이다. 원본 근거는 [복원·빌드·탐색](https://github.com/inhhlee/amr-control-system-demo/blob/0d757940ff23061a96e59e5b0575499204032142/evidence/setup/20261007-setup-01/README.md), [콘솔 재시험](https://github.com/inhhlee/amr-control-system-demo/blob/0d757940ff23061a96e59e5b0575499204032142/evidence/setup/20261007-setup-03/README.md), [Docker 설정 검사](https://github.com/inhhlee/amr-control-system-demo/blob/0d757940ff23061a96e59e5b0575499204032142/evidence/setup/20261007-docker-local-01/README.md), [적용 문서·환경 대조](https://github.com/inhhlee/amr-control-system-demo/blob/0d757940ff23061a96e59e5b0575499204032142/evidence/setup/20261007-setup-02/README.md)다. 병합·초안 작성 중 새 시험을 수행한 결과가 아니다.
- CI 미구성·미실행 및 병합 직전 필수 승인·검사 없음은 사용자의 전달 기록과 PR 본문에서 확인했다. 이번에 보호 규칙·검사 구성을 다시 감사하지 않았다.
- 과거 Issue #2가 인용한 과제계획 v0.10·DEMO-SETUP v0.1의 위치·버전 차이는 당시 검증 기록에 보존한다. 이번 기준은 실제 읽은 `C:\process-plan`의 과제계획 v0.9에 새 실습을 연결한 v0.11이다. 과거 미확인 문서를 읽거나 그대로 복원했다고 기록하지 않는다.

## 참고한 현재 문서

| 문서 | 버전·항목 | 적용 내용 |
| --- | --- | --- |
| [기능명세](../../명세/기능명세.md) | v0.7 / COM-01~06 | 송수신·Heartbeat·Broker 감시·입력 검사·Command/ACK·자동 복구 전체 범위 |
| [요구사항정의](../../명세/요구사항정의.md#r-04) | v0.5 / R-04 | 콘솔 기반 통신과 끊김·재접속 결과물 |
| [공통규칙](../../명세/공통규칙.md) | v0.4 / C-01·03~11 | 식별·시간·상태·검사·책임·명령·감시·로그·설정 |
| [공통데이터명세](../../명세/공통데이터명세.md#task1-contracts) | v0.4 / Heartbeat v0.2·과제1 개발 계약 | 네 수신 유형·Command 형식·시간·AMR별 큐·감시 기준 |
| [검토 및 결정사항](../../명세/검토%20및%20결정사항.md) | v0.5 / D-03·04·06~10, DN-01·02·08·09·10 | 기존 채택 개발 계약 유지. D-08 복구 상세와 D-07 업무 정책의 미정 범위 구분 |
| [과제계획](../과제계획.md#demo-work)·[전체일정](../../전체일정.md#solo-demo) | v0.32 / v0.25 | #21·PR #22 develop 반영·종료 및 COM01-C #23 게시 연결. 전체 17개 작업·원래 범위 유지 |
| [개발환경](../../개발환경.md)·[개발 진행 절차](../../../기준/개발%20진행%20절차.md) | v0.7 / v0.6 | 실제 문서·코드 위치, 초안 검토 후 게시·별도 코드 작업 |
| 코드 저장소·기존 계약 | demo `963a1fa`, practice의 수신 v3·Command v1·수신 큐·감시 계약 및 COM-05 검증 목록 | 새 저장소의 준비 상태와 재사용할 개발 기준 대조. 제품 재시험 아님 |

책임님 PDF·미제공 과거 원문을 이번에 다시 판독하지 않았다. 원문 제공 상태는 요구사항정의에서 관리한다. 새 저장소의 실습 주소는 준비한 1884 설정이며 기존 명세의 1883 시험 주소를 그대로 적용하지 않는다. 개발용 임시 계약을 운영 확정으로 확대하지 않는다.

<a id="solo-issues"></a>

## 우선순위와 선행 조건

아래가 **현재 사용할 전체 작업 목록**이다. 작업 Issue는 17개이며 총괄 #4·준비 완료 #2·통합 종료 #9는 작업 수에서 제외한다. 파일명 숫자는 정렬용이고 실제 실행 순서는 이 표를 따른다. COM-03 정상 접속 후 작은 송수신 결과를 확인하고 예외·감시·복구로 넓힌다.

| 추천 순서 | 작업·초안 | 기능 ID | 이번에 확인할 결과 | 필수 선행 | GitHub 상태 |
| --- | --- | --- | --- | --- | --- |
| 1-1 | [COM03-A1 — Broker 기동·관리](05_COM-03_Broker_기동확인.md) | COM-03 | 실제 Broker 실행·중단·재기동 | 준비 #2 | [#7](https://github.com/inhhlee/amr-control-system-demo/issues/7) closed/completed, [PR #12](https://github.com/inhhlee/amr-control-system-demo/pull/12) develop 병합 |
| 1-2 | [COM03-A2·A3 — MQTT 정상 접속·유지·종료](06_COM-03_최소접속.md) | COM-03 | 승인 뒤 Connected·해제 중간 검증 → 유지·Ctrl+C·자동 시험·재실행 | #7 PR 반영과 현재 Broker 재확인 | [#8](https://github.com/inhhlee/amr-control-system-demo/issues/8)과 총괄 [#4](https://github.com/inhhlee/amr-control-system-demo/issues/4) closed/completed, PR #13 develop 병합 |
| 2 | [COM01-A — Heartbeat 한 종류를 구독하고 수신 확인](16_COM-01_Heartbeat_수신.md) | COM-01 | 실제 Broker를 거쳐 들어온 Heartbeat의 Topic과 원문을 시험 콘솔에서 확인한다. | #4 | [#15](https://github.com/inhhlee/amr-control-system-demo/issues/15) closed, [PR #16](https://github.com/inhhlee/amr-control-system-demo/pull/16) develop 병합 |
| 3 | [COM04-A — Heartbeat 검사와 정상 데이터 전달](17_COM-04_Heartbeat_입력검사.md) | COM-04 | 유효한 Heartbeat만 모델로 전달하고 불량 입력 뒤에도 수신을 계속한다. | #15 / PR #16 develop 반영 | [#17](https://github.com/inhhlee/amr-control-system-demo/issues/17) closed/completed, [PR #19](https://github.com/inhhlee/amr-control-system-demo/pull/19) develop 병합; 자동시험 113개·실제 MQTT 통과 |
| 4 | [COM04-B — Telemetry·Alarm·ACK 검사 확장](18_COM-04_메시지유형_확장검사.md) | COM-04 | 과제1의 네 수신 유형이 같은 검사 기준과 실패 처리 경계를 사용하게 한다. | #17 PR develop 반영 | [#18](https://github.com/inhhlee/amr-control-system-demo/issues/18) closed, [PR #20](https://github.com/inhhlee/amr-control-system-demo/pull/20) develop 병합·자동시험 463건 근거 |
| 5 | [COM01-B — 여러 AMR의 네 메시지 유형 구독·전달](19_COM-01_다중AMR_유형별전달.md) | COM-01 | 검사한 Heartbeat·Telemetry·Alarm·ACK를 대상 AMR과 유형에 맞게 시험 수신자에 전달한다. | #18·PR #20 develop 반영 | [#21](https://github.com/inhhlee/amr-control-system-demo/issues/21) closed, 로컬 기록 v0.4 / [PR #22](https://github.com/inhhlee/amr-control-system-demo/pull/22) develop 병합 |
| 6 | [COM01-C — AMR별 수신 순서와 과부하·종료 처리](20_COM-01_AMR별_수신큐.md) | COM-01 | AMR별 도착 순서를 유지하며 느린 처리·큐 초과·종료를 제어한다. | #21·PR #22 develop 반영 | [#23](https://github.com/inhhlee/amr-control-system-demo/issues/23) closed/completed, 원본 v0.5 / [PR #24](https://github.com/inhhlee/amr-control-system-demo/pull/24) develop 반영, 자동 547건·실제 MQTT 정상/중단 통과, 실제 MQTT 과부하·장시간 부하 미검증 |
| 7 | [COM03-B — 접속 실패·대기 제한·취소](03_COM-03_접속실패_처리.md) | COM-03 | 잘못된 입력·접속 실패·취소 구분 | #4 | [#5](https://github.com/inhhlee/amr-control-system-demo/issues/5) completed, [PR #25](https://github.com/inhhlee/amr-control-system-demo/pull/25) develop 병합 b4265af, 566건/실제 6시나리오·AI 리뷰 근거 |
| 8 | [COM03-C — 연결 유지·끊김 감지](04_COM-03_연결유지와_끊김감지.md) | COM-03 | KeepAlive·실제 단절·무응답·종료 경합 확인 | #5 | [#6](https://github.com/inhhlee/amr-control-system-demo/issues/6) completed·[PR #31](https://github.com/inhhlee/amr-control-system-demo/pull/31) develop 반영 e4bd66a |
| 9 | [COM02-A — 한 AMR의 Heartbeat 중단·복구 감시](21_COM-02_Heartbeat_중단과복구.md) | COM-02 | 정상 Heartbeat를 보낸 AMR이 중단됐는지 판정하고 다시 보내면 복구를 알린다. | COM01-C · #6 | 새 초안·미게시 |
| 10 | [COM02-B — 여러 AMR 감시와 연결 세션 정리](22_COM-02_다중AMR_세션감시.md) | COM-02 | 장비별 감시를 독립적으로 수행하고 Broker 단절·종료 때 이전 감시를 정리한다. | COM02-A | 새 초안·미게시 |
| 11 | [COM05-A — Command 생성·검사·대상 AMR 발행](23_COM-05_Command_발행.md) | COM-05 | 콘솔에서 생성한 요청 ID를 유지해 MOVE·STOP·RESET을 올바른 AMR Topic으로 보낸다. | COM01-C | [#29](https://github.com/inhhlee/amr-control-system-demo/issues/29) 게시·구현/시험·[PR #30](https://github.com/inhhlee/amr-control-system-demo/pull/30) develop 병합(d777ab7)·#29 완료 종료 |
| 12 | [COM05-B — ACK 보존과 여러 요청의 결과 대조](24_COM-05_ACK_요청대조.md) | COM-05 | 실제 Broker를 통한 명령·ACK 왕복에서 결과와 식별자가 보존되는지 Core 대역으로 확인한다. | COM05-A · COM01-B | 새 초안·미게시 |
| 13 | [COM06-P — 자동 복구의 실습 정책과 시험 기준 정리](25_COM-06_복구정책_결정.md) | COM-06 | 미정인 D-08·관련 D-07을 구현 가능한 실습 정책으로 정리하고 선택 결과를 남긴다. | #6 · COM05-B · COM02-B | 새 초안·미게시 |
| 14 | [COM06-A — 연결 상실 후 자동 재접속과 중단 처리](26_COM-06_자동재접속.md) | COM-06 | 합의한 정책에 따라 한 번에 하나의 재접속 흐름을 실행하고 종료 요청으로 멈출 수 있게 한다. | COM06-P | 새 초안·미게시 |
| 15 | [COM06-B — 구독·송수신 복구와 단절 중 명령 처리](27_COM-06_재구독과_명령처리.md) | COM-06 | 자동 재접속 후 네 수신 유형·명령 송신·AMR 감시를 새 세션에서 다시 사용할 수 있게 한다. | COM06-A · COM05-B · COM02-B | 새 초안·미게시 |
| 16 | [TASK1-V — COM-01~06 콘솔 시나리오와 검증 근거 정리](28_과제1_COM전체_검증정리.md) | COM-01~06 | 과제1의 콘솔 송수신·입력 검사·감시·명령/ACK·자동 복구 결과를 빠짐없이 확인한다. | COM06-B | 새 초안·미게시 |

추천 순서는 혼자 순차 진행할 때의 순서이고 필수 선행은 필요한 결과의 조건이다. 현재 #23과 #5는 develop 반영·완료 종료 상태다. #6 이후 잔여 작업은 과제2 우선 결정으로 보류하며 재개 시 아래 선행 조건을 따른다. #21·PR #22 develop 반영·Issue 종료를 확인했다. #23 콘솔 큐와 실제 MQTT 순서·독립성·Ctrl+C·새 세션 수신을 확인했다. #17의 구현·시험·PR #19 develop 반영을 마쳤으며 B의 Telemetry → Alarm → ACK는 한 Issue 내부 단계다. #4는 #7·#8의 반영과 원래 완료조건 전체를 확인한다. A2→A3 사이의 PR·병합은 요구하지 않는다. 기존 1-3은 1-2에 통합했고 나머지 행 번호는 유지했다. [#9 통합 안내](07_COM-03_CtrlC_정상종료.md)는 독립 작업이 아니며 08~15번 파일도 별도 게시하지 않는다.

## COM-01~06 완료 범위 연결

| 기능 | 구현·검증을 모을 작업 | 빠뜨리면 안 되는 완료 경계 |
| --- | --- | --- |
| COM-01 실시간 양방향 통신 | COM01-A·B·C + COM05-A·B | 네 유형 수신·대상 분기·AMR별 순서/독립성·과부하/종료와 Command 송신 |
| COM-02 개별 AMR Heartbeat | COM02-A·B, 복구 후 회귀 COM06-B | 정상 수신 기준 시간·한 번 중단/복구·장비별 독립·느린 Core·세션 정리 |
| COM-03 Broker 연결 상태 | 총괄 #4 아래 #7·통합 #8 + 기존 #5·#6 | 접속/정상 종료·실패/제한/취소·KeepAlive·실제 단절/무응답·종료 경합 |
| COM-04 메시지 유효성 | COM04-A·B, 실제 전달 COM01-B·C | 네 유형 정상/오류·Topic 대상·공통 JSON 제한·불량 입력 이후 계속 처리·처리 오류 구분 |
| COM-05 Command/ACK | COM05-A·B | 요청 ID·AMR 보존, 세 명령 송신, 여러 요청의 역순 ACK·SUCCESS/FAILURE 전달 |
| COM-06 재접속·구독 복구 | COM06-P·A·B | 합의한 재시도·중단/한계·재구독·단절 중 명령 처리·실제 자동 송수신 복구 |
| 과제1 전체 | TASK1-V | 위 여섯 기능의 유효 증거와 콘솔 재현 절차. 대역 확인과 과제5 실제 통합 구분 |

COM-05의 대조는 Core 시험 대역 범위다. 실제 Core의 요청 상태·업무 Timeout·중복/늦은 ACK 정책은 D-07/CORE-04로 이어진다. COM06-P는 그중 단절 중 명령과 복구에 필요한 결정을 다루며, 자동 재전송을 고르면 중복 수행 방지의 선행 구현을 추가해야 한다. 미정이라고 모든 선행 코딩을 막거나 권고안을 승인된 값으로 취급하지 않는다.

<a id="혼자-개발하는-세부-작업안"></a>

## COM-03 안에서 따라갈 학습 단계

기존 11개 ID·파일 경로를 유지한다. A1 #7 이후 A2·A3는 #8 내부 학습 단계로 진행하며 단계별 브랜치·PR·병합을 요구하지 않는다. B1~B3·C1~C4도 기존 #5·#6 안의 학습 단계다. #9는 통합 안내로 남기고 #5·#6의 범위·완료조건은 변경하지 않는다.

| 기존 Issue | 읽을 학습 단계 | 완료 판단 |
| --- | --- | --- |
| #4 / COM03-A | [A1 #7](05_COM-03_Broker_기동확인.md) → [통합 #8의 A2 → A3](06_COM-03_최소접속.md). [#9는 통합 안내](07_COM-03_CtrlC_정상종료.md) | #7·#8 PR 반영 후 원래 #4 전체 완료조건·최종 코드 근거 확인 |
| #5 / COM03-B | 통합 완료: [B1 입력/최초 실패](03_COM-03_접속실패_처리.md#com03-b1) → [B2 대기 제한](03_COM-03_접속실패_처리.md#com03-b2) → [B3 사용자 취소](03_COM-03_접속실패_처리.md#com03-b3) | 원래 #5 완료조건 전체와 필요한 회귀 |
| #6 / COM03-C | #6 completed·PR #31 develop 병합(e4bd66a), 8조건 충족. 통합 완료: [C1 KeepAlive](04_COM-03_연결유지와_끊김감지.md#com03-c1) → [C2 Broker 종료](04_COM-03_연결유지와_끊김감지.md#com03-c2) → [C3a 무응답 환경](04_COM-03_연결유지와_끊김감지.md#com03-c3a) → [C3b 측정](04_COM-03_연결유지와_끊김감지.md#com03-c3b) → [C4 경합/근거](04_COM-03_연결유지와_끊김감지.md#com03-c4) | 후속 확인까지 포함한 원래 #6 전체 조건. 연결 유지 한 번으로 종료하지 않음 |

## 게시 결과

- 앞선 게시 요청으로 세 초안 모두 게시 승인. 2026-10-07 게시 직전 전체 Issue·PR을 다시 검색했고 기존 준비 #2·PR #3 외에 같은 작업은 조회되지 않았다.
- A → B → C 순서로 #4·#5·#6을 생성했다. 로컬 관리 정보는 제외하고 승인한 제목·본문을 사용했으며 B의 선행은 #4, C의 선행은 #5 및 A의 근거 #4로 연결했다.
- 생성 후 세 Issue를 다시 조회해 제목·본문·실제 선행 URL과 open 상태를 확인했다. 각 초안의 `목적` 이하 본문도 게시본과 일치하도록 선행 링크만 갱신했다.
- GitHub 게시 3개와 로컬 초안·목록 기록을 모두 완료했다. 이번 작업에서는 코드 구현·시험·커밋·푸시·PR 생성은 진행하지 않았다.

### A1~A3 추가 게시 — 2026-10-08

사용자가 A1~A3 분리와 실제 이슈 반영을 요청했다. 게시 직전 조회된 Issue는 #2·#4·#5·#6, PR은 #3이며 중복 작업은 없었다. A1 #7 → A2 #8 → A3 #9 순으로 생성하고 #4의 제목·본문에 총괄 역할·체크리스트·원래 완료조건별 담당을 연결했다. 연결은 본문 체크리스트·상호 링크 방식이며 Sub-issues 전용 필드는 미등록이다. 원래 #4의 목적·범위·완료조건·시험 본문은 그대로 보존했다. 새 작업은 모두 open·구현 미착수·실행 미검증이다.

### A2·A3 통합 — 2026-10-08

사용자가 Issue 수를 줄이기 위해 A2·A3 통합을 승인했다. #8에 접속·명시적 해제·유지·Ctrl+C·정상 자동 시험·최종 증거 대조를 모두 옮기고 #9는 `closed / not_planned`로 종료했다. #4는 담당 연결만 갱신하며 원래 완료조건·시험과 미검증 체크를 보존했다. #7 PR #12의 develop 병합과 #7 open 상태를 확인했고 #7 자체를 닫지는 않았다. 기존 `feature/8-mqtt-connect`를 사용하며 신규 Issue·브랜치·PR은 만들지 않았다.

## 새 초안 검토와 게시

- 2026-10-07 과제1 전체를 정리하면서 Issue·PR을 다시 검색했다. 조회된 Issue는 준비 #2와 COM-03 #4·#5·#6, PR은 준비 #3이다. 새 13개 작업에 해당하는 기존 Issue·PR은 조회되지 않았다. 게시 직전에 다시 확인한다.
- 사용자는 별도 새 13개 초안의 순서·크기·범위를 검토한다. 이 13개는 미게시다. 현재 #7·통합 #8 및 기존 #5·#6만 게시 작업으로 집계하며 #4는 총괄, #9는 통합 이력이다.
- 게시할 때는 이 표의 새 초안 중 승인한 항목을 고른다. 제목과 `목적` 이하 본문만 게시하고 로컬 관리 정보는 제외한다. 선행 초안을 함께 게시하면 순서대로 생성해 실제 URL로 바꾼다. 미게시 선행은 ID·파일/문서 위치로 명확히 구분한다.
- 결과의 실제 번호·URL을 해당 초안과 이 목록에 기록한다. 성공한 게시와 실패한 파일 갱신을 나누어 보고하며 같은 Issue를 다시 만들지 않는다.

## 코드 채팅으로 전달

통합 #8은 PR #13으로 develop 반영됐으며 총괄 통합 검증 PR #14를 생성했다. 아래 #8 착수 예시는 과거 전달안으로 보존한다. #4의 중복 구현 PR은 만들지 않는다.

```text
https://github.com/inhhlee/amr-control-system-demo/issues/8을 작업하려고 해.
개발 위치는 C:\amr-control-system-demo이고 문서 원본은 C:\process-plan이야.
원본은 C:\process-plan\관제시스템 과제 진행\과제1\이슈\06_COM-03_최소접속.md야.
최신 작업 순서는 과제계획 v0.18 solo-task1과 Issue 목록을 참고해줘.
#8은 A2 접속·명시적 해제와 A3 유지·Ctrl+C·정상 자동 시험을 한 Issue로 묶은 작업이야.
기존 feature/8-mqtt-connect에서 진행하고 develop 대상 PR 하나로 모아줘.
#9는 #8로 통합 종료했으므로 새 브랜치·PR을 만들지 마.
관련 개념을 한 번에 하나씩 질문하고 내 답변을 확인한 뒤 설명·다음 단계로 진행해줘.

현재 지침·코드·Git 상태, A1 PR #12 반영과 Broker 현재 실행·주소를 확인해줘.
처음에는 A2 중간 결과 → A3 최종 동작 순으로 계획·대상·시험을 설명해줘.
아직 구현·실행·커밋·푸시·PR 생성은 하지 마.
```

다음 작업은 실제 URL과 초안 경로를 바꿔 전달한다. 접근할 수 없는 문서는 문서명·버전·관련 ID와 필요한 내용을 제공한다. 초안의 파일 경로와 GitHub 번호를 혼용하지 않는다.

## 후속 범위와 변경 기록

과제1의 COM-01~06 전체를 이번에 계획했다. 과제2 가상 AMR·과제3 GUI·과제4 Core/DB·과제5 실제 통합의 상세 Issue는 각 과제 착수 때 구체화한다. MQTT 시험 대역을 과제2·4 완성 코드로 간주하지 않는다.

- v0.4: COM-03을 새 Issue 11개로 나누고 기존 #4~#6을 부모로 쓰는 안을 제시했다.
- v0.5: 사용자의 COM-01~06 전체 범위 지적을 반영했다. 기존 세 Issue를 구현 단위로 활용하고 11개 문서는 학습 단계로 보존한다. 새 13개 초안과 여섯 기능의 완료 범위를 연결한 전체 16개 작업안을 작성했다. 모두 문서 개편 제안이며 GitHub·제품 상태는 변경하지 않았다.
- v0.6(2026-10-08): 사용자 요청에 따라 이해를 질문으로 확인하며 안내 통합을 진행한다. A1~A3의 순서·학습 내용·체크리스트를 #4 로컬 안내에 통합하고 05~07번 ID·경로는 연결 안내로 유지했다. #5·#6 통합은 후속 이해 확인 후 진행한다. GitHub 본문·완료조건·제품 상태는 변경하지 않았다.
- v0.7(2026-10-08): 사용자 취소의 이해 확인 후 B1~B3의 순서·학습 내용·체크리스트를 #5 로컬 안내에 통합하고 08~10번 ID·경로는 연결 안내로 유지했다. #6 통합은 후속 이해 확인 후 진행한다. GitHub 본문·완료조건·제품 상태는 변경하지 않았다.
- v0.8(2026-10-08): Broker 연결과 개별 AMR Heartbeat 감시의 이해 확인 후 C1~C4의 순서·학습 내용·체크리스트를 #6 로컬 안내에 통합하고 11~15번 ID·경로는 연결 안내로 유지했다. 세 작업 안내 통합을 완료하고 과제계획·목록에 질문 후 진행 방식을 연결했다. GitHub 본문·완료조건·제품 상태는 변경하지 않았다.

- v0.9(2026-10-08): 사용자 요청으로 A1~A3를 #7·#8·#9로 게시하고 #4를 총괄로 전환. 기존 05~07번을 게시 원본으로 갱신, 선행 PR 순서·18개 실제 작업과 총괄 1개 구분. 원래 완료조건·#5/#6 범위·새 13개 초안·제품 미착수 상태 보존.
- v0.10(2026-10-08): 사용자 승인으로 A2·A3를 #8로 통합하고 #9는 관리상 종료. 총 작업 17개·다음 작업 #8·PR #12 develop 병합을 반영하고 원래 완료조건·시험·#5/#6 및 새 13개 초안 상태를 보존.
- v0.11(2026-10-08): 일일·주간 보고 갱신에 따른 과제계획 v0.18의 기록 연결을 참조한다. 작업 17개·총괄/통합 종료 구분·제품 및 GitHub 상태는 기존 조회 기록을 유지하며 이번에 재조회하지 않았다.

- v0.12 후속(2026-10-12): 사용자 요청으로 #4 총괄 통합 검증 PR #14 생성. 7개 조건 대응·59개 근거 검사 통과, develop 리뷰·병합 대기. 기존 제품 시험 근거와 이번 검사를 구분하며 Issue 종료·main 반영 없음.

- v0.12 후속(2026-10-12): 사용자 요청으로 PR #14의 추가 검증 도구와 결과 파일을 제거. 기존 제품 시험·완료조건 대응표 유지. 현재 PR은 보고서·원격 스냅샷·README 보완 4개 파일이며 develop 병합 대기.

## 2026-10-12 COM04-A·B 게시와 학습 시작

- 사용자 승인으로 두 작업을 #17·#18에 각각 게시하고 원본 초안 v0.2에 실제 번호·계약·현 코드 경로를 연결했다. 이번 게시 직전 조회에서 같은 검사 작업은 없었다.
- PR #16 develop 병합 커밋은 82f6bb109dd964ca486f1bec5a99ab88d1d84cdf이며 #15는 closed다. 로컬 develop 작업 트리는 깨끗하다.
- 이번에는 #17을 질문 → 답변 확인 → 설계·해당 단계 구현 순서로 진행한다. #18은 대기한다. 두 Issue의 브랜치·구현·제품 시험은 아직 시작하지 않았다.
- COM01-A의 시험 스크립트 재실행 시 증거 덮어쓰기 지적은 사용자가 다음 작업으로 미뤘으며 해결 완료로 바꾸지 않는다. 새 COM-04 증거는 별도 실행 ID로 남긴다.
- 앞선 PR 대기·미게시 상태는 당시 기록으로 보존한다. 전체 17개 작업 중 신규 초안 13개에서 COM01-A·COM04-A·COM04-B를 게시했고 나머지 10개는 미게시다.

## 2026-10-19 COM04-A 구현·검증·병합 완료

- v0.14: `feature/17-heartbeat-validation`의 기능 커밋 `8b2314a7648278ec19d5542900e5e3ceb86024a8`을 [PR #19](https://github.com/inhhlee/amr-control-system-demo/pull/19)로 develop에 병합했다. 병합 커밋은 `53e9021089b5a0733a4c49e5f2440e7dd5cd1584`, 시각은 2026-10-19 12:02:56 KST다. #17은 완료조건 4개와 반영 결과를 확인해 closed/completed로 종료했다.
- 빌드 경고·오류 0, 자동시험 113개 통과. 실제 MQTT에서 거부 2건 뒤 정상 2건 전달·필드와 수신 UTC 시각 보존·CTRL_C_EVENT 후 종료 0을 확인했다. [실행별 근거](https://github.com/inhhlee/amr-control-system-demo/blob/8b2314a7648278ec19d5542900e5e3ceb86024a8/evidence/COM-04/20261019-final-06/README.md)와 [일일업무](../../../일일업무/2026-10-19.md)에 실패한 도구 실행·수정 후 확인 및 미검증 범위를 연결했다.
- 학습 답변은 시험 실적으로 집계하지 않는다. 리뷰는 Codex의 AI 자체 검토이며 별도 사람 승인으로 기록하지 않는다. 사용자 승인대로 기존 빈 주석 3줄 삭제는 미커밋 보존하고 기능 커밋에서 제외했다.
- #18은 선행 PR 반영만 확인했으며 구현·시험은 미착수다. COM-04 전체·과제1 전체 완료나 main 배포로 확대하지 않는다. COM01-A 도구 보완은 이월 상태를 유지한다.


- v0.15: #18 Telemetry·공통 입력 경계와 기존 Heartbeat 회귀, 자동시험 228건 통과. 코드 미커밋·미게시. [Telemetry 검증결과](<C:/amr-control-system-demo/evidence/COM-04/20261019-telemetry-02/README.md>) 및 같은 날짜 일일업무 참조. Alarm·ACK·실제 Telemetry MQTT는 미완료다.

- v0.16: #18 Alarm 검사와 전체 자동시험 357건 통과. [Alarm 검증결과](<C:/amr-control-system-demo/evidence/COM-04/20261019-alarm-01/README.md>) 및 같은 날짜 일일업무 참조. ACK 설계 확인 대기, 실제 MQTT·코드 커밋·PR 미수행.

- v0.17: #18 ACK 검사와 네 유형 자동 회귀 463건 통과. [ACK·네 유형 회귀 검증결과](<C:/amr-control-system-demo/evidence/COM-04/20261019-ack-01/README.md>) 및 같은 날짜 일일업무 참조. 구현 완료, 리뷰·게시·병합·실제 MQTT는 미수행.

- v0.18(2026-10-19): COM04-B #18은 [PR #20](https://github.com/inhhlee/amr-control-system-demo/pull/20) develop 병합·Issue 종료를 확인했다. 다음 COM01-B [#21](https://github.com/inhhlee/amr-control-system-demo/issues/21)은 초안 v0.2 보완·게시 완료, 구현 미착수·실행 미검증이다. 새 13개 초안 중 COM01-A·COM04-A·COM04-B·COM01-B 4개 게시, 나머지 9개 미게시. 과거 상태 기록은 당시 근거로 보존한다.

- v0.19(2026-10-19): COM01-B #21 구현·로컬 검증 완료. 빌드 경고·오류 0, 자동시험 529건 통과, 실제 MQTT 정상 20건 전달·불량 4건 거부·구독 밖 4건 미수신, 두 세션 CTRL_C_EVENT 종료 0을 확인했다. 커밋·GitHub 결과 게시·PR·리뷰·병합은 대기다. [COM01-B 실행 근거](<C:/amr-control-system-demo/evidence/COM-01/20261019-multi-mqtt-03/README.md>) 전체 작업 수·후속 COM01-C 범위는 유지한다.

- v0.20(2026-10-19): COM01-B [#21](https://github.com/inhhlee/amr-control-system-demo/issues/21)은 [PR #22](https://github.com/inhhlee/amr-control-system-demo/pull/22)로 develop에 병합됐고 Issue 종료를 확인했다. 기존 자동시험 529건·실제 MQTT 근거는 PR에 연결돼 있다. 다음 COM01-C [#23](https://github.com/inhhlee/amr-control-system-demo/issues/23)은 게시 완료·구현 미착수·실행 미검증이다. 새 13개 초안 중 5개 게시·8개 미게시, 전체 작업 17개 유지. #23의 현재 경로·DN-09·예정 시험을 보완했으며 제품 작업은 수행하지 않았다.

- v0.21(2026-10-19): COM01-C #23 첫 단계: AMR별 순서·독립 처리 내부 큐와 신규 자동시험 9건을 구현했다. 빌드 경고·오류 0, 기존 529건 포함 538건 통과. 콘솔 연결·취소·폐기·종료 제한·실제 MQTT는 다음 단계이며 미커밋이다. [검증결과](<C:/amr-control-system-demo/evidence/COM-01/20261019-queue-order-02/README.md>) 전체 작업 수·Issue 범위·기한은 유지한다.

- v0.22(2026-10-19): COM01-C #23 콘솔 MQTT 연결·실제 시험 완료. 빌드 경고·오류 0, 자동시험 543건 통과. 실제 MQTT 15건은 정상 10·검사 거부 1·처리 취소 1·대기 폐기 3이며 세 세션 종료 0을 확인했다. Broker 강제 단절·실제 과부하·종료 경합 반복은 미검증, 변경은 미커밋이다. [검증결과](<C:/amr-control-system-demo/evidence/COM-01/20261019-queue-mqtt-01/README.md>)

- v0.23(2026-10-19): COM01-C #23·PR #24 develop 병합 확인 및 완료 종료, 원본 v0.5·과제계획 v0.32·전체일정 v0.25 연결. 후속 기능·main 배포는 미착수, 기존 미검증 범위 유지.

- v0.24(2026-10-19): #5 브랜치·로컬 구현·검증 근거 연결, 이전 다음 단계 #23 안내 갱신. 게시·병합은 미수행.
- v0.26(2026-10-20): #5 PR #25 develop 병합·Issue 완료 종료, 후속 #6 연결. 이전 v0.25 게시·리뷰 기록 보존.

- v0.27(2026-10-20): 사용자 요청으로 과제1 잔여 개발 보류·과제2 우선 순서를 연결했다. 기존 Issue 종료·본문 수정·새 Issue 게시·제품 작업은 수행하지 않았으며 원래 범위·선행 조건·미검증을 유지한다.
