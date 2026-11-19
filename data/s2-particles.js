/* Section 2: Particles and radiation */
REV.add({
  id: "pr-constituents", section: "s2", title: "Atoms, nuclei, decay, photons and antiparticles", short: "Atoms and antiparticles", glyph: "e⁺ e⁻",
  spec: "3.2.1.1–3.2.1.4",
  summary: "Inside the atom: protons, neutrons and electrons; **specific charge**; the **strong nuclear force**; **alpha and beta decay** (and why the **neutrino** was needed); **photons**; and **antiparticles**, **annihilation** and **pair production**.",
  notes: [
    { h: "Constituents of the atom", table: [
      ["Particle", "Charge / C", "Mass / kg"],
      ["Proton", "+1.60 × 10^{−19}", "1.673 × 10^{−27}"],
      ["Neutron", "0", "1.675 × 10^{−27}"],
      ["Electron", "−1.60 × 10^{−19}", "9.11 × 10^{−31}"]
    ], after: "**Specific charge** = charge ÷ mass (C kg^{−1}). Electron ≈ 1.76 × 10^{11}; proton ≈ 9.58 × 10^{7}. A nucleus is written ^{A}_{Z}X: **A** = nucleon number, **Z** = proton number. **Isotopes** have the same Z but different numbers of neutrons." },
    { h: "Strong nuclear force", list: [
      "Holds nucleons together against electrostatic repulsion between protons.",
      "**Attractive** up to about **3 fm**; **repulsive** below about **0.5 fm** (stops the nucleus collapsing).",
      "Very short range – it acts only between neighbouring nucleons, and acts equally on protons and neutrons."
    ]},
    { h: "Alpha and beta-minus decay", list: [
      "**α decay** (large nuclei): ^{A}_{Z}X → ^{A−4}_{Z−2}Y + ^{4}_{2}α.",
      "**β^{−} decay** (neutron-rich nuclei): a neutron becomes a proton: ^{A}_{Z}X → ^{A}_{Z+1}Y + ^{0}_{−1}β + ν̄_{e}.",
      "β particles come out with a **continuous range of energies**. To conserve energy (and momentum), Pauli proposed another particle carrying the rest – the (anti)**neutrino**."
    ]},
    { h: "Photons", p: "Electromagnetic radiation comes in packets called **photons**: **E = hf = hc/λ**, where h = 6.63 × 10^{−34} J s. Know the EM spectrum order: radio, microwave, infrared, visible, UV, X-ray, gamma (increasing frequency and photon energy)." },
    { h: "Antiparticles", list: [
      "Every particle has an antiparticle with the **same mass and rest energy** but **opposite charge** (and opposite baryon/lepton numbers).",
      "Pairs: electron e^{−} / positron e^{+}; proton / antiproton; neutron / antineutron; neutrino / antineutrino.",
      "Rest energies: electron 0.511 MeV; proton 938.3 MeV.",
      "**Annihilation**: particle + antiparticle → two photons (two, to conserve momentum). Minimum energy of each photon = rest energy of one particle: hf_{min} = E_{0}.",
      "**Pair production**: a photon becomes a particle–antiparticle pair, usually near a nucleus. Minimum photon energy = 2E_{0}.",
      "PET scanners detect the pairs of gamma photons from positron annihilation."
    ]}
  ],
  cards: [
    ["What is specific charge?", "Charge ÷ mass of a particle, in C kg^{−1}."],
    ["Which has the larger specific charge, an electron or a proton?", "The electron (about 1.76 × 10^{11} C kg^{−1} vs 9.58 × 10^{7})."],
    ["What are isotopes?", "Atoms with the same number of protons but different numbers of neutrons."],
    ["Over what range is the strong force attractive and repulsive?", "Attractive up to about 3 fm; repulsive below about 0.5 fm."],
    ["Write the equation for alpha decay.", "^{A}_{Z}X → ^{A−4}_{Z−2}Y + ^{4}_{2}α."],
    ["What changes inside the nucleus in β^{−} decay?", "A neutron becomes a proton, emitting an electron and an electron antineutrino."],
    ["Why was the neutrino hypothesised?", "Beta particles have a continuous range of energies, so another particle must carry away the missing energy (and momentum)."],
    ["What is the energy of a photon?", "E = hf = hc/λ."],
    ["What do a particle and its antiparticle share and differ in?", "Same mass and rest energy; opposite charge (and other quantum numbers)."],
    ["What happens in annihilation?", "A particle and its antiparticle meet and are converted into two photons."],
    ["What is pair production?", "A photon's energy is converted into a particle–antiparticle pair."],
    ["What is the minimum photon energy for electron–positron pair production?", "2 × 0.511 MeV = 1.022 MeV."],
    ["Why are two photons produced in annihilation?", "To conserve momentum."]
  ],
  quiz: [
    ["The nucleus ^{238}_{92}U undergoes α decay. The daughter is…", ["^{234}_{90}Th", "^{238}_{90}Th", "^{234}_{92}U", "^{238}_{93}Np"], 0, "A − 4, Z − 2."],
    ["What is emitted with the electron in β^{−} decay?", ["Electron neutrino", "Electron antineutrino", "Positron", "Proton"], 1, "Lepton number must be conserved: e^{−} (+1) and ν̄_{e} (−1)."],
    ["Energy of a photon of wavelength 500 nm?", ["4.0 × 10^{−19} J", "3.3 × 10^{−19} J", "1.3 × 10^{−27} J", "6.0 × 10^{14} J"], 0, "E = hc/λ = 6.63 × 10^{−34} × 3.00 × 10^{8} / 5.00 × 10^{−7} ≈ 3.98 × 10^{−19} J."],
    ["Minimum photon energy to create a proton–antiproton pair?", ["938 MeV", "1877 MeV", "0.511 MeV", "1.02 MeV"], 1, "2 × 938.3 MeV."],
    ["Which statement about the strong nuclear force is correct?", ["It's long range", "It acts only on protons", "It's repulsive at very short range", "It's weaker than gravity"], 2, "Repulsive below ~0.5 fm."],
    ["An antiproton has…", ["Charge +e, same mass as a proton", "Charge −e, same mass as a proton", "Charge 0", "Charge −e, mass of an electron"], 1, "Opposite charge, same mass."],
    ["Which has the largest specific charge?", ["Proton", "Neutron", "Electron", "Alpha particle"], 2, "Tiny mass."]
  ],
  exam: [
    { q: "An electron and a positron, each with negligible kinetic energy, annihilate. Calculate the wavelength of each photon produced.", marks: 3, points: [
      "Each photon has energy equal to the rest energy of one electron: 0.511 MeV = 0.511 × 10^{6} × 1.60 × 10^{−19} = 8.18 × 10^{−14} J.",
      "λ = hc/E = (6.63 × 10^{−34} × 3.00 × 10^{8}) / 8.18 × 10^{−14}.",
      "λ = 2.43 × 10^{−12} m."
    ]},
    { q: "Explain why the energy spectrum of β^{−} particles led scientists to predict the existence of the neutrino.", marks: 3, points: [
      "Each decay of a given isotope releases the same total energy.",
      "But β particles are emitted with a continuous range of kinetic energies (up to a maximum).",
      "So another (neutral, nearly massless) particle must carry away the remaining energy – the antineutrino."
    ]}
  ]
});

