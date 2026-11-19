/* Section 7: Fields and their consequences */
REV.add({
  id: "f-gravity", section: "s7", title: "Gravitational fields and orbits", short: "Gravitational fields", glyph: "g = GM/r^{2}",
  spec: "3.7.1–3.7.2",
  summary: "**Newton's law of gravitation**, **field strength** g, **gravitational potential** V, **equipotentials**, and the physics of **orbits**, **geostationary satellites** and **escape velocity**.",
  notes: [
    { h: "Fields and Newton's law", list: [
      "A **force field** is a region in which a body experiences a non-contact force.",
      "**Newton's law of gravitation**: F = Gm_{1}m_{2}/r^{2} – an inverse-square law between point masses. G = 6.67 × 10^{−11} N m^{2} kg^{−2}.",
      "Gravity is always **attractive**."
    ]},
    { h: "Gravitational field strength", list: [
      "**g = F/m** – force per unit mass (N kg^{−1}).",
      "Radial field of a planet: **g = GM/r^{2}** (for r ≥ planet radius).",
      "Near the surface the field is approximately **uniform** – parallel, equally spaced field lines.",
      "Field lines point towards the mass."
    ]},
    { h: "Gravitational potential", list: [
      "**V** at a point = work done per unit mass in bringing a small mass from **infinity** to that point (J kg^{−1}).",
      "**V = −GM/r**. Always negative; zero at infinity.",
      "Work done moving mass m: **ΔW = mΔV**.",
      "**Equipotentials**: surfaces of equal potential; no work done moving along them; they're perpendicular to field lines.",
      "**g = −ΔV/Δr**: field strength is the negative potential gradient. Area under a g–r graph = ΔV."
    ]},
    { h: "Orbits", list: [
      "Gravity provides the centripetal force: GMm/r^{2} = mv^{2}/r → **v = √(GM/r)**.",
      "**Kepler's third law**: T^{2} = (4π^{2}/GM) r^{3}, so **T^{2} ∝ r^{3}**.",
      "Energy: total energy = KE + PE; a satellite in a lower orbit moves faster.",
      "**Escape velocity**: ½mv^{2} = GMm/r → **v = √(2GM/r)** (independent of the object's mass).",
      "**Geostationary satellite**: orbits above the **equator**, **period 24 hours**, same direction as Earth's rotation – stays above the same point. Orbital radius ≈ 4.2 × 10^{7} m (≈ 36 000 km above the surface). Used for communications and TV.",
      "**Low orbits** (e.g. polar orbits) are used for imaging, weather and spying – they cover the whole Earth as it rotates."
    ]}
  ],
  cards: [
    ["State Newton's law of gravitation.", "The force between two point masses is proportional to the product of the masses and inversely proportional to the square of their separation: F = Gm_{1}m_{2}/r^{2}."],
    ["Define gravitational field strength.", "Force per unit mass: g = F/m."],
    ["Field strength at distance r from a mass M?", "g = GM/r^{2}."],
    ["Define gravitational potential.", "The work done per unit mass in bringing a small mass from infinity to that point."],
    ["Formula for gravitational potential?", "V = −GM/r."],
    ["Why is gravitational potential negative?", "Zero is defined at infinity and gravity is attractive, so work must be done to move a mass back out to infinity."],
    ["What is an equipotential?", "A surface on which every point has the same potential; no work is done moving along it."],
    ["How is g related to potential?", "g = −ΔV/Δr (negative potential gradient)."],
    ["What is the relationship between orbital period and radius?", "T^{2} ∝ r^{3} (T^{2} = 4π^{2}r^{3}/GM)."],
    ["Orbital speed at radius r?", "v = √(GM/r)."],
    ["Write the escape velocity formula.", "v = √(2GM/r)."],
    ["Give three features of a geostationary orbit.", "Period 24 hours; above the equator; same direction as Earth's rotation."],
    ["What is a geostationary satellite used for?", "Communications and TV broadcasting."]
  ],
  quiz: [
    ["Doubling the distance between two masses changes the gravitational force by a factor of…", ["½", "¼", "2", "4"], 1, "Inverse square."],
    ["Earth's mass 6.0 × 10^{24} kg, radius 6.4 × 10^{6} m. g at the surface?", ["9.8 N kg^{−1}", "6.3 N kg^{−1}", "1.6 N kg^{−1}", "62 N kg^{−1}"], 0, "6.67 × 10^{−11} × 6.0 × 10^{24} / (6.4 × 10^{6})^{2} = 9.77."],
    ["Gravitational potential at Earth's surface (same data)?", ["−6.3 × 10^{7} J kg^{−1}", "−9.8 J kg^{−1}", "+6.3 × 10^{7} J kg^{−1}", "−4.0 × 10^{14} J kg^{−1}"], 0, "−GM/r = −6.25 × 10^{7} J kg^{−1}."],
    ["A satellite moves to an orbit of radius 4 times bigger. Its period changes by…", ["2", "4", "8", "16"], 2, "T ∝ r^{3/2} = 4^{1.5}."],
    ["Escape velocity from Earth (same data)?", ["7.9 km s^{−1}", "11 km s^{−1}", "3.1 km s^{−1}", "15.6 km s^{−1}"], 1, "√(2GM/r) = 1.12 × 10^{4} m s^{−1}."],
    ["Work done moving 1000 kg from V = −6.0 × 10^{7} to −4.0 × 10^{7} J kg^{−1}?", ["2.0 × 10^{10} J", "2.0 × 10^{7} J", "1.0 × 10^{11} J", "−2.0 × 10^{10} J"], 0, "mΔV = 1000 × 2.0 × 10^{7}."],
    ["The period of a geostationary satellite is…", ["90 minutes", "12 hours", "24 hours", "27 days"], 2, "Matches Earth's rotation."]
  ],
  exam: [
    { q: "Show that the orbital radius of a geostationary satellite is about 4.2 × 10^{7} m. (Mass of Earth = 6.0 × 10^{24} kg)", marks: 3, points: [
      "GMm/r^{2} = mω^{2}r → r^{3} = GMT^{2}/4π^{2}.",
      "T = 24 × 3600 = 86 400 s; r^{3} = 6.67 × 10^{−11} × 6.0 × 10^{24} × 86 400^{2} / 4π^{2} = 7.57 × 10^{22}.",
      "r = 4.23 × 10^{7} m."
    ]}
  ]
});

