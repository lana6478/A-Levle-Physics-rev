/* Section 3: Waves */
REV.add({
  id: "w-progressive", section: "s3", title: "Progressive waves, transverse and longitudinal", short: "Progressive waves", glyph: "c = fλ",
  spec: "3.3.1.1–3.3.1.2",
  summary: "A **progressive wave** transfers energy without transferring matter. Know the wave quantities, **c = fλ**, **phase difference**, and how **polarisation** proves a wave is **transverse**.",
  notes: [
    { h: "Wave quantities", table: [
      ["Quantity", "Meaning", "Unit"],
      ["Amplitude A", "Maximum displacement from equilibrium", "m"],
      ["Wavelength λ", "Distance between two adjacent points in phase", "m"],
      ["Frequency f", "Number of complete waves passing a point per second", "Hz"],
      ["Period T", "Time for one complete oscillation; **f = 1/T**", "s"],
      ["Speed c", "Distance travelled by the wave per second; **c = fλ**", "m s^{−1}"],
      ["Phase difference", "How far one point is behind another in its cycle: 2πd/λ radians (or 360°d/λ)", "rad or °"]
    ]},
    { h: "Transverse and longitudinal", table: [
      ["", "Transverse", "Longitudinal"],
      ["Oscillation", "Perpendicular to the direction of energy transfer", "Parallel to the direction of energy transfer"],
      ["Examples", "All EM waves, waves on strings, S-waves", "Sound, P-waves, compression waves in a spring"],
      ["Features", "Peaks and troughs", "Compressions and rarefactions"],
      ["Polarisable?", "Yes", "No"]
    ], after: "All **EM waves** travel at c = 3.00 × 10^{8} m s^{−1} in a vacuum." },
    { h: "Polarisation", list: [
      "**Polarised** wave: oscillations in one plane only.",
      "A polarising filter lets through only oscillations in one plane. Rotate a second filter (analyser) through 90° and the light is blocked.",
      "Only transverse waves can be polarised – this is evidence that light is transverse.",
      "Uses: **Polaroid sunglasses** reduce glare from reflected (partly polarised) light; **TV and radio aerials** must be aligned with the plane of the transmitted signal."
    ]}
  ],
  cards: [
    ["Define wavelength.", "The distance between two adjacent points on a wave that are in phase."],
    ["Define frequency.", "The number of complete oscillations passing a point per second."],
    ["Write the wave equation.", "c = fλ."],
    ["What is the relationship between period and frequency?", "f = 1/T."],
    ["How do you calculate phase difference between two points a distance d apart?", "Δφ = 2πd/λ (radians)."],
    ["What is a transverse wave?", "One where the oscillations are perpendicular to the direction of energy transfer."],
    ["What is a longitudinal wave?", "One where the oscillations are parallel to the direction of energy transfer."],
    ["Give two examples of longitudinal waves.", "Sound waves and seismic P-waves."],
    ["What is polarisation?", "Restricting the oscillations of a transverse wave to one plane."],
    ["Why is polarisation evidence that light is transverse?", "Only transverse waves can be polarised."],
    ["Give two applications of polarisation.", "Polaroid sunglasses (reduce glare); aligning TV/radio aerials."],
    ["What is the speed of EM waves in a vacuum?", "3.00 × 10^{8} m s^{−1}."]
  ],
  quiz: [
    ["A wave has frequency 50 Hz and wavelength 6.0 m. Its speed is…", ["8.3 m s^{−1}", "56 m s^{−1}", "300 m s^{−1}", "0.12 m s^{−1}"], 2, "c = fλ = 300 m s^{−1}."],
    ["Two points are λ/4 apart on a wave. Phase difference?", ["π/4 rad", "π/2 rad", "π rad", "2π rad"], 1, "2π × ¼ = π/2."],
    ["Which wave can't be polarised?", ["Microwaves", "Light", "Sound", "Waves on a rope"], 2, "Sound is longitudinal."],
    ["Light passes through two polarising filters. The second is rotated 90° relative to the first. The transmitted intensity is…", ["Maximum", "Half", "Zero (ideally)", "Doubled"], 2, "Crossed polarisers block it."],
    ["A wave's period is 4.0 ms. Its frequency is…", ["250 Hz", "4.0 Hz", "25 Hz", "0.25 Hz"], 0, "1/0.004 = 250 Hz."],
    ["Points in antiphase have a phase difference of…", ["0", "π/2", "π", "2π"], 2, "180°."]
  ]
});

