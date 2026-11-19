/* Course structure and exam technique */
REV.add({
  id: "ov-course", section: "overview", title: "How AQA A Level Physics is assessed", short: "The three papers", glyph: "A*",
  spec: "AQA 7408 scheme of assessment",
  summary: "Three written papers, all **2 hours**, all sat at the end of the course, graded **A\\*–E**. Practical skills are tested in the papers and separately through the **practical endorsement**.",
  notes: [
    { h: "The three papers", table: [
      ["Paper", "Content", "Marks", "Weighting", "Question types"],
      ["Paper 1", "Sections 1–5 and 6.1 (periodic motion)", "85", "34%", "60 marks short and long answer; 25 multiple choice"],
      ["Paper 2", "Sections 6.2 (thermal), 7 and 8 – assumes knowledge of 1 to 6.1", "85", "34%", "60 marks short and long answer; 25 multiple choice"],
      ["Paper 3", "Section A: practical skills and data analysis (45 marks). Section B: your option (35 marks)", "80", "32%", "Short and long answer"]
    ]},
    { h: "Assessment Objectives", table: [
      ["AO", "What it tests", "Approximate weighting"],
      ["AO1", "Knowledge and understanding of ideas, processes, techniques and procedures", "30–35%"],
      ["AO2", "Applying knowledge – including in theoretical and practical contexts and when handling data", "40–45%"],
      ["AO3", "Analysing, interpreting and evaluating information, ideas and evidence – making judgements, drawing conclusions, refining procedures", "25–30%"]
    ], after: "At least **40%** of marks need Level 2 (GCSE higher) maths or above, and at least **15%** assess practical skills." },
    { h: "The practical endorsement", list: [
      "Assessed by your teachers using the **Common Practical Assessment Criteria (CPAC)** across at least 12 practicals.",
      "Reported separately from the A Level grade as **Pass** or not classified.",
      "Many universities expect a Pass for science courses."
    ]},
    { h: "The five options (Paper 3 Section B)", p: "Your school chooses one: **9 Astrophysics**, **10 Medical physics**, **11 Engineering physics**, **12 Turning points in physics**, **13 Electronics**." },
    { h: "Data and formulae booklet", p: "You get a booklet in every paper with constants, prefixes and most equations. You still need to know what each symbol means, which equation applies, how to rearrange it, and the **definitions** of key terms – those aren't in the booklet." }
  ],
  memory: ["**34 / 34 / 32** – the paper weightings.", "Paper 1 ends at **6.1** (SHM), Paper 2 starts at **6.2** (thermal)."],
  cards: [
    ["How long is each A Level Physics paper?", "2 hours."],
    ["What does Paper 1 cover?", "Sections 1–5 and 6.1 (periodic motion)."],
    ["What does Paper 2 cover?", "Sections 6.2 (thermal physics), 7 (fields) and 8 (nuclear), assuming knowledge of sections 1 to 6.1."],
    ["What is in Paper 3?", "Section A: practical skills and data analysis (45 marks). Section B: the option topic (35 marks)."],
    ["How many multiple-choice marks are in Papers 1 and 2?", "25 each."],
    ["What are the weightings of the three papers?", "Paper 1 34%, Paper 2 34%, Paper 3 32%."],
    ["What is CPAC?", "Common Practical Assessment Criteria – used by teachers to assess the practical endorsement."],
    ["How is the practical endorsement reported?", "Separately from the grade, as Pass (or not classified)."],
    ["Which AO carries the most weight?", "AO2 – application (about 40–45%)."],
    ["Name the five AQA Physics options.", "Astrophysics, medical physics, engineering physics, turning points in physics, electronics."],
    ["What proportion of marks require Level 2 maths or above?", "At least 40%."]
  ],
  quiz: [
    ["Which paper includes circular motion and SHM?", ["Paper 1", "Paper 2", "Paper 3 Section A", "Paper 3 Section B"], 0, "Section 6.1 is in Paper 1."],
    ["Gas laws (6.2) are examined in…", ["Paper 1", "Paper 2", "Only Paper 3", "The practical endorsement"], 1, "Paper 2 covers 6.2, 7 and 8."],
    ["How many marks is Paper 3 worth?", ["85", "80", "45", "35"], 1, "45 for Section A plus 35 for the option."],
    ["The practical endorsement is…", ["Part of Paper 3", "Graded A*–E", "Reported separately as a Pass", "Worth 15% of the grade"], 2, "It doesn't count towards the A Level grade."],
    ["Which AO is about analysing and evaluating evidence?", ["AO1", "AO2", "AO3", "AO4"], 2, "AO3."],
    ["How many multiple-choice marks are in Paper 1?", ["15", "25", "35", "60"], 1, "25 MCQ marks plus 60 written."]
  ]
});

