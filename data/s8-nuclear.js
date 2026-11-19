/* Section 8: Nuclear physics */
REV.add({
  id: "n-radioactivity", section: "s8", title: "Rutherford scattering, radiation and radioactive decay", short: "Radioactivity", glyph: "N = N₀e^{−λt}",
  spec: "3.8.1.1–3.8.1.4",
  summary: "How **Rutherford scattering** revealed the nucleus, the properties and uses of **α, β and γ**, the **inverse-square law** for gamma, **background radiation**, and the maths of **radioactive decay** and **half-life**.",
  notes: [
    { h: "Rutherford scattering", table: [
      ["Observation", "Conclusion"],
      ["Most α particles pass straight through the gold foil", "The atom is mostly empty space"],
      ["Some are deflected", "The nucleus is positively charged (repels α)"],
      ["A very few bounce back (> 90°)", "The nucleus is very small and contains most of the mass"]
    ], after: "This replaced the 'plum pudding' model – an example of new evidence changing a scientific model." },
    { h: "α, β and γ radiation", table: [
      ["", "α", "β^{−}", "γ"],
      ["Nature", "Helium nucleus", "Fast electron", "EM wave"],
      ["Ionising", "Strongly", "Weakly", "Very weakly"],
      ["Range in air", "A few cm", "About 1 m", "Inverse-square – no fixed range"],
      ["Stopped by", "Paper / skin", "A few mm of aluminium", "Several cm of lead (reduced, not stopped)"],
      ["Example use", "Smoke alarms", "Thickness monitoring (paper, foil)", "Sterilising equipment, medical tracers"]
    ]},
    { h: "Inverse-square law for γ", list: [
      "Gamma from a point source spreads out: **I = k/x^{2}**.",
      "Measured in Required Practical 12: count rate against distance, corrected for background. The source's true position may be slightly inside the holder, so plot 1/√(count rate) against x – the x-intercept gives the offset."
    ]},
    { h: "Background radiation and safety", list: [
      "Sources: **radon gas** (largest), rocks and buildings, cosmic rays, food and drink, medical uses, nuclear industry and fallout.",
      "Always subtract background from measured count rates.",
      "Safe handling: tongs, keep at arm's length, minimise exposure time, store in lead-lined boxes, never point at people."
    ]},
    { h: "Radioactive decay", list: [
      "Decay is **random** (can't predict which nucleus) and **spontaneous** (unaffected by temperature, pressure etc.).",
      "**Decay constant λ**: probability of a nucleus decaying per unit time (s^{−1}).",
      "**Activity A = λN** (becquerel, Bq = decays per second). ΔN/Δt = −λN.",
      "**N = N_{0}e^{−λt}**; also A = A_{0}e^{−λt}.",
      "**Half-life T_{½} = ln 2/λ** ≈ 0.69/λ – the time for the number of nuclei (or activity) to halve.",
      "Plot **ln A against t**: straight line, gradient −λ.",
      "Uses of half-life: **radiocarbon dating** (C-14, T_{½} ≈ 5700 years); choosing **medical tracers** with short half-lives (hours) so patients aren't irradiated for long; **long-lived waste** needs safe storage for thousands of years."
    ]},
    { h: "Nuclear instability", list: [
      "On an N–Z graph, stable nuclei lie along a band (N ≈ Z for light nuclei, N > Z for heavier ones).",
      "Above the band (too many neutrons) → **β^{−}** decay. Below (too many protons) → **β^{+}** decay or **electron capture**. Very heavy nuclei (Z > 82) → **α** decay.",
      "After decay, a nucleus may be left in an **excited state** and emit a **γ** photon.",
      "**Technetium-99m**: a metastable state that emits only γ with a half-life of about 6 hours – ideal as a medical tracer."
    ]}
  ],
  cards: [
    ["What did most α particles passing straight through gold foil show?", "The atom is mostly empty space."],
    ["What did α particles bouncing back show?", "The nucleus is very small, dense and positively charged, containing most of the mass."],
    ["What stops α, β and γ radiation?", "α – paper; β – a few mm of aluminium; γ – reduced by several cm of lead."],
    ["Which radiation is most ionising?", "Alpha."],
    ["State the inverse-square law for gamma radiation.", "Intensity is inversely proportional to the square of the distance from a point source: I = k/x^{2}."],
    ["What is the largest source of background radiation in the UK?", "Radon gas."],
    ["Define the decay constant.", "The probability that a nucleus will decay per unit time."],
    ["Define activity.", "The number of nuclei decaying per second (Bq): A = λN."],
    ["Write the radioactive decay equation.", "N = N_{0}e^{−λt}."],
    ["Relate half-life and decay constant.", "T_{½} = ln 2/λ."],
    ["Why is Tc-99m a good medical tracer?", "It emits only γ (penetrates the body, weakly ionising) and has a short half-life of about 6 hours."],
    ["Which decay occurs in nuclei with too many neutrons?", "β^{−} decay."],
    ["Which decay occurs in nuclei with too many protons?", "β^{+} decay (or electron capture)."],
    ["Why is radioactive decay called random?", "You can't predict which nucleus will decay next or when – only the probability."],
    ["Give two safe-handling precautions for radioactive sources.", "Use tongs; keep at arm's length; minimise time; store in lead-lined boxes."]
  ],
  quiz: [
    ["A source's half-life is 8.0 days. Fraction left after 24 days?", ["1/3", "1/8", "1/16", "1/24"], 1, "Three half-lives: ½ × ½ × ½."],
    ["Decay constant for T_{½} = 30 s?", ["0.023 s^{−1}", "43 s^{−1}", "0.033 s^{−1}", "21 s^{−1}"], 0, "0.693 / 30."],
    ["A sample has 2.0 × 10^{20} nuclei and λ = 3.0 × 10^{−9} s^{−1}. Activity?", ["6.0 × 10^{11} Bq", "6.7 × 10^{28} Bq", "1.5 × 10^{−29} Bq", "2.0 × 10^{20} Bq"], 0, "A = λN."],
    ["Moving a γ source from 10 cm to 30 cm changes the intensity by a factor of…", ["1/3", "1/9", "3", "1/27"], 1, "Inverse square: (1/3)^{2}."],
    ["Which radiation is best for monitoring the thickness of paper?", ["α", "β", "γ", "Neutrons"], 1, "Partly absorbed by paper; changes with thickness."],
    ["A neutron-rich nucleus will most likely undergo…", ["α decay", "β^{−} decay", "β^{+} decay", "Electron capture"], 1, "Converts a neutron to a proton."],
    ["Which observation in Rutherford's experiment showed the nucleus is tiny?", ["Most went straight through", "Only a very small fraction bounced back", "All were deflected slightly", "The foil glowed"], 1, "Only a tiny target could cause so few large deflections."],
    ["Which is NOT affected by temperature?", ["Gas pressure", "Resistance of a metal", "Rate of radioactive decay", "Speed of sound in air"], 2, "Decay is spontaneous."]
  ],
  exam: [
    { q: "A tracer has a half-life of 6.0 hours and an initial activity of 400 MBq. Calculate its activity after 15 hours.", marks: 3, points: [
      "λ = ln 2 / 6.0 = 0.1155 h^{−1}.",
      "A = 400 × e^{−0.1155 × 15} = 400 × e^{−1.73}.",
      "A = 71 MBq."
    ]},
    { q: "Explain how the results of the α-particle scattering experiment led to the nuclear model of the atom.", marks: 6, points: [
      "Most α particles passed straight through undeflected → the atom is mostly empty space.",
      "Some were deflected through small angles → they passed near a concentrated positive charge (repulsion).",
      "A very small number were deflected through more than 90° → they approached a tiny, very dense, massive positive nucleus head-on.",
      "The plum pudding model predicted only tiny deflections, so it couldn't explain this.",
      "So the atom has a tiny central nucleus containing nearly all the mass and positive charge.",
      "Electrons occupy the space around it."
    ]}
  ]
});