REV.add({
  id: "f-electric", section: "s7", title: "Electric fields and potential", short: "Electric fields", glyph: "E = V/d",
  spec: "3.7.3",
  summary: "**Coulomb's law**, **electric field strength** in uniform and radial fields, **electric potential**, the motion of charges in uniform fields, and the similarities and differences with **gravity**.",
  notes: [
    { h: "Coulomb's law", list: [
      "**F = Q_{1}Q_{2} / (4πε_{0}r^{2})** for point charges (in a vacuum; air is nearly the same). ε_{0} = 8.85 × 10^{−12} F m^{−1}.",
      "Like charges repel; unlike charges attract.",
      "For particles like protons, the electrostatic force vastly outweighs gravity."
    ]},
    { h: "Electric field strength", list: [
      "**E = F/Q** – force per unit positive charge (N C^{−1}).",
      "**Uniform field** between parallel plates: **E = V/d** (V m^{−1}).",
      "**Radial field** of a point charge: **E = Q / (4πε_{0}r^{2})**.",
      "Field lines go from positive to negative.",
      "A charged particle entering a uniform field at right angles follows a **parabola** (like a projectile): constant force parallel to the field, constant velocity perpendicular to it.",
      "Work done accelerating a charge through p.d. V: **ΔW = QΔV** (so ½mv^{2} = QV)."
    ]},
    { h: "Electric potential", list: [
      "**V** = work done per unit positive charge in moving a small charge from infinity to that point.",
      "**V = Q / (4πε_{0}r)** – positive near a positive charge, negative near a negative one.",
      "**E = ΔV/Δr** (magnitude) – field strength is the potential gradient. Area under an E–r graph = ΔV.",
      "Equipotentials are perpendicular to field lines."
    ]},
    { h: "Gravity vs electric fields", table: [
      ["", "Gravitational", "Electric"],
      ["Acts on", "Mass", "Charge"],
      ["Force law", "F = Gm_{1}m_{2}/r^{2}", "F = Q_{1}Q_{2}/(4πε_{0}r^{2})"],
      ["Direction", "Always attractive", "Attractive or repulsive"],
      ["Field strength", "g = F/m", "E = F/Q"],
      ["Potential", "V = −GM/r (always negative)", "V = Q/(4πε_{0}r) (sign of Q)"],
      ["Both", "Inverse-square forces; radial fields; equipotentials ⟂ field lines", ""]
    ]}
  ],
  cards: [
    ["State Coulomb's law.", "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance: F = Q_{1}Q_{2}/(4πε_{0}r^{2})."],
    ["Define electric field strength.", "Force per unit positive charge: E = F/Q."],
    ["Field strength between parallel plates?", "E = V/d."],
    ["Field strength of a point charge?", "E = Q/(4πε_{0}r^{2})."],
    ["Define electric potential.", "Work done per unit positive charge in bringing a small charge from infinity to that point."],
    ["Potential of a point charge?", "V = Q/(4πε_{0}r)."],
    ["How is E related to V?", "E = ΔV/Δr – the potential gradient."],
    ["What path does a charged particle follow entering a uniform field at right angles?", "A parabola."],
    ["Energy gained by a charge accelerated through p.d. V?", "QV."],
    ["Give one similarity and one difference between gravitational and electric fields.", "Similar: both inverse-square. Different: gravity only attracts; electric forces can attract or repel."],
    ["Why can gravity be ignored between two protons?", "The electrostatic force is about 10^{36} times larger."]
  ],
  quiz: [
    ["Plates 2.0 cm apart with 500 V across them. E = ?", ["25 000 V m^{−1}", "250 V m^{−1}", "10 V m^{−1}", "1.0 × 10^{4} V m^{−1}"], 0, "500 / 0.020."],
    ["Force on an electron in that field?", ["4.0 × 10^{−15} N", "8.0 × 10^{−17} N", "2.5 × 10^{4} N", "1.6 × 10^{−19} N"], 0, "eE = 1.60 × 10^{−19} × 25 000."],
    ["Halving the distance between two charges changes the force by…", ["×2", "×4", "×½", "×¼"], 1, "Inverse square."],
    ["Potential 0.10 m from a +2.0 nC charge?", ["180 V", "1800 V", "18 V", "1.8 × 10^{−7} V"], 0, "8.99 × 10^{9} × 2.0 × 10^{−9} / 0.10 = 180 V."],
    ["An electron is accelerated through 2000 V. Kinetic energy gained?", ["2000 J", "3.2 × 10^{−16} J", "1.25 × 10^{22} J", "1.6 × 10^{−19} J"], 1, "eV."],
    ["Which statement is true only for electric fields?", ["Inverse-square law", "Can be repulsive", "Has equipotentials", "Field lines show direction of force"], 1, "Gravity is only attractive."]
  ],
  exam: [
    { q: "An electron enters the uniform field between two horizontal plates moving horizontally. Describe and explain its path while between the plates.", marks: 4, points: [
      "A constant force acts on the electron towards the positive plate (F = eE).",
      "So it has constant acceleration perpendicular to the plates.",
      "Its horizontal velocity is unchanged (no horizontal force).",
      "So its path is a parabola, curving towards the positive plate."
    ]}
  ]
});

