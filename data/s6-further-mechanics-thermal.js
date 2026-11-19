/* Section 6: Further mechanics (6.1, Paper 1) and thermal physics (6.2, Paper 2) */
REV.add({
  id: "fm-circular", section: "s6", title: "Circular motion", short: "Circular motion", glyph: "a = ω^{2}r",
  spec: "3.6.1.1",
  summary: "An object moving in a circle at constant speed is **accelerating towards the centre**. Use **radians**, **angular speed**, **centripetal acceleration** and **centripetal force**.",
  notes: [
    { h: "Radians and angular speed", list: [
      "**Radian**: angle (rad) = arc length ÷ radius. One full turn = 2π rad.",
      "**Angular speed ω** = angle turned per second: **ω = v/r = 2πf** (rad s^{−1}).",
      "Frequency f = revolutions per second; period T = 1/f."
    ]},
    { h: "Centripetal acceleration and force", list: [
      "Speed is constant but **direction keeps changing**, so velocity changes – the object is accelerating.",
      "**a = v^{2}/r = ω^{2}r**, directed towards the centre.",
      "A resultant force towards the centre is needed: **F = mv^{2}/r = mω^{2}r**.",
      "This **centripetal force** is provided by something real: tension, friction, gravity, the normal reaction.",
      "It's perpendicular to the velocity, so it does **no work** – kinetic energy stays constant."
    ]},
    { h: "Worked situations", list: [
      "**Car on a flat bend**: friction provides mv^{2}/r. Too fast → not enough friction → skids outwards.",
      "**Mass on a string in a vertical circle**: at the top T + mg = mv^{2}/r; at the bottom T − mg = mv^{2}/r. Tension is greatest at the bottom.",
      "**Satellite**: gravity provides the centripetal force (see gravitational fields)."
    ]}
  ],
  cards: [
    ["Define the radian.", "The angle subtended at the centre of a circle by an arc equal in length to the radius."],
    ["How many radians in a full circle?", "2π."],
    ["Write two expressions for angular speed.", "ω = v/r = 2πf."],
    ["Why is an object moving in a circle at constant speed accelerating?", "Its direction, and so its velocity, is continuously changing."],
    ["Write two expressions for centripetal acceleration.", "a = v^{2}/r = ω^{2}r."],
    ["In which direction does centripetal force act?", "Towards the centre of the circle."],
    ["Why does a centripetal force do no work?", "It is always perpendicular to the direction of motion."],
    ["What provides the centripetal force for a car on a flat bend?", "Friction between the tyres and the road."],
    ["Where is the tension greatest for a mass swung in a vertical circle?", "At the bottom (T = mv^{2}/r + mg)."]
  ],
  quiz: [
    ["A wheel turns at 4.0 revolutions per second. ω = ?", ["4.0 rad s^{−1}", "8.0 rad s^{−1}", "25 rad s^{−1}", "0.64 rad s^{−1}"], 2, "2π × 4.0 = 25.1 rad s^{−1}."],
    ["A 0.20 kg mass moves at 3.0 m s^{−1} in a circle of radius 0.50 m. Centripetal force?", ["1.2 N", "3.6 N", "0.60 N", "18 N"], 1, "mv^{2}/r = 0.20 × 9 / 0.50."],
    ["If the speed doubles at the same radius, the centripetal force…", ["Doubles", "Quadruples", "Halves", "Stays the same"], 1, "F ∝ v^{2}."],
    ["A car of mass 1000 kg rounds a 50 m radius bend at 15 m s^{−1}. Friction needed?", ["300 N", "4500 N", "750 N", "15 000 N"], 1, "1000 × 225 / 50."],
    ["30° in radians is…", ["π/3", "π/6", "π/4", "π/2"], 1, "30/180 × π."],
    ["The centripetal force on a satellite in orbit is provided by…", ["Air resistance", "Thrust", "Gravity", "The normal force"], 2, "Gravitational attraction."]
  ],
  exam: [
    { q: "A 0.15 kg ball on a 0.60 m string is swung in a vertical circle at a constant 4.0 m s^{−1}. Calculate the tension at the top and at the bottom of the circle.", marks: 4, points: [
      "mv^{2}/r = 0.15 × 16 / 0.60 = 4.0 N; weight = 0.15 × 9.81 = 1.47 N.",
      "Top: T + mg = mv^{2}/r → T = 4.0 − 1.47 = 2.5 N.",
      "Bottom: T − mg = mv^{2}/r → T = 4.0 + 1.47.",
      "= 5.5 N."
    ]}
  ]
});