REV.add({
  id: "w-stationary", section: "s3", title: "Superposition and stationary waves", short: "Stationary waves", glyph: "f ∝ √T",
  spec: "3.3.1.3",
  summary: "Two progressive waves of the **same frequency** travelling in **opposite directions** superpose to make a **stationary wave** with fixed **nodes** and **antinodes**. Know harmonics on strings and the first-harmonic formula.",
  notes: [
    { h: "How stationary waves form", list: [
      "**Superposition**: where waves meet, the resultant displacement is the vector sum of their displacements.",
      "A wave reflects back on itself; the two waves (same f, similar amplitude, opposite directions) superpose.",
      "**Nodes** – zero amplitude (destructive interference). **Antinodes** – maximum amplitude (constructive interference).",
      "Distance between adjacent nodes (or antinodes) = **λ/2**.",
      "No net energy is transferred along a stationary wave."
    ]},
    { h: "Stationary vs progressive", table: [
      ["", "Stationary", "Progressive"],
      ["Energy", "Not transferred", "Transferred"],
      ["Amplitude", "Varies from zero (node) to maximum (antinode)", "Same for all points"],
      ["Phase", "All points between adjacent nodes in phase; neighbouring loops in antiphase", "Changes continuously along the wave"]
    ]},
    { h: "Harmonics on a string", list: [
      "Fixed ends are nodes. The **first harmonic** has one loop: l = λ/2, so λ = 2l.",
      "**f = (1/2l) √(T/μ)**, where T = tension and μ = mass per unit length (kg m^{−1}).",
      "The nth harmonic has n loops: f_{n} = n × f_{1}.",
      "Frequency goes up with more tension, shorter length, or lighter string."
    ]},
    { h: "Other examples", p: "Stationary **microwaves** (reflected from a metal plate, detected with a probe – nodes λ/2 apart), stationary **sound waves** in tubes (closed ends are nodes, open ends antinodes), and **standing waves on a string** driven by a vibration generator (Required Practical 1)." }
  ],
  cards: [
    ["State the principle of superposition.", "When waves meet, the resultant displacement equals the vector sum of the individual displacements."],
    ["How is a stationary wave formed?", "Two waves of the same frequency (and similar amplitude) travelling in opposite directions superpose."],
    ["What is a node?", "A point of zero amplitude on a stationary wave."],
    ["What is an antinode?", "A point of maximum amplitude on a stationary wave."],
    ["Distance between adjacent nodes?", "λ/2."],
    ["Does a stationary wave transfer energy?", "No."],
    ["What is the phase relationship between points in the same loop?", "In phase."],
    ["What is the phase relationship between points in adjacent loops?", "Antiphase (π rad)."],
    ["Write the first-harmonic frequency formula for a string.", "f = (1/2l) √(T/μ)."],
    ["What is μ in the string formula?", "Mass per unit length (kg m^{−1})."],
    ["How is the third harmonic related to the first?", "f_{3} = 3f_{1}; the string has three loops."],
    ["What happens to f_{1} if the tension is quadrupled?", "It doubles (f ∝ √T)."]
  ],
  quiz: [
    ["Adjacent nodes are 15 cm apart. The wavelength is…", ["7.5 cm", "15 cm", "30 cm", "60 cm"], 2, "Node to node = λ/2."],
    ["A 0.80 m string vibrates in its first harmonic. λ = ?", ["0.40 m", "0.80 m", "1.6 m", "3.2 m"], 2, "λ = 2l."],
    ["Doubling the length of a string (same T, μ) makes f_{1}…", ["Double", "Half", "Four times", "Unchanged"], 1, "f ∝ 1/l."],
    ["Points either side of a node are…", ["In phase", "In antiphase", "π/2 apart", "Not oscillating"], 1, "Adjacent loops are in antiphase."],
    ["A string's first harmonic is 120 Hz. The fourth harmonic is…", ["30 Hz", "124 Hz", "480 Hz", "1920 Hz"], 2, "4 × 120."],
    ["Tension 40 N, μ = 1.0 × 10^{−3} kg m^{−1}, l = 0.50 m. f_{1}?", ["200 Hz", "100 Hz", "400 Hz", "63 Hz"], 0, "(1/1.0) × √(40/0.001) = √40000 = 200 Hz."]
  ],
  exam: [
    { q: "Explain how a stationary wave is formed on a string fixed at both ends and driven at one end by a vibration generator.", marks: 4, points: [
      "The generator sends a progressive wave along the string, which reflects at the fixed end.",
      "The incident and reflected waves have the same frequency and (similar) amplitude and travel in opposite directions.",
      "They superpose: where they always cancel → nodes; where they reinforce → antinodes.",
      "Only frequencies where a whole number of half-wavelengths fit the length (fixed ends are nodes) produce a stationary wave (resonance)."
    ]}
  ]
});

