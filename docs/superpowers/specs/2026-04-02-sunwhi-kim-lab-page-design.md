# Sunwhi Kim Lab Page - Design Spec

## Overview
Neural Systems Laboratory (김선휘 교수) 전용 학술 연구실 웹 페이지.
기존 index.html(바이오헬스케어학과 페이지)은 백업 후, 새 index.html로 교체.

## Color Palette
- Background: #ffffff (white)
- Secondary BG: #f7f9fc (light blue-gray)
- Text: #2d3748 (dark gray)
- Accent: #3182ce (blue)
- Accent hover: #2b6cb0
- Border/divider: #e2e8f0 (light gray)
- Tag bg: #ebf4ff (light blue)

## Typography
- Google Fonts: Inter (영문), Noto Sans KR (한글)
- 외부 CSS/JS 의존 없음 (self-contained HTML+CSS)

## Page Structure (single-page, section-based)

### 1. Header/Nav
- 고정 상단 네비게이션 바
- 이름: "Sunwhi Kim Lab" 로고 텍스트
- 섹션 앵커 링크: About | Research | Publications | Patents | Contact

### 2. Hero Section
- 이름: 김선휘 / Sunwhi Kim, Ph.D.
- 직위: 교수, 바이오헬스케어학과, 화성의과학대학교
- 전공: 생물심리학, 뇌신경생물학
- Google Scholar 링크 버튼
- 이메일: skim@hsmu.ac.kr

### 3. About Section
- 프로필 (학력 + 경력)
  - University of Tennessee Health Science Center 박사후 연구원
  - 고려대학교 심리학과 박사
  - 고려대학교 정보통신대학 뇌인지과학 연계전공 학사
  - 고려대학교 심리학과 학사

### 4. Research Section
- 연구실 소개문 (Neural Systems Laboratory)
- 연구실 이미지 (기존 Image8.png 활용)
- 주요 연구분야 카드:
  - 동물행동실험
  - 뇌신경회로 매핑
  - 전기생리학 / 칼슘 이미징
  - 자폐스펙트럼장애 / 공포 및 방어행동
  - 생성형 AI 이미지/영상 판별
  - 인간-AI 상호작용 및 인지적 인간요인 연구

### 5. Research Highlight
- 최신 연구 (2026): Human Factors in Detecting AI-Generated Portraits
- 별도 강조 카드 + arXiv 링크
- 실험 링크 포함

### 6. Publications Section
- 연도 역순 정렬
- 주저자 / 공저자 뱃지 구분
- 저널 표지 선정 등 특이사항 표시
- 논문 목록:
  - (2026) Human Factors in Detecting AI-Generated Portraits — arXiv
  - (2025) Endothelial SHANK3... — Nature Communications
  - (2023) The Central Amygdala... — Frontiers in Behavioral Neuroscience
  - (2022) Neural Circuit Pathology... — Cell Reports (표지 선정)
  - (2022) Simultaneous Analysis... — STAR Protocols
  - (2022) Neural Circuit-Specific Gene Manipulation... — STAR Protocols
  - (2020) Dysregulation of the Synaptic Cytoskeleton... — Cell Reports
  - (2018) Sensory and Motivational Modulation... — J Neurosci Methods
  - (2018) Chasing as a Model of Psychogenic Stress... — Stress

### 7. Patents Section
- 소프트웨어/특허 등록 목록:
  - (2016) 소동물 방어반응 계측 및 분석 프로그램
  - (2015) 액티몬(ActiMon): 24시간 소동물 활동 모니터링 시스템
  - (2015) 연속반응속도검사(Serial Reaction Time Task)

### 8. Contact / Footer
- 연구실 전화: 031-369-9100
- 이메일: skim@hsmu.ac.kr
- Google Scholar 링크
- 소속: 화성의과학대학교 바이오헬스케어학과

## Responsive
- 모바일 대응 (max-width breakpoints)
- 카드 그리드 → 단일 컬럼 전환

## Deployment
- 기존 index.html → index_biohealthcare_backup.html 로 백업
- 새 index.html 생성
- git init → commit → push (GitHub Pages 배포)
