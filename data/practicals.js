/* Required practicals and practical skills */
REV.add({
  id: "rp-skills", section: "practicals", title: "Practical skills and the CPAC criteria", short: "Practical skills", glyph: "±0.01 mm",
  spec: "Practical skills and CPAC (Appendix)",
  summary: "Paper 3 Section A and parts of every paper test **planning, measuring, analysing and evaluating** experiments. Know your **variables**, your **instruments' resolution**, and techniques for **reducing uncertainty**.",
  notes: [
    { h: "Variables", list: [
      "**Independent** – the one you change.",
      "**Dependent** – the one you measure.",
      "**Control** – kept constant so the test is fair."
    ]},
    { h: "Instruments and resolution", table: [
      ["Instrument", "Typical resolution", "Use"],
      ["Metre rule", "1 mm", "Lengths over about 10 cm"],
      ["Vernier calipers", "0.1 mm (or 0.05 mm)", "Small lengths, internal/external diameters"],
      ["Micrometer screw gauge", "0.01 mm", "Wire diameters, thin sheets – check for zero error"],
      ["Stopwatch", "0.01 s (but reaction time ≈ 0.1–0.2 s)", "Timings over a few seconds"],
      ["Light gates / data logger", "≈ 1 ms or better", "Short times, speeds, accelerations"],
      ["Digital multimeter", "Last digit", "Current, p.d., resistance"],
      ["Oscilloscope", "Set by y-gain and time-base", "Alternating voltages, short time intervals"]
    ]},
    { h: "Good technique", list: [
      "Take readings **at eye level** to avoid parallax; use a **fiducial marker** for oscillations.",
      "Measure several cycles/oscillations and divide; repeat and average.",
      "Measure a diameter at several points and orientations along a wire.",
      "Take a wide range of values (at least 6) for the independent variable.",
      "Check for **zero errors** before measuring.",
      "Consider **safety**: goggles for wires under tension, care with lasers, hot water, radioactive sources and high voltages."
    ]},
    { h: "CPAC – what your teacher assesses", steps: [
      "Follows written procedures.",
      "Applies investigative approaches and methods when using instruments and equipment.",
      "Safely uses a range of practical equipment and materials.",
      "Makes and records observations.",
      "Researches, references and reports."
    ]}
  ],
  cards: [
    ["What is the independent variable?", "The variable you deliberately change."],
    ["What is the dependent variable?", "The variable you measure."],
    ["What is a control variable?", "A variable kept constant so it doesn't affect the result."],
    ["What is the resolution of a micrometer?", "0.01 mm."],
    ["What is the resolution of vernier calipers?", "Typically 0.1 mm (some 0.05 mm)."],
    ["What is a fiducial marker?", "A fixed reference point (e.g. a pin at the equilibrium position) used to start and stop timing consistently."],
    ["How do you avoid parallax error?", "Read the scale with your eye level and perpendicular to it."],
    ["Why time 10 oscillations rather than one?", "Reaction time error is spread over 10 periods, reducing the percentage uncertainty."],
    ["Why measure a wire's diameter in several places?", "The wire may not be uniform – averaging gives a better value."],
    ["Name the five CPAC criteria.", "Follows procedures; applies investigative approaches; uses equipment safely; makes and records observations; researches, references and reports."]
  ],
  quiz: [
    ["Which instrument is best for measuring a wire's diameter of about 0.3 mm?", ["Metre rule", "Vernier calipers", "Micrometer", "Tape measure"], 2, "0.01 mm resolution."],
    ["Timing one swing of a pendulum with a stopwatch mainly suffers from…", ["Zero error", "Reaction time (random) error", "Calibration error", "Parallax"], 1, "Time many swings instead."],
    ["In an experiment varying the length of a wire to see how resistance changes, the cross-sectional area is a…", ["Dependent variable", "Independent variable", "Control variable", "Derived variable"], 2, "Kept constant."],
    ["A micrometer reads 0.02 mm when fully closed. This is a…", ["Random error", "Zero error", "Resolution", "Parallax error"], 1, "Subtract it from each reading."],
    ["The best way to time a falling object over 0.5 m is…", ["Stopwatch", "Light gates with a data logger", "Counting seconds", "Video at 1 frame per second"], 1, "Much smaller timing uncertainty."]
  ]
});

