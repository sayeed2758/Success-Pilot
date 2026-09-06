# StudyX — Phase 1

A clean Expo + React Native foundation for an education/course application inspired by the observed information architecture of the supplied APK, but implemented from scratch with original code and branding.

## Phase 1 scope

- Home dashboard
- Course catalogue
- Course detail page
- Subject sections
- Lecture list
- Video player
- Bottom tab navigation
- Responsive mobile UI
- Local demo data only (no backend yet)

## Stack

- Expo SDK 54
- React Native + TypeScript
- React Navigation
- expo-video

## Run locally

```bash
npm install
npx expo start
```

Then open with Expo Go / Android emulator.

## Build Android later

Development:

```bash
npx expo start --android
```

Cloud APK/AAB builds will be configured in the production phase with EAS Build.

## GitHub

GitHub is the source-code repository. Push this folder to a private or public repository. GitHub does not itself host the Android APK runtime; it stores the project and can run CI/CD workflows. EAS Build will create the Android binary from the repository.

## Phase 2 planned

- Firebase Authentication
- Firestore-driven courses/subjects/lectures
- PDF/resource model
- Admin panel connection
