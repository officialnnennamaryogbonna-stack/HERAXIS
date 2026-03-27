# HERAXIS MVP

HERAXIS is a mobile-first maternal and women’s health support platform for pregnant women, teenage mothers, and new mothers.

## Stack
- React + TypeScript
- Tailwind CSS
- Vite
- Local/mock data (no backend yet)

## Features in this MVP
- Onboarding flow (maternal stage, language, voice toggle, due date/baby age, support needs)
- Home dashboard with maternal tip, reminders, mood check-in, quick actions, and community highlights
- Care section with antenatal + postnatal guidance cards
- Mental health support via daily mood check-in and calming affirmations
- Emergency support page with one-tap help CTA, quick-call placeholders, and danger signs
- Voice accessibility through text-to-speech prompt buttons (Web Speech API)
- Safe community feed with supportive categories and moderated tone
- Profile page for preferences and onboarding reset
- Fixed bottom navigation with safe scrolling above nav

## Project structure

```text
src/
  components/
    BottomNav.tsx      # fixed mobile tab navigation
    Card.tsx           # reusable card wrapper
    ReminderCard.tsx   # reusable reminder tile
    VoiceButton.tsx    # text-to-speech helper button
  data/
    mockData.ts        # mock maternal tips, reminders, posts, danger signs
  pages/
    OnboardingPage.tsx # first-run onboarding
    HomePage.tsx       # dashboard
    CarePage.tsx       # antenatal and postnatal guidance
    CommunityPage.tsx  # safe community space
    EmergencyPage.tsx  # urgent support actions and danger signs
    ProfilePage.tsx    # maternal settings and preferences
  types/
    index.ts           # shared interfaces and domain types
  App.tsx              # app shell, tab routing, profile persistence
  main.tsx             # app bootstrap
  index.css            # Tailwind setup + base focus styles
```

## Future integration points
- `src/data/mockData.ts` can be replaced with API services (REST/GraphQL) and query hooks.
- `VoiceButton.tsx` can integrate multilingual TTS providers or offline voice packs.
- `EmergencyPage.tsx` can connect to geolocation, health facility APIs, and local emergency numbers.
- `CommunityPage.tsx` can connect to moderated backend posting + abuse detection.
- `App.tsx` localStorage profile can be upgraded to authenticated user profiles and cloud sync.
- Mood check-in cards can feed optional AI-powered wellbeing suggestions (non-diagnostic, compassionate language).

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```