REV.add({
  id: "w-interference", section: "s3", title: "Interference and diffraction", short: "Interference and diffraction", glyph: "d sinθ = nλ",
  spec: "3.3.2.1–3.3.2.2",
  summary: "**Coherent** sources produce **interference** patterns. Learn **Young's double slit** (w = λD/s), **single-slit diffraction**, and the **diffraction grating** (d sin θ = nλ).",
  notes: [
    { h: "Interference basics", list: [
      "**Path difference**: the difference in distance from two sources to a point.",
      "Constructive (bright/loud) when path difference = **nλ**; destructive (dark/quiet) when path difference = **(n + ½)λ**.",
      "**Coherent** sources: same frequency and a **constant phase difference**. Needed for a stable pattern.",
      "**Monochromatic**: a single wavelength. Lasers are coherent and monochromatic.",
      "**Laser safety**: never look into the beam, avoid reflective surfaces, wear goggles, display warning signs."
    ]},
    { h: "Young's double slit", list: [
      "A single coherent source illuminates two narrow slits a distance **s** apart; fringes are seen on a screen distance **D** away.",
      "**Fringe spacing w = λD/s** (valid when D ≫ s).",
      "With white light: a central white fringe, then coloured fringes (blue nearest the centre because it has the shortest λ), fading out.",
      "Historically important evidence for the wave nature of light. Also demonstrated with sound and microwaves."
    ]},
    { h: "Single-slit diffraction", list: [
      "**Diffraction**: spreading out of waves through a gap or round an obstacle – most when gap ≈ λ.",
      "Monochromatic light through a single slit: a bright **central maximum twice as wide** as the others, with dimmer side maxima.",
      "Wider slit → narrower central maximum. Longer wavelength → wider central maximum."
    ]},
    { h: "Diffraction gratings", list: [
      "Many slits; sharp, bright maxima at angles given by **d sin θ = nλ**, where d = slit spacing (= 1/lines per metre).",
      "Maximum order: n_{max} = d/λ, rounded **down**.",
      "Uses: **spectroscopy** (identifying elements by their spectral lines); **X-ray crystallography** (atomic layers act as a grating)."
    ]}
  ],
  memory: ["Young's: **w = λD/s** – 'we love Dancing Slowly'."],
  cards: [
    ["What does coherent mean?", "Same frequency and a constant phase difference."],
    ["What path difference gives constructive interference?", "A whole number of wavelengths, nλ."],
    ["What path difference gives destructive interference?", "(n + ½)λ."],
    ["Write the Young's double-slit equation.", "w = λD/s."],
    ["What do w, D and s stand for?", "w = fringe spacing; D = slit-to-screen distance; s = slit separation."],
    ["What do you see with white light through a double slit?", "A central white fringe with coloured fringes either side (blue innermost) that quickly fade."],
    ["How wide is the central maximum in single-slit diffraction?", "Twice the width of the other maxima."],
    ["What happens to single-slit diffraction if the slit is narrowed?", "The central maximum gets wider."],
    ["Write the diffraction grating equation.", "d sin θ = nλ."],
    ["How do you find d from lines per mm?", "d = 1 / (lines per metre). E.g. 300 lines/mm → d = 1/(3 × 10^{5}) m."],
    ["How do you find the highest order visible?", "n_{max} = d/λ rounded down."],
    ["Give two uses of diffraction gratings.", "Spectroscopy and X-ray crystallography."],
    ["Give two laser safety precautions.", "Never look into the beam; avoid reflections; wear goggles; warning signs."]
  ],
  quiz: [
    ["λ = 600 nm, D = 2.0 m, s = 0.50 mm. Fringe spacing?", ["2.4 mm", "0.24 mm", "24 mm", "1.5 mm"], 0, "w = 6.0 × 10^{−7} × 2.0 / 5.0 × 10^{−4} = 2.4 × 10^{−3} m."],
    ["A grating has 500 lines per mm. d = ?", ["5.0 × 10^{−4} m", "2.0 × 10^{−6} m", "5.0 × 10^{5} m", "2.0 × 10^{−3} m"], 1, "1 / 500 000 m."],
    ["With d = 2.0 × 10^{−6} m and λ = 650 nm, the highest order is…", ["1", "2", "3", "4"], 2, "d/λ = 3.08 → 3."],
    ["Path difference at the second dark fringe from the centre?", ["λ/2", "λ", "1.5λ", "2λ"], 2, "(n + ½)λ with n = 1."],
    ["Moving the screen further from the double slit makes the fringes…", ["Closer", "Further apart", "Brighter", "Disappear"], 1, "w ∝ D."],
    ["Light of which colour gives the widest single-slit central maximum?", ["Blue", "Green", "Red", "All the same"], 2, "Longest wavelength."],
    ["Two loudspeakers connected to the same signal generator are…", ["Coherent", "Incoherent", "Polarised", "Monochromatic only if far apart"], 0, "Same frequency, fixed phase."]
  ],
  exam: [
    { q: "Light of wavelength 589 nm falls normally on a grating with 300 lines per mm. Calculate the angle of the second-order maximum.", marks: 3, points: [
      "d = 1 / (300 × 10^{3}) = 3.33 × 10^{−6} m.",
      "sin θ = nλ/d = 2 × 589 × 10^{−9} / 3.33 × 10^{−6} = 0.353.",
      "θ = 20.7° (accept 21°)."
    ]},
    { q: "Describe and explain the pattern seen when monochromatic laser light passes through a single narrow slit.", marks: 4, points: [
      "Central bright maximum, twice as wide as the other maxima.",
      "Dimmer side maxima, decreasing in intensity, separated by dark minima.",
      "Light diffracts (spreads) as it passes through the slit.",
      "Waves from different parts of the slit superpose/interfere: constructive at maxima, destructive at minima."
    ]}
  ]
});