REV.add({
  id: "fm-shm", section: "s6", title: "Simple harmonic motion, resonance and damping", short: "SHM and resonance", glyph: "a = −ω^{2}x",
  spec: "3.6.1.2–3.6.1.4",
  summary: "**SHM**: acceleration proportional to displacement and directed towards equilibrium. Know the equations, graphs and energy changes, the **mass–spring** and **pendulum** periods, and **forced vibrations, resonance and damping**.",
  notes: [
    { h: "Defining SHM", list: [
      "**a ∝ −x**: acceleration is proportional to displacement from equilibrium and in the **opposite direction**.",
      "**a = −ω^{2}x**, where ω = 2πf.",
      "**x = A cos ωt** (starting at maximum displacement).",
      "**v = ±ω√(A^{2} − x^{2})**. Maximum speed **v_{max} = ωA** (at equilibrium).",
      "Maximum acceleration **a_{max} = ω^{2}A** (at maximum displacement).",
      "The period doesn't depend on amplitude (**isochronous**)."
    ]},
    { h: "Graphs", list: [
      "x–t is a cosine; v–t is a −sine (¼ cycle ahead of x); a–t is a −cosine (antiphase with x).",
      "Velocity = gradient of x–t; acceleration = gradient of v–t.",
      "a–x graph: straight line through the origin with negative gradient −ω^{2}."
    ]},
    { h: "Energy in SHM", p: "Total energy (KE + PE) stays constant with no damping. KE is maximum at equilibrium, PE is maximum at maximum displacement. KE–x is an inverted parabola; PE–x is a parabola. Total energy ∝ A^{2}." },
    { h: "Simple harmonic systems", table: [
      ["System", "Period", "Notes"],
      ["Mass on a spring", "**T = 2π√(m/k)**", "Independent of g and amplitude"],
      ["Simple pendulum", "**T = 2π√(l/g)**", "Small angles only (below about 10°); independent of mass"]
    ], after: "Investigate these in Required Practical 7: plot T^{2} against m (gradient 4π^{2}/k) or T^{2} against l (gradient 4π^{2}/g)." },
    { h: "Forced vibrations and resonance", list: [
      "**Free vibration**: oscillates at its **natural frequency** with no external driving force.",
      "**Forced vibration**: a periodic driving force makes it oscillate at the **driving frequency**.",
      "**Resonance**: when the driving frequency equals the natural frequency, amplitude is maximum; the driver and oscillator are a quarter cycle (π/2) out of phase, and energy transfer is most efficient.",
      "At low driving frequency: in phase. Well above natural frequency: antiphase (π)."
    ]},
    { h: "Damping", list: [
      "**Damping** removes energy from an oscillating system (friction, air resistance), reducing amplitude.",
      "**Light damping**: amplitude decays gradually; period roughly unchanged.",
      "**Critical damping**: returns to equilibrium in the shortest time without oscillating (e.g. car suspension).",
      "**Heavy (over) damping**: returns slowly without oscillating.",
      "More damping → lower, broader resonance peak, at a slightly lower frequency.",
      "Resonance can be useful (radio tuning, musical instruments) or harmful (bridges, buildings in earthquakes)."
    ]}
  ],
  memory: ["**Max v at the middle, max a at the ends.**", "Pendulum period ignores the mass; spring period ignores g."],
  cards: [
    ["State the condition for SHM.", "Acceleration is proportional to displacement and directed towards the equilibrium position: a = −ω^{2}x."],
    ["What is the maximum speed in SHM?", "v_{max} = ωA, at the equilibrium position."],
    ["What is the maximum acceleration in SHM?", "a_{max} = ω^{2}A, at maximum displacement."],
    ["Write the displacement equation for SHM starting at maximum displacement.", "x = A cos ωt."],
    ["Write the velocity equation for SHM.", "v = ±ω√(A^{2} − x^{2})."],
    ["What is the phase relationship between displacement and acceleration in SHM?", "Antiphase (π rad)."],
    ["Period of a mass on a spring?", "T = 2π√(m/k)."],
    ["Period of a simple pendulum?", "T = 2π√(l/g) (small angles)."],
    ["How does total energy depend on amplitude in SHM?", "Total energy ∝ A^{2}."],
    ["What is resonance?", "When the driving frequency equals the natural frequency, giving maximum amplitude."],
    ["What is the phase difference between driver and oscillator at resonance?", "π/2 (a quarter cycle)."],
    ["What is critical damping?", "Damping that returns the system to equilibrium in the shortest time without oscillating."],
    ["How does damping affect a resonance curve?", "Lower, broader peak, at a slightly lower frequency."],
    ["Give a useful and a harmful example of resonance.", "Useful: radio tuning, instruments. Harmful: bridges or buildings oscillating dangerously."]
  ],
  quiz: [
    ["An oscillator has amplitude 0.050 m and f = 2.0 Hz. v_{max}?", ["0.10 m s^{−1}", "0.63 m s^{−1}", "0.20 m s^{−1}", "7.9 m s^{−1}"], 1, "ωA = 4π × 0.050 = 0.628 m s^{−1}."],
    ["…and a_{max}?", ["7.9 m s^{−2}", "0.63 m s^{−2}", "1.6 m s^{−2}", "0.20 m s^{−2}"], 0, "ω^{2}A = (4π)^{2} × 0.050 = 7.9 m s^{−2}."],
    ["Period of a 0.40 kg mass on a 40 N m^{−1} spring?", ["0.63 s", "0.10 s", "6.3 s", "1.0 s"], 0, "2π√(0.01) = 0.628 s."],
    ["A pendulum's length is quadrupled. Its period…", ["Doubles", "Quadruples", "Halves", "Unchanged"], 0, "T ∝ √l."],
    ["Where is kinetic energy greatest in SHM?", ["Maximum displacement", "Equilibrium position", "Halfway", "It's constant"], 1, "Speed is maximum there."],
    ["Car suspension is designed to be…", ["Undamped", "Lightly damped", "Critically damped", "Resonant"], 2, "Returns quickly without bouncing."],
    ["A pendulum of length 1.0 m on Earth (g = 9.81) has period…", ["1.0 s", "2.0 s", "3.1 s", "6.3 s"], 1, "2π√(1/9.81) = 2.006 s."],
    ["Doubling the amplitude of an SHM oscillator multiplies its total energy by…", ["2", "4", "√2", "1"], 1, "E ∝ A^{2}."]
  ],
  exam: [
    { q: "Describe how you would use a simple pendulum to determine g. Include how you would reduce uncertainties.", marks: 6, points: [
      "Measure length l from the pivot to the centre of the bob with a metre rule (and use a set square/fiducial marker).",
      "Displace by a small angle (< 10°) and release; time 10 (or 20) oscillations with a stopwatch, using a fiducial marker at the equilibrium position.",
      "Repeat each timing and take a mean; divide by number of oscillations for T.",
      "Repeat for at least 6 different lengths.",
      "Plot T^{2} against l: straight line through origin, gradient = 4π^{2}/g, so g = 4π^{2}/gradient.",
      "Timing many oscillations and repeating reduces the effect of reaction time (random error)."
    ]}
  ]
});

