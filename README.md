# RE - PLAY

> 커밋 컨벤션

- Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
- Comment : 필요한 주석 추가 및 변경
- Design : CSS 등 사용자 UI 디자인 변경
- Docs : 문서 수정
- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
- Remove : 파일을 삭제하는 작업만 수행한 경우
- Refactor : 코드 리팩토링
- Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
- Test : 테스트 코드, 리팩토링 테스트 코드 추가
- !BREAKING CHANGE : 커다란 API 변경의 경우
- !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

> PR 컨벤션

- PR 제목
  - 1줄을 초과하지 않도록 작성
  - fix, Test 같은 임시 브랜치의 경우 브랜치명 생략하고 제목만 작성

```
티켓번호: 작업내용
TASK-01: 프로젝트 초기 설정
```

- PR 템플릿 양식
  - 양식에 맞춰 작성
  - PR 템플릿에서 사용하지 않는 부분은 제거 (ex, 스크린샷, 설명주석)

```
## ✏️ 작업 내용 요약

> 이번 PR에서 작업한 내용을 요약해주세요

-

## 💬 리뷰 요구사항 (선택)

> 리뷰어가 특별히 봐주었으면 하는 부분이 있다면 작성해주세요
> ex) 메서드 XXX의 이름을 더 잘 짓고 싶은데 혹시 좋은 명칭이 있을까요?

-

## 🏷️ 연관된 JIRA 번호

>

## 📷 스크린샷 (선택)
```
