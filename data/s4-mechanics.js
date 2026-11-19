/* Section 4: Mechanics and materials */
REV.add({
  id: "mm-vectors", section: "s4", title: "Scalars, vectors, moments and equilibrium", short: "Vectors and moments", glyph: "Σ M = 0",
  spec: "3.4.1.1–3.4.1.2",
  summary: "Add and **resolve vectors**, find when objects are in **equilibrium**, and use the **principle of moments**, **couples** and **centre of mass**.",
  notes: [
    { h: "Scalars and vectors", table: [
      ["Scalars (size only)", "Vectors (size and direction)"],
      ["distance, speed, mass, time, energy, temperature", "displacement, velocity, acceleration, force, momentum, weight"]
    ]},
    { h: "Combining and resolving", list: [
      "Add vectors **tip-to-tail**. For two at right angles: magnitude = √(a^{2} + b^{2}), direction = tan^{−1}(b/a).",
      "Otherwise use a **scale drawing** (or trigonometry).",
      "**Resolve** a vector F at angle θ to the horizontal: horizontal = F cos θ, vertical = F sin θ.",
      "On a slope of angle θ: weight component down the slope = mg sin θ; perpendicular to the slope = mg cos θ."
    ]},
    { h: "Equilibrium", list: [
      "An object is in equilibrium when the **resultant force is zero** and the **resultant moment is zero**.",
      "Three coplanar forces in equilibrium form a **closed triangle** when drawn tip-to-tail.",
      "Resolve in two perpendicular directions and set each sum to zero."
    ]},
    { h: "Moments", list: [
      "**Moment** = force × **perpendicular** distance from the pivot to the line of action of the force (N m).",
      "**Principle of moments**: for equilibrium, sum of clockwise moments = sum of anticlockwise moments about any point.",
      "**Couple**: a pair of equal, opposite, parallel forces. Moment of a couple = one force × perpendicular distance between them. It causes rotation, not translation.",
      "**Centre of mass**: the point where all the weight appears to act. For a uniform object, it's at the geometric centre. An object topples when its centre of mass moves outside its base."
    ]}
  ],
  cards: [
    ["What is the difference between a scalar and a vector?", "A scalar has magnitude only; a vector has magnitude and direction."],
    ["Give three vector quantities.", "Any three: displacement, velocity, acceleration, force, momentum, weight."],
    ["How do you resolve a force F at angle θ to the horizontal?", "Horizontal F cos θ; vertical F sin θ."],
    ["What is the component of weight down a slope of angle θ?", "mg sin θ."],
    ["What two conditions are needed for equilibrium?", "Zero resultant force and zero resultant moment."],
    ["What shape do three forces in equilibrium make?", "A closed triangle."],
    ["Define the moment of a force.", "Force × perpendicular distance from the pivot to the line of action of the force."],
    ["State the principle of moments.", "For an object in equilibrium, the sum of clockwise moments about a point equals the sum of anticlockwise moments."],
    ["What is a couple?", "A pair of equal and opposite parallel forces that cause rotation only."],
    ["How do you calculate the moment of a couple?", "One of the forces × the perpendicular distance between them."],
    ["Define centre of mass.", "The point at which the whole weight of an object can be taken to act."],
    ["When does an object topple?", "When its centre of mass moves beyond the edge of its base, so its weight gives a turning moment."]
  ],
  quiz: [
    ["Forces of 3 N east and 4 N north. Resultant magnitude?", ["1 N", "5 N", "7 N", "12 N"], 1, "√(9 + 16)."],
    ["A 20 N force acts at 30° above horizontal. Horizontal component?", ["10 N", "17 N", "20 N", "11.5 N"], 1, "20 cos 30° = 17.3 N."],
    ["A 50 kg box on a 20° frictionless slope. Force down the slope? (g = 9.81)", ["168 N", "461 N", "490 N", "245 N"], 0, "50 × 9.81 × sin 20° = 168 N."],
    ["A 4.0 N weight hangs 0.30 m from a pivot. Its moment?", ["13 N m", "1.2 N m", "0.075 N m", "4.3 N m"], 1, "4.0 × 0.30."],
    ["A 2.0 m uniform plank of weight 100 N is pivoted at its centre. A 60 N child sits 0.80 m left of the pivot. Where must a 40 N child sit on the right?", ["0.53 m", "1.2 m", "0.80 m", "1.0 m"], 1, "60 × 0.80 = 40 × d → d = 1.2 m (the plank's weight acts through the pivot)."],
    ["A couple of two 15 N forces 0.40 m apart has moment…", ["6.0 N m", "12 N m", "3.0 N m", "37.5 N m"], 0, "15 × 0.40."],
    ["Which is a scalar?", ["Weight", "Momentum", "Speed", "Displacement"], 2, "No direction."]
  ],
  exam: [
    { q: "A uniform beam of length 4.0 m and weight 600 N rests on supports at each end. A 900 N load is placed 1.0 m from the left end. Calculate the force from each support.", marks: 4, points: [
      "Take moments about the left support: R_{right} × 4.0 = 600 × 2.0 + 900 × 1.0.",
      "R_{right} = (1200 + 900)/4.0 = 525 N.",
      "Total upward = total downward: R_{left} + R_{right} = 1500 N.",
      "R_{left} = 975 N."
    ]}
  ]
});