REV.add({
  id: "f-capacitance", section: "s7", title: "Capacitance and capacitor charge/discharge", short: "Capacitors", glyph: "Q = Q₀e^{−t/RC}",
  spec: "3.7.4",
  summary: "**C = Q/V**, parallel-plate capacitors and **dielectrics**, the **energy stored**, and the exponential **charging and discharging** through a resistor with **time constant RC**.",
  notes: [
    { h: "Capacitance", list: [
      "**C = Q/V** – charge stored per unit p.d. (farad, F = C V^{−1}).",
      "Parallel plates: **C = Aε_{0}ε_{r}/d**, where ε_{r} = relative permittivity (dielectric constant).",
      "**Dielectric action**: polar molecules in the dielectric align with the field; their own field opposes the applied one, reducing the p.d. for the same charge – so C increases."
    ]},
    { h: "Energy stored", list: [
      "**E = ½QV = ½CV^{2} = ½Q^{2}/C**.",
      "Equal to the **area under a Q–V graph** (a straight line through the origin).",
      "Charging from a battery: the battery supplies QV, half is stored, half is dissipated in the resistance."
    ]},
    { h: "Discharging through a resistor", list: [
      "**Q = Q_{0}e^{−t/RC}**; V and I follow the same shape: V = V_{0}e^{−t/RC}, I = I_{0}e^{−t/RC}.",
      "**Time constant RC**: the time for Q (or V, I) to fall to 1/e ≈ **37%** of its initial value.",
      "**Half-life** T_{½} = 0.69RC.",
      "Graph of **ln V against t** is a straight line with gradient **−1/RC** (Required Practical 9)."
    ]},
    { h: "Charging", list: [
      "**Q = Q_{0}(1 − e^{−t/RC})** and V = V_{0}(1 − e^{−t/RC}); the current falls exponentially: I = I_{0}e^{−t/RC}.",
      "After one time constant, the capacitor is about **63%** charged; after 5RC it is effectively fully charged.",
      "Gradient of a Q–t graph = current."
    ]}
  ],
  memory: ["After one **RC**: discharging → **37%** left; charging → **63%** full."],
  cards: [
    ["Define capacitance.", "Charge stored per unit potential difference: C = Q/V."],
    ["Write the parallel-plate capacitance formula.", "C = Aε_{0}ε_{r}/d."],
    ["How does a dielectric increase capacitance?", "Polar molecules align with the field, producing an opposing field that reduces the p.d. for a given charge."],
    ["Give three expressions for energy stored in a capacitor.", "E = ½QV = ½CV^{2} = ½Q^{2}/C."],
    ["What does the area under a Q–V graph show?", "Energy stored."],
    ["Write the discharge equation.", "Q = Q_{0}e^{−t/RC}."],
    ["Define the time constant.", "RC – the time for charge to fall to 1/e (37%) of its initial value when discharging."],
    ["How much charge is left after one time constant of discharge?", "About 37%."],
    ["How charged is a capacitor after one time constant of charging?", "About 63%."],
    ["Relate half-life to time constant.", "T_{½} = 0.69RC (= RC ln 2)."],
    ["What graph gives a straight line for discharge?", "ln V (or ln Q, ln I) against t; gradient = −1/RC."],
    ["When charged from a battery, what fraction of the energy supplied is stored?", "Half."]
  ],
  quiz: [
    ["A 470 µF capacitor is charged to 12 V. Charge stored?", ["5.6 × 10^{−3} C", "39 C", "2.6 × 10^{−5} C", "5.6 C"], 0, "Q = CV."],
    ["…energy stored?", ["34 mJ", "68 mJ", "2.8 mJ", "5.6 mJ"], 0, "½CV^{2} = 0.5 × 470 × 10^{−6} × 144 = 0.034 J."],
    ["Time constant of 100 µF with 20 kΩ?", ["0.20 s", "2.0 s", "2000 s", "5.0 s"], 1, "RC = 100 × 10^{−6} × 2.0 × 10^{4}."],
    ["A capacitor discharges from 10 V. Voltage after one time constant?", ["0 V", "3.7 V", "5.0 V", "6.3 V"], 1, "10 × e^{−1}."],
    ["Inserting a dielectric (ε_{r} = 4) between the plates multiplies C by…", ["¼", "2", "4", "16"], 2, "C ∝ ε_{r}."],
    ["Doubling the plate separation of a parallel-plate capacitor…", ["Doubles C", "Halves C", "Quadruples C", "No change"], 1, "C ∝ 1/d."],
    ["The gradient of ln V against t during discharge is −0.50 s^{−1}. RC = ?", ["0.50 s", "2.0 s", "−2.0 s", "0.69 s"], 1, "Gradient = −1/RC."]
  ],
  exam: [
    { q: "A 220 µF capacitor charged to 9.0 V discharges through a 47 kΩ resistor. Calculate the p.d. after 15 s.", marks: 3, points: [
      "RC = 220 × 10^{−6} × 47 × 10^{3} = 10.3 s.",
      "V = 9.0 × e^{−15/10.3} = 9.0 × e^{−1.45}.",
      "V = 2.1 V."
    ]},
    { q: "Describe how to determine the time constant of a capacitor–resistor circuit experimentally (Required Practical 9).", marks: 6, points: [
      "Charge the capacitor fully from a d.c. supply, then switch it to discharge through a known resistor.",
      "Voltmeter (or data logger) across the capacitor; record V at regular intervals (e.g. every 10 s) using a stopwatch.",
      "Choose R and C so RC is large enough (e.g. > 30 s) to read manually, or use a data logger.",
      "Repeat and average readings at each time.",
      "Plot ln V against t; it should be a straight line.",
      "Time constant RC = −1/gradient; compare with the value from labelled R and C."
    ]}
  ]
});