REV.add({
  id: "rp-1-2", section: "practicals", title: "RP1 Stationary waves on a string · RP2 Interference", short: "RP1–2 Waves", glyph: "RP1·2",
  spec: "Required practicals 1 and 2",
  summary: "**RP1**: how the first-harmonic frequency of a string depends on length, tension and mass per unit length. **RP2**: Young's double slit and a diffraction grating to find wavelength.",
  notes: [
    { h: "RP1 – Stationary waves on a string", steps: [
      "String fixed at one end, over a pulley at the other with hanging masses (tension T = mg). A vibration generator near the fixed end is driven by a signal generator.",
      "Measure l (between the vibration generator and the pulley) with a metre rule; find μ by weighing a known length of string.",
      "Increase frequency from low until the first harmonic (one loop) has maximum amplitude; record f.",
      "Vary l (fixed T, μ), then T (fixed l, μ), then μ (different strings).",
      "Analyse: f against 1/l is a straight line; f against √T is a straight line; compare with f = (1/2l)√(T/μ)."
    ], after: "**Errors**: judging maximum amplitude is subjective – approach from both sides and average; use a strobe to see the nodes clearly. **Safety**: masses could fall – keep feet clear." },
    { h: "RP2 – Young's slits and diffraction grating", list: [
      "**Double slit**: laser → double slit → screen at D ≈ 1–2 m. Measure across several fringes and divide to get w; measure s with a travelling microscope (or given); measure D with a tape. λ = ws/D.",
      "**Grating**: laser → grating → screen. Measure the distance from the central maximum to the nth order on each side and D; find θ = tan^{−1}(x/D); λ = d sin θ / n. Use the highest orders for the smallest percentage uncertainty.",
      "**Safety**: class 2 laser – never look into the beam, avoid reflective surfaces, warning sign, don't point at people."
    ]}
  ],
  cards: [
    ["In RP1, how is tension in the string set?", "By hanging masses over a pulley: T = mg."],
    ["In RP1, how is μ found?", "Weigh a measured length of the string: μ = mass/length."],
    ["What graph confirms f ∝ 1/l in RP1?", "f against 1/l – a straight line through the origin."],
    ["How can you improve finding the first harmonic in RP1?", "Approach the resonant frequency from above and below and average, or use a stroboscope."],
    ["Why measure across several fringes in Young's experiment?", "To reduce the percentage uncertainty in fringe spacing."],
    ["In RP2 with a grating, how is θ found?", "θ = tan^{−1}(x/D), where x = distance from the central maximum to the nth order and D = grating-to-screen distance."],
    ["Why use the highest visible order with a grating?", "Larger angle/distance → smaller percentage uncertainty."],
    ["Give two laser safety precautions.", "Never look into the beam; avoid reflections; don't point at people; warning signs."]
  ],
  quiz: [
    ["In RP1, doubling the hanging mass (tension) should multiply f₁ by…", ["2", "√2", "4", "½"], 1, "f ∝ √T."],
    ["10 fringes span 24 mm, D = 2.0 m, s = 0.50 mm. λ = ?", ["600 nm", "240 nm", "6.0 μm", "60 nm"], 0, "w = 2.4 mm; λ = ws/D = 2.4 × 10^{−3} × 5.0 × 10^{−4} / 2.0 = 6.0 × 10^{−7} m."],
    ["With a grating, the first order is 0.30 m from the centre on a screen 1.5 m away. θ ≈ ?", ["11.3°", "0.2°", "78.7°", "20°"], 0, "tan^{−1}(0.30/1.5)."],
    ["Which change makes Young's fringes easier to measure?", ["Smaller D", "Larger slit separation", "Larger D", "Shorter wavelength"], 2, "w ∝ D."],
    ["In RP1, the string's length is measured between…", ["The two ends of the string", "The vibration generator and the pulley", "The pulley and the floor", "Two antinodes"], 1, "Those are the nodes for the first harmonic."]
  ]
});

