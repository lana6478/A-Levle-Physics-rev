# AQA A Level Physics – Revision

A free revision website for **AQA A Level Physics (7408)**. It covers every section of the specification, all 12 required practicals and all five Paper 3 options, with notes, flashcards, quizzes and exam-style questions.

**Live site:** https://lana6478.github.io/A-Levle-Physics-rev/ (once GitHub Pages is switched on – see below)

## What's in it

Each topic is a tile on the home page, coloured by section (red for section 1 through to violet for section 8). Every topic has:

- **Notes** – key definitions, equations, tables and memory hooks
- **Flashcards** – flip and mark "Got it" or "Not yet"
- **Quiz** – multiple choice with worked explanations (many are calculations)
- **Exam practice** – exam-style questions with mark schemes you can tick off
- **Confidence rating** – not yet / getting there / confident, shown as a strip on the tile

Also: **mixed quiz** across chosen sections, **review weak cards**, **my progress**, and **search**.

Coverage:

- Course structure, exam technique, command words and graph skills
- Sections 1–8: measurements, particles and radiation, waves, mechanics and materials, electricity, further mechanics and thermal physics, fields, nuclear physics
- Required practicals 1–12 and practical skills (CPAC)
- Options: astrophysics, medical physics, engineering physics, turning points, electronics

47 topics, about 530 flashcards, 300 quiz questions and 36 exam-style questions. Progress is saved in the visitor's own browser.

## Turning on the website (GitHub Pages)

1. Go to **Settings → Pages**.
2. Set **Source** to *Deploy from a branch*, choose **main** and **/ (root)**, then **Save**.
3. The site appears at the address above after a minute or two.

GitHub Pages only works on **private** repos with a paid plan. On a free account, make the repo public first (**Settings → General → Change visibility**).

## Editing content

Content is in `data/`, one file per section (`s1-measurements.js` … `s8-nuclear.js`, `practicals.js`, `options.js`, `overview.js`). `sections.js` lists which topics appear in each section.

Formatting inside text: `**bold**`, `*italic*`, superscripts `10^{−19}` and subscripts `E_{k}`.

Quiz questions are `["Question", ["A", "B", "C", "D"], indexOfCorrectOption, "Explanation"]` – options are shuffled when shown.

## Is this official?

No. It's an **independent, unofficial** resource and isn't endorsed by AQA. Check the [official specification](https://www.aqa.org.uk/subjects/physics/a-level/physics-7408) and use the AQA data and formulae booklet in exams.
