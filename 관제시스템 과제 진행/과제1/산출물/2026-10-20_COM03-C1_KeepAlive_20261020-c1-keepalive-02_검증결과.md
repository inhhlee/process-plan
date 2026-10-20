# 검증결과 COM03-C1 KeepAlive 20261020-c1-keepalive-02

- 작성자·실행자: Codex / 2026-10-20
- 근거 구분: 실제 격리 MQTT 시험. 상세 실행 결과·로그는 [코드 저장소 검증결과](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/README.md)에서 관리한다.

## 1. 목표와 적용 기준

- 과제1 / COM-03 / [#6 C1](../이슈/04_COM-03_연결유지와_끊김감지.md#com03-c1). 사용자 요청으로 C1 범위를 재개했다.
- 착수 기준: 과제계획 v0.42, 기능명세 v0.7 COM-03, COM03-C 안내 v0.6, 공통규칙 C-09. 결과는 과제계획 v0.43·담당 안내 v0.7에 연결한다.
- 성공 조건: KeepAlive 5초의 2배 이상 연결 유지, 같은 Client ID의 PING 교환, 업무 PUBLISH 0건, 정상 종료·시험 자원 정리. 실행 전 관찰 12초·PING 최소 2쌍·종료 상한 5초를 정했다.
- C2~C4, AMR Heartbeat 감시·자동 재접속·장시간 부하를 완료로 판정하지 않는다. 별도 spec_revision 추적기는 없어 Git 기준과 실행 ID·소스 해시로 식별한다.

## 2. 실행 환경

| 항목 | 실제 값 |
| --- | --- |
| 실행 ID·시각 | 20261020-c1-keepalive-02 / 2026-10-20 09:18:58.211~09:19:15.330 KST |
| 코드 | C:/amr-control-system-demo / feature/6-mqtt-keepalive / develop d777ab7 기준. 제품 소스 변경 없음, 도구·증거·README 미커밋 |
| 환경·Broker | Windows 10.0.26200 / SDK 10.0.401 / MQTTnet 5.2.0.1603 / Docker 29.7.2 / Mosquitto 2.1.2 |
| 격리 구성 | 별도 컨테이너 amr-c1-20261020-c1-keepalive-02, 127.0.0.1:64786, 실행별 설정 읽기 전용 mount, persistence false |
| 입력·계약 | MQTT 5·Clean Start·Session Expiry 0·KeepAlive 5초. 기존 네 Topic QoS 0 구독, 업무 발행·Payload·Retain 입력 없음 |
| 구성요소·증거 | 실제 제품 콘솔·실제 Broker, MQTT 대역 없음. [환경](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/environment.json)·[소스 대조](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/source-comparison.json) |

## 3. 입력과 절차

`tests/manual/COM03-C/Verify-KeepAlive.ps1 -RunId <새-실행ID>`를 PowerShell 7에서 실행했다. 도구가 콘솔 프로젝트 빌드 → 격리 Broker 기동 → 실제 접속·구독 → 업무 메시지 없이 12초 관찰 → 시험 프로세스에만 CTRL_C_EVENT → 로그 대조 → 시험 컨테이너 정리를 수행했다. 실제 명령·사전 조건은 상세 검증결과에 기록했다.

## 4. 실제 결과와 판정

| 시험 | 실제 결과 | 판정·직접 근거 |
| --- | --- | --- |
| 연결 유지·PING | 09:19:01.385~09:19:13.476 KST, 12.0899808초. 동일 Client ID의 PINGREQ/PINGRESP 2쌍, PUBLISH 0건 | 통과 — [PING 원본](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/ping.log)·[전체 판정](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/verification.json) |
| 종료·정리 | Ctrl+C 신호 후 약 0.039초에 종료 확인, 종료 0·해제·Dispose. 시험 컨테이너 삭제, 기존 3개 상태 보존 | 통과 — [세션](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/session.json)·[정리](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-02/cleanup.json) |
| 빌드·코드 대조 | 경고·오류 0, 기록한 40개 소스·프로젝트·시험 도구 해시 불일치 0 | 통과 — build.log·source-comparison.json. 이번 자동 단위시험 실행 없음 |

## 5. 문제와 후속 조치

- [실행 01](https://github.com/inhhlee/amr-control-system-demo/blob/20950a2132bd39917013418928412772ea701559/evidence/COM-03/20261020-c1-keepalive-01/README.md)은 시험 도구의 빈 출력 처리 오류로 실패했다. null 확인 수정 후 실행 02에서 전체 C1을 재시험했으며 실패 원본을 보존했다.
- 정리 중 Broker 중지는 콘솔 연결 해제 이후다. 연결된 Broker 종료 감지(C2)의 근거로 사용하지 않는다.
- Docker Desktop을 기동했고 엔진은 기동 상태로 남겼다. 기존 컨테이너·공유 Broker 설정·데이터는 변경하지 않았다. Seq는 시험 자식 프로세스에서만 비활성화했다.
- 다음은 C2 단절 사유 기록·실제 Broker 종료 감지이며 아직 수행하지 않았다. C3·C4도 미검증 범위를 유지한다.

## 6. 종합 결과

- C1 실제 연결 유지 한 시나리오 통과. #6과 과제1 전체는 진행 중이다.
- 기존 자동시험 758건을 새로 수행한 결과로 집계하지 않는다. 커밋·푸시·PR 생성·Issue 수정/종료도 수행하지 않았다.
- [10/20 일일업무](../../../일일업무/2026-10-20.md)·[과제계획](../과제계획.md#com03c1-work)·[#6 담당 문서](../이슈/04_COM-03_연결유지와_끊김감지.md)에 연결한다.