REV.add({
  id: "th-thermal", section: "s6", title: "Thermal energy transfer and internal energy", short: "Thermal energy", glyph: "Q = mcΔθ",
  spec: "3.6.2.1",
  summary: "**Internal energy**, **specific heat capacity** and **specific latent heat**, the kelvin scale and **absolute zero**, and why temperature stays constant during a **change of state**.",
  notes: [
    { h: "Internal energy", list: [
      "**Internal energy** = the sum of the randomly distributed **kinetic and potential energies** of all the molecules in a system.",
      "It can be increased by heating it or doing work on it (first law of thermodynamics idea).",
      "Temperature relates to the average kinetic energy of the molecules.",
      "**Absolute zero** (0 K = −273 °C): the lowest possible temperature, where molecules have minimum internal energy. T (K) = θ (°C) + 273."
    ]},
    { h: "Specific heat capacity", list: [
      "**Specific heat capacity c**: the energy needed to raise the temperature of 1 kg of a substance by 1 K: **Q = mcΔθ** (J kg^{−1} K^{−1}).",
      "Water c ≈ 4200 J kg^{−1} K^{−1}.",
      "Continuous-flow heating: Q per second = (mass per second) × c × Δθ.",
      "Measure c with an electrical heater: energy = VIt; reduce heat loss with insulation."
    ]},
    { h: "Specific latent heat", list: [
      "**Specific latent heat L**: energy needed to change the state of 1 kg of a substance without a change in temperature: **Q = mL** (J kg^{−1}).",
      "**Fusion** – solid ↔ liquid. **Vaporisation** – liquid ↔ gas. Vaporisation needs much more energy (molecules separate completely).",
      "During a change of state, energy goes into **potential energy** (breaking bonds), so the **temperature stays constant** – shown as flat sections on a heating curve."
    ]}
  ],
  cards: [
    ["Define internal energy.", "The sum of the randomly distributed kinetic and potential energies of the molecules in a system."],
    ["Define specific heat capacity.", "The energy required to raise the temperature of 1 kg of a substance by 1 K."],
    ["Write the specific heat capacity equation.", "Q = mcΔθ."],
    ["Define specific latent heat.", "The energy required to change the state of 1 kg of a substance without changing its temperature."],
    ["Write the specific latent heat equation.", "Q = mL."],
    ["Why does temperature stay constant during melting?", "Energy is used to increase the molecules' potential energy (breaking bonds), not their kinetic energy."],
    ["What is absolute zero?", "0 K (−273 °C) – the temperature at which molecules have minimum internal energy."],
    ["Convert 27 °C to kelvin.", "300 K."],
    ["Why is the latent heat of vaporisation larger than of fusion?", "Molecules must be separated completely (and work done against the atmosphere), which needs more energy than loosening bonds."]
  ],
  quiz: [
    ["Energy to heat 2.0 kg of water from 20 °C to 80 °C (c = 4200)?", ["1.7 × 10^{5} J", "5.0 × 10^{5} J", "6.7 × 10^{5} J", "8.4 × 10^{3} J"], 1, "2.0 × 4200 × 60 = 5.04 × 10^{5} J."],
    ["Energy to melt 0.50 kg of ice (L = 3.3 × 10^{5} J kg^{−1})?", ["1.7 × 10^{5} J", "6.6 × 10^{5} J", "3.3 × 10^{5} J", "1.5 J"], 0, "mL."],
    ["−73 °C in kelvin?", ["200 K", "346 K", "−200 K", "73 K"], 0, "−73 + 273."],
    ["During boiling, the supplied energy mainly increases the molecules'…", ["Kinetic energy", "Potential energy", "Speed", "Mass"], 1, "Temperature constant."],
    ["A 2.0 kW kettle heats 1.0 kg of water by 50 K. Minimum time? (c = 4200)", ["105 s", "210 s", "420 s", "25 s"], 0, "Q = 210 000 J; t = Q/P = 105 s."],
    ["Water flows at 0.050 kg s^{−1} through a 3.0 kW heater. Temperature rise? (c = 4200)", ["14 K", "0.71 K", "60 K", "1.4 K"], 0, "3000 / (0.050 × 4200) = 14.3 K."]
  ],
  exam: [
    { q: "0.20 kg of ice at −10 °C is heated until it becomes water at 30 °C. Calculate the total energy needed. (c_{ice} = 2100, c_{water} = 4200 J kg^{−1} K^{−1}, L_{f} = 3.3 × 10^{5} J kg^{−1})", marks: 4, points: [
      "Heat ice to 0 °C: 0.20 × 2100 × 10 = 4200 J.",
      "Melt: 0.20 × 3.3 × 10^{5} = 66 000 J.",
      "Heat water to 30 °C: 0.20 × 4200 × 30 = 25 200 J.",
      "Total = 95 400 J ≈ 9.5 × 10^{4} J."
    ]}
  ]
});