REV.add({
  id: "w-refraction", section: "s3", title: "Refraction, total internal reflection and optical fibres", short: "Refraction and fibres", glyph: "n = c/c_{s}",
  spec: "3.3.2.3",
  summary: "Light slows down in a denser medium and bends. Use **n = c/c_{s}** and **Snell's law**, find the **critical angle**, and explain how **optical fibres** work and why signals degrade.",
  notes: [
    { h: "Refractive index and Snell's law", list: [
      "**Absolute refractive index**: n = c/c_{s}, where c_{s} = speed of light in the substance. Air ≈ 1.",
      "**Snell's law**: n_{1} sin θ_{1} = n_{2} sin θ_{2} (angles measured from the normal).",
      "Going into a higher n: light slows and bends **towards** the normal."
    ]},
    { h: "Total internal reflection", list: [
      "Happens when light travels from higher n to lower n and the angle of incidence exceeds the **critical angle** θ_{c}.",
      "**sin θ_{c} = n_{2}/n_{1}** (n_{1} > n_{2}).",
      "At exactly θ_{c} the refracted ray travels along the boundary."
    ]},
    { h: "Step-index optical fibres", list: [
      "**Core** with high refractive index surrounded by **cladding** with lower n. Light travels by TIR at the core–cladding boundary.",
      "Cladding protects the core from scratches (which would let light escape) and stops signals crossing between touching fibres (keeps data secure).",
      "Narrow core reduces the number of different paths."
    ]},
    { h: "Signal degradation", table: [
      ["Problem", "Cause", "Fix"],
      ["Absorption", "Fibre material absorbs some energy → amplitude falls", "Purer glass; repeaters/amplifiers"],
      ["Material (chromatic) dispersion", "Different wavelengths travel at different speeds → pulse broadens", "Use monochromatic light"],
      ["Modal dispersion", "Rays take different paths (different lengths) → pulse broadens", "Use a very narrow core (single-mode fibre)"]
    ], after: "**Pulse broadening** can make adjacent pulses overlap, limiting the data rate. Use optical fibre repeaters to regenerate signals." }
  ],
  cards: [
    ["Define absolute refractive index.", "n = c/c_{s}: the speed of light in a vacuum divided by its speed in the substance."],
    ["State Snell's law.", "n_{1} sin θ_{1} = n_{2} sin θ_{2}."],
    ["When does total internal reflection happen?", "When light travels from a higher to a lower refractive index and the angle of incidence exceeds the critical angle."],
    ["Write the critical angle formula.", "sin θ_{c} = n_{2}/n_{1}."],
    ["Why does an optical fibre core need a higher n than the cladding?", "So TIR can happen at the core–cladding boundary."],
    ["Give two functions of the cladding.", "Protects the core from scratches; prevents signals crossing to adjacent fibres."],
    ["What is material dispersion?", "Different wavelengths travel at different speeds, so a pulse spreads out."],
    ["How is material dispersion reduced?", "Using monochromatic light."],
    ["What is modal dispersion?", "Light rays taking different paths along the fibre arrive at different times, broadening pulses."],
    ["How is modal dispersion reduced?", "Using a very narrow core (single-mode fibre)."],
    ["What does absorption in a fibre cause?", "Loss of signal amplitude."],
    ["What is the speed of light in glass of n = 1.5?", "2.0 × 10^{8} m s^{−1}."]
  ],
  quiz: [
    ["Speed of light in water (n = 1.33)?", ["4.0 × 10^{8} m s^{−1}", "2.3 × 10^{8} m s^{−1}", "3.0 × 10^{8} m s^{−1}", "1.3 × 10^{8} m s^{−1}"], 1, "3.00 × 10^{8} / 1.33."],
    ["Critical angle for a glass (n = 1.50) to air boundary?", ["41.8°", "48.2°", "33.7°", "56.3°"], 0, "sin θ_{c} = 1/1.50 → 41.8°."],
    ["Core n = 1.48, cladding n = 1.46. Critical angle?", ["80.6°", "9.4°", "45°", "62°"], 0, "sin θ_{c} = 1.46/1.48 = 0.986."],
    ["Light enters glass (n = 1.5) from air at 30°. Angle of refraction?", ["19.5°", "48.6°", "20°", "45°"], 0, "sin r = sin 30° / 1.5 = 0.333."],
    ["Which reduces modal dispersion?", ["Monochromatic light", "A narrower core", "A thicker cladding", "More powerful light"], 1, "Fewer possible paths."],
    ["Pulse broadening from different wavelengths is…", ["Modal dispersion", "Material dispersion", "Absorption", "Polarisation"], 1, "Material (chromatic) dispersion."]
  ],
  exam: [
    { q: "Explain why a pulse of white light entering a long multimode optical fibre emerges longer and weaker.", marks: 4, points: [
      "Different wavelengths travel at different speeds in glass (material dispersion), so they arrive at different times.",
      "Rays travelling at different angles take different path lengths (modal dispersion), also arriving at different times – so the pulse broadens.",
      "Some energy is absorbed by the fibre material.",
      "So the amplitude/intensity of the pulse falls."
    ]}
  ]
});
