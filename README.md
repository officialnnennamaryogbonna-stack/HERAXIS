# HERAXIS MVP

HERAXIS is a mobile-first maternal and women’s health support platform for pregnant women, teenage mothers, and new mothers.

## Stack
- React + TypeScript
- Tailwind CSS
- Vite
- Local/mock data (no backend yet)

## MVP feature set
- Onboarding with stage, language, voice, pregnancy week, and support preferences
- Interactive Home dashboard with mood save, reminder completion, tracker + community shortcuts
- Care Hub with trimester tabs, expandable guidance sections, new mum bookmarks, postpartum checklist, and nutrition filters
- Community forum with post creation, category filtering, likes, and open-thread modal
- Baby Tracker with week selector, progress bar, fruit-size milestones, and detail cards
- Profile with accessibility toggles (large text, high contrast, simplified view, voice)
- Fixed bottom navigation: Home, Care Hub, Community, Baby Tracker, Profile
- Toast feedback messages, loading states, and empty states

## Project structure

```text
src/
  components/
    BottomNav.tsx
    Card.tsx
    ReminderCard.tsx
    VoiceButton.tsx
  data/
    mockData.ts
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

## Placeholder actions still present
- Community thread comments are currently read-only in the modal (marked “coming soon”).
- Emergency flow uses MVP feedback banner only (not connected to telephony/API).

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
