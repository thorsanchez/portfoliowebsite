# Vefforritun 2 - Einstaklingsverkefni

## Lýsing á verkefni

Þetta verkefni er portfolio sem sýnir GitHub verkefni með því að sækja þau sjálfkrafa í gegnum GitHub API. Verkefnið samanstendur af:

- **Bakenda**: Node.js með Express sem sækir verkefni frá GitHub API.
- **Framenda**: React með Vite sem birtir verkefni.
- **Hýsing**: Verkefnið verður sett upp með CI/CD.

## Grunn að skýrslu

### Inngangur

Ég ákvað að búa til persónulega portfolio vefsíðu sem sýnir verkefnin mín, hæfni og áhugamál. Verkefnið tengist vefforritun og útfærslu á bakenda og framenda. Markmiðið er að hafa verkefnið dýnamískt þannig að GitHub verkefnin mín birtist sjálfkrafa, án þess að ég þurfi að uppfæra þau handvirkt.

### Útfærsla

Verkefnið mun uppfylla eftirfarandi skilyrði:

- Bakendi útfærður með **Node.js og Express** sem þjónustar REST API.
- Framendi útfærður með **React og Vite**.
- GitHub API verður notað til að sækja verkefnið.
- Verkefnið verður hýst á **Vercel (framendi) og Render/Heroku (bakendi)** með CI/CD fyrir sjálfvirka dreifingu.

### Tækni

Verkefnið notar eftirfarandi tækni:

- **React með Vite** fyrir framenda.
- **Node.js og Express** fyrir bakenda.
- **GitHub API** fyrir verkefnagögn.
- **Redis (valkvætt)** fyrir skyndiminni.
- **CI/CD með GitHub Actions** fyrir sjálfvirka uppsetningu.

## Skilyrði sem verða útfærð

- **Bakenda útfærsla** (Node.js með Express fyrir API).
- **Vefþjónusta (REST API)** til að sækja GitHub verkefni.
- **Framenda útfærsla** (React með Vite til að birta verkefni).

## Verkáætlun (Vikur 6–13)

| **Vika**     | **Verkefni**                                                                              |
| ------------ | ----------------------------------------------------------------------------------------- |
| **Vika 6-7** | Setja upp verkefnið (React með Vite, Node.js með Express). Og byrja að tengja GitHub API. |
| **Vika 8-9** | Útfæra bakenda API sem sækir og þjónustar GitHub verkefni. Prófanir á API svörum.         |
| **Vika 10**  | Byggja framenda fyrir birtingu verkefna.                                                  |
| **Vika 11**  | Fullklára UI/UX.                                                                          |
| **Vika 12**  | Hýsa bakenda (Render/Heroku) og framenda (Vercel/Netlify). Setja upp CI/CD.               |
| **Vika 13**  | Skrifa lokaskýrslu. Fínpússa og prófa fyrir skil.                                         |

## Hýsingar- og dreifingarplan

- **Bakendi:** Hýstur á **Render** eða **Heroku**.
- **Framendi:** Hýstur á **Vercel** eða **Netlify**.
- **CI/CD Uppsetning:** GitHub Actions fyrir sjálfvirka dreifingu.

## Matskvarði

| **Flokkur**                                                      | **Hlutfall (%)** |
| ---------------------------------------------------------------- | ---------------- |
| **Bakenda API (Node.js + Express) sem sækir GitHub verkefni**    | 30%              |
| **Framendi (React + Vite) sem birtir GitHub verkefni dýnamískt** | 30%              |
| **Hýsing & Dreifing (CI/CD + hýsing á Vercel/Heroku)**           | 20%              |
| **Gæði kóða, skjölun og skýrsla**                                | 20%              |

## Kynning

Ég mun kynna verkefnið.

---

**Tilgangur verkefnisins er að gera persónulega portfolio-vefsíðu sem nýtir dýnamíska gagnaöflun, REST API, og sjálfvirka dreifingu til að tryggja stöðuga uppfærslu og aðgengi að verkefnum mínum.**