REV.add({
  id: "pr-interactions", section: "s2", title: "Particle interactions and exchange particles", short: "Interactions", glyph: "W^{±}",
  spec: "3.2.1.5",
  summary: "Forces between particles are carried by **exchange particles**. Know the four interactions, which exchange particle goes with each, and how to draw **Feynman diagrams** for beta decay, electron capture and electron–proton collisions.",
  notes: [
    { h: "Four fundamental interactions", table: [
      ["Interaction", "Exchange particle", "Acts on"],
      ["Electromagnetic", "Virtual photon (γ)", "Charged particles"],
      ["Weak", "W^{+} and W^{−} bosons", "All particles – causes changes of quark/particle type"],
      ["Strong", "Gluons (between quarks); pions (between nucleons)", "Hadrons only"],
      ["Gravity", "(Graviton – not on the specification)", "All particles with mass"]
    ]},
    { h: "Why exchange particles?", p: "Two particles 'throw' a virtual particle between them, which transfers momentum and energy – causing attraction or repulsion. Virtual particles exist only briefly. W bosons are very massive, which is why the weak interaction has a tiny range." },
    { h: "Weak interaction processes", table: [
      ["Process", "Equation", "W boson"],
      ["β^{−} decay", "n → p + e^{−} + ν̄_{e}", "W^{−} (d → u)"],
      ["β^{+} decay", "p → n + e^{+} + ν_{e}", "W^{+} (u → d)"],
      ["Electron capture", "p + e^{−} → n + ν_{e}", "W^{+} from proton to electron"],
      ["Electron–proton collision", "e^{−} + p → n + ν_{e}", "W^{−} from electron to proton"]
    ]},
    { h: "Drawing Feynman diagrams", list: [
      "Time runs up the page. Straight lines are particles; the wiggly/dashed line is the exchange particle.",
      "Particles going in at the bottom, out at the top. Each vertex must conserve charge.",
      "Draw the W going from the vertex that gives the right charge balance at both ends.",
      "In β^{−}: n → p at one vertex emits W^{−}; W^{−} → e^{−} + ν̄_{e} at the other."
    ]}
  ],
  cards: [
    ["What is the exchange particle of the electromagnetic interaction?", "The virtual photon."],
    ["What are the exchange particles of the weak interaction?", "W^{+} and W^{−} bosons."],
    ["What is the exchange particle of the strong force between nucleons?", "The pion (gluons act between quarks)."],
    ["Write the equation for β^{+} decay.", "p → n + e^{+} + ν_{e}."],
    ["Write the equation for electron capture.", "p + e^{−} → n + ν_{e}."],
    ["Which W boson is involved in β^{−} decay?", "W^{−}."],
    ["Which W boson is involved in β^{+} decay?", "W^{+}."],
    ["Why does the weak interaction have such a short range?", "Its exchange particles (W bosons) are very massive."],
    ["Which interaction changes quark type?", "The weak interaction."],
    ["What does an exchange particle transfer?", "Energy, momentum (and sometimes charge) between interacting particles."]
  ],
  quiz: [
    ["Which interaction is responsible for β decay?", ["Strong", "Weak", "Electromagnetic", "Gravity"], 1, "β decay changes quark flavour."],
    ["Two electrons repel by exchanging…", ["W^{+}", "Gluons", "Virtual photons", "Pions"], 2, "Electromagnetic interaction."],
    ["In electron capture the products are…", ["n + ν_{e}", "n + ν̄_{e}", "p + e^{+}", "n + e^{+}"], 0, "p + e^{−} → n + ν_{e}."],
    ["In β^{+} decay a quark changes from…", ["d to u", "u to d", "s to u", "u to s"], 1, "Proton (uud) → neutron (udd)."],
    ["Which particle mediates the strong force between a proton and neutron?", ["Photon", "W boson", "Pion", "Muon"], 2, "Pions between nucleons."],
    ["A Feynman vertex shows p → n. The emitted boson must be…", ["W^{+}", "W^{−}", "γ", "Z⁰"], 0, "Charge +1 → 0 + (+1)."]
  ]
});

