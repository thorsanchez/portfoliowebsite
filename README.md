# Vefforritun 2 - Einstaklingsverkefni Skýrsla
## Inngangur
Verkefnið sem ég hef útfært er persónuleg portfolio vefsíða sem sækir github verkefni mín sjálfkrafa í gegnum github API. Hugmyndin kom þegar ég var að velta fyrir mér hvernig ég gæti birt ferilskrána mína og github verkefnin mín á einfaldan hátt sem myndi sjálfkrafa uppfærast þegar ég bæti við nýjum verkefnum á github. 
## Útfærsla
Ég valdi að uppfylla eftirfarandi skilyrði úr verkefnalýsingunni:
- Framendi útfærður með framenda framework - Ég notaði React til að búa til viðmótið ásamt Vite sem þróunarumhverfi.
- Verkefni sett upp í hýsingu með CI/CD ferlum - Vefsíðan er hýst á Vercel með sjálfvirkum uppfærslum þegar breytingar eru gerðar á GitHub.
- Vefþjónusta (REST API) - ég tengi GitHub REST API í gegnum fetching beint frá framendanum til að sækja verkefnin mín.


**Uppbygging verkefnisins**
- Verkefnið skiptist í eftirfarandi hluta:
Framendi (React með Vite)
- Síður: About, CV og Verkefni
- Þema: Light/Dark mode
- Viðmót: Responsive design með sidebar sem breytist í hamburger valmynd á minni skjám

  
**API Tenging**
- Bein tenging við Github REST API frá framendanum
- Fetch API notað til að sækja og birta öll verkefni sem ég hef starred úr GitHub reikningnum mínum
Á síðunni er:
- Hreyfanleiki: Vefsíðan virkar jafnt á tölvum, spjaldtölvum og símum
- Þema: Hægt er að skipta á milli ljóst og dökkt þema
- Gagnvirkt: Verkefni eru sótt sjálfkrafa frá GitHub
- Sidebar/Hamburger valmynd: Aðlagar sig að skjástærð

  
## Tækni

**Framendi**
- React: Notað fyrir uppbyggingu viðmóts og component-based hönnun
- Vite: Build tool sem er hraðvirkt og þægilegt
- CSS: Fyrir stílsetningu vefsíðunnar
- Context API: Fyrir þema light/dark mode
- React Scroll: Fyrir smoother navigation milli sections

  
**API tenging**
- Fetch API: Notað til að sækja gögn um GitHub verkefnin mín beint í vafra
- GitHub REST API: Veitir aðgang að öllum verkefnunum mínum sem ég bý til í verkefnahlutanum

  
**Hýsing og CI/CD**
- Vercel: Vefsíðuhýsing með sjálfvirkum uppfærslum

## Hvað gekk vel
Útfærsla á þemavirkni: Útfærslan á þemavirkninni með Context API gekk mjög vel .
GitHub API tenging: Ég fann mjög einfalt youtube video og eftir það tókst vel að tengja við GitHub API og sækja verkefnaupplýsingar 
## Hvað gekk illa
Eitt af því sem reyndist mér erfitt var að ákveða nákvæmlega hvernig ég vildi hafa verkefnið. Ég var með hugmynd um að búa til persónulega portfolio síðu, en átti erfitt með að sjá fyrir mér nákvæmlega hvernig hún ætti að líta út og virka. Þetta leiddi til þess að ég var stöðugt að breyta um skoðun og endurhugsa verkefnið.
Ég eyddi miklum tíma í að horfa á ólík YouTube myndbönd um portfolio síður, skoða ýmsar útfærslur og kanna mismunandi tækni. Í heildina breytti ég hvernig ég vildi útfæra verkefnið líklega um 20 sinnum, sem vissulega þýddi að ég fór í gegnum margar endurskrifanir á kóðanum.
Þannig næst myndi ég teikna hugmyndina t.d. í Figma svo ég væri með eitthvað plan, áður en ég byrja að forrita.

## Hvað var áhugavert
Það sem mér fannst mest áhugavert við verkefnið var að læra að tengja github API við vefsíðuna til að sækja verkefnin mín sjálfkrafa, í stað þess að þurfa að uppfæra síðuna sjálfur. Einnig var spennandi að útfæra ljóst og dökkt þema með react context API. Mér fannst líka gaman að rifja upp hvernig á að hanna vefsíðu sem virkar vel á öllum skjástærðum frá símum upp í tölvur.




