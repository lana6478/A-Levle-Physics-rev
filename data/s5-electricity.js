/* Section 5: Electricity */
REV.add({
  id: "e-basics", section: "s5", title: "Current, p.d., resistance and resistivity", short: "Current and resistance", glyph: "V = IR",
  spec: "3.5.1.1–3.5.1.3",
  summary: "Define **current, potential difference and resistance**, interpret **I–V characteristics**, use **resistivity**, and explain how temperature and light affect **metals, thermistors and LDRs**, plus **superconductivity**.",
  notes: [
    { h: "Basic definitions", table: [
      ["Quantity", "Definition", "Unit"],
      ["Current I", "Rate of flow of charge: I = ΔQ/Δt", "A (= C s^{−1})"],
      ["Potential difference V", "Energy transferred per unit charge: V = W/Q", "V (= J C^{−1})"],
      ["Resistance R", "R = V/I", "Ω (= V A^{−1})"]
    ], after: "**Ohm's law**: for an ohmic conductor at constant temperature, I ∝ V. An ideal **ammeter** has zero resistance; an ideal **voltmeter** has infinite resistance." },
    { h: "I–V characteristics", table: [
      ["Component", "Graph shape", "Why"],
      ["Ohmic conductor (resistor at constant temperature)", "Straight line through the origin", "Constant resistance"],
      ["Filament lamp", "Curve that flattens at higher V (S-shape across both quadrants)", "Temperature rises → ions vibrate more → resistance increases"],
      ["Semiconductor diode", "Almost no current in reverse; current rises sharply above ≈ 0.6 V forward (silicon)", "Lets current flow one way only"]
    ]},
    { h: "Resistivity", list: [
      "**ρ = RA/L** (Ω m). It's a property of the material; resistance also depends on shape.",
      "Measured in Required Practical 5: plot R against L for a wire; gradient = ρ/A.",
      "**Metals**: resistance increases with temperature (lattice ions vibrate more, so more collisions).",
      "**NTC thermistor**: resistance **decreases** as temperature increases (more charge carriers released). Used as a temperature sensor.",
      "**LDR**: resistance decreases as light intensity increases."
    ]},
    { h: "Superconductivity", list: [
      "Below a **critical temperature**, some materials have **zero resistivity**.",
      "Uses: very strong electromagnets (MRI scanners, particle accelerators), lossless power cables.",
      "Challenge: critical temperatures are very low, so cooling is expensive."
    ]}
  ],
  cards: [
    ["Define current.", "The rate of flow of charge: I = ΔQ/Δt."],
    ["Define potential difference.", "The energy transferred per unit charge between two points: V = W/Q."],
    ["Define resistance.", "The ratio of potential difference to current: R = V/I."],
    ["State Ohm's law.", "For an ohmic conductor at constant temperature, current is directly proportional to potential difference."],
    ["Why does a filament lamp's resistance rise with current?", "It heats up, the metal ions vibrate more and electrons collide more often."],
    ["Describe the I–V characteristic of a silicon diode.", "Negligible current in reverse bias; in forward bias, current rises steeply above about 0.6 V."],
    ["Write the resistivity formula.", "ρ = RA/L."],
    ["What is the unit of resistivity?", "Ω m."],
    ["How does an NTC thermistor's resistance change with temperature?", "It decreases as temperature increases."],
    ["How does an LDR's resistance change with light?", "It decreases as light intensity increases."],
    ["What is superconductivity?", "Zero resistivity below a critical temperature."],
    ["Give two uses of superconductors.", "Strong magnets in MRI scanners and particle accelerators; lossless power transmission."],
    ["What is the resistance of an ideal voltmeter?", "Infinite."]
  ],
  quiz: [
    ["A charge of 30 C flows in 1.5 min. Current?", ["20 A", "0.33 A", "45 A", "2.0 A"], 1, "30 / 90 s."],
    ["12 J of energy is transferred to 4.0 C of charge. p.d.?", ["48 V", "3.0 V", "0.33 V", "16 V"], 1, "W/Q."],
    ["A wire of length 2.0 m and area 5.0 × 10^{−7} m^{2} has R = 0.068 Ω. Resistivity?", ["1.7 × 10^{−8} Ω m", "6.8 × 10^{−8} Ω m", "2.7 × 10^{5} Ω m", "1.7 × 10^{−6} Ω m"], 0, "ρ = RA/L = 0.068 × 5.0 × 10^{−7} / 2.0."],
    ["Doubling the length and doubling the diameter of a wire changes R by a factor of…", ["½", "1", "2", "4"], 0, "L × 2, A × 4 → R × ½."],
    ["Which component's I–V graph is a straight line through the origin?", ["Diode", "Filament lamp", "Fixed resistor at constant temperature", "Thermistor"], 2, "Ohmic."],
    ["When an NTC thermistor is heated, the current through it (fixed p.d.)…", ["Falls", "Rises", "Stays the same", "Reverses"], 1, "Resistance falls."],
    ["The unit of resistivity is…", ["Ω m^{−1}", "Ω m", "Ω m^{2}", "Ω"], 1, "RA/L → Ω m^{2}/m."]
  ],
  exam: [
    { q: "Explain, in terms of charge carriers, why the resistance of a metal wire increases but the resistance of an NTC thermistor decreases as temperature rises.", marks: 4, points: [
      "Metal: number of free electrons stays (about) the same.",
      "Lattice ions vibrate more, so electrons collide more often – drift is impeded, R increases.",
      "Thermistor (semiconductor): higher temperature releases many more charge carriers.",
      "This increase outweighs the extra vibration, so R decreases."
    ]}
  ]
});