REV.add({
  id: "mm-motion", section: "s4", title: "Motion, SUVAT and projectiles", short: "Motion and projectiles", glyph: "v = u + at",
  spec: "3.4.1.3–3.4.1.5",
  summary: "Describe motion with **displacement, velocity and acceleration**, read **motion graphs**, use the **SUVAT** equations for uniform acceleration, and treat **projectiles** by splitting horizontal and vertical motion.",
  notes: [
    { h: "Definitions", list: [
      "**Speed** = distance/time; **velocity** = rate of change of displacement, v = Δs/Δt.",
      "**Acceleration** = rate of change of velocity, a = Δv/Δt.",
      "Instantaneous values come from **tangents**; average values from overall change."
    ]},
    { h: "Motion graphs", table: [
      ["Graph", "Gradient", "Area under"],
      ["Displacement–time", "Velocity", "–"],
      ["Velocity–time", "Acceleration", "Displacement"],
      ["Acceleration–time", "–", "Change in velocity"]
    ]},
    { h: "SUVAT (uniform acceleration only)", list: [
      "**v = u + at**",
      "**s = ½(u + v)t**",
      "**s = ut + ½at^{2}**",
      "**v^{2} = u^{2} + 2as**",
      "Pick the equation containing the three quantities you know and the one you want. Choose a positive direction and stick to it.",
      "Free fall: a = g = 9.81 m s^{−2} downwards (no air resistance)."
    ]},
    { h: "Projectiles", list: [
      "Horizontal and vertical motions are **independent**.",
      "Horizontal: no force (ignoring air resistance) → constant velocity u cos θ.",
      "Vertical: acceleration g downwards; initial vertical velocity u sin θ.",
      "Use the **time of flight** (from the vertical motion) to link them.",
      "With air resistance: range and maximum height are smaller, and the path isn't symmetrical."
    ]},
    { h: "Measuring g (Required Practical 3)", p: "Drop an object through light gates or use a trapdoor and electromagnet timer; plot s against t^{2} (or 2s/t against t) – the gradient gives ½g." }
  ],
  memory: ["**SUVAT**: s displacement, u initial velocity, v final velocity, a acceleration, t time. Each equation leaves one out."],
  cards: [
    ["What does the gradient of a displacement–time graph show?", "Velocity."],
    ["What does the gradient of a velocity–time graph show?", "Acceleration."],
    ["What does the area under a velocity–time graph show?", "Displacement."],
    ["What does the area under an acceleration–time graph show?", "Change in velocity."],
    ["Write the four SUVAT equations.", "v = u + at; s = ½(u + v)t; s = ut + ½at^{2}; v^{2} = u^{2} + 2as."],
    ["When can SUVAT be used?", "Only for constant (uniform) acceleration."],
    ["In projectile motion, what is the horizontal acceleration?", "Zero (ignoring air resistance)."],
    ["Why can horizontal and vertical projectile motion be treated separately?", "They're perpendicular, so independent – gravity acts only vertically."],
    ["How does air resistance change a projectile's path?", "Reduces range and maximum height; the descent is steeper than the ascent."],
    ["How do you find instantaneous velocity from a curved s–t graph?", "Draw a tangent and find its gradient."]
  ],
  quiz: [
    ["A car accelerates from 10 m s^{−1} to 30 m s^{−1} in 5.0 s. Acceleration?", ["2.0 m s^{−2}", "4.0 m s^{−2}", "6.0 m s^{−2}", "8.0 m s^{−2}"], 1, "(30 − 10)/5."],
    ["A stone is dropped from rest and falls for 3.0 s. Distance fallen? (g = 9.81)", ["29 m", "44 m", "15 m", "88 m"], 1, "s = ½ × 9.81 × 9 = 44.1 m."],
    ["A ball is thrown up at 15 m s^{−1}. Maximum height? (g = 9.81)", ["7.6 m", "11 m", "15 m", "23 m"], 1, "v^{2} = u^{2} + 2as → s = 225/(2 × 9.81) = 11.5 m."],
    ["A ball is kicked horizontally at 12 m s^{−1} off a 20 m cliff. Time to land? (g = 9.81)", ["1.0 s", "1.7 s", "2.0 s", "4.1 s"], 2, "20 = ½ × 9.81 × t^{2} → t = 2.02 s."],
    ["…how far from the cliff does it land?", ["12 m", "20 m", "24 m", "49 m"], 2, "12 × 2.02 ≈ 24 m."],
    ["A velocity–time graph is a horizontal line. The acceleration is…", ["Zero", "Constant and positive", "Increasing", "g"], 0, "Gradient zero."],
    ["A projectile is launched at 20 m s^{−1} at 30°. Initial vertical velocity?", ["10 m s^{−1}", "17 m s^{−1}", "20 m s^{−1}", "5 m s^{−1}"], 0, "20 sin 30°."]
  ],
  exam: [
    { q: "A ball is thrown at 18 m s^{−1} at 40° above the horizontal from ground level. Calculate its range, ignoring air resistance.", marks: 4, points: [
      "Vertical: u_{v} = 18 sin 40° = 11.6 m s^{−1}; horizontal: u_{h} = 18 cos 40° = 13.8 m s^{−1}.",
      "Time of flight: 0 = u_{v}t − ½gt^{2} → t = 2u_{v}/g = 2 × 11.6/9.81 = 2.36 s.",
      "Range = u_{h} × t = 13.8 × 2.36.",
      "Range ≈ 32.5 m (accept 32–33 m)."
    ]}
  ]
});

