# HERAXIS MVP

HERAXIS is a mobile-first maternal and women’s health support platform for pregnant women, teenage mothers, and new mothers.

## Stack
- React + TypeScript
- Tailwind CSS
- Vite
- Local/mock data (no backend yet)

## MVP feature set
- Supportive onboarding (maternal stage, language, voice, due date/baby age, support needs)
- Home dashboard with maternal tip, mood check-in, baby tracker summary, emergency shortcut, nutrition tip, reminders, and community preview
- Care Hub with:
  - Pregnancy Support Hub
  - New Mum Guidance
  - Postpartum Recovery
  - Daily Nutrition for mother and child
  - Warning signs and urgent-care guidance
- Community forum with category filtering and anonymous posting toggle
- Baby Tracker with week-based growth updates and fruit-size comparison cards
- Profile with accessibility settings (large text, high contrast, voice support)
- Fixed bottom navigation: Home, Care Hub, Community, Baby Tracker, Profile

## Project structure

```text
src/
  components/
    BottomNav.tsx
    Card.tsx
    ReminderCard.tsx
    VoiceButton.tsx
  data/
    mockData.ts          # all local sample maternal, nutrition, baby-tracker, and community content
  pages/
    OnboardingPage.tsx
    HomePage.tsx
    CarePage.tsx
    CommunityPage.tsx
    BabyTrackerPage.tsx
    ProfilePage.tsx
  types/
    index.ts
  App.tsx
  main.tsx
  index.css
```

## Mock data location
All mock/local content is stored in:
- `src/data/mockData.ts`

## Future integrations
- Replace `mockData.ts` with API calls/services.
- Add authenticated profiles and cloud sync for settings.
- Add multilingual voice packs and richer assistive accessibility options.
- Add real clinic/hospital lookup and emergency number integrations.
- Add moderated backend community posting.

## Run locally

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```