REV.add({
  id: "pr-classification", section: "s2", title: "Classifying particles, quarks and conservation laws", short: "Hadrons, leptons, quarks", glyph: "uud",
  spec: "3.2.1.6–3.2.1.9",
  summary: "Particles split into **hadrons** (baryons and mesons, made of quarks) and **leptons**. Learn the quark make-up of common particles, **strangeness**, and which quantities are **conserved** in which interactions.",
  notes: [
    { h: "Hadrons", list: [
      "Feel the **strong** interaction. Made of quarks.",
      "**Baryons** – three quarks; baryon number B = +1 (antibaryons −1). The **proton is the only stable baryon**; all others eventually decay into a proton. Free neutrons decay by β^{−} (half-life about 10 minutes).",
      "**Mesons** – quark + antiquark; B = 0. **Pions** (π^{+}, π^{0}, π^{−}) are the exchange particle of the strong force between nucleons. **Kaons** (K^{+}, K^{0}, K^{−}) are heavier, strange and decay into pions."
    ]},
    { h: "Leptons", list: [
      "Don't feel the strong interaction. Fundamental (not made of quarks).",
      "Electron e^{−}, muon μ^{−}, electron neutrino ν_{e}, muon neutrino ν_{μ} (and their antiparticles).",
      "**Electron lepton number L_{e}** and **muon lepton number L_{μ}** are conserved **separately**. Leptons +1, antileptons −1.",
      "Muons are heavier than electrons and decay into them: μ^{−} → e^{−} + ν̄_{e} + ν_{μ}."
    ]},
    { h: "Quarks", table: [
      ["Quark", "Charge", "Baryon number", "Strangeness"],
      ["up u", "+⅔e", "+⅓", "0"],
      ["down d", "−⅓e", "+⅓", "0"],
      ["strange s", "−⅓e", "+⅓", "−1"]
    ], after: "Antiquarks have opposite charge, baryon number and strangeness (s̄ has S = +1)." },
    { h: "Quark compositions", table: [
      ["Particle", "Quarks"],
      ["Proton", "uud"], ["Neutron", "udd"],
      ["π^{+}", "u d̄"], ["π^{−}", "d ū"], ["π^{0}", "u ū or d d̄"],
      ["K^{+}", "u s̄ (S = +1)"], ["K^{−}", "s ū (S = −1)"], ["K^{0}", "d s̄ (S = +1)"]
    ]},
    { h: "Strange particles", list: [
      "Produced through the **strong** interaction (always in pairs, so strangeness is conserved) but decay through the **weak** interaction.",
      "Strangeness is **conserved in strong** interactions; in **weak** interactions it can change by 0, +1 or −1."
    ]},
    { h: "Conservation laws", table: [
      ["Quantity", "Conserved in"],
      ["Energy, momentum, charge", "All interactions"],
      ["Baryon number", "All interactions"],
      ["Lepton numbers L_{e} and L_{μ}", "All interactions (separately)"],
      ["Strangeness", "Strong and electromagnetic only – not always weak"]
    ]},
    { h: "Particle physics and the scientific community", p: "Particle physics relies on collaboration: huge accelerators funded by many countries, peer review, and predictions (e.g. new particles, the neutrino) confirmed later by experiment." }
  ],
  memory: ["**Baryon = three** quarks (think 'B for big'). **Meson = quark + antiquark** ('meso' = middle, two).", "Strange quark has **S = −1** – the sign is the 'odd' one."],
  cards: [
    ["What is a hadron?", "A particle that feels the strong interaction, made of quarks."],
    ["What is a baryon?", "A hadron made of three quarks (B = +1)."],
    ["What is a meson?", "A hadron made of a quark and an antiquark (B = 0)."],
    ["What is the only stable baryon?", "The proton."],
    ["What is a lepton?", "A fundamental particle that doesn't feel the strong interaction, e.g. electron, muon, neutrinos."],
    ["Quark composition of a proton and a neutron?", "Proton uud; neutron udd."],
    ["Quark composition of π^{+}?", "u d̄."],
    ["Quark composition of K^{+}?", "u s̄."],
    ["What is the charge of an up and a down quark?", "Up +⅔e; down −⅓e."],
    ["What is the strangeness of a strange quark?", "−1."],
    ["How are strange particles produced and how do they decay?", "Produced in pairs by the strong interaction; decay by the weak interaction."],
    ["Which quantity is not always conserved in weak interactions?", "Strangeness."],
    ["What do kaons decay into?", "Pions (and sometimes leptons)."],
    ["What does a muon decay into?", "An electron, an electron antineutrino and a muon neutrino."],
    ["Are L_{e} and L_{μ} conserved together or separately?", "Separately."]
  ],
  quiz: [
    ["Which is a meson?", ["Proton", "Pion", "Muon", "Neutrino"], 1, "Quark–antiquark."],
    ["Which is a lepton?", ["Kaon", "Neutron", "Muon", "Pion"], 2, "Muons are leptons."],
    ["What is the charge of a particle made of u u s?", ["+2e", "+e", "0", "−e"], 1, "+⅔ + ⅔ − ⅓ = +1."],
    ["Is p + p → p + p + π^{0} possible?", ["Yes", "No – charge not conserved", "No – baryon number not conserved", "No – lepton number not conserved"], 0, "Charge, baryon number all balance (given enough energy)."],
    ["Is p → n + e^{+} + ν̄_{e} possible?", ["Yes", "No – charge", "No – lepton number", "No – baryon number"], 2, "L_{e}: 0 → −1 + (−1) = −2. It should be ν_{e}."],
    ["K^{+} → π^{+} + π^{0} happens through which interaction?", ["Strong", "Weak", "Electromagnetic", "Gravity"], 1, "Strangeness changes from +1 to 0."],
    ["The strangeness of K^{−} (s ū) is…", ["+1", "0", "−1", "−2"], 2, "s has S = −1."],
    ["Which particle eventually all baryons decay into?", ["Neutron", "Proton", "Electron", "Pion"], 1, "The proton is stable."]
  ],
  exam: [
    { q: "A student suggests the reaction π^{−} + p → K^{0} + n. State, with a reason, whether this reaction is possible.", marks: 3, points: [
      "Charge: −1 + 1 = 0 → 0 + 0 = 0 ✓; baryon number: 0 + 1 = 1 → 0 + 1 = 1 ✓.",
      "Strangeness: 0 + 0 = 0 → K^{0} (d s̄) has S = +1, n has 0, total +1 ✗.",
      "This would be a strong interaction (hadrons), which must conserve strangeness – so it is not possible."
    ]}
  ]
});