REV.add({
  id: "rp-3-4", section: "practicals", title: "RP3 g by free fall · RP4 Young modulus", short: "RP3–4 Mechanics", glyph: "RP3·4",
  spec: "Required practicals 3 and 4",
  summary: "**RP3**: measure g from a falling object. **RP4**: measure the Young modulus of a metal wire.",
  notes: [
    { h: "RP3 – g by free fall", steps: [
      "Drop a ball bearing from an electromagnet so it falls through a trapdoor (or a light gate) – an electronic timer starts when the magnet is switched off and stops at the trapdoor.",
      "Measure the height h from the bottom of the ball to the trapdoor with a metre rule.",
      "Repeat the timing for each height and average; use at least 6 heights.",
      "s = ½gt^{2}: plot h against t^{2} – gradient = g/2, so g = 2 × gradient."
    ], after: "**Errors**: the electromagnet may release the ball slightly late (residual magnetism) – a systematic error giving a non-zero intercept; measuring the height is hard to do precisely. Using the gradient removes constant timing offsets. Air resistance is negligible for a small dense ball." },
    { h: "RP4 – Young modulus", steps: [
      "Use a long, thin wire (≈ 2 m) – either horizontal over a pulley with a marker against a mm scale, or two vertical wires (test and reference) with a vernier scale.",
      "Measure the original length L with a tape measure.",
      "Measure the diameter with a micrometer at several points and orientations; A = πd^{2}/4.",
      "Add masses in equal steps, recording extension each time; unload to check it returns (elastic).",
      "Plot stress against strain (or F against ΔL): Young modulus = gradient (or gradient × L/A)."
    ], after: "**Safety**: goggles (wire could snap), cushion below the masses, keep feet clear. **Why a long thin wire?** Bigger extensions for a given force, so smaller percentage uncertainty in ΔL." }
  ],
  cards: [
    ["In RP3, what graph is plotted to find g?", "h against t^{2}; gradient = g/2."],
    ["Why does using the gradient in RP3 reduce the effect of a constant timing delay?", "A constant delay shifts every point equally, changing the intercept, not the gradient."],
    ["Give a systematic error in the electromagnet method for g.", "Residual magnetism delays the release of the ball."],
    ["Why use a long, thin wire in RP4?", "To get larger extensions for a given force, reducing the percentage uncertainty in extension."],
    ["Why use a reference wire in the vertical Young modulus method?", "It cancels the effects of temperature changes and sagging of the support."],
    ["What should you check after loading the wire in RP4?", "That it returns to its original length when unloaded (it stayed elastic)."],
    ["How do you get a precise cross-sectional area in RP4?", "Measure the diameter with a micrometer at several places and orientations; average; A = πd^{2}/4."],
    ["What safety precaution is needed in RP4?", "Wear goggles in case the wire snaps; keep feet clear of falling masses."]
  ],
  quiz: [
    ["A plot of h against t^{2} has gradient 4.85 m s^{−2}. g = ?", ["4.85 m s^{−2}", "9.70 m s^{−2}", "2.43 m s^{−2}", "23.5 m s^{−2}"], 1, "g = 2 × gradient."],
    ["The h–t^{2} graph doesn't pass through the origin. This suggests…", ["Random error", "A systematic error", "g is changing", "Air resistance is large"], 1, "A constant offset."],
    ["A force–extension graph for a 2.00 m wire of area 2.0 × 10^{−7} m^{2} has gradient 2.0 × 10^{4} N m^{−1}. E = ?", ["2.0 × 10^{11} Pa", "1.0 × 10^{11} Pa", "4.0 × 10^{11} Pa", "2.0 × 10^{4} Pa"], 0, "E = gradient × L/A = 2.0 × 10^{4} × 2.00 / 2.0 × 10^{−7}."],
    ["Which measurement in RP4 contributes the largest percentage uncertainty?", ["Original length", "Mass added", "Wire diameter", "g"], 2, "Small value, and squared in the area."],
    ["Why is a small steel ball used to measure g?", ["It's cheap", "Air resistance is negligible compared to its weight", "It's magnetic only", "It bounces"], 1, "Dense and small."]
  ]
});

