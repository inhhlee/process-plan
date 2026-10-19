# [COM-05] Command 생성·검사·대상 AMR 발행

## 로컬 관리 정보

- 초안 ID: COM05-A / 작성일: 2026-10-07 / 버전: v0.4
- 문서 작성: 완료 / 내용 검토: 사용자 검토 대기 / 구현: 로컬 완료 / 실행 검증: 자동·실제 MQTT 통과
- GitHub Issue·PR: [#29](https://github.com/inhhlee/amr-control-system-demo/issues/29) closed/completed / [PR #30](https://github.com/inhhlee/amr-control-system-demo/pull/30) develop 병합 완료(d777ab7). 2026-10-20 동일 작업 검색 후 신규 게시
- 기준: [과제계획](../과제계획.md#solo-task1) v0.14, [전체일정](../../전체일정.md#solo-demo) v0.11, [전체 순서](README.md#solo-issues)
- 기능 기준: [기능명세](../../명세/기능명세.md) v0.7 COM-05, [공통데이터명세](../../명세/공통데이터명세.md#task1-contracts) v0.4, [결정사항](../../명세/검토%20및%20결정사항.md) v0.5
- 게시 시 로컬 관리 정보는 제외한다. 본문의 미게시 선행 초안은 실제 Issue URL로 바꾸며, 공유할 수 없는 문서는 문서명·버전·항목과 필요한 내용을 전달한다.

## 2026-10-20 병합·종료 결과

- 사용자 요청으로 01:52:38 KST [PR #30](https://github.com/inhhlee/amr-control-system-demo/pull/30)을 develop에 merge commit 방식으로 병합했다. [병합 d777ab7](https://github.com/inhhlee/amr-control-system-demo/commit/d777ab7d8ef034d66a862343231268cd1476af24)의 부모는 64df6f0·검토 head a6f3b8d다.
- 01:52:54 KST #29를 closed/completed로 종료했다. 완료조건 5개·자동758개·실제 MQTT/Seq 근거 및 미해결 리뷰 스레드 없음 확인.
- 병합 커밋과 검토 커밋의 전체 Git tree가 811c0672170fbc7c00b3b7d9392d5c1aaf291eb3으로 동일하다. CI checks/statuses 없음, 이번 단계 제품 재시험 없음.
- 실제 AMR 동작·COM05-B ACK 대조·자동 복구 등 후속 범위 유지. 로컬 develop 최신화·브랜치 정리는 요청 범위 밖이므로 수행하지 않았다.
- 아래 게시 전·병합 전 문구는 당시 기록이다.

## 2026-10-20 게시·리뷰 결과

- 사용자 요청에 따라 기존 AGENTS.md의 설계·검토·학습 설명 15줄도 포함해 [a6f3b8d](https://github.com/inhhlee/amr-control-system-demo/commit/a6f3b8de9e28509d58835ac08166b0982519d3bf)로 커밋·푸시했다.
- [PR #30](https://github.com/inhhlee/amr-control-system-demo/pull/30), base develop / head feature/29-mqtt-command-publish.
- [AI COMMENT 리뷰](https://github.com/inhhlee/amr-control-system-demo/pull/30#pullrequestreview-5574833740)에서 수정 필요 결함을 발견하지 못했다. 입력 검증·동시성/취소·자원 소유권·기존 수신 영향·시험 근거를 대조했다. 사람 승인·병합 완료가 아니다.
- 기존 자동758개·실제 MQTT/Seq 근거와 현재 C# 소스·프로젝트 58개 해시 일치. 이번 게시 단계 제품 재시험 없음, CI checks/statuses 없음.
- 선택 이유·대안·예상 질문·미검증 범위는 리뷰와 기존 검증결과에 연결한다. develop 병합·Issue 종료는 미수행이다.
- 아래 미커밋·PR 전 표시는 구현 당시 기록이다.

## 2026-10-20 구현·시험 결과

- 사용자 요청으로 COM05-A를 재개했다. 이번 기준은 과제계획 v0.39·결정사항 v0.7이며 아래 v0.14/v0.5 참조는 10/7 초안 당시 기록이다.
- develop 64df6f0에서 feature/29-mqtt-command-publish 생성. 기존 AGENTS.md 변경 보존.
- 실제 생성 경로: src/Amr.Communication/Command/ 모델·순수 Validator·Publisher, 콘솔 CommandConsoleRunner, Command/ 및 Console/ 시험, tests/manual/COM05-A/ 실제 시험 도구.
- 전체 758개(신규167) 및 실제 MOVE·STOP·RESET 대상/ID/필드·불량 거부·Retain·Seq 검색 통과. 발행 취소·제한·실패는 전달 불확실성과 구분하고 자동 재시도하지 않는다.
- [검증결과](../산출물/2026-10-20_COM05-A_MQTT송신_20261020-command-full-02_검증결과.md). 로컬 구현·시험까지이며 커밋·푸시·PR·병합·Issue 종료는 미수행. 실제 AMR 동작·ACK 요청 대조는 제외.
- 아래 생성 예정·미착수 서술은 원래 작업 계획으로 보존한다.

## 목적

콘솔에서 생성한 요청 ID를 유지해 MOVE·STOP·RESET을 올바른 AMR Topic으로 보낸다.

## 근거와 선행 조건

- 근거: 기능명세 v0.7 COM-05, 요구사항정의 v0.5 R-04, 공통규칙 v0.4, 공통데이터명세 v0.4 과제1 개발 계약, 검토 및 결정사항 v0.5. 작업 분할·실습 순서는 신입 1인 개발을 위한 제안이다.
- 선행 작업: [COM01-C](20_COM-01_AMR별_수신큐.md)의 해당 결과 반영. 추천 진행 순서는 Issue 목록을 따른다.
- 먼저 익힐 내용: CommandId는 요청을 추적하는 번호다. 발행 성공은 AMR이 일을 끝냈다는 뜻이 아니다.

## 작업 범위와 대상

- 개발 위치: `C:\amr-control-system-demo`. 대상: Command/·발행부(생성 예정), 기존 콘솔과 시험 프로젝트, AMR 수신 시험 자료.
- 라이브러리·콘솔·시험 프로젝트는 준비돼 있다. 제품 소스는 현재 없으므로 위 모듈은 새로 만들거나 선행 작업에서 생성한 파일을 보완할 예정이며, 착수 시 실제 구조·기존 변경을 대조한다.
- 생성 예정 Command/에 DN-08 Command 계약 v1의 모델·검사·발행 경계를 만든다. 콘솔(Core 대역)이 CMD- + Guid를 한 번 생성하고 통신은 보존한다.
- MOVE의 유한 x/y, STOP/RESET의 빈 param 및 공통 필드·자료형·JSON 제한을 확인한다. 잘못된 명령은 Broker 발행 전 거부한다.
- AMR 대역은 Broker 구독 CLI로 수신을 확인한다. 실제 이동 코드를 만들지 않으며 발행 결과와 ACK 결과의 표시를 나눈다.

## 진행 순서

1. 선행 결과와 이번 기준을 읽고 정상 입력 하나·예상 출력부터 확인한다.
2. 위 작업 범위를 순서대로 구현하거나 정리한다. 처음부터 범용 프레임워크를 만들지 않는다.
3. 아래 사례로 결과를 확인하고 실행 방법·남은 범위를 기록한다. 한 작업이 너무 크면 실제 진행 결과에 따라 나머지 범위를 분리한다.

## 완료조건

- [ ] 세 종류의 정상 명령이 대상 amr/{amrId}/command로 발행된다.
- [ ] 요청·송신·수신의 cmdId와 대상이 일치하고 요청별 ID가 다르다.
- [ ] 잘못된 명령·대상 입력은 MQTT 발행 호출 없이 거부된다.
- [ ] 발행 성공을 동작 완료 SUCCESS로 표시하지 않는다.
- [ ] 실제 변경·확인 결과·미검증 범위를 README와 Issue·PR에 연결한다.

## 시험 방법과 예상 결과

아래는 예정 확인이며 현재 실행 결과가 아니다.

| 입력·조건 | 예상 결과 |
| --- | --- |
| MOVE·STOP·RESET을 실제 Broker로 각각 전송 | 대역 수신 Payload·Topic·cmdId 일치 |
| 불량 ID/명령/param/형식, 발행 실패 대역 | 거부와 전송 실패 구분, 허위 동작 성공 없음 |

## 제외 범위

ACK 요청 매핑(COM05-B), 실제 Core 생성기·AMR 동작, 자동 재전송.

## 산출물과 완료 범위

- 해당 변경·필요한 시험·실행 안내와 코드 저장소의 생성 예정 `evidence/COM-05/<실행ID>/` 기록. 코드/계약 버전·환경·입력·예상·실제·판정·로그를 연결한다. 문서 결정 작업은 결정 근거를 남기며 제품 시험으로 집계하지 않는다.
- COM-05 송신과 COM-01 양방향 중 송신 근거를 마련한다.
- 현재 상태·다음 작업은 Issue 목록에서 관리한다. 기존 `C:\practice`의 소스·과거 통과 기록을 새 실습의 완료 근거로 복사하지 않는다.

