# Cabañasonline

Proyecto base Ionic Angular + Capacitor con CI/CD (GitHub Actions).

## Scripts
- `npm run build:web` — build para web
- `npm run build:android` — prepara Android (capacitor + gradle)
- `npm run build:ios` — prepara iOS (capacitor + xcodebuild / fastlane)
- `npm test` — corre tests

## Pasos rápidos
1. `npm install`
2. `ionic serve` (desarrollo)
3. `npm run build:web` (producción web)

Configura secrets en GitHub (FIREBASE_TOKEN, ANDROID_KEYSTORE_BASE64, etc.) para CI/CD.