REV.add({
  id: "rp-5-6", section: "practicals", title: "RP5 Resistivity · RP6 E.m.f. and internal resistance", short: "RP5–6 Electricity", glyph: "RP5·6",
  spec: "Required practicals 5 and 6",
  summary: "**RP5**: find the resistivity of a wire. **RP6**: find the e.m.f. and internal resistance of a cell.",
  notes: [
    { h: "RP5 – Resistivity of a wire", steps: [
      "Measure the wire's diameter with a micrometer at several points; average; A = πd^{2}/4.",
      "Tape the wire to a metre rule; connect a crocodile clip at 0 and a flying lead at length l.",
      "Measure V and I with a voltmeter and ammeter (or an ohmmeter) for at least 6 lengths; R = V/I.",
      "Keep the current low and switch off between readings so the wire doesn't heat up.",
      "Plot R against l: gradient = ρ/A, so **ρ = gradient × A**."
    ], after: "A small non-zero intercept comes from contact resistance – using the gradient removes it." },
    { h: "RP6 – E.m.f. and internal resistance", steps: [
      "Connect the cell in series with a variable resistor and ammeter; voltmeter across the cell's terminals.",
      "Vary the resistance; record terminal p.d. V and current I for at least 6 settings.",
      "Plot V against I: **y-intercept = ε**, **gradient = −r** (from V = ε − Ir).",
      "Open the switch between readings – drawing current for a long time changes ε and r as the cell heats or runs down.",
      "A protective resistor in series can stop the current getting too large."
    ]}
  ],
  cards: [
    ["In RP5, what graph gives the resistivity?", "R against length l; ρ = gradient × cross-sectional area."],
    ["Why keep the current low in RP5?", "So the wire doesn't heat up, which would change its resistance."],
    ["What might cause a non-zero intercept on the R–l graph?", "Contact resistance at the clips (or a zero error)."],
    ["In RP6, what graph do you plot?", "Terminal p.d. V against current I."],
    ["In RP6, what do the intercept and gradient give?", "y-intercept = e.m.f.; gradient = −internal resistance."],
    ["Why switch off between readings in RP6?", "To stop the cell's e.m.f. and internal resistance changing as it heats or discharges."],
    ["How do you find a wire's cross-sectional area?", "A = πd^{2}/4 with d measured by micrometer (averaged)."]
  ],
  quiz: [
    ["An R–l graph has gradient 25 Ω m^{−1} for a wire of area 4.0 × 10^{−8} m^{2}. ρ = ?", ["1.0 × 10^{−6} Ω m", "6.3 × 10^{8} Ω m", "1.6 × 10^{−9} Ω m", "25 Ω m"], 0, "25 × 4.0 × 10^{−8}."],
    ["A V–I graph meets the V-axis at 1.55 V. This is the…", ["Internal resistance", "Lost volts", "E.m.f.", "Terminal p.d. at maximum current"], 2, "When I = 0, V = ε."],
    ["As the current drawn from a cell increases, the terminal p.d.…", ["Increases", "Decreases", "Stays the same", "Equals ε"], 1, "More lost volts."],
    ["In RP5, the diameter of the wire is 0.40 mm. Area?", ["1.3 × 10^{−7} m^{2}", "5.0 × 10^{−7} m^{2}", "1.3 × 10^{−4} m^{2}", "4.0 × 10^{−4} m^{2}"], 0, "π(0.20 × 10^{−3})^{2} = 1.26 × 10^{−7} m^{2}."],
    ["A V–I graph for a cell has gradient −0.8 V A^{−1}. Internal resistance?", ["0.8 Ω", "1.25 Ω", "−0.8 Ω", "8 Ω"], 0, "r = −gradient."]
  ]
});