REV.add({
  id: "f-magnetic", section: "s7", title: "Magnetic fields and forces on charges", short: "Magnetic force", glyph: "F = BIl",
  spec: "3.7.5.1–3.7.5.2",
  summary: "**Magnetic flux density** B, the force on a **current-carrying wire** (F = BIl) and on a **moving charge** (F = BQv), **circular paths** of charged particles and the **cyclotron**.",
  notes: [
    { h: "Force on a current-carrying wire", list: [
      "**F = BIl** when the wire is perpendicular to the field (F = BIl sin θ in general).",
      "**Magnetic flux density B** (tesla, T): the force per unit current per unit length on a wire at right angles to the field. 1 T = 1 N A^{−1} m^{−1}.",
      "Direction from **Fleming's left-hand rule**: First finger = Field, seCond finger = Current, thuMb = Motion (force).",
      "Required Practical 10: measure F with a top-pan balance as I (or l) varies – gradient of F against I = Bl."
    ]},
    { h: "Force on a moving charge", list: [
      "**F = BQv** for a charge moving perpendicular to the field.",
      "The force is always perpendicular to the velocity, so it does no work – speed stays constant.",
      "So the particle moves in a **circle**: BQv = mv^{2}/r → **r = mv/(BQ)**.",
      "Heavier or faster particles make bigger circles; stronger field → smaller circle.",
      "Use Fleming's left-hand rule with the conventional current direction – for negative particles (electrons), current is opposite to their motion."
    ]},
    { h: "The cyclotron", list: [
      "Accelerates charged particles in a spiral: two D-shaped electrodes ('dees') in a uniform magnetic field with an alternating p.d. across the gap.",
      "Each time the particle crosses the gap it's accelerated; the magnetic field bends it round.",
      "The time per half-circle doesn't depend on speed (T = 2πm/BQ), so a fixed-frequency a.c. supply works (at non-relativistic speeds).",
      "Used to make radioactive tracers for medicine and for proton therapy."
    ]}
  ],
  cards: [
    ["Write the force on a current-carrying wire in a field.", "F = BIl (wire perpendicular to the field)."],
    ["Define magnetic flux density.", "The force per unit current per unit length on a wire placed at right angles to the field (1 T = 1 N A^{−1} m^{−1})."],
    ["What does each finger represent in Fleming's left-hand rule?", "First finger – field; second finger – current; thumb – force (motion)."],
    ["Force on a charge moving perpendicular to a magnetic field?", "F = BQv."],
    ["Why does a charged particle move in a circle in a magnetic field?", "The force is always perpendicular to its velocity, acting as a centripetal force."],
    ["Radius of a charged particle's circular path?", "r = mv/(BQ)."],
    ["Why doesn't the magnetic force change a particle's speed?", "It's perpendicular to the motion, so does no work."],
    ["What does a cyclotron do?", "Accelerates charged particles along a spiral path using a magnetic field and an alternating p.d. between two dees."],
    ["Why can a cyclotron use a constant-frequency supply?", "The time for each semicircle (πm/BQ) doesn't depend on the particle's speed (non-relativistic)."],
    ["Give a use of cyclotrons.", "Producing radioactive isotopes for medical tracers; proton therapy."]
  ],
  quiz: [
    ["A 0.20 m wire carries 3.0 A at right angles to a 0.050 T field. Force?", ["0.030 N", "3.0 N", "0.30 N", "12 N"], 0, "BIl."],
    ["Force on an electron at 2.0 × 10^{6} m s^{−1} perpendicular to 0.10 T?", ["3.2 × 10^{−14} N", "3.2 × 10^{−20} N", "2.0 × 10^{5} N", "1.6 × 10^{−13} N"], 0, "BQv = 0.10 × 1.60 × 10^{−19} × 2.0 × 10^{6}."],
    ["Radius of that electron's path?", ["1.1 × 10^{−4} m", "1.1 × 10^{−2} m", "0.11 m", "5.7 × 10^{−6} m"], 0, "r = mv/BQ = 9.11 × 10^{−31} × 2.0 × 10^{6} / (0.10 × 1.60 × 10^{−19}) = 1.14 × 10^{−4} m."],
    ["Doubling a particle's speed in a magnetic field makes its radius…", ["Halve", "Double", "Quadruple", "Unchanged"], 1, "r ∝ v."],
    ["A wire parallel to a magnetic field experiences…", ["Maximum force", "No force", "Half force", "A force along the wire"], 1, "sin 0° = 0."],
    ["The unit tesla is equivalent to…", ["N A m", "N A^{−1} m^{−1}", "Wb m^{2}", "V s"], 1, "From F = BIl."]
  ]
});