REV.add({
  id: "n-nuclear", section: "s8", title: "Nuclear radius, binding energy, fission and fusion", short: "Binding energy", glyph: "E = mc^{2}",
  spec: "3.8.1.5–3.8.1.8",
  summary: "Estimating **nuclear radius** (closest approach and electron diffraction), **R = R₀A^{1/3}** and constant nuclear density, **mass defect** and **binding energy**, and how **fission and fusion** release energy – plus how a **nuclear reactor** works.",
  notes: [
    { h: "Nuclear radius", list: [
      "**Closest approach**: an α particle fired at a nucleus stops when its KE = electric PE: E_{k} = Q_{α}Q_{nucleus} / (4πε_{0}r). This gives an **upper limit** for the radius.",
      "**Electron diffraction**: high-energy electrons diffracted by nuclei give a diffraction pattern; the first minimum is at sin θ ≈ 1.22λ/2R. Electrons aren't affected by the strong force, so it's more accurate.",
      "**R = R_{0}A^{1/3}**, with R_{0} ≈ 1.2 fm (about 1.2 × 10^{−15} m).",
      "So nuclear volume ∝ A – all nuclei have roughly the **same density** (≈ 10^{17} kg m^{−3})."
    ]},
    { h: "Mass and energy", list: [
      "**E = mc^{2}**: mass and energy are equivalent.",
      "**Atomic mass unit**: 1 u = 1.661 × 10^{−27} kg ≡ **931.5 MeV**.",
      "**Mass defect**: the mass of a nucleus is **less** than the total mass of its separate nucleons.",
      "**Binding energy**: the energy needed to separate a nucleus into its individual nucleons (= mass defect × c^{2}).",
      "**Binding energy per nucleon** measures stability. It peaks around **iron-56** (≈ 8.8 MeV per nucleon)."
    ]},
    { h: "Fission and fusion", list: [
      "**Fission**: a heavy nucleus (e.g. U-235) absorbs a slow (thermal) neutron and splits into two smaller nuclei plus 2–3 neutrons, releasing energy. The products have higher binding energy per nucleon.",
      "**Fusion**: two light nuclei join to make a heavier one, again moving towards higher binding energy per nucleon – releasing energy.",
      "Fusion needs **extremely high temperatures** so nuclei move fast enough to overcome electrostatic repulsion and get close enough for the strong force.",
      "Energy released = (mass before − mass after) × c^{2}, or from the change in total binding energy."
    ]},
    { h: "Thermal nuclear reactors", table: [
      ["Part", "Job"],
      ["Fuel rods", "Enriched uranium – U-235 undergoes fission"],
      ["Moderator (water or graphite)", "Slows fast neutrons by elastic collisions so they're more likely to cause fission"],
      ["Control rods (e.g. boron)", "Absorb neutrons to control the rate of fission (one neutron per fission causing another = steady)"],
      ["Coolant (water or CO₂)", "Removes heat to make steam for turbines"]
    ], after: "**Chain reaction**: neutrons from one fission cause more fissions. **Critical mass**: minimum mass of fuel for a self-sustaining chain reaction. **Safety**: thick concrete shielding, emergency shutdown (control rods dropped fully in), remote handling. **Waste**: spent fuel is highly radioactive and hot – cooled in ponds, then vitrified and stored securely for a very long time." }
  ],
  cards: [
    ["How does α closest approach estimate nuclear radius?", "Set the α particle's initial KE equal to electric PE at closest approach: E_{k} = Q_{1}Q_{2}/(4πε_{0}r). This gives an upper limit."],
    ["Why is electron diffraction better for measuring nuclear radius?", "Electrons are leptons, so they don't feel the strong force – and they penetrate without being repelled."],
    ["How does nuclear radius depend on nucleon number?", "R = R_{0}A^{1/3}."],
    ["What does R ∝ A^{1/3} tell you about nuclear density?", "It's roughly the same for all nuclei."],
    ["Define mass defect.", "The difference between the total mass of the separate nucleons and the mass of the nucleus."],
    ["Define binding energy.", "The energy needed to separate a nucleus into its individual protons and neutrons."],
    ["What is 1 u in MeV?", "931.5 MeV."],
    ["Which nucleus has about the highest binding energy per nucleon?", "Iron-56 (about 8.8 MeV per nucleon)."],
    ["Why do both fission and fusion release energy?", "The products have a higher binding energy per nucleon than the reactants."],
    ["Why does fusion need very high temperatures?", "Nuclei need enough kinetic energy to overcome electrostatic repulsion and get within range of the strong force."],
    ["What does a moderator do?", "Slows neutrons by elastic collisions so they can cause fission."],
    ["What do control rods do?", "Absorb neutrons to control the chain reaction rate."],
    ["What is critical mass?", "The minimum mass of fissile material needed for a self-sustaining chain reaction."],
    ["What does the coolant do?", "Transfers heat from the core to make steam."]
  ],
  quiz: [
    ["Using R₀ = 1.2 fm, the radius of a nucleus with A = 125 is…", ["6.0 fm", "150 fm", "1.2 fm", "13 fm"], 0, "1.2 × 125^{1/3} = 1.2 × 5."],
    ["A mass defect of 0.0300 u corresponds to a binding energy of…", ["27.9 MeV", "0.0300 MeV", "931 MeV", "2.79 MeV"], 0, "0.0300 × 931.5."],
    ["Which releases energy?", ["Fission of iron", "Fusion of uranium", "Fusion of hydrogen", "Splitting helium-4"], 2, "Light nuclei fuse up the binding energy curve."],
    ["Boron control rods are lowered further into the reactor. The power output…", ["Increases", "Decreases", "Stays the same", "Becomes infinite"], 1, "More neutrons absorbed."],
    ["The moderator slows neutrons by…", ["Absorbing them", "Elastic collisions", "Fission", "Magnetic fields"], 1, "Similar-mass nuclei take the most energy per collision."],
    ["All nuclei have about the same density because…", ["R ∝ A", "Volume ∝ A", "Mass ∝ R", "R is constant"], 1, "R^{3} ∝ A."],
    ["Closest approach gives which kind of value for the nuclear radius?", ["Exact", "Lower limit", "Upper limit", "Average"], 2, "The α stops before touching the nucleus."]
  ],
  exam: [
    { q: "Calculate the binding energy per nucleon of helium-4. (Mass of He-4 nucleus = 4.00151 u; proton = 1.00728 u; neutron = 1.00867 u)", marks: 3, points: [
      "Mass of nucleons = 2 × 1.00728 + 2 × 1.00867 = 4.03190 u.",
      "Mass defect = 4.03190 − 4.00151 = 0.03039 u → BE = 0.03039 × 931.5 = 28.3 MeV.",
      "Per nucleon = 28.3 / 4 = 7.08 MeV."
    ]},
    { q: "An α particle of energy 5.0 MeV is fired head-on at a gold nucleus (Z = 79). Estimate the distance of closest approach.", marks: 3, points: [
      "E_{k} = 5.0 × 10^{6} × 1.60 × 10^{−19} = 8.0 × 10^{−13} J.",
      "r = Q_{α}Q_{Au} / (4πε_{0}E_{k}) = (2 × 1.60 × 10^{−19})(79 × 1.60 × 10^{−19}) / (4π × 8.85 × 10^{−12} × 8.0 × 10^{−13}).",
      "r ≈ 4.5 × 10^{−14} m."
    ]}
  ]
});