REV.add({
  id: "mm-newton", section: "s4", title: "Newton's laws, momentum and collisions", short: "Newton and momentum", glyph: "F = Δp/Δt",
  spec: "3.4.1.5–3.4.1.6",
  summary: "**Newton's three laws**, **drag and terminal speed**, **momentum** and its **conservation**, **impulse**, and **elastic vs inelastic** collisions.",
  notes: [
    { h: "Newton's laws", list: [
      "**First**: an object stays at rest or moves at constant velocity unless a resultant force acts.",
      "**Second**: F = ma (for constant mass); more generally **F = Δ(mv)/Δt** – resultant force = rate of change of momentum.",
      "**Third**: if A exerts a force on B, B exerts an equal and opposite force on A. The pair are the **same type** of force and act on **different** objects."
    ]},
    { h: "Drag and terminal speed", list: [
      "Air resistance (drag) increases with speed.",
      "A falling object accelerates at g at first; as speed rises, drag rises, so resultant force and acceleration fall.",
      "**Terminal speed**: drag = weight, resultant force zero, acceleration zero.",
      "Lift is a force perpendicular to the flow (e.g. aircraft wings). Friction opposes motion."
    ]},
    { h: "Momentum", list: [
      "**p = mv** (kg m s^{−1}) – a vector.",
      "**Conservation of momentum**: in a closed system, total momentum before = total momentum after.",
      "**Impulse** = FΔt = Δ(mv) (N s). The **area under a force–time graph** = impulse = change in momentum.",
      "Increasing the contact time reduces the force for the same change in momentum – crumple zones, airbags, seat belts, helmets, landing with bent knees."
    ]},
    { h: "Collisions", table: [
      ["", "Elastic", "Inelastic"],
      ["Momentum conserved?", "Yes", "Yes"],
      ["Kinetic energy conserved?", "Yes", "No – some becomes heat, sound, deformation"]
    ], after: "In explosions, total momentum is zero before and after: the parts move apart with equal and opposite momenta." }
  ],
  cards: [
    ["State Newton's first law.", "An object remains at rest or moves at constant velocity unless acted on by a resultant force."],
    ["State Newton's second law in terms of momentum.", "The resultant force is equal to the rate of change of momentum: F = Δ(mv)/Δt."],
    ["State Newton's third law.", "If A exerts a force on B, B exerts an equal and opposite force of the same type on A."],
    ["What is terminal speed?", "The constant speed reached when drag equals the driving force or weight, so the resultant force is zero."],
    ["Define momentum.", "Mass × velocity, p = mv."],
    ["State the principle of conservation of momentum.", "In a closed system, the total momentum before an interaction equals the total momentum after."],
    ["What is impulse?", "Force × time, FΔt, equal to the change in momentum."],
    ["What does the area under a force–time graph represent?", "Impulse (change in momentum)."],
    ["How do crumple zones reduce injury?", "They increase the collision time, so the force needed for the same change of momentum is smaller."],
    ["What is an elastic collision?", "One where kinetic energy is conserved (as well as momentum)."],
    ["What is conserved in an inelastic collision?", "Momentum (and total energy) – but not kinetic energy."],
    ["Why must the two forces in a Newton's third law pair act on different objects?", "Each body exerts its force on the other body; that's what makes them a pair."]
  ],
  quiz: [
    ["A 1200 kg car accelerates at 2.5 m s^{−2}. Resultant force?", ["480 N", "3000 N", "1200 N", "30 000 N"], 1, "F = ma."],
    ["Momentum of a 0.16 kg ball at 25 m s^{−1}?", ["4.0 kg m s^{−1}", "156 kg m s^{−1}", "0.0064 kg m s^{−1}", "50 kg m s^{−1}"], 0, "0.16 × 25."],
    ["A 2.0 kg trolley at 3.0 m s^{−1} sticks to a stationary 1.0 kg trolley. Common velocity?", ["1.0 m s^{−1}", "1.5 m s^{−1}", "2.0 m s^{−1}", "3.0 m s^{−1}"], 2, "6.0 / 3.0."],
    ["A 0.050 kg ball hits a wall at 10 m s^{−1} and rebounds at 8 m s^{−1}. Change in momentum?", ["0.10 N s", "0.40 N s", "0.90 N s", "0.50 N s"], 2, "0.050 × (8 − (−10)) = 0.90 N s."],
    ["…if contact lasted 0.020 s, the average force was…", ["45 N", "18 N", "4.5 N", "0.018 N"], 0, "0.90 / 0.020."],
    ["A skydiver at terminal velocity has…", ["Zero velocity", "Zero resultant force", "Zero drag", "Acceleration g"], 1, "Drag = weight."],
    ["The 'reaction' to the Earth pulling a book down is…", ["The table pushing the book up", "The book pulling the Earth up", "The book pushing the table down", "Friction"], 1, "Same type (gravity), on the other object."],
    ["In which collision is kinetic energy conserved?", ["Inelastic", "Elastic", "Explosion", "All collisions"], 1, "That's the definition."]
  ],
  exam: [
    { q: "A 60 kg skater at rest pushes a 40 kg skater, also at rest. The 40 kg skater moves off at 1.5 m s^{−1}. Calculate the velocity of the 60 kg skater and the kinetic energy produced.", marks: 4, points: [
      "Total momentum before = 0, so 60v + 40 × 1.5 = 0.",
      "v = −1.0 m s^{−1} (1.0 m s^{−1} in the opposite direction).",
      "Ek = ½ × 60 × 1.0^{2} + ½ × 40 × 1.5^{2} = 30 + 45.",
      "= 75 J (comes from chemical energy in the skaters' muscles)."
    ]},
    { q: "Explain, using Newton's laws, why a ball dropped from a tall building reaches a terminal speed.", marks: 4, points: [
      "Initially only weight acts, so it accelerates at g.",
      "As speed increases, air resistance (drag) increases.",
      "Resultant force (weight − drag) decreases, so acceleration decreases (F = ma).",
      "When drag = weight, resultant force is zero, so by Newton's first law it moves at constant (terminal) speed."
    ]}
  ]
});