REV.add({
  id: "f-induction", section: "s7", title: "Electromagnetic induction, a.c. and transformers", short: "Induction and a.c.", glyph: "ε = NΔΦ/Δt",
  spec: "3.7.5.3–3.7.5.6",
  summary: "**Magnetic flux and flux linkage**, **Faraday's and Lenz's laws**, e.m.f. in moving rods and **rotating coils**, **alternating current** and **r.m.s.** values, the **oscilloscope**, and **transformers** and the **National Grid**.",
  notes: [
    { h: "Flux and flux linkage", list: [
      "**Magnetic flux** Φ = BA (weber, Wb) when the field is perpendicular to the area.",
      "**Flux linkage** = NΦ = BAN cos θ, where θ is the angle between the field and the **normal** to the coil (Wb-turns)."
    ]},
    { h: "Faraday's and Lenz's laws", list: [
      "**Faraday's law**: the induced e.m.f. equals the rate of change of flux linkage: **ε = N ΔΦ/Δt**.",
      "**Lenz's law**: the induced current flows in a direction that **opposes the change** that produced it (conservation of energy).",
      "Rod of length l moving at speed v through field B: **ε = Blv**.",
      "Coil rotating at angular speed ω: **ε = BANω sin ωt**; peak e.m.f. = BANω.",
      "Required Practical 11: measure the e.m.f. induced in a search coil as its angle to an alternating field changes – ε ∝ cos θ."
    ]},
    { h: "Alternating current", list: [
      "**Peak value** I_{0} or V_{0}; **peak-to-peak** = 2 × peak.",
      "**r.m.s. value**: the steady d.c. value that would give the same power. **I_{rms} = I_{0}/√2**, **V_{rms} = V_{0}/√2**.",
      "UK mains: 230 V r.m.s. (≈ 325 V peak), 50 Hz.",
      "**Oscilloscope**: y-gain (V per division) measures voltage; time-base (s per division) measures time, so period and frequency can be found."
    ]},
    { h: "Transformers", list: [
      "An alternating current in the primary coil produces a changing flux in the iron core, which induces an alternating e.m.f. in the secondary.",
      "**N_{s}/N_{p} = V_{s}/V_{p}**. Step-up: N_{s} > N_{p}.",
      "**Efficiency = I_{s}V_{s} / I_{p}V_{p}**. An ideal transformer is 100% efficient.",
      "Losses and fixes: **eddy currents** (laminated core); **resistance of coils** (thick, low-resistance copper wire); **hysteresis** (soft iron core); **flux leakage** (wind coils on top of each other)."
    ]},
    { h: "The National Grid", p: "Electricity is transmitted at **very high voltage** so the current is low. Power loss in cables = **I^{2}R**, so lower current means much less energy wasted. Step-up transformers at power stations; step-down transformers near homes." }
  ],
  memory: ["Lenz: nature **opposes** change – that's why a magnet falling through a copper tube slows down."],
  cards: [
    ["Define magnetic flux.", "Φ = BA – flux density × area perpendicular to the field (Wb)."],
    ["Define flux linkage.", "NΦ = BAN cos θ – flux × number of turns (Wb-turns)."],
    ["State Faraday's law.", "The induced e.m.f. is equal to the rate of change of flux linkage: ε = NΔΦ/Δt."],
    ["State Lenz's law.", "The direction of the induced current is such that it opposes the change producing it."],
    ["Induced e.m.f. in a rod moving through a field?", "ε = Blv."],
    ["E.m.f. of a coil rotating in a uniform field?", "ε = BANω sin ωt."],
    ["Define r.m.s. current.", "The value of steady direct current that would dissipate the same power in a resistor: I_{rms} = I_{0}/√2."],
    ["What do the y-gain and time-base of an oscilloscope set?", "y-gain: volts per division. Time-base: time per division."],
    ["Write the transformer turns ratio equation.", "N_{s}/N_{p} = V_{s}/V_{p}."],
    ["Write transformer efficiency.", "I_{s}V_{s} / I_{p}V_{p}."],
    ["How are eddy current losses reduced?", "By laminating the core (thin insulated layers)."],
    ["Why is electricity transmitted at high voltage?", "For the same power the current is lower, so I^{2}R losses in the cables are much smaller."],
    ["Name four causes of transformer energy loss.", "Eddy currents, coil resistance, hysteresis in the core, flux leakage."]
  ],
  quiz: [
    ["A 0.10 m^{2} coil of 200 turns is perpendicular to a 0.050 T field. Flux linkage?", ["1.0 Wb-turns", "0.0050 Wb-turns", "100 Wb-turns", "0.10 Wb-turns"], 0, "BAN = 0.050 × 0.10 × 200."],
    ["The field drops to zero in 0.20 s. Average e.m.f.?", ["5.0 V", "0.20 V", "1.0 V", "0.025 V"], 0, "1.0 / 0.20."],
    ["Peak voltage of 230 V r.m.s. mains?", ["163 V", "230 V", "325 V", "460 V"], 2, "230 × √2."],
    ["A transformer has 100 primary and 2500 secondary turns. With 12 V input, output?", ["0.48 V", "300 V", "12 V", "2500 V"], 1, "12 × 25."],
    ["A 1.5 m wing moves at 250 m s^{−1} through a 5.0 × 10^{−5} T vertical field. e.m.f.?", ["0.019 V", "19 V", "0.0075 V", "1.9 V"], 0, "Blv = 5.0 × 10^{−5} × 1.5 × 250 = 0.0188 V."],
    ["A transformer core is laminated to reduce…", ["Flux leakage", "Eddy currents", "Coil resistance", "Turns ratio"], 1, "Laminations break up eddy current paths."],
    ["Power is transmitted at 400 kV instead of 40 kV. Cable losses fall by a factor of…", ["10", "100", "1000", "√10"], 1, "I falls by 10; I^{2}R by 100."]
  ],
  exam: [
    { q: "A magnet is dropped through a long vertical copper tube. Explain why it falls more slowly than a non-magnetic object.", marks: 4, points: [
      "As the magnet falls, the flux through each section of the tube changes.",
      "An e.m.f. is induced (Faraday's law), causing eddy currents in the copper.",
      "By Lenz's law these currents produce a magnetic field that opposes the motion of the magnet.",
      "So there's an upward force on the magnet; its kinetic energy is converted to heat in the tube – it reaches a low terminal speed."
    ]},
    { q: "A step-down transformer converts 230 V to 12 V for a 36 W lamp. The primary current is 0.17 A. Calculate the efficiency.", marks: 2, points: [
      "Input power = 230 × 0.17 = 39.1 W.",
      "Efficiency = 36 / 39.1 = 0.92 (92%)."
    ]}
  ]
});