REV.add({
  id: "rp-7-8", section: "practicals", title: "RP7 SHM · RP8 Boyle's and Charles's laws", short: "RP7–8 SHM and gases", glyph: "RP7·8",
  spec: "Required practicals 7 and 8",
  summary: "**RP7**: investigate the periods of a mass–spring system and a pendulum. **RP8**: test **Boyle's law** and **Charles's law**.",
  notes: [
    { h: "RP7 – Simple harmonic motion", list: [
      "**Mass–spring**: find k first (hang masses, measure extensions, gradient of F–ΔL). Then time 10 oscillations for several masses; plot T^{2} against m – gradient 4π^{2}/k.",
      "**Pendulum**: vary length l; small amplitude (< 10°); time 10–20 oscillations with a fiducial marker; plot T^{2} against l – gradient 4π^{2}/g.",
      "Check that T is independent of amplitude (for small amplitudes) and of mass for the pendulum.",
      "Use a motion sensor/data logger to plot x–t, v–t and a–t graphs if available."
    ]},
    { h: "RP8 – Boyle's law (constant temperature)", list: [
      "A column of air is trapped by oil in a sealed glass tube; a pump increases the pressure (read from a Bourdon gauge).",
      "Read the length of the air column (∝ volume, since the tube is uniform).",
      "Wait after each change for the temperature to return to room temperature.",
      "Plot p against 1/V – straight line through the origin, so pV = constant."
    ]},
    { h: "RP8 – Charles's law (constant pressure)", list: [
      "A capillary tube with a bead of concentrated sulfuric acid trapping air is placed in a water bath next to a thermometer.",
      "Heat the water; stir and wait at each temperature; read the length of the air column.",
      "Plot V (column length) against θ in °C – extrapolate to V = 0 to estimate **absolute zero** (≈ −273 °C).",
      "**Safety**: the acid is corrosive (goggles); care with hot water."
    ]}
  ],
  cards: [
    ["In RP7, what graph gives the spring constant from oscillations?", "T^{2} against m; gradient = 4π^{2}/k."],
    ["In RP7, what graph gives g from a pendulum?", "T^{2} against l; gradient = 4π^{2}/g."],
    ["Why must pendulum oscillations be small?", "T = 2π√(l/g) only applies to small angles (below about 10°)."],
    ["In the Boyle's law experiment, why wait after each pressure change?", "To let the gas return to room temperature (keep T constant)."],
    ["What graph shows Boyle's law is obeyed?", "p against 1/V – straight line through the origin."],
    ["How does the Charles's law experiment estimate absolute zero?", "Plot volume against temperature in °C and extrapolate to zero volume."],
    ["Why can the length of the air column be used instead of volume?", "The tube has uniform cross-section, so V ∝ length."],
    ["What hazard is there in the capillary-tube Charles's law experiment?", "Concentrated sulfuric acid is corrosive – wear goggles."]
  ],
  quiz: [
    ["A T^{2}–l graph has gradient 4.03 s^{2} m^{−1}. g = ?", ["9.80 m s^{−2}", "4.03 m s^{−2}", "0.25 m s^{−2}", "39.7 m s^{−2}"], 0, "4π^{2}/4.03 = 9.80."],
    ["In a Boyle's law test, which graph is a straight line through the origin?", ["p against V", "p against 1/V", "pV against p", "V against T"], 1, "p ∝ 1/V."],
    ["A Charles's law graph is extrapolated to V = 0 at −265 °C. This estimates…", ["Boiling point", "Absolute zero", "Room temperature", "The pressure"], 1, "The accepted value is −273 °C."],
    ["What is kept constant in the Charles's law experiment?", ["Volume", "Temperature", "Pressure", "Amount of light"], 2, "Constant pressure."],
    ["A T^{2}–m graph for a spring has gradient 0.40 s^{2} kg^{−1}. k = ?", ["99 N m^{−1}", "0.40 N m^{−1}", "16 N m^{−1}", "2.5 N m^{−1}"], 0, "4π^{2}/0.40 = 98.7 N m^{−1}."]
  ]
});

