# [COM-01] 여러 AMR의 네 메시지 유형 구독·전달

## 로컬 관리 정보

- 초안 ID: COM01-B / 작성일: 2026-10-07 / 수정일: 2026-10-19 / 버전: v0.4
- 문서 작성: 완료 / 내용 검토: Codex가 현재 코드·명세·선행 반영과 대조 / 사용자 요청 이력: #21 구현·검증·커밋·PR·리뷰; 이번에는 COM01-C 게시 / 구현: 로컬 완료 / 실행 검증: 자동 529건·실제 MQTT 두 세션 통과
- GitHub Issue: [#21 — [COM-01] 여러 AMR의 네 메시지 유형 구독·전달](https://github.com/inhhlee/amr-control-system-demo/issues/21) / closed / 2026-10-19 게시·종료. [PR #22](https://github.com/inhhlee/amr-control-system-demo/pull/22) develop 병합.
- 중복 확인: 게시 직전 GitHub에서 COM01-B 및 유형 관련 Issue를 검색하고 같은 작업이 없음을 확인했다. 실제 생성 번호는 #21이며 파일명 19는 정렬용이다.
- 확인 코드: 게시 커밋 7445fdcc80760d556edc911927693c6e78ec1f3e / develop 병합 b8af05738d08b76db84f2b020789539c8062ad07. 2026-10-19 PR #22 병합·#21 종료를 GitHub에서 확인했다. 이번 확인에서 병합·제품 재시험을 수행하지 않았다.
- v0.4 현재 상태: COM01-B [#21](https://github.com/inhhlee/amr-control-system-demo/issues/21)은 [PR #22](https://github.com/inhhlee/amr-control-system-demo/pull/22)로 develop에 병합됐고 Issue 종료를 확인했다. 기존 자동시험 529건·실제 MQTT 근거는 PR에 연결돼 있다. 다음 COM01-C [#23](https://github.com/inhhlee/amr-control-system-demo/issues/23)은 게시 완료·구현 미착수·실행 미검증이다. 아래 v0.3 문단과 게시 본문은 당시 기록으로 보존한다.
- 원본 기준: [과제계획](../과제계획.md#solo-task1) v0.26, [전체일정](../../전체일정.md#solo-demo) v0.19, [Issue 목록](README.md#solo-issues) v0.17. 게시 결과에 맞춘 현재 상태 갱신은 각 원본 이력 참조.
- v0.1의 제품 소스 없음·선행 초안 링크를 실제 파일·#18·PR #20으로 교체했다. Topic 대상과 id 없는 ACK 모델을 구분하고 수신자 오류·네 필터 승인/정리·예정 시험을 구체화했다.
- GitHub 게시 본문은 아래 목적부터 사용한다. 로컬 관리 정보와 로컬 파일 링크는 게시하지 않는다.

- v0.3 로컬 진행 기록: COM01-B #21 구현·로컬 검증 완료. 빌드 경고·오류 0, 자동시험 529건 통과, 실제 MQTT 정상 20건 전달·불량 4건 거부·구독 밖 4건 미수신, 두 세션 CTRL_C_EVENT 종료 0을 확인했다. 커밋·GitHub 결과 게시·PR·리뷰·병합은 대기다. [COM01-B 실행 근거](<C:/amr-control-system-demo/evidence/COM-01/20261019-multi-mqtt-03/README.md>) 아래 본문은 게시 당시 계약·예정 시험을 보존한다. GitHub 체크리스트는 이번에 변경하지 않았다.

## 목적

과제1 COM01-B에서 실제 MQTT로 받은 Heartbeat·Telemetry·Alarm·ACK를 기존 검사기에 연결하고, 정상 데이터만 **대상 AMR ID·유형·모델·수신 시각**과 함께 시험 수신자(Core 대역)에 전달한다.

이번 단계는 다중 Topic 수신·유형별 분기 확인이다. AMR별 큐·병렬 처리·과부하 제어와 실제 Core 업무 처리는 포함하지 않는다.

## 근거와 선행 조건

- 기능명세 v0.7 COM-01, 요구사항정의 v0.5 R-04, 공통규칙 v0.4 C-01·C-03·C-05·C-06·C-10, 공통데이터명세 v0.4 3절·수신 계약 v3, 검토 및 결정사항 v0.5 D-03·D-04를 적용한다. 운영 QoS·외부 장비 호환성은 확정하지 않는다.
- 선행 [#18 — Telemetry·Alarm·ACK 검사 확장](https://github.com/inhhlee/amr-control-system-demo/issues/18)은 [PR #20](https://github.com/inhhlee/amr-control-system-demo/pull/20)으로 develop에 병합됐다. 확인한 병합 커밋은 `e40e2b4a72f5901a32e723a04661482f51f23f9a`이며 #18은 종료됐다. Heartbeat 수신·검사 선행은 #15·#17이다.
- 착수 기준 코드는 위 develop 커밋의 [README](https://github.com/inhhlee/amr-control-system-demo/blob/e40e2b4a72f5901a32e723a04661482f51f23f9a/README.md)와 실제 파일이다. 구현 착수 시 최신 develop·기존 변경을 다시 대조한다.
- 초안 v0.1이 참조한 과제계획 v0.14·전체일정 v0.11과 이번 준비에서 읽은 원본 v0.26·v0.19는 버전이 다르다. 이번 작업의 목적·범위·선행 관계는 유지하고 현재 소스와 관찰 가능한 시험 조건을 구체화했다. 공유 URL 없는 문서는 문서명·버전·항목과 아래 필요한 계약으로 식별한다.
- 본문의 분기·수신자 전달·시험 세부사항은 기존 계약을 이번 실습에 적용하는 설계·시험 제안이다. 원문 PDF를 이번에 직접 재판독하거나 운영 정책을 새로 확정한 것으로 표시하지 않는다.

## 작업 범위와 대상

개발 위치는 `C:\amr-control-system-demo`다. 초안의 “제품 소스 없음”은 현재와 다르므로 다음 기존 구조를 보완한다.

| 대상 | 현재 상태·이번 작업 |
| --- | --- |
| `src/Amr.Communication/Mqtt/HeartbeatSubscription.cs` | 현재 `amr/+/heartbeat` 한 필터, Heartbeat 검사·콜백 전달·구독/해제 승인 확인이 구현되어 있다. 이를 기준으로 네 유형 구독·분기 경계를 설계한다. 새 파일명·클래스명은 구현 전 설계에서 결정한다. |
| `src/Amr.Communication/Mqtt/MqttConnection.cs`, `MqttConnectionSettings.cs` | 기존 접속·명시적 해제·Client 소유 관계를 재사용한다. |
| `src/Amr.Communication/Validation/{Common,Heartbeat,Telemetry,Alarm,Ack}/`·`Models/` | 네 유형 검사기·결과·모델이 이미 존재한다. 검사 규칙을 다시 구현하지 않고 연결한다. 필요한 연결 보완은 기존 계약·회귀 결과를 유지한다. |
| `src/Amr.Communication.Console/Program.cs` | 현재 Heartbeat 시험 수신자를 여러 AMR·네 유형의 전달 결과를 관찰하는 Core 대역으로 확장한다. |
| `tests/Amr.Communication.Tests/` | 기존 463건 회귀와 별도로 유형 분기·대상 식별·거부·수신자 오류·구독 정리 시험을 추가한다. |
| `README.md`, 최소 JSON 시험 입력, `evidence/COM-01/<새 실행ID>/` | 실제 MQTT 재현 절차와 입력·예상·실제 결과·미검증 범위를 연결한다. |

### 수신·전달 계약

1. 정확한 네 필터 `amr/+/heartbeat`, `amr/+/telemetry`, `amr/+/alarm`, `amr/+/ack`를 구독한다. Topic은 대소문자를 구분하는 `amr/{amrId}/{kind}` 세 구간이다. 지원하지 않는 유형·경로는 정상 수신자에 전달하지 않는다.
2. Topic의 종류에 맞는 기존 Validator에 **전체 원본 Payload 바이트**를 전달한다. 진단 미리보기·대체문자로 디코딩한 문자열을 입력으로 쓰지 않는다. 크기·UTF-8·JSON·필드·ID 검사는 COM04-A·B와 같은 경계다.
3. 정상 데이터만 Topic에서 식별한 대상 AMR ID, 유형, 해당 모델, MQTT 콜백 진입 시 확보한 UTC 수신 시각과 함께 전달한다. 수신 시각과 Payload ts는 구분하고 재생성·단위 변환하지 않는다.
4. **ACK의 id 생략:** 전달 대상은 검사된 Topic ID로 구분하되 `AckMessage.Id == null`은 그대로 보존한다. Topic ID를 Payload의 생략값에 덮어쓰지 않는다. 존재하는 id의 일치 검사와 SUCCESS/FAILURE·reason 보존은 기존 AckValidator를 따른다.
5. 유효한 수신 이벤트 한 건에는 정상 수신자를 한 번 호출한다. 중복 이벤트 연결·기존 Heartbeat 경로와 새 경로의 중복 전달을 피한다. 이는 로컬 처리 기준이며 QoS 0에서 네트워크 무손실·exactly-once를 보장한다는 의미가 아니다.
6. 검사 실패는 Code·Field·Reason으로 기록하고 정상 수신자는 호출하지 않는다. 거부 뒤 정상 입력은 계속 처리한다. 수신자 자체의 예외는 검사 실패와 구분해 기록하며 자동 재전달하지 않는다. 오류 로그에 원문 Payload·예외 메시지의 입력 내용을 남기지 않는다.
7. 이번 단계는 짧은 동기 Core 대역을 사용한다. 콜백에서 async void나 구독·정리 메서드 재호출을 하지 않는 기존 규칙을 유지한다. 진단·거부·수신자 오류 보고 콜백의 예외 경계를 명시하고, 느린 수신자에 대한 다른 AMR의 독립성은 COM01-C에서 확인한다.

### 구독 수명주기와 개발 시험 설정

- 기존 접속 완료 → 네 필터의 구독 승인 확인 → 시험 발행 → 수신 차단·구독 해제·이벤트 제거 → 연결 해제·Client 정리 순서를 유지한다. 구독 객체와 연결 소유자의 역할을 구분한다.
- 네 필터 전부의 승인 결과를 확인하기 전에는 준비 완료로 표시하지 않는다. 일부 거부·취소·구독 실패에서는 정상 전달을 시작하지 않고 이미 승인된 구독과 이벤트가 남지 않도록 정리한다. 이 경계는 Fake 시험으로 재현한다.
- 기존 MQTT 5·실행별 Client ID·Clean Start/Session Expiry 0과 개발 Broker 설정을 재사용한다. 호스트 주소는 `127.0.0.1:1884`, 컨테이너 내부 CLI 주소는 `1883`이다. 현재 Broker 가동 여부는 이번 문서 작업에서 확인하지 않았다.
- 이번 네 유형 연결 시험의 제안 설정은 발행·구독 **QoS 0**, 발행 **Retain=false**다. 구독 시 보관 메시지 재전송을 요청하지 않는 기존 `DoNotSendOnSubscribe` 설정을 유지한다. 이는 기존 Heartbeat 실습 설정을 확장한 시험 기준이며 운영 전달 보장 정책이 아니다.
- 기존 접속·구독·해제의 제한 시간과 Ctrl+C 정리 동작을 유지한다. 새 Heartbeat Timeout·자동 재접속·재구독 기능은 추가하지 않는다.

## 진행 순서

1. 선행 develop 코드와 이번 Issue를 대조하고, AMR_001·AMR_002의 정상 입력 및 예상 전달 결과부터 정리한다.
2. 네 필터 구독, 유형 분기, 정상 전달 정보(특히 id 없는 ACK), 오류 경계·정리 방법을 작은 단위로 설계한다. 새 범용 프레임워크는 만들지 않는다.
3. MQTT 없는 Fake·단위시험으로 대상/유형 분기, 오류 뒤 정상 입력, 일부 구독 거부·취소·해제 경계를 확인한다.
4. 실제 Broker에서 두 AMR의 네 유형을 번갈아 발행하고 정상 전달·필드 보존·거부·Ctrl+C 종료·새 세션 수신을 확인한다.
5. 변경과 실행 근거를 기록하고 같은 Issue의 feature 브랜치·develop 대상 PR로 검토한다. 구현은 별도 사용자 요청 후 착수한다.

## 완료조건

- [ ] AMR_001·AMR_002의 네 유형이 실제 MQTT를 거쳐 정확한 대상·유형·모델·수신 시각으로 전달되며 한 수신 이벤트의 중복 전달이 없다.
- [ ] id 없는 ACK도 Topic으로 대상이 구분되며 모델의 id 생략·선택 reason·유효 SUCCESS/FAILURE 값이 보존된다.
- [ ] 검사 실패·미지원 Topic/유형은 정상 수신자에게 전달되지 않고 다음 정상 입력은 처리된다. 수신자 처리 오류는 입력 오류와 구분된다.
- [ ] 네 필터 승인 확인, 일부 거부·취소 시 정리, 기존 접속·Ctrl+C 종료·구독/이벤트 정리와 새 세션 수신이 유지된다.
- [ ] 기존 네 유형 검사·Heartbeat 회귀 결과가 유지된다.
- [ ] 실제 변경·확인 결과·미검증 범위를 README와 Issue·PR에 연결한다.

## 시험 방법과 예상 결과

아래는 **예정 시험**이며 이번 초안 보완·게시에서 실행한 결과가 아니다. AMR 두 대는 대상 분리 확인을 위한 설명용 수량이다.

| 입력·조건 | 예상 결과 | 확인 방식 |
| --- | --- | --- |
| 두 AMR × Heartbeat·Telemetry·Alarm·ACK 정상 입력, 최소 8건을 교차 발행 | 대상·유형·모델 필드가 섞이지 않고 기록됨. 제어된 정상 실행에서 발행/수신/전달 수량을 각각 대조 | Fake 및 실제 MQTT |
| 각 AMR의 ACK id 생략/포함 × reason 생략/포함 × SUCCESS/FAILURE | Topic 대상은 유지, 선택 필드·결과 원형 보존, FAILURE도 정상 전달 | 자동시험으로 조합 확인, 실제 MQTT에 id 없는 FAILURE 포함 |
| Topic·Payload ID 불일치, 필수 누락·불량 JSON/UTF-8 → 정상 입력 | 불량은 정상 전달 0회, Code·Field·Reason 기록 후 정상 전달 계속 | 자동시험 및 대표 사례 실제 MQTT |
| 지원하지 않는 command/unknown, 잘못된 대소문자·추가 경로 | 정상 수신자에 전달되지 않음. Broker 필터로 미수신한 경우와 앱에서 거부한 경우를 구분 | Fake 및 실제 MQTT |
| 정상 모델을 받은 시험 수신자가 예외 발생 → 다음 정상 입력 | 입력 오류로 바꾸지 않고 처리 오류 기록, 같은 모델 재전달 없이 다음 입력 처리 | Fake |
| 구독 4개 중 일부 거부, 구독 취소, 해제 실패 | 준비 완료 오표시·부분 정상 전달 없음, 정리 시 이벤트·구독 잔존 없음 또는 연결 소유자의 세션 종료로 정리 확인 | Fake |
| 네 필터 승인 뒤 교차 수신 → Ctrl+C → 새 실행 | 구독/연결 정리, 종료 후 전달 없음, 새 Client 세션에서 다시 정상 수신 | Fake·실제 MQTT |
| 기존 검사기·Heartbeat·접속 회귀 | 기존 허용/거부·실패 결과 및 수명주기 유지 | 자동시험 |

정상 입력은 #17·#18의 수신 계약과 현재 검사기 시험 예제를 재사용하고, 두 대상 ID·유형별 구별값을 넣어 혼선을 관찰한다. 실제 발행은 구독 준비 완료 뒤 수행하며 새 실행 ID에 Topic·시험 입력·예상 수량·실제 수량·결과를 연결한다.

## 제외 범위

AMR별 비동기 큐·병렬 처리·느린 수신자 격리·과부하·큐 drain/drop 정책(COM01-C), 실제 Core 상태 전이·알람 업무 처리·명령 대조, Command 발행(COM05), AMR 생존/Timeout 판정, 자동 재접속·재구독, GUI·SQLite, 운영 QoS·재전달/중복 제거 보장, 새 AMR 등록 정책·허용 목록.

COM01-A에서 이월한 기존 시험 도구 보완도 별도 항목으로 유지한다. 이번에 새로 수집하는 증거는 기존 실행 파일을 덮어쓰지 않는다.

## 산출물과 완료 범위

- 필요한 코드·시험 입력·실행 안내와 `evidence/COM-01/<새 실행ID>/` 기록. 코드/계약 버전·환경·입력·예상·실제·판정·로그를 연결한다.
- 자동시험·실제 MQTT·Core 대역을 구분한다. 기존 COM04-B의 463건 통과는 검사기 선행 근거이며 이번 다중 Topic 전달·Broker 연동의 완료 근거로 대신 사용하지 않는다.
- 기존 `C:\practice` 소스·과거 통과 기록을 새 실습 완료 증거로 복사하지 않는다.
- 문서 보완·Issue 게시 완료와 구현·실행 검증 완료는 구분한다. COM-01 전체·과제1 전체 완료는 후속 작업과 별도 판정한다.