REV.add({
  id: "th-gases", section: "s6", title: "Ideal gases and kinetic theory", short: "Ideal gases", glyph: "pV = nRT",
  spec: "3.6.2.2–3.6.2.3",
  summary: "The **gas laws**, the **ideal gas equation**, **Avogadro, Boltzmann and molar gas constants**, the **kinetic theory** model and its assumptions, and how molecular kinetic energy relates to temperature.",
  notes: [
    { h: "Gas laws (fixed mass of gas)", table: [
      ["Law", "Constant", "Relationship"],
      ["Boyle's law", "Temperature", "pV = constant"],
      ["Charles's law", "Pressure", "V/T = constant"],
      ["Pressure law", "Volume", "p/T = constant"]
    ], after: "T must be in **kelvin**. These are **empirical** laws – found from experiment (Required Practical 8)." },
    { h: "The ideal gas equation", list: [
      "**pV = nRT**, n = number of moles, R = 8.31 J mol^{−1} K^{−1}.",
      "**pV = NkT**, N = number of molecules, k = 1.38 × 10^{−23} J K^{−1} (Boltzmann constant).",
      "**k = R/N_{A}**, where N_{A} = 6.02 × 10^{23} mol^{−1} (Avogadro constant).",
      "**Molar mass**: mass of one mole (kg mol^{−1}); n = mass ÷ molar mass.",
      "**Work done** by a gas expanding at constant pressure: W = pΔV."
    ]},
    { h: "Kinetic theory assumptions", list: [
      "A very large number of molecules in random motion.",
      "Molecules have negligible volume compared with the container.",
      "Collisions are **perfectly elastic**.",
      "Collision time is negligible compared with time between collisions.",
      "No intermolecular forces except during collisions.",
      "Newton's laws apply; molecules move in straight lines between collisions."
    ]},
    { h: "Kinetic theory results", list: [
      "**pV = ⅓Nm(c_{rms})^{2}** – derived from momentum changes of molecules hitting the walls.",
      "**c_{rms}**: root mean square speed = √(mean of the squares of the speeds).",
      "Average kinetic energy of one molecule: **½m(c_{rms})^{2} = (3/2)kT = 3RT/(2N_{A})**.",
      "So the average molecular KE is **proportional to absolute temperature**.",
      "This is a **theoretical** model – it agrees with the empirical gas laws."
    ]},
    { h: "Evidence and history", p: "**Brownian motion** – smoke particles jiggling randomly when hit by unseen air molecules – was key evidence for molecules. Our understanding of gases built up over time (Boyle, Charles, then kinetic theory) as experiment and theory were tested against each other." }
  ],
  cards: [
    ["State Boyle's law.", "For a fixed mass of gas at constant temperature, pressure × volume is constant."],
    ["State Charles's law.", "For a fixed mass of gas at constant pressure, volume is proportional to absolute temperature."],
    ["State the pressure law.", "For a fixed mass of gas at constant volume, pressure is proportional to absolute temperature."],
    ["Write the ideal gas equation in two forms.", "pV = nRT and pV = NkT."],
    ["What is the Boltzmann constant in terms of R and N_{A}?", "k = R/N_{A}."],
    ["Value of the molar gas constant?", "8.31 J mol^{−1} K^{−1}."],
    ["Value of the Avogadro constant?", "6.02 × 10^{23} mol^{−1}."],
    ["Work done by a gas expanding at constant pressure?", "W = pΔV."],
    ["List four kinetic theory assumptions.", "Random motion of many molecules; negligible molecular volume; elastic collisions; negligible collision time; no forces except in collisions."],
    ["Write the kinetic theory equation.", "pV = ⅓Nm(c_{rms})^{2}."],
    ["What is the average kinetic energy of a gas molecule?", "½m(c_{rms})^{2} = (3/2)kT."],
    ["What is Brownian motion evidence for?", "The existence of molecules in random motion."],
    ["What is the difference between empirical and theoretical gas laws?", "Empirical laws come from experimental observation; theoretical laws (kinetic theory) are derived from a model."]
  ],
  quiz: [
    ["A gas at 100 kPa is compressed from 3.0 L to 1.0 L at constant temperature. New pressure?", ["33 kPa", "300 kPa", "100 kPa", "900 kPa"], 1, "pV constant."],
    ["A gas at 300 K is heated to 600 K at constant volume. Its pressure…", ["Halves", "Doubles", "Quadruples", "Stays the same"], 1, "p ∝ T."],
    ["Moles of gas in 0.024 m^{3} at 1.0 × 10^{5} Pa and 293 K?", ["0.99", "9.9", "0.10", "99"], 0, "n = pV/RT = 2400 / (8.31 × 293) = 0.986."],
    ["Average KE of a gas molecule at 300 K?", ["6.2 × 10^{−21} J", "4.1 × 10^{−21} J", "3.7 × 10^{3} J", "1.2 × 10^{−20} J"], 0, "1.5 × 1.38 × 10^{−23} × 300 = 6.21 × 10^{−21} J."],
    ["If the absolute temperature of a gas doubles, c_{rms}…", ["Doubles", "Increases by √2", "Quadruples", "Halves"], 1, "c_{rms}^{2} ∝ T."],
    ["Which is NOT a kinetic theory assumption?", ["Elastic collisions", "Negligible molecular volume", "Strong attractive forces between molecules", "Random motion"], 2, "No intermolecular forces except during collisions."],
    ["A gas expands by 0.020 m^{3} at a constant 2.0 × 10^{5} Pa. Work done by the gas?", ["4.0 × 10^{3} J", "1.0 × 10^{7} J", "4.0 × 10^{5} J", "1.0 × 10^{−7} J"], 0, "pΔV."]
  ],
  exam: [
    { q: "Use kinetic theory to explain why the pressure of a gas in a sealed rigid container increases when it is heated.", marks: 4, points: [
      "Temperature rises, so the mean kinetic energy (and speed) of the molecules increases.",
      "Molecules hit the walls more often (volume fixed).",
      "Each collision involves a larger change of momentum.",
      "Rate of change of momentum (force) on the walls increases, so pressure (force/area) increases."
    ]},
    { q: "A cylinder holds 0.050 m^{3} of helium at 2.0 × 10^{5} Pa and 290 K. Calculate the number of helium atoms and the rms speed. (Mass of a helium atom = 6.6 × 10^{−27} kg)", marks: 4, points: [
      "N = pV/kT = 2.0 × 10^{5} × 0.050 / (1.38 × 10^{−23} × 290) = 2.5 × 10^{24}.",
      "½m(c_{rms})^{2} = (3/2)kT → (c_{rms})^{2} = 3kT/m.",
      "= 3 × 1.38 × 10^{−23} × 290 / 6.6 × 10^{−27} = 1.82 × 10^{6}.",
      "c_{rms} = 1.35 × 10^{3} m s^{−1}."
    ]}
  ]
});