REV.add({
  id: "mm-energy", section: "s4", title: "Work, energy, power and efficiency", short: "Work and power", glyph: "P = Fv",
  spec: "3.4.1.7–3.4.1.8",
  summary: "Work is force × distance moved in the direction of the force. Know **W = Fs cos θ**, **power** (including **P = Fv**), **efficiency**, and **conservation of energy** with kinetic and gravitational potential energy.",
  notes: [
    { h: "Work and power", list: [
      "**Work done** W = Fs cos θ, where θ is the angle between force and displacement (J).",
      "Work done = energy transferred. Area under a force–displacement graph = work done.",
      "**Power** = rate of doing work: P = ΔW/Δt (W).",
      "For a constant force moving something at speed v: **P = Fv**."
    ]},
    { h: "Efficiency", p: "**Efficiency = useful output power ÷ input power** (or useful energy out ÷ energy in). Can be given as a decimal or percentage – always less than 100%." },
    { h: "Conservation of energy", list: [
      "Energy can't be created or destroyed, only transferred.",
      "**Kinetic energy** Ek = ½mv^{2}.",
      "**Change in gravitational potential energy** ΔEp = mgΔh (near Earth's surface).",
      "Falling with no air resistance: mgΔh = ½mv^{2}, so v = √(2gh) – independent of mass.",
      "With friction/air resistance: work done against resistive forces = energy dissipated (often as heat)."
    ]}
  ],
  cards: [
    ["Define work done.", "Force × distance moved in the direction of the force: W = Fs cos θ."],
    ["Define power.", "The rate of doing work (or transferring energy): P = ΔW/Δt."],
    ["What is the power of a force F moving at constant velocity v?", "P = Fv."],
    ["Define efficiency.", "Useful output power (or energy) ÷ total input power (or energy)."],
    ["Write the kinetic energy formula.", "Ek = ½mv^{2}."],
    ["Write the change in gravitational potential energy formula.", "ΔEp = mgΔh."],
    ["What is the speed of an object falling height h from rest (no air resistance)?", "v = √(2gh)."],
    ["What does the area under a force–displacement graph represent?", "Work done."],
    ["State the principle of conservation of energy.", "Energy cannot be created or destroyed, only transferred from one store to another."]
  ],
  quiz: [
    ["A 50 N force pulls a box 4.0 m along the floor at 60° to the horizontal. Work done?", ["200 J", "100 J", "173 J", "50 J"], 1, "50 × 4.0 × cos 60° = 100 J."],
    ["A motor lifts 20 kg by 3.0 m in 4.0 s. Useful power? (g = 9.81)", ["15 W", "147 W", "588 W", "60 W"], 1, "mgh/t = 20 × 9.81 × 3.0 / 4.0 = 147 W."],
    ["A car's engine provides a 2000 N driving force at 25 m s^{−1}. Power?", ["80 W", "50 kW", "2.0 kW", "500 kW"], 1, "P = Fv = 50 000 W."],
    ["A pendulum bob is released from 0.20 m above its lowest point. Speed at the bottom? (g = 9.81)", ["1.4 m s^{−1}", "2.0 m s^{−1}", "3.9 m s^{−1}", "0.63 m s^{−1}"], 1, "√(2 × 9.81 × 0.20) = 1.98 m s^{−1}."],
    ["A motor uses 500 W and outputs 350 W of useful power. Efficiency?", ["0.70", "1.4", "0.30", "150"], 0, "350/500."],
    ["Doubling the speed of a car multiplies its kinetic energy by…", ["2", "4", "√2", "8"], 1, "Ek ∝ v^{2}."]
  ],
  exam: [
    { q: "A 70 kg cyclist freewheels from rest down a hill, dropping 12 m vertically. At the bottom she is moving at 11 m s^{−1}. Calculate the energy dissipated by resistive forces.", marks: 3, points: [
      "Loss of GPE = mgh = 70 × 9.81 × 12 = 8240 J.",
      "Gain in KE = ½ × 70 × 11^{2} = 4235 J.",
      "Energy dissipated = 8240 − 4235 ≈ 4000 J."
    ]}
  ]
});