REV.add({
  id: "rp-9-12", section: "practicals", title: "RP9 Capacitors · RP10 Force on a wire · RP11 Search coil · RP12 Inverse square", short: "RP9–12 Fields and nuclear", glyph: "RP9–12",
  spec: "Required practicals 9, 10, 11 and 12",
  summary: "**RP9** capacitor charge/discharge; **RP10** force on a current-carrying wire with a top-pan balance; **RP11** induced e.m.f. in a search coil at different angles; **RP12** inverse-square law for gamma.",
  notes: [
    { h: "RP9 – Capacitor charge and discharge", list: [
      "Charge the capacitor from a d.c. supply; switch to discharge through a resistor; record V (or I) at regular intervals (stopwatch, or a data logger for short RC).",
      "Plot ln V against t: gradient = −1/RC.",
      "Alternatively find the time to fall to 37% of V_{0}."
    ]},
    { h: "RP10 – Force on a current-carrying wire", list: [
      "A U-shaped magnet sits on a top-pan balance; a stiff wire passes horizontally between the poles, held by clamps (not touching the magnet).",
      "Zero the balance; pass current through the wire; the reading changes because the wire pushes on the magnet (Newton's third law).",
      "F = (change in reading in kg) × g.",
      "Vary I (fixed length in the field): F against I is a straight line, gradient = Bl, so B = gradient/l.",
      "Reverse the current to check the reading changes direction."
    ]},
    { h: "RP11 – Search coil and flux linkage", list: [
      "A large coil carries a.c. to make an alternating field; a small **search coil** connected to an oscilloscope is placed in it.",
      "Measure the peak e.m.f. on the oscilloscope as the search coil is rotated to different angles θ (using a protractor).",
      "Peak e.m.f. ∝ cos θ (θ between the field and the normal to the coil) – plot e.m.f. against cos θ for a straight line."
    ]},
    { h: "RP12 – Inverse-square law for γ", list: [
      "Measure background count first.",
      "Place a GM tube at increasing distances x from a sealed γ source on a metre rule; record counts over a fixed time and correct for background.",
      "Plot corrected count rate C against 1/x^{2}, or 1/√C against x: a straight line whose x-intercept gives the systematic offset (source inside its holder).",
      "**Safety**: handle the source with tongs, keep at arm's length, minimise exposure time, return to its lead box promptly."
    ]}
  ],
  cards: [
    ["In RP9, what graph gives the time constant?", "ln V against t; RC = −1/gradient."],
    ["In RP10, why does the balance reading change?", "The magnet exerts a force on the current-carrying wire, so by Newton's third law the wire exerts an equal and opposite force on the magnet."],
    ["In RP10, how is B found?", "Plot F against I; B = gradient / l (length of wire in the field)."],
    ["In RP11, how does peak e.m.f. vary with the angle of the search coil?", "It's proportional to cos θ (θ between the field and the coil's normal)."],
    ["What instrument measures the induced e.m.f. in RP11?", "An oscilloscope."],
    ["In RP12, why plot 1/√C against x?", "It's a straight line, and the x-intercept reveals any offset in the source's position."],
    ["What must be measured before RP12?", "The background count rate."],
    ["Give two safety precautions for RP12.", "Use tongs, keep at arm's length, minimise exposure time, store in a lead box."]
  ],
  quiz: [
    ["In RP10, the balance reading changes by 2.4 g when I = 4.0 A. Force on the wire?", ["0.024 N", "2.4 × 10^{−3} N", "9.6 N", "0.094 N"], 0, "0.0024 kg × 9.81 = 0.0235 N."],
    ["…if the wire length in the field is 0.050 m, B = ?", ["0.12 T", "0.0059 T", "4.7 T", "1.2 T"], 0, "B = F/(Il) = 0.0235 / (4.0 × 0.050) = 0.118 T."],
    ["In RP11, the e.m.f. is zero when the coil's normal is…", ["Parallel to the field", "At 45°", "Perpendicular to the field", "At 30°"], 2, "cos 90° = 0."],
    ["Doubling the distance from a γ source changes the corrected count rate by a factor of…", ["½", "¼", "2", "No change"], 1, "Inverse square."],
    ["In RP9, ln V against t has gradient −0.025 s^{−1}. RC = ?", ["40 s", "0.025 s", "25 s", "2.5 s"], 0, "1/0.025."]
  ]
});