REV.add({
  id: "e-circuits", section: "s5", title: "Circuits, potential dividers and internal resistance", short: "Circuits and e.m.f.", glyph: "ε = I(R + r)",
  spec: "3.5.1.4–3.5.1.6",
  summary: "Combine resistors, use **conservation of charge and energy** in circuits, calculate **power**, design **potential dividers** with sensors, and handle **e.m.f. and internal resistance**.",
  notes: [
    { h: "Resistors in combination", list: [
      "**Series**: R_{T} = R_{1} + R_{2} + R_{3} …",
      "**Parallel**: 1/R_{T} = 1/R_{1} + 1/R_{2} + 1/R_{3} … (total is less than the smallest).",
      "Two equal resistors in parallel give half of one."
    ]},
    { h: "Conservation laws in circuits", list: [
      "**Charge** (Kirchhoff's first law): current into a junction = current out.",
      "**Energy** (Kirchhoff's second law): around any closed loop, sum of e.m.f.s = sum of p.d.s.",
      "Series: same current, p.d.s add up. Parallel: same p.d., currents add up."
    ]},
    { h: "Power and energy", p: "**P = VI = I^{2}R = V^{2}/R**; energy **E = VIt**. Power companies charge per kWh." },
    { h: "Potential dividers", list: [
      "Two resistors in series across a supply split the p.d. in proportion to resistance: **V_{out} = V_{in} × R_{2}/(R_{1} + R_{2})**.",
      "Replace a resistor with a **thermistor** or **LDR** to make a sensor circuit; the output voltage changes with temperature or light.",
      "A variable resistor can set the switching point.",
      "A potentiometer (sliding contact) gives a continuously variable output from 0 to V_{in}."
    ]},
    { h: "E.m.f. and internal resistance", list: [
      "**E.m.f. ε**: the energy transferred to each coulomb of charge by the source: ε = E/Q.",
      "**Internal resistance r**: the source's own resistance; some energy is lost inside it as heat ('lost volts' = Ir).",
      "**ε = I(R + r)** and **terminal p.d. V = ε − Ir**.",
      "Graph of V against I (Required Practical 6): straight line, **y-intercept = ε**, **gradient = −r**.",
      "When the current is high, terminal p.d. falls further below ε."
    ]}
  ],
  memory: ["Series resistors **add**. Parallel resistors: **add the reciprocals**, then flip.", "**Lost volts** = Ir – 'e.m.f. minus lost volts = what's left for the circuit'."],
  cards: [
    ["Total resistance of resistors in series?", "R_{T} = R_{1} + R_{2} + …"],
    ["Total resistance of resistors in parallel?", "1/R_{T} = 1/R_{1} + 1/R_{2} + …"],
    ["State Kirchhoff's first law.", "The sum of currents entering a junction equals the sum leaving (conservation of charge)."],
    ["State Kirchhoff's second law.", "Around a closed loop, the sum of e.m.f.s equals the sum of p.d.s (conservation of energy)."],
    ["Give three equations for electrical power.", "P = VI = I^{2}R = V^{2}/R."],
    ["Write the potential divider equation.", "V_{out} = V_{in} × R_{2}/(R_{1} + R_{2})."],
    ["How does a thermistor in a potential divider make a temperature sensor?", "Its resistance changes with temperature, so its share of the supply p.d. – the output – changes."],
    ["Define e.m.f.", "The energy transferred by a source to each unit of charge passing through it: ε = E/Q."],
    ["What is internal resistance?", "The resistance of the source itself, which causes energy to be dissipated inside it."],
    ["Write the e.m.f. equation including internal resistance.", "ε = I(R + r), or V = ε − Ir."],
    ["What are 'lost volts'?", "The p.d. across the internal resistance, Ir."],
    ["On a V–I graph for a cell, what do the intercept and gradient give?", "y-intercept = e.m.f.; gradient = −r."]
  ],
  quiz: [
    ["Total resistance of 6.0 Ω and 3.0 Ω in parallel?", ["9.0 Ω", "2.0 Ω", "4.5 Ω", "0.50 Ω"], 1, "1/R = 1/6 + 1/3 = 1/2."],
    ["Power dissipated by a 4.0 Ω resistor carrying 3.0 A?", ["12 W", "36 W", "0.75 W", "48 W"], 1, "I^{2}R."],
    ["V_{in} = 12 V, R_{1} = 2.0 kΩ, R_{2} = 4.0 kΩ. V_{out} across R_{2}?", ["4.0 V", "6.0 V", "8.0 V", "12 V"], 2, "12 × 4/6."],
    ["A cell (ε = 1.5 V, r = 0.50 Ω) is connected to 2.5 Ω. Current?", ["0.50 A", "0.60 A", "3.0 A", "0.75 A"], 0, "1.5 / 3.0."],
    ["…terminal p.d.?", ["1.5 V", "1.25 V", "0.25 V", "1.0 V"], 1, "V = IR = 0.50 × 2.5."],
    ["In a potential divider with an LDR as R_{2}, it gets darker. V_{out} across the LDR…", ["Rises", "Falls", "Stays the same", "Becomes zero"], 0, "LDR resistance rises in the dark, taking a bigger share."],
    ["A V–I graph for a battery has intercept 9.0 V and gradient −1.5 V A^{−1}. Internal resistance?", ["9.0 Ω", "1.5 Ω", "6.0 Ω", "0.17 Ω"], 1, "r = −gradient."]
  ],
  exam: [
    { q: "A battery of e.m.f. 6.0 V and internal resistance 0.80 Ω is connected to two 4.0 Ω resistors in parallel. Calculate the current from the battery and the power wasted inside it.", marks: 4, points: [
      "Parallel resistance = 2.0 Ω.",
      "I = ε/(R + r) = 6.0 / 2.8 = 2.14 A.",
      "Power wasted = I^{2}r = 2.14^{2} × 0.80.",
      "= 3.7 W."
    ]},
    { q: "Design a circuit that switches on a lamp when it gets dark, using an LDR, a fixed resistor and a switching circuit that turns the lamp on when its input rises above 3 V. Explain how it works.", marks: 4, points: [
      "Potential divider: fixed resistor (or variable resistor) and LDR in series across the supply.",
      "Output taken across the LDR, connected to the switching circuit input.",
      "In the dark the LDR's resistance rises, so its share of the supply p.d. rises.",
      "When V_{out} exceeds 3 V the lamp switches on; a variable resistor lets the switching light level be adjusted."
    ]}
  ]
});