REV.add({
  id: "exam-technique", section: "overview", title: "Exam technique, command words and calculations", short: "Exam technique", glyph: "3 s.f.",
  spec: "AQA command words, maths skills",
  summary: "Most marks come from **applying** physics to unfamiliar situations and from **calculations**. Read the command word, show every step, and finish with the right **units** and **significant figures**.",
  notes: [
    { h: "AQA command words", table: [
      ["Command word", "What to do"],
      ["State / give / name", "A short answer – no explanation needed"],
      ["Define", "Give the precise meaning of a term"],
      ["Describe", "Set out characteristics or steps in order"],
      ["Explain", "Give reasons why or how – link cause and effect"],
      ["Calculate", "Work out a numerical answer, showing working"],
      ["Determine", "Use the data or graph given to get an answer (often from a gradient or intercept)"],
      ["Estimate", "Give a sensible approximate value, stating any assumptions"],
      ["Show that", "Give a full logical chain leading to the stated result – give your answer to at least one more significant figure than the value shown"],
      ["Sketch", "A rough graph or diagram showing the key features (shape, intercepts, asymptotes) – not to scale"],
      ["Draw / plot", "Accurate drawing or plotting on the grid"],
      ["Suggest", "Apply your knowledge to an unfamiliar context – there may be more than one acceptable answer"],
      ["Discuss / evaluate", "Weigh up evidence or arguments and reach a judgement"],
      ["Justify", "Support a choice or answer with evidence"],
      ["Compare", "Give similarities and/or differences between two things"]
    ]},
    { h: "Calculation checklist", steps: [
      "Write the equation you're using (from the booklet).",
      "Convert everything to **SI units** first (cm → m, g → kg, mA → A, eV → J).",
      "Substitute values with units.",
      "Rearrange and calculate – keep full precision until the end.",
      "Give the final answer to the **same number of significant figures as the least precise data** (usually 2 or 3), with a **unit**."
    ]},
    { h: "Graph skills", list: [
      "Plot at least six points; use more than half the grid on each axis; label axes with **quantity / unit**.",
      "Draw a single smooth best-fit line or curve – don't join the dots.",
      "To find a **gradient**, use a large triangle (at least half the line). Gradient = Δy ÷ Δx with units.",
      "**Linearise** relationships: e.g. for T = 2π√(l/g), plot T² against l – the gradient is 4π²/g.",
      "For exponentials, plot **ln y** against x; the gradient gives the constant (e.g. −λ or −1/RC).",
      "The area under a graph can be meaningful: v–t → displacement; F–x → work done; I–t → charge."
    ]},
    { h: "Six-mark extended response", p: "Marked by **level of response**: the examiner looks at the quality and logical order of the physics. Plan a few bullet points first, cover each part of the question, use correct terms, and make each point lead to the next. Diagrams can help." },
    { h: "Multiple choice", p: "Work each one out before looking at the options, estimate orders of magnitude to rule out silly answers, and don't spend more than about a minute per mark. Never leave one blank." }
  ],
  tips: [
    "'Show that' answers lose marks if you work backwards from the given value or give it to the same s.f. as printed.",
    "A missing or wrong unit can cost a mark even when the number is right.",
    "If you get stuck on part (a), use the 'show that' value given to carry on with part (b).",
    "Check orders of magnitude: a car's mass isn't 10⁶ kg, an electron's speed isn't more than 3 × 10⁸ m s⁻¹."
  ],
  cards: [
    ["What does 'show that' require?", "A full logical chain of working to the given value, with your final answer to at least one more significant figure than shown."],
    ["What does 'determine' usually mean?", "Use the data or graph provided (e.g. a gradient or intercept) to work out the answer."],
    ["What does 'sketch' require?", "A rough graph or diagram with key features correct (shape, intercepts, asymptotes) – not to scale."],
    ["What does 'suggest' mean?", "Apply your physics to an unfamiliar situation – more than one answer may be acceptable."],
    ["How many significant figures should a final answer have?", "The same as the least precise data given (usually 2 or 3)."],
    ["How should graph axes be labelled?", "Quantity / unit, e.g. t / s."],
    ["How should you measure a gradient?", "From a large triangle covering at least half the line: Δy ÷ Δx, with units."],
    ["How would you get a straight line from T = 2π√(l/g)?", "Plot T² against l; gradient = 4π²/g."],
    ["How do you linearise y = Ae^{−kx}?", "Plot ln y against x: gradient = −k, intercept = ln A."],
    ["What does the area under a force–extension graph represent?", "Work done (energy stored)."],
    ["How are six-mark questions marked?", "By level of response – the quality, coverage and logical structure of the answer."]
  ],
  quiz: [
    ["A question says 'Show that the speed is about 4 m s⁻¹'. Which final answer is best?", ["4 m s⁻¹", "4.2 m s⁻¹", "About 4", "4 (units not needed)"], 1, "Give at least one more significant figure than the stated value."],
    ["Which plot gives a straight line for an exponential decay N = N₀e^{−λt}?", ["N against t", "ln N against t", "N against 1/t", "N² against t"], 1, "ln N = ln N₀ − λt."],
    ["Data given to 2 s.f. and 3 s.f. You should give the answer to…", ["1 s.f.", "2 s.f.", "3 s.f.", "4 s.f."], 1, "Match the least precise data."],
    ["The area under a current–time graph gives…", ["Power", "Charge", "Resistance", "Energy"], 1, "Q = IΔt."],
    ["Which command word asks you to use a graph or data supplied?", ["State", "Determine", "Define", "Name"], 1, "Determine."],
    ["The correct way to label a time axis is…", ["Time", "t (s)", "t / s", "s"], 2, "Quantity / unit."]
  ]
});