REV.add({
  id: "mm-materials", section: "s4", title: "Materials: density, Hooke's law and the Young modulus", short: "Materials", glyph: "E = σ/ε",
  spec: "3.4.2",
  summary: "**Density**, **Hooke's law** and **elastic strain energy**, **stress, strain** and the **Young modulus**, and interpreting **stress–strain** and **loading–unloading** graphs for different materials.",
  notes: [
    { h: "Density", p: "**ρ = m/V** (kg m^{−3}). For a composite, find total mass ÷ total volume." },
    { h: "Hooke's law", list: [
      "**F = kΔL** – extension is proportional to force up to the **limit of proportionality**. k = stiffness (spring constant, N m^{−1}).",
      "Springs in **series**: 1/k = 1/k_{1} + 1/k_{2}. In **parallel**: k = k_{1} + k_{2}.",
      "**Elastic limit**: beyond it, the material won't return to its original length – **plastic** deformation.",
      "**Elastic strain energy** stored = area under the F–ΔL graph = **½FΔL** = ½kΔL^{2} (within the limit of proportionality)."
    ]},
    { h: "Stress, strain and Young modulus", table: [
      ["Quantity", "Formula", "Unit"],
      ["Tensile stress σ", "F/A", "Pa (N m^{−2})"],
      ["Tensile strain ε", "ΔL/L", "No unit"],
      ["Young modulus E", "stress/strain = FL/(AΔL)", "Pa"]
    ], after: "On a stress–strain graph, the **gradient of the straight part = Young modulus**. Area under the graph = strain energy per unit volume." },
    { h: "Reading stress–strain graphs", list: [
      "**Limit of proportionality** – end of the straight line.",
      "**Elastic limit** – beyond it, permanent deformation.",
      "**Yield point** – the material stretches a lot with little extra stress.",
      "**Breaking stress** (ultimate tensile stress) – maximum stress before breaking.",
      "**Brittle** materials (glass, cast iron) break with little or no plastic deformation. **Ductile** materials (copper) can be drawn into wires – large plastic region."
    ]},
    { h: "Loading and unloading", list: [
      "**Metal wire** (elastic region): loading and unloading lines are the same. Beyond the elastic limit, unloading is parallel to loading – permanent extension remains.",
      "**Rubber**: loading and unloading curves differ (hysteresis loop); the area between them is energy dissipated as heat.",
      "**Polythene**: stretches plastically easily – doesn't return.",
      "**Energy in car safety / sport**: crumple zones and helmets absorb energy by plastic deformation."
    ]}
  ],
  cards: [
    ["State Hooke's law.", "The extension of an object is directly proportional to the force applied, up to the limit of proportionality: F = kΔL."],
    ["What is the limit of proportionality?", "The point beyond which force is no longer proportional to extension."],
    ["What is the elastic limit?", "The maximum stress/force beyond which the material won't return to its original shape."],
    ["What is the energy stored in a stretched spring?", "½FΔL = ½kΔL^{2} (area under the force–extension graph)."],
    ["Spring constant of two identical springs (k) in series?", "k/2."],
    ["Spring constant of two identical springs (k) in parallel?", "2k."],
    ["Define tensile stress.", "Force per unit cross-sectional area: σ = F/A."],
    ["Define tensile strain.", "Extension ÷ original length: ε = ΔL/L."],
    ["Define the Young modulus.", "Tensile stress ÷ tensile strain (in the region where Hooke's law applies)."],
    ["What does the gradient of a stress–strain graph give?", "The Young modulus (straight part)."],
    ["What is a brittle material?", "One that breaks with little or no plastic deformation, e.g. glass."],
    ["What is a ductile material?", "One that undergoes large plastic deformation and can be drawn into wires, e.g. copper."],
    ["What does the area of a rubber's hysteresis loop represent?", "Energy dissipated as heat per unit volume during loading and unloading."],
    ["What is breaking stress?", "The maximum stress a material can withstand before breaking."]
  ],
  quiz: [
    ["A spring extends 4.0 cm under 6.0 N. Spring constant?", ["1.5 N m^{−1}", "24 N m^{−1}", "150 N m^{−1}", "0.67 N m^{−1}"], 2, "6.0 / 0.040."],
    ["Energy stored in that spring?", ["0.12 J", "0.24 J", "12 J", "0.48 J"], 0, "½ × 6.0 × 0.040."],
    ["A 2.0 m wire of area 1.0 × 10^{−6} m^{2} extends 1.0 mm under 100 N. Young modulus?", ["2.0 × 10^{11} Pa", "2.0 × 10^{8} Pa", "1.0 × 10^{11} Pa", "5.0 × 10^{10} Pa"], 0, "E = FL/(AΔL) = 100 × 2.0 / (1.0 × 10^{−6} × 1.0 × 10^{−3})."],
    ["Strain has the unit…", ["Pa", "N", "m", "None"], 3, "It's a ratio of lengths."],
    ["Which material is brittle?", ["Copper", "Rubber", "Glass", "Polythene"], 2, "Little plastic deformation."],
    ["A wire is loaded beyond its elastic limit then unloaded. The unloading line is…", ["The same as loading", "Parallel to the loading line, ending at a permanent extension", "Curved back to the origin", "Vertical"], 1, "Permanent deformation."],
    ["Two identical springs (k = 50 N m^{−1}) in parallel have combined k…", ["25 N m^{−1}", "50 N m^{−1}", "100 N m^{−1}", "2500 N m^{−1}"], 2, "Add in parallel."]
  ],
  exam: [
    { q: "Describe how to determine the Young modulus of a metal wire in the laboratory (Required Practical 4).", marks: 6, points: [
      "Long thin wire (≈ 2 m) clamped at one end, passing over a pulley, or vertical with a reference wire and vernier scale.",
      "Measure original length L with a metre rule/tape; measure diameter with a micrometer at several points and orientations, take the mean; A = πd^{2}/4.",
      "Add masses in equal steps; measure extension each time using a marker against a mm scale or vernier.",
      "Keep within the elastic region – check the wire returns when unloaded.",
      "Plot stress against strain (or F against ΔL); gradient of straight part = E (or gradient × L/A).",
      "Safety: wear goggles in case the wire snaps; keep feet clear of the masses."
    ], note: "Level of response: a full, logically ordered method with measurements and analysis gets Level 3 (5–6 marks)." }
  ]
});