REV.add({
  id: "pr-quantum", section: "s2", title: "Photoelectric effect, energy levels and wave–particle duality", short: "Quantum phenomena", glyph: "hf = φ + E_{k}",
  spec: "3.2.2",
  summary: "Evidence that light behaves as particles (**photoelectric effect**, **line spectra**) and that electrons behave as waves (**electron diffraction**), plus **excitation, ionisation** and the **de Broglie wavelength**.",
  notes: [
    { h: "The photoelectric effect", list: [
      "Shining EM radiation on a metal can release electrons – but only if the frequency is above the **threshold frequency** f_{0}, however bright the light.",
      "Emission is instant; above f_{0} the number of electrons per second ∝ intensity.",
      "**Wave theory can't explain** the threshold or the instant emission; the **photon model** can: one photon gives all its energy to one electron.",
      "**hf = φ + E_{k(max)}**, where φ is the **work function** (minimum energy to free an electron from the surface). Threshold: hf_{0} = φ.",
      "**Stopping potential** V_{s}: the p.d. needed to stop the fastest electrons: eV_{s} = E_{k(max)}.",
      "A graph of E_{k(max)} against f is a straight line: gradient = h, x-intercept = f_{0}, y-intercept = −φ."
    ]},
    { h: "Collisions of electrons with atoms", list: [
      "**Excitation**: an electron in an atom moves to a higher energy level after absorbing exactly the right energy (from a photon or a colliding electron).",
      "**Ionisation**: the electron is removed completely. The **ionisation energy** is the energy needed from the ground state.",
      "The **electronvolt**: 1 eV = 1.60 × 10^{−19} J."
    ]},
    { h: "Energy levels and spectra", list: [
      "Electrons in atoms can only have **discrete** energy levels (negative values, 0 = ionised).",
      "When an electron drops down a level, it emits a photon: **hf = E_{1} − E_{2}**.",
      "**Line emission spectra** (bright lines) and **absorption spectra** (dark lines on a continuous spectrum) prove discrete energy levels.",
      "**Fluorescent tube**: high-voltage electrons excite mercury atoms → they emit UV → the phosphor coating absorbs UV and re-emits visible light."
    ]},
    { h: "Wave–particle duality", list: [
      "Light: **diffraction/interference** shows wave nature; **photoelectric effect** shows particle nature.",
      "Electrons: **electron diffraction** (rings through a thin graphite target) shows wave nature.",
      "**de Broglie wavelength**: **λ = h/mv** = h/p.",
      "Faster electrons (higher accelerating voltage) → shorter λ → smaller diffraction rings.",
      "Scientific ideas change when new evidence appears – both wave and particle models are needed."
    ]}
  ],
  memory: ["Photoelectric: **energy in = energy to escape + energy left over**."],
  cards: [
    ["What is the threshold frequency?", "The minimum frequency of EM radiation that will release electrons from a metal surface."],
    ["What is the work function?", "The minimum energy needed to remove an electron from the surface of a metal."],
    ["State the photoelectric equation.", "hf = φ + E_{k(max)}."],
    ["What is the stopping potential?", "The minimum potential difference needed to stop the most energetic photoelectrons: eV_{s} = E_{k(max)}."],
    ["Why can't the wave model explain the photoelectric effect?", "It predicts any frequency would eventually release electrons and that brighter light gives faster electrons; neither happens. Emission is also instant."],
    ["What does increasing intensity do above f_{0}?", "Increases the number of electrons emitted per second, not their maximum kinetic energy."],
    ["What is excitation?", "An electron moving to a higher energy level in an atom."],
    ["What is ionisation?", "Removing an electron from an atom completely."],
    ["What energy photon is emitted when an electron falls between levels?", "hf = E_{1} − E_{2} (the difference between the levels)."],
    ["How does a fluorescent tube produce visible light?", "Electrons excite mercury atoms, which emit UV; the phosphor coating absorbs UV and emits visible light."],
    ["What is the de Broglie wavelength?", "λ = h/mv – the wavelength of a moving particle."],
    ["What evidence shows electrons behave as waves?", "Electron diffraction."],
    ["What happens to diffraction rings if electrons go faster?", "λ decreases, so the rings get smaller (less diffraction)."],
    ["On a graph of E_{k(max)} against f, what is the gradient?", "Planck's constant h."]
  ],
  quiz: [
    ["A metal has work function 2.3 eV. Light of photon energy 3.0 eV falls on it. E_{k(max)}?", ["5.3 eV", "0.7 eV", "2.3 eV", "1.3 eV"], 1, "3.0 − 2.3 = 0.7 eV."],
    ["Doubling the intensity of light above threshold…", ["Doubles E_{k(max)}", "Doubles the number of photoelectrons per second", "Halves the threshold frequency", "Has no effect"], 1, "More photons, same energy each."],
    ["An electron drops from −3.4 eV to −13.6 eV. Photon energy?", ["10.2 eV", "17.0 eV", "3.4 eV", "13.6 eV"], 0, "−3.4 − (−13.6) = 10.2 eV."],
    ["De Broglie wavelength of an electron at 2.0 × 10^{6} m s^{−1}?", ["3.6 × 10^{−10} m", "3.6 × 10^{−13} m", "1.2 × 10^{−9} m", "7.3 × 10^{−4} m"], 0, "λ = 6.63 × 10^{−34} / (9.11 × 10^{−31} × 2.0 × 10^{6}) = 3.6 × 10^{−10} m."],
    ["Which shows the particle nature of light?", ["Diffraction", "Interference", "Photoelectric effect", "Polarisation"], 2, "Photons."],
    ["Dark lines in the spectrum of starlight are evidence of…", ["Emission", "Absorption by atoms with discrete energy levels", "Diffraction", "Pair production"], 1, "Absorption spectrum."],
    ["The stopping potential is 1.5 V. E_{k(max)} is…", ["1.5 J", "1.5 eV", "2.4 × 10^{−19} eV", "0.67 eV"], 1, "eV_{s} = 1.5 eV (= 2.4 × 10^{−19} J)."]
  ],
  exam: [
    { q: "Explain how the photon model accounts for the existence of a threshold frequency in the photoelectric effect.", marks: 4, points: [
      "Light consists of photons, each with energy E = hf.",
      "Each electron absorbs the energy of one photon (one-to-one interaction).",
      "An electron needs at least the work function φ to escape the surface.",
      "If hf < φ, no single photon has enough energy, so no electrons are emitted however intense the light – threshold f_{0} = φ/h."
    ]},
    { q: "Ultraviolet light of wavelength 220 nm falls on a zinc plate of work function 4.3 eV. Calculate the maximum speed of the photoelectrons.", marks: 4, points: [
      "E = hc/λ = 6.63 × 10^{−34} × 3.00 × 10^{8} / 2.20 × 10^{−7} = 9.04 × 10^{−19} J.",
      "φ = 4.3 × 1.60 × 10^{−19} = 6.88 × 10^{−19} J.",
      "E_{k(max)} = 9.04 − 6.88 = 2.16 × 10^{−19} J.",
      "v = √(2E_{k}/m) = √(2 × 2.16 × 10^{−19} / 9.11 × 10^{−31}) = 6.9 × 10^{5} m s^{−1}."
    ]}
  ]
});
