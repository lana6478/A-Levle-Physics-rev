/* Paper 3 Section B options: 9 Astrophysics, 10 Medical, 11 Engineering, 12 Turning points, 13 Electronics */

/* ---------- 9 Astrophysics ---------- */
REV.add({
  id: "opt-astro-telescopes", section: "opt-astro", title: "Telescopes and detectors", short: "Telescopes", glyph: "M = f_{o}/f_{e}",
  spec: "Option 9.1",
  summary: "Converging lenses, the **astronomical refracting telescope**, **reflecting telescopes** and aberrations, **non-optical telescopes**, **resolving and collecting power**, and **CCDs**.",
  notes: [
    { h: "Lenses and the refracting telescope", list: [
      "A converging lens brings parallel rays to the **principal focus**; focal length f. Lens equation: 1/u + 1/v = 1/f; power = 1/f (dioptres).",
      "**Astronomical refractor in normal adjustment**: objective (long f_{o}) and eyepiece (short f_{e}) separated by f_{o} + f_{e}; final image at infinity.",
      "**Angular magnification M = angle subtended by image at eye ÷ angle subtended by object at unaided eye = f_{o}/f_{e}**."
    ]},
    { h: "Reflecting telescopes", list: [
      "**Cassegrain**: concave **parabolic** primary mirror, convex secondary mirror, eyepiece/detector behind a hole in the primary.",
      "**Chromatic aberration** (lenses only): different colours focus at different points → coloured fringes.",
      "**Spherical aberration**: rays at different distances from the axis focus at different points → blurring. Parabolic mirrors avoid it.",
      "**Reflectors vs refractors**: mirrors have no chromatic aberration, can be supported from behind so can be much larger, and are cheaper per aperture. Refractors need large flawless glass that sags; the secondary mirror of a reflector blocks some light and causes diffraction."
    ]},
    { h: "Non-optical telescopes", list: [
      "**Radio**: large dishes on the ground (radio passes through the atmosphere); poor resolution unless dishes are combined (interferometry).",
      "**Infrared, UV, X-ray**: mostly absorbed by the atmosphere – need **space** (or high altitude for some IR). X-ray telescopes use grazing-incidence mirrors.",
      "Compare position, structure, resolving and collecting power."
    ]},
    { h: "Resolving and collecting power", list: [
      "**Rayleigh criterion**: two sources are just resolved when the central maximum of one falls on the first minimum of the other: **θ ≈ λ/D** (radians).",
      "**Collecting power ∝ D^{2}** (area of the objective)."
    ]},
    { h: "Charge-coupled devices (CCDs)", p: "Silicon chips where photons release electrons in pixels; charge is read out to form an image. **Quantum efficiency** ≈ 80% (eye ≈ 1%), wider spectral range, can store data and integrate over long exposures. Compare with the eye: resolution (pixel size vs rod/cone spacing), spectral range and convenience." }
  ],
  cards: [
    ["Write the angular magnification of a refractor in normal adjustment.", "M = f_{o}/f_{e}."],
    ["How far apart are the lenses of a refractor in normal adjustment?", "f_{o} + f_{e}."],
    ["What is chromatic aberration?", "Different wavelengths are refracted by different amounts, so they focus at different points, giving coloured fringes."],
    ["What is spherical aberration?", "Rays hitting a spherical lens/mirror at different distances from the axis focus at different points, blurring the image."],
    ["Describe a Cassegrain telescope.", "Concave parabolic primary mirror and convex secondary mirror reflecting light back through a hole in the primary."],
    ["Give two advantages of reflecting over refracting telescopes.", "No chromatic aberration; mirrors can be supported from behind so can be much larger."],
    ["State the Rayleigh criterion.", "Two objects are just resolved when θ ≈ λ/D – the central maximum of one lies on the first minimum of the other."],
    ["How does collecting power depend on diameter?", "Collecting power ∝ D^{2}."],
    ["Why must X-ray telescopes be in space?", "The atmosphere absorbs X-rays."],
    ["What is quantum efficiency?", "The percentage of incident photons that are detected (≈ 80% for a CCD, ≈ 1% for the eye)."]
  ],
  quiz: [
    ["Objective f = 1.20 m, eyepiece f = 0.040 m. Magnification?", ["30", "0.033", "48", "1.24"], 0, "1.20/0.040."],
    ["Minimum resolvable angle of a 2.4 m mirror at 550 nm?", ["2.3 × 10^{−7} rad", "4.4 × 10^{6} rad", "1.3 × 10^{−6} rad", "2.3 × 10^{−4} rad"], 0, "λ/D = 5.5 × 10^{−7} / 2.4."],
    ["Doubling the diameter of a telescope multiplies its collecting power by…", ["2", "4", "√2", "8"], 1, "∝ D^{2}."],
    ["Which suffers from chromatic aberration?", ["Parabolic mirror", "Lens", "Radio dish", "CCD"], 1, "Refraction depends on wavelength."],
    ["A radio telescope has much poorer resolution than an optical one of the same size because…", ["Radio waves are faster", "Radio wavelengths are much longer", "Radio is absorbed", "Dishes are curved"], 1, "θ ≈ λ/D."],
    ["Which detector has the highest quantum efficiency?", ["Human eye", "Photographic film", "CCD", "All equal"], 2, "About 80%."]
  ]
});

REV.add({
  id: "opt-astro-stars", section: "opt-astro", title: "Classifying stars, HR diagram and stellar remnants", short: "Stars", glyph: "λ_{max}T",
  spec: "Option 9.2",
  summary: "**Apparent and absolute magnitude**, distances (**parsec**, light year), **black-body radiation** (Wien and Stefan), **spectral classes**, the **Hertzsprung–Russell diagram**, and **supernovae, neutron stars and black holes**.",
  notes: [
    { h: "Magnitude and distance", list: [
      "**Apparent magnitude m**: brightness as seen from Earth (Hipparcos scale: smaller = brighter). A difference of 1 magnitude = intensity ratio of about 2.51; 5 magnitudes = 100.",
      "**Absolute magnitude M**: the apparent magnitude the star would have at **10 parsecs**. **m − M = 5 log(d/10)**.",
      "**Parsec**: distance at which 1 AU subtends 1 arcsecond (≈ 3.08 × 10^{16} m). **Light year**: distance light travels in a year (≈ 9.46 × 10^{15} m)."
    ]},
    { h: "Black-body radiation", list: [
      "Stars are close to black bodies.",
      "**Wien's law**: **λ_{max}T = 2.9 × 10^{−3} m K** – hotter stars peak at shorter wavelengths (bluer).",
      "**Stefan's law**: **P = σAT^{4}** (σ = 5.67 × 10^{−8} W m^{−2} K^{−4}). Combine with Wien to compare sizes of stars.",
      "Inverse-square law for intensity at Earth: I = P/(4πd^{2})."
    ]},
    { h: "Spectral classes", table: [
      ["Class", "Colour", "Temperature / K", "Prominent absorption lines"],
      ["O", "Blue", "25 000–50 000", "He⁺, He, H"],
      ["B", "Blue", "11 000–25 000", "He, H"],
      ["A", "Blue-white", "7 500–11 000", "H (strongest Balmer), ionised metals"],
      ["F", "White", "6 000–7 500", "Ionised metals"],
      ["G", "Yellow-white", "5 000–6 000", "Ionised and neutral metals"],
      ["K", "Orange", "3 500–5 000", "Neutral metals"],
      ["M", "Red", "< 3 500", "Neutral atoms, TiO"]
    ], after: "**Balmer lines** need hydrogen atoms with electrons in the n = 2 level – strongest at around 10 000 K (A stars)." },
    { h: "The Hertzsprung–Russell diagram", list: [
      "Absolute magnitude (−10 to +15, brighter at the top) against temperature (hot on the left) or spectral class.",
      "**Main sequence**: diagonal band (stars fusing hydrogen). **Red giants/supergiants**: top right. **White dwarfs**: bottom left.",
      "Sun's life: protostar → main sequence → red giant → white dwarf (with a planetary nebula)."
    ]},
    { h: "Supernovae, neutron stars and black holes", list: [
      "**Supernova**: rapid huge increase in absolute magnitude. **Type 1a** have a consistent peak absolute magnitude (≈ −19.3), so they're **standard candles** for distance – evidence that the expansion of the universe is accelerating (dark energy).",
      "**Neutron star**: extremely dense core left after a supernova, mostly neutrons.",
      "**Black hole**: escape velocity > c. **Event horizon** radius = **Schwarzschild radius R_{s} = 2GM/c^{2}**. Supermassive black holes sit at the centre of most galaxies."
    ]}
  ],
  cards: [
    ["Define apparent magnitude.", "A measure of a star's brightness as seen from Earth (smaller number = brighter)."],
    ["Define absolute magnitude.", "The apparent magnitude a star would have if it were 10 parsecs away."],
    ["Relate apparent magnitude, absolute magnitude and distance.", "m − M = 5 log(d/10), d in parsecs."],
    ["What intensity ratio corresponds to 5 magnitudes?", "100."],
    ["Define a parsec.", "The distance at which 1 AU subtends an angle of 1 arcsecond."],
    ["State Wien's law.", "λ_{max}T = 2.9 × 10^{−3} m K."],
    ["State Stefan's law.", "P = σAT^{4}."],
    ["List the spectral classes from hottest to coolest.", "O B A F G K M."],
    ["Why are Balmer lines strongest in A-class stars?", "At about 10 000 K many hydrogen atoms have electrons in n = 2, but the gas isn't hot enough to ionise them."],
    ["Where are white dwarfs on an HR diagram?", "Bottom left – hot but dim."],
    ["Why are type 1a supernovae useful?", "They have the same peak absolute magnitude, so they're standard candles for measuring distance."],
    ["Write the Schwarzschild radius.", "R_{s} = 2GM/c^{2}."]
  ],
  quiz: [
    ["A star peaks at 500 nm. Surface temperature?", ["5800 K", "1450 K", "580 K", "14 500 K"], 0, "2.9 × 10^{−3} / 5.0 × 10^{−7}."],
    ["A star has m = 7 and M = 2. Distance?", ["10 pc", "50 pc", "100 pc", "1000 pc"], 2, "m − M = 5 → log(d/10) = 1 → d = 100 pc."],
    ["Star A has twice the surface temperature of star B and the same radius. Power ratio A:B?", ["2", "4", "8", "16"], 3, "P ∝ T^{4}."],
    ["Which class is coolest?", ["O", "A", "G", "M"], 3, "M stars are red, below 3500 K."],
    ["The Sun will end as a…", ["Neutron star", "Black hole", "White dwarf", "Supernova remnant only"], 2, "Not massive enough for a supernova."],
    ["Schwarzschild radius of a 2.0 × 10^{31} kg black hole?", ["30 km", "3.0 km", "300 km", "3.0 m"], 0, "2 × 6.67 × 10^{−11} × 2.0 × 10^{31} / (9.0 × 10^{16}) = 2.96 × 10^{4} m."]
  ]
});

REV.add({
  id: "opt-astro-cosmology", section: "opt-astro", title: "Cosmology: redshift, Hubble's law, Big Bang and exoplanets", short: "Cosmology", glyph: "v = H₀d",
  spec: "Option 9.3",
  summary: "The **Doppler effect** and **redshift**, **Hubble's law** and the age of the universe, **evidence for the Big Bang**, **quasars**, **dark energy**, and how **exoplanets** are detected.",
  notes: [
    { h: "Doppler effect and redshift", list: [
      "For v ≪ c: **z = Δf/f = v/c** and **Δλ/λ = −v/c** (the data booklet takes v as positive for an approaching source).",
      "For a **receding** source the wavelength increases – **redshift** – with Δλ/λ = v/c in magnitude.",
      "Approaching sources are **blueshifted**.",
      "**Spectroscopic binary stars**: the lines periodically split and shift as the stars orbit – gives the orbital period and speeds."
    ]},
    { h: "Hubble's law", list: [
      "**v = H_{0}d** – recession speed is proportional to distance.",
      "Galaxies are moving apart because space itself is expanding.",
      "**Age of the universe ≈ 1/H_{0}** (convert H_{0} to s^{−1}). With H_{0} ≈ 70 km s^{−1} Mpc^{−1}, the age is about 14 billion years."
    ]},
    { h: "Evidence for the Big Bang", list: [
      "**Hubble redshift** – the universe is expanding, so it was once much smaller and denser.",
      "**Cosmic microwave background radiation (CMBR)** – black-body radiation at about 2.7 K from every direction: the redshifted afterglow of the hot early universe.",
      "**Relative abundance of hydrogen and helium** (≈ 3:1 by mass) – matches predictions of fusion in the first few minutes.",
      "**Dark energy**: type 1a supernovae are dimmer than expected, so the expansion is **accelerating**. This is still controversial and not understood."
    ]},
    { h: "Quasars", p: "Very powerful, distant objects with large redshifts – first found as bright radio sources. They're **active galactic nuclei**: supermassive black holes surrounded by matter that heats up and radiates enormously." },
    { h: "Exoplanets", list: [
      "Hard to see directly – the star is far brighter and the planet is very close to it in angle.",
      "**Radial velocity (Doppler) method**: the star wobbles as the planet orbits, so its spectral lines shift periodically.",
      "**Transit method**: the star's brightness dips slightly and regularly as the planet passes in front of it – a **light curve**."
    ]}
  ],
  cards: [
    ["What is redshift?", "An increase in observed wavelength because the source is moving away (or space is expanding); for v ≪ c, Δλ/λ ≈ v/c."],
    ["State Hubble's law.", "The recession speed of a galaxy is proportional to its distance: v = H_{0}d."],
    ["How do you estimate the age of the universe?", "Age ≈ 1/H_{0} (with H_{0} in s^{−1})."],
    ["Give three pieces of evidence for the Big Bang.", "Hubble redshift, cosmic microwave background radiation, relative abundance of hydrogen and helium."],
    ["What is the CMBR?", "Microwave radiation (black body ≈ 2.7 K) from all directions – the redshifted remnant of the hot early universe."],
    ["What is dark energy?", "The unexplained cause of the accelerating expansion of the universe, deduced from type 1a supernovae."],
    ["What is a quasar?", "An extremely luminous, distant active galactic nucleus powered by a supermassive black hole."],
    ["Describe the transit method for exoplanets.", "Detect a small periodic dip in a star's brightness as a planet passes in front of it."],
    ["Describe the radial velocity method.", "Detect periodic Doppler shifts in a star's spectrum as it wobbles due to an orbiting planet."],
    ["What is a spectroscopic binary?", "Two stars too close to resolve, detected by periodic splitting and shifting of their spectral lines."]
  ],
  quiz: [
    ["A line normally at 656.3 nm is observed at 662.9 nm. Recession speed?", ["3.0 × 10^{6} m s^{−1}", "3.0 × 10^{5} m s^{−1}", "1.0 × 10^{7} m s^{−1}", "6.6 × 10^{6} m s^{−1}"], 0, "z = 6.6/656.3 = 0.0101; v = 0.0101 × 3.0 × 10^{8}."],
    ["H₀ = 70 km s^{−1} Mpc^{−1}. Speed of a galaxy 200 Mpc away?", ["14 000 km s^{−1}", "2.9 km s^{−1}", "270 km s^{−1}", "1.4 × 10^{6} km s^{−1}"], 0, "70 × 200."],
    ["Which is NOT evidence for the Big Bang?", ["CMBR", "H/He abundance", "Hubble redshift", "The HR diagram"], 3, "The HR diagram is about stars."],
    ["A regular dip in a star's brightness suggests…", ["A transiting exoplanet", "A quasar", "A supernova", "Redshift"], 0, "Transit method."],
    ["Type 1a supernovae being dimmer than expected suggests the universe's expansion is…", ["Slowing", "Accelerating", "Stopped", "Reversing"], 1, "Evidence for dark energy."],
    ["The CMBR has a black-body temperature of about…", ["0 K", "2.7 K", "273 K", "5800 K"], 1, "≈ 2.7 K."]
  ]
});

/* ---------- 10 Medical physics ---------- */
REV.add({
  id: "opt-med-body", section: "opt-medical", title: "The eye, the ear and the heart", short: "Eye, ear, heart", glyph: "P = 1/f",
  spec: "Option 10.1–10.2",
  summary: "The eye as an optical system and correcting **defects of vision**; the ear, **intensity level in dB** and equal loudness; and the heart's **ECG** trace.",
  notes: [
    { h: "Lenses and the eye", list: [
      "**Power** of a lens P = 1/f (dioptres, D, with f in m). Converging +, diverging −. Lens equation 1/u + 1/v = 1/f; magnification = v/u.",
      "The eye: cornea and lens refract light onto the **retina**; ciliary muscles change the lens shape (accommodation).",
      "**Rods**: very sensitive, monochrome, good in dim light, many share a nerve (poor resolution). **Cones**: three types (red, green, blue sensitivity), colour vision, better resolution, mostly in the fovea.",
      "**Spatial resolution** depends on the spacing of receptors."
    ]},
    { h: "Defects of vision", table: [
      ["Defect", "Problem", "Correction"],
      ["Myopia (short sight)", "Far point closer than infinity; image forms in front of retina", "Diverging (negative) lens"],
      ["Hypermetropia (long sight)", "Near point further than 25 cm; image behind retina", "Converging (positive) lens"],
      ["Astigmatism", "Cornea not spherical – different focal lengths in different planes", "Cylindrical lens"]
    ]},
    { h: "The ear and hearing", list: [
      "Outer ear collects sound; eardrum and ossicles (middle ear) amplify the pressure; cochlea (inner ear) converts vibrations to nerve signals.",
      "**Intensity level** = **10 log(I/I_{0})** dB, I_{0} = 1.0 × 10^{−12} W m^{−2} (threshold of hearing at 1 kHz).",
      "Hearing is most sensitive around 3 kHz. **Equal loudness curves** show the intensity needed for the same perceived loudness at each frequency. The **dBA** scale adjusts for the ear's response.",
      "Hearing loss from age (high frequencies first) and from excessive noise (dip around 4 kHz)."
    ]},
    { h: "The heart and ECG", list: [
      "The heart's pacemaker sends electrical signals that make the muscle contract; electrodes on the skin (with conductive gel) detect small potential differences (≈ 1 mV).",
      "**ECG waveform**: **P** wave (atria contract), **QRS** complex (ventricles contract), **T** wave (ventricles relax)."
    ]}
  ],
  cards: [
    ["Define the power of a lens.", "P = 1/f, in dioptres (f in metres)."],
    ["What corrects myopia?", "A diverging lens."],
    ["What corrects hypermetropia?", "A converging lens."],
    ["What corrects astigmatism?", "A cylindrical lens."],
    ["Compare rods and cones.", "Rods: sensitive in dim light, no colour, poorer resolution. Cones: colour (three types), better resolution, need brighter light."],
    ["Write the intensity level equation.", "Intensity level = 10 log(I/I_{0}) dB, I_{0} = 1.0 × 10^{−12} W m^{−2}."],
    ["What do equal loudness curves show?", "The intensity needed at each frequency for sounds to seem equally loud."],
    ["What is the dBA scale?", "A decibel scale weighted to match the ear's frequency response."],
    ["What does the QRS complex of an ECG show?", "Ventricles contracting."],
    ["What does the P wave of an ECG show?", "Atria contracting."]
  ],
  quiz: [
    ["Power of a lens with f = 25 cm?", ["0.25 D", "4.0 D", "25 D", "−4.0 D"], 1, "1/0.25 m."],
    ["Intensity level of 1.0 × 10^{−6} W m^{−2}?", ["6 dB", "60 dB", "120 dB", "−60 dB"], 1, "10 log(10^{6})."],
    ["Increasing intensity by a factor of 100 raises the intensity level by…", ["2 dB", "10 dB", "20 dB", "100 dB"], 2, "10 log 100."],
    ["A short-sighted person's far point is 2.0 m. Correcting lens power?", ["+0.5 D", "−0.5 D", "−2.0 D", "+2.0 D"], 1, "Diverging lens with f = −2.0 m."],
    ["Which part of the ECG shows ventricles relaxing?", ["P", "QRS", "T", "None"], 2, "T wave."]
  ]
});

REV.add({
  id: "opt-med-imaging", section: "opt-medical", title: "Ultrasound, endoscopy, MRI, X-rays and nuclear medicine", short: "Medical imaging", glyph: "Z = ρc",
  spec: "Option 10.3–10.5",
  summary: "Non-ionising imaging (**ultrasound**, **endoscopy**, **MRI**), **X-rays** and attenuation, **CT**, and **radionuclide** imaging and therapy with **effective half-life**.",
  notes: [
    { h: "Ultrasound", list: [
      "Frequencies above 20 kHz (medical: 1–15 MHz). Produced and detected by a **piezoelectric transducer**.",
      "**Acoustic impedance Z = ρc**. Fraction reflected at a boundary: **I_{r}/I_{i} = ((Z_{2} − Z_{1})/(Z_{2} + Z_{1}))^{2}**.",
      "Air–skin reflects almost everything, so **coupling gel** is used.",
      "**A-scan**: amplitude against time – measures depths/distances. **B-scan**: builds a 2D image from many A-scans.",
      "Advantages: non-ionising, cheap, real-time. Disadvantages: poor resolution, can't pass through bone or air."
    ]},
    { h: "Endoscopy and MRI", list: [
      "**Endoscope**: optical fibres – a **non-coherent** bundle carries light in; a **coherent** bundle (fibres in the same arrangement at both ends) carries the image out. Also allows keyhole surgery.",
      "**MRI**: a very strong magnetic field aligns hydrogen nuclei, which precess. Radio-frequency pulses tip them; as they relax they emit RF signals, detected and processed into images. Gradient fields locate the signal.",
      "MRI: no ionising radiation, excellent soft-tissue contrast – but expensive, noisy, slow, can't be used with metal implants."
    ]},
    { h: "X-rays", list: [
      "Produced when high-energy electrons hit a **tungsten** target (rotating anode to spread the heat). Spectrum: continuous bremsstrahlung plus characteristic lines.",
      "**Attenuation**: **I = I_{0}e^{−μx}**; **half-value thickness** x_{½} = ln 2/μ. **Mass attenuation coefficient μ_{m} = μ/ρ**.",
      "Bone absorbs more than soft tissue (photoelectric absorption ∝ Z^{3}).",
      "**Contrast media** (barium meal, iodine) make soft tissues visible. **Image intensifiers** and digital detectors reduce dose.",
      "**CT scanning**: X-ray tube rotates around the patient; computer builds 3D images. Much better detail but higher dose than a single X-ray."
    ]},
    { h: "Radionuclide imaging and therapy", list: [
      "**Tracers**: e.g. **technetium-99m** (γ only, T_{½} ≈ 6 h), iodine-131.",
      "**Effective half-life**: **1/T_{E} = 1/T_{B} + 1/T_{P}** (biological and physical).",
      "**Gamma camera**: lead **collimator** (only γ travelling parallel pass) → **NaI scintillator** (flash of light) → **photomultiplier tubes** → computer locates each flash.",
      "**PET**: positron emitters (e.g. fluorine-18 in glucose); annihilation gives two γ photons in opposite directions, detected together.",
      "**Therapy**: high-energy X-ray or γ beams from several directions targeting the tumour; implanted sources; proton beams."
    ]}
  ],
  cards: [
    ["How is ultrasound produced and detected?", "By a piezoelectric transducer."],
    ["Define acoustic impedance.", "Z = ρc (density × speed of sound in the material)."],
    ["Why is coupling gel used in ultrasound?", "Air and skin have very different Z, so almost all ultrasound would reflect; gel matches impedance."],
    ["What is the difference between A-scans and B-scans?", "A-scan: amplitude against time (1D distances). B-scan: many scans combined into a 2D image."],
    ["What is the difference between coherent and non-coherent fibre bundles?", "Coherent: fibres keep the same arrangement at both ends (carries an image). Non-coherent: random arrangement (carries light)."],
    ["Write the X-ray attenuation equation.", "I = I_{0}e^{−μx}."],
    ["Define mass attenuation coefficient.", "μ_{m} = μ/ρ."],
    ["Why are contrast media used?", "To make soft tissues (e.g. the gut) absorb X-rays more so they show up."],
    ["Write the effective half-life equation.", "1/T_{E} = 1/T_{B} + 1/T_{P}."],
    ["List the parts of a gamma camera in order.", "Collimator, scintillator crystal, photomultiplier tubes, computer."],
    ["Give two advantages and one disadvantage of MRI.", "No ionising radiation; good soft-tissue contrast. But expensive / can't be used with metal implants / noisy and slow."],
    ["Why is a rotating anode used in X-ray tubes?", "To spread the heat over a larger area."]
  ],
  quiz: [
    ["Z₁ = 1.6 × 10^{6}, Z₂ = 7.8 × 10^{6} kg m^{−2} s^{−1}. Fraction reflected?", ["0.43", "0.66", "0.17", "0.21"], 0, "(6.2/9.4)^{2} = 0.435."],
    ["Physical half-life 6 h, biological 24 h. Effective half-life?", ["4.8 h", "15 h", "30 h", "18 h"], 0, "1/T_{E} = 1/6 + 1/24 = 5/24."],
    ["The half-value thickness of a material is 2.0 mm. Fraction transmitted through 6.0 mm?", ["1/3", "1/6", "1/8", "1/9"], 2, "Three half-value thicknesses."],
    ["Which imaging uses no ionising radiation?", ["CT", "PET", "MRI", "Gamma camera"], 2, "MRI uses magnetic fields and radio waves."],
    ["The collimator in a gamma camera…", ["Turns γ into light", "Only lets through γ travelling in one direction", "Amplifies signals", "Produces γ"], 1, "Lead tubes."],
    ["A barium meal is used to…", ["Reduce dose", "Make the gut visible in X-rays", "Cool the anode", "Produce positrons"], 1, "Contrast medium."]
  ]
});

/* ---------- 11 Engineering physics ---------- */
REV.add({
  id: "opt-eng-rotational", section: "opt-engineering", title: "Rotational dynamics", short: "Rotational dynamics", glyph: "T = Iα",
  spec: "Option 11.1",
  summary: "**Moment of inertia**, **rotational kinetic energy**, angular equations of motion, **torque**, **angular momentum** and its conservation, work and power in rotation, and **flywheels**.",
  notes: [
    { h: "Linear vs rotational quantities", table: [
      ["Linear", "Rotational", "Link"],
      ["Displacement s", "Angle θ (rad)", "s = rθ"],
      ["Velocity v", "Angular velocity ω", "v = rω"],
      ["Acceleration a", "Angular acceleration α", "a = rα"],
      ["Mass m", "Moment of inertia I = Σmr^{2}", "kg m^{2}"],
      ["Force F", "Torque T = Fr", "N m"],
      ["F = ma", "T = Iα", ""],
      ["KE = ½mv^{2}", "KE = ½Iω^{2}", ""],
      ["Momentum mv", "Angular momentum Iω", ""],
      ["Work Fs; power Fv", "Work Tθ; power Tω", ""]
    ]},
    { h: "Angular equations of motion (constant α)", list: ["ω_{2} = ω_{1} + αt", "θ = ½(ω_{1} + ω_{2})t", "θ = ω_{1}t + ½αt^{2}", "ω_{2}^{2} = ω_{1}^{2} + 2αθ"] },
    { h: "Angular momentum", list: [
      "**Conservation**: with no external torque, Iω is constant. E.g. an ice skater pulling in their arms reduces I, so ω increases.",
      "**Angular impulse** = Tt = Δ(Iω).",
      "Frictional torque opposes rotation and makes things slow down."
    ]},
    { h: "Flywheels", list: [
      "Store rotational kinetic energy; smooth out torque and speed (e.g. in engines), store energy from regenerative braking.",
      "Design for maximum energy: large I (mass concentrated at the **rim**, spoked design), high ω – limited by material strength (it could burst).",
      "Materials: high strength-to-mass ratio (e.g. carbon fibre composites)."
    ]}
  ],
  cards: [
    ["Define moment of inertia.", "I = Σmr^{2} – the rotational equivalent of mass."],
    ["Write the rotational kinetic energy formula.", "KE = ½Iω^{2}."],
    ["Write Newton's second law for rotation.", "T = Iα."],
    ["Define angular momentum.", "Iω."],
    ["State the conservation of angular momentum.", "With no external torque, total angular momentum stays constant."],
    ["What is angular impulse?", "Torque × time = change in angular momentum."],
    ["Work done by a torque?", "W = Tθ."],
    ["Power transmitted by a rotating shaft?", "P = Tω."],
    ["Why are flywheels made with mass concentrated at the rim?", "To maximise moment of inertia, so more energy is stored for a given mass and speed."],
    ["What limits a flywheel's maximum speed?", "The strength of its material – it could burst."]
  ],
  quiz: [
    ["A flywheel has I = 0.50 kg m^{2} and ω = 40 rad s^{−1}. Rotational KE?", ["10 J", "400 J", "800 J", "20 J"], 1, "½ × 0.50 × 1600."],
    ["A torque of 12 N m acts on I = 3.0 kg m^{2}. Angular acceleration?", ["36 rad s^{−2}", "4.0 rad s^{−2}", "0.25 rad s^{−2}", "15 rad s^{−2}"], 1, "α = T/I."],
    ["A skater pulls in her arms. Her angular speed…", ["Decreases", "Increases", "Stays the same", "Becomes zero"], 1, "I falls, Iω constant."],
    ["A motor provides 20 N m at 150 rad s^{−1}. Power?", ["3.0 kW", "7.5 W", "170 W", "130 W"], 0, "P = Tω."],
    ["A wheel goes from rest to 30 rad s^{−1} in 6.0 s. Angular acceleration?", ["5.0 rad s^{−2}", "180 rad s^{−2}", "0.20 rad s^{−2}", "36 rad s^{−2}"], 0, "30/6."],
    ["Moment of inertia of a 2.0 kg point mass 0.30 m from the axis?", ["0.18 kg m^{2}", "0.60 kg m^{2}", "0.09 kg m^{2}", "6.7 kg m^{2}"], 0, "mr^{2}."]
  ]
});

REV.add({
  id: "opt-eng-thermo", section: "opt-engineering", title: "Thermodynamics and engines", short: "Thermodynamics", glyph: "Q = ΔU + W",
  spec: "Option 11.2",
  summary: "The **first law of thermodynamics**, **non-flow processes** and **p–V diagrams**, engine cycles and **indicator diagrams**, engine **efficiencies**, the **second law**, and **heat pumps and refrigerators**.",
  notes: [
    { h: "First law and processes", list: [
      "**Q = ΔU + W**: heat supplied = increase in internal energy + work done **by** the gas.",
      "**Isothermal** (constant T): pV = constant; ΔU = 0, so Q = W.",
      "**Adiabatic** (no heat transfer): **pV^{γ} = constant**; Q = 0, so W = −ΔU (expanding gas cools).",
      "**Constant pressure**: W = pΔV. **Constant volume**: W = 0, so Q = ΔU.",
      "On a **p–V diagram**, the area under a curve = work done; the area enclosed by a cycle = net work per cycle."
    ]},
    { h: "Engine cycles", list: [
      "**Four-stroke petrol (Otto)** and **diesel** engines: induction, compression, expansion (power), exhaust.",
      "Theoretical cycles use idealised processes (adiabatic compression/expansion, heat added at constant volume for petrol, constant pressure for diesel). Real **indicator diagrams** have rounded corners and smaller areas.",
      "**Input power** = calorific value × fuel flow rate.",
      "**Indicated power** = (area of p–V loop) × (cycles per second) × (number of cylinders).",
      "**Output (brake) power** = Tω. **Friction power** = indicated − brake."
    ]},
    { h: "Efficiencies", list: [
      "Mechanical efficiency = brake power ÷ indicated power.",
      "Thermal efficiency = indicated power ÷ input power.",
      "Overall efficiency = brake power ÷ input power."
    ]},
    { h: "Second law and heat engines", list: [
      "A heat engine **must** transfer some heat to a cold sink: it can't convert all heat to work.",
      "Efficiency = W/Q_{H} = (Q_{H} − Q_{C})/Q_{H}. **Maximum theoretical efficiency = (T_{H} − T_{C})/T_{H}** (kelvin).",
      "Using waste heat (combined heat and power) improves overall energy use."
    ]},
    { h: "Reversed heat engines", list: [
      "Use work to move heat from cold to hot.",
      "**Refrigerator**: COP_{ref} = Q_{C}/W = T_{C}/(T_{H} − T_{C}) (maximum).",
      "**Heat pump**: COP_{hp} = Q_{H}/W = T_{H}/(T_{H} − T_{C}) (maximum).",
      "COP can be greater than 1 because energy is moved, not created."
    ]}
  ],
  cards: [
    ["State the first law of thermodynamics.", "Q = ΔU + W – heat supplied equals the increase in internal energy plus work done by the system."],
    ["What happens in an isothermal process?", "Temperature is constant; ΔU = 0 so Q = W; pV = constant."],
    ["What happens in an adiabatic process?", "No heat transfer (Q = 0); pV^{γ} = constant; W = −ΔU."],
    ["What does the area enclosed by a p–V loop represent?", "Net work done per cycle."],
    ["How is indicated power calculated?", "Area of the p–V loop × cycles per second × number of cylinders."],
    ["Define mechanical efficiency.", "Brake power ÷ indicated power."],
    ["Write the maximum theoretical efficiency of a heat engine.", "(T_{H} − T_{C})/T_{H}."],
    ["Why can't a heat engine be 100% efficient?", "The second law: it must reject some heat to a cold sink."],
    ["Write the maximum COP of a refrigerator.", "T_{C}/(T_{H} − T_{C})."],
    ["Write the maximum COP of a heat pump.", "T_{H}/(T_{H} − T_{C})."]
  ],
  quiz: [
    ["A gas receives 500 J of heat and does 200 J of work. ΔU?", ["700 J", "300 J", "−300 J", "200 J"], 1, "Q = ΔU + W."],
    ["Maximum efficiency between 600 K and 300 K?", ["0.25", "0.50", "2.0", "0.67"], 1, "(600 − 300)/600."],
    ["Maximum COP of a heat pump between 280 K and 300 K?", ["15", "14", "1.07", "0.93"], 0, "300/20."],
    ["In an adiabatic expansion, the gas…", ["Warms", "Cools", "Stays at the same temperature", "Gains heat"], 1, "Work is done using internal energy."],
    ["Brake power 30 kW, indicated power 40 kW. Mechanical efficiency?", ["0.75", "1.33", "0.25", "70%"], 0, "30/40."],
    ["Work done in a constant-volume process is…", ["pΔV", "Zero", "Q", "ΔU"], 1, "No volume change."]
  ]
});

/* ---------- 12 Turning points ---------- */
REV.add({
  id: "opt-tp-electron", section: "opt-turning", title: "The discovery of the electron", short: "Discovering the electron", glyph: "e/m",
  spec: "Option 12.1",
  summary: "**Cathode rays** and **thermionic emission**, **J.J. Thomson's** measurement of the electron's **specific charge**, and **Millikan's oil-drop experiment** showing charge is **quantised**.",
  notes: [
    { h: "Cathode rays and thermionic emission", list: [
      "In a low-pressure **discharge tube**, a high p.d. produced 'cathode rays' – later shown to be electrons. The gas glows because electrons excite and ionise gas atoms.",
      "**Thermionic emission**: heating a metal filament gives electrons enough energy to escape.",
      "An electron accelerated through p.d. V: **½mv^{2} = eV**."
    ]},
    { h: "Specific charge of the electron (Thomson)", list: [
      "**Crossed electric and magnetic fields** adjusted so the beam goes straight: eE = Bev → **v = E/B**.",
      "Then in the magnetic field alone, the beam moves in a circle: r = mv/(Be) → **e/m = v/(Br)**.",
      "Alternatively use eV = ½mv^{2} with the magnetic deflection.",
      "Result ≈ 1.76 × 10^{11} C kg^{−1} – about **1800 times** the specific charge of the hydrogen ion – so the electron is a tiny, sub-atomic particle."
    ]},
    { h: "Millikan's oil-drop experiment", list: [
      "Charged oil drops between horizontal plates. Adjust V so a drop is **stationary**: **QV/d = mg**.",
      "Find the drop's mass from its **terminal speed** with the field off, using **Stokes' law**: F = 6πηrv, so mg = 6πηrv with m = (4/3)πr^{3}ρ.",
      "Every charge measured was a whole-number multiple of **1.6 × 10^{−19} C** – charge is **quantised**."
    ]}
  ],
  cards: [
    ["What is thermionic emission?", "The release of electrons from a heated metal surface."],
    ["Speed of an electron accelerated through p.d. V?", "½mv^{2} = eV → v = √(2eV/m)."],
    ["How did Thomson find the speed of the electrons?", "Balanced electric and magnetic forces: eE = Bev → v = E/B."],
    ["How is e/m found from the circular path?", "e/m = v/(Br)."],
    ["How did the electron's specific charge compare with the hydrogen ion's?", "About 1800 times larger."],
    ["In Millikan's experiment, what's the condition for a stationary drop?", "QV/d = mg."],
    ["State Stokes' law.", "F = 6πηrv – the drag on a small sphere moving slowly through a fluid."],
    ["How was the mass of an oil drop found?", "From its terminal speed with the field off, using Stokes' law: mg = 6πηrv."],
    ["What did Millikan's experiment show?", "Charge is quantised – always a multiple of 1.6 × 10^{−19} C."]
  ],
  quiz: [
    ["E = 2.0 × 10^{4} V m^{−1} and B = 1.0 × 10^{−3} T balance an electron beam. Speed?", ["2.0 × 10^{7} m s^{−1}", "20 m s^{−1}", "2.0 × 10^{1} m s^{−1}", "5.0 × 10^{−8} m s^{−1}"], 0, "v = E/B."],
    ["An oil drop of weight 4.8 × 10^{−14} N is stationary between plates 5.0 mm apart at 1500 V. Its charge?", ["1.6 × 10^{−19} C", "3.2 × 10^{−19} C", "4.8 × 10^{−19} C", "1.0 × 10^{−16} C"], 0, "Q = mgd/V = 4.8 × 10^{−14} × 0.005 / 1500."],
    ["Millikan's results showed charge is…", ["Continuous", "Quantised", "Always negative", "Zero on oil"], 1, "Multiples of e."],
    ["Electrons accelerated through 500 V gain energy…", ["500 J", "8.0 × 10^{−17} J", "3.2 × 10^{−22} J", "1.6 × 10^{−19} J"], 1, "eV."],
    ["Why does a discharge tube glow?", ["Electrons are hot", "Electrons excite/ionise gas atoms, which emit light when they de-excite", "The glass fluoresces only", "Protons emit light"], 1, "Excitation and de-excitation."]
  ]
});

REV.add({
  id: "opt-tp-light-relativity", section: "opt-turning", title: "Wave–particle duality and special relativity", short: "Light and relativity", glyph: "t = γt₀",
  spec: "Option 12.2–12.3",
  summary: "Competing theories of light from **Newton and Huygens** to **Maxwell, Hertz and Einstein**, **electron diffraction** and **electron microscopes**, then **special relativity**: Michelson–Morley, **time dilation, length contraction** and **relativistic energy**.",
  notes: [
    { h: "The nature of light", list: [
      "**Newton's corpuscular theory**: light as particles – explained reflection and refraction (but predicted light speeds up in glass).",
      "**Huygens' wave theory**: wavelets. Newton's reputation kept the particle theory dominant for a century.",
      "**Young's double slit** (1803) showed interference – strong evidence for waves.",
      "**Maxwell**: light is an EM wave with speed c = 1/√(μ_{0}ε_{0}). **Hertz** discovered radio waves and showed they could be polarised and reflected. **Fizeau** measured c with a rotating toothed wheel.",
      "**Einstein** (photoelectric effect, 1905): light comes in photons – wave theory couldn't explain the threshold frequency."
    ]},
    { h: "Matter waves and electron microscopes", list: [
      "**de Broglie**: λ = h/mv. Electron diffraction confirmed it.",
      "Electron accelerated through V: λ = h/√(2meV). Higher V → shorter λ → better resolution.",
      "**Transmission electron microscope (TEM)**: magnetic lenses focus electrons through a thin sample.",
      "**Scanning tunnelling microscope (STM)**: a sharp tip close to a surface; electrons **tunnel** across the gap – current changes sharply with gap width, mapping individual atoms."
    ]},
    { h: "Special relativity", list: [
      "**Michelson–Morley experiment**: tried to detect Earth's motion through the 'ether' using an interferometer. The **null result** showed no ether – the speed of light is the same in all directions.",
      "**Inertial frame**: a frame moving at constant velocity (not accelerating).",
      "**Einstein's postulates**: (1) the laws of physics are the same in all inertial frames; (2) the speed of light in free space is the same for all observers.",
      "**Time dilation**: **t = t_{0}/√(1 − v^{2}/c^{2})** – moving clocks run slow. t_{0} = proper time (measured in the clock's own frame).",
      "Evidence: **muons** from the upper atmosphere reach the ground in far greater numbers than expected from their half-life.",
      "**Length contraction**: **l = l_{0}√(1 − v^{2}/c^{2})** – moving objects are shorter along the direction of motion.",
      "**Mass and energy**: E = mc^{2} = m_{0}c^{2}/√(1 − v^{2}/c^{2}). As v → c, energy → infinity, so nothing with mass can reach c."
    ]}
  ],
  cards: [
    ["What did Newton's corpuscular theory predict about light in glass?", "That it speeds up (it actually slows down)."],
    ["Which experiment supported the wave theory of light?", "Young's double slit (interference)."],
    ["How did Maxwell predict the speed of light?", "c = 1/√(μ_{0}ε_{0}) – light is an electromagnetic wave."],
    ["What did Hertz discover?", "Radio waves – and showed they could be reflected and polarised like light."],
    ["How does an STM work?", "Electrons tunnel between a sharp tip and the surface; the tunnelling current depends strongly on gap width, mapping atoms."],
    ["What was the Michelson–Morley result?", "A null result – no ether, so light speed doesn't depend on the observer's motion."],
    ["State Einstein's two postulates.", "Laws of physics are the same in all inertial frames; the speed of light in free space is the same for all observers."],
    ["Write the time dilation equation.", "t = t_{0}/√(1 − v^{2}/c^{2})."],
    ["What is proper time?", "Time measured by a clock in its own rest frame."],
    ["What evidence supports time dilation?", "More atmospheric muons reach the ground than their half-life would allow without relativity."],
    ["Write the length contraction equation.", "l = l_{0}√(1 − v^{2}/c^{2})."],
    ["Why can't a massive object reach the speed of light?", "Its energy (and relativistic mass) would become infinite."]
  ],
  quiz: [
    ["A particle moves at 0.80c. The factor 1/√(1 − v^{2}/c^{2}) is…", ["1.25", "1.67", "0.60", "5.0"], 1, "1/√0.36 = 1/0.6."],
    ["A muon's half-life is 1.5 µs at rest. Observed half-life at 0.80c?", ["0.90 µs", "1.5 µs", "2.5 µs", "1.9 µs"], 2, "1.5 × 1.67."],
    ["A 100 m spaceship moves at 0.60c. Length measured by a stationary observer?", ["60 m", "80 m", "125 m", "100 m"], 1, "100 × √(1 − 0.36)."],
    ["Which experiment showed there is no ether?", ["Young", "Millikan", "Michelson–Morley", "Fizeau"], 2, "Null result."],
    ["Increasing the accelerating voltage in an electron microscope improves resolution because…", ["Electrons are brighter", "Wavelength is shorter", "Magnetic lenses are stronger", "Electrons slow down"], 1, "λ = h/mv."],
    ["Who first showed light could be quantised as photons to explain the photoelectric effect?", ["Newton", "Maxwell", "Einstein", "Hertz"], 2, "1905."]
  ]
});

/* ---------- 13 Electronics ---------- */
REV.add({
  id: "opt-elec-analogue", section: "opt-electronics", title: "Semiconductor devices, op-amps and filters", short: "Analogue electronics", glyph: "G = −R_{f}/R_{in}",
  spec: "Option 13.1–13.2",
  summary: "**MOSFETs, Zener diodes, photodiodes and Hall-effect sensors**, **operational amplifiers** (comparator, inverting, non-inverting, summing, difference), and **LC resonant filters**.",
  notes: [
    { h: "Discrete semiconductor devices", table: [
      ["Device", "Key behaviour", "Use"],
      ["MOSFET (n-channel enhancement)", "Gate–source voltage above threshold switches on drain current; very high input resistance", "Electronic switch, amplifier"],
      ["Zener diode", "Conducts in reverse at a fixed breakdown voltage", "Constant voltage reference / regulator"],
      ["Photodiode", "Light produces a current (photovoltaic) or lowers reverse-bias resistance (photoconductive)", "Light sensors, optical communication"],
      ["Hall-effect sensor", "Magnetic field produces a p.d. across a current-carrying semiconductor", "Measuring B, detecting rotation/speed"]
    ]},
    { h: "Operational amplifiers", list: [
      "**Ideal op-amp**: infinite open-loop gain, infinite input resistance, zero output resistance.",
      "**Comparator** (open loop): output saturates high or low depending on which input is larger.",
      "**Inverting amplifier**: **V_{out}/V_{in} = −R_{f}/R_{in}**. The inverting input is a **virtual earth**.",
      "**Non-inverting amplifier**: **V_{out}/V_{in} = 1 + R_{f}/R_{1}**.",
      "**Summing amplifier**: V_{out} = −R_{f}(V_{1}/R_{1} + V_{2}/R_{2} + …) – e.g. audio mixers.",
      "**Difference amplifier**: output ∝ (V_{+} − V_{−}).",
      "Real op-amps: output can't exceed the supply voltages (saturation); **gain × bandwidth = constant**."
    ]},
    { h: "LC resonant filters", list: [
      "An inductor and capacitor in parallel resonate at **f_{0} = 1/(2π√(LC))** – energy swaps between the capacitor's electric field and the inductor's magnetic field.",
      "Used to select one frequency (e.g. radio tuning).",
      "**Q factor = f_{0}/bandwidth** (bandwidth measured at 1/√2 of peak amplitude) – higher Q gives a sharper, more selective peak."
    ]}
  ],
  cards: [
    ["What does an n-channel enhancement MOSFET do?", "Switches on a drain–source current when the gate–source voltage exceeds a threshold; it has very high input resistance."],
    ["What is a Zener diode used for?", "As a constant voltage reference – it conducts in reverse at a fixed breakdown voltage."],
    ["What does a Hall-effect sensor measure?", "Magnetic flux density (or detects rotation/position)."],
    ["List three properties of an ideal op-amp.", "Infinite open-loop gain, infinite input resistance, zero output resistance."],
    ["Gain of an inverting amplifier?", "−R_{f}/R_{in}."],
    ["Gain of a non-inverting amplifier?", "1 + R_{f}/R_{1}."],
    ["What is a virtual earth?", "In an inverting amplifier, the inverting input is held at (almost) 0 V by feedback."],
    ["What does a comparator do?", "Compares two input voltages; output saturates high or low depending on which is larger."],
    ["Resonant frequency of an LC circuit?", "f_{0} = 1/(2π√(LC))."],
    ["Define Q factor.", "f_{0} ÷ bandwidth – a measure of how sharp/selective the resonance is."]
  ],
  quiz: [
    ["Inverting amplifier with R_{f} = 100 kΩ, R_{in} = 10 kΩ. Gain?", ["10", "−10", "11", "−0.1"], 1, "−R_{f}/R_{in}."],
    ["Non-inverting with R_{f} = 90 kΩ, R_{1} = 10 kΩ. Gain?", ["9", "10", "−9", "0.11"], 1, "1 + 9."],
    ["Resonant frequency for L = 1.0 mH, C = 100 nF?", ["16 kHz", "1.6 kHz", "100 kHz", "160 Hz"], 0, "1/(2π√(10^{−10})) = 15.9 kHz."],
    ["Which component is best as a voltage reference?", ["MOSFET", "Zener diode", "Photodiode", "Hall sensor"], 1, "Fixed breakdown voltage."],
    ["Resonance at 10 kHz with bandwidth 500 Hz. Q?", ["5", "20", "0.05", "5000"], 1, "10 000 / 500."],
    ["An op-amp on a ±9 V supply can't output 12 V because of…", ["Virtual earth", "Saturation", "Bandwidth", "Hall effect"], 1, "Output limited by the supply rails."]
  ]
});

REV.add({
  id: "opt-elec-digital", section: "opt-electronics", title: "Digital logic and data communication", short: "Digital and comms", glyph: "A·B",
  spec: "Option 13.3–13.4",
  summary: "**Logic gates** and **Boolean algebra**, combinational and **sequential logic** (flip-flops, counters, 555 timers), **analogue-to-digital conversion** and **sampling**, and the principles of **communication systems**.",
  notes: [
    { h: "Logic gates", table: [
      ["Gate", "Output is 1 when…", "Boolean"],
      ["NOT", "Input is 0", "Ā"],
      ["AND", "Both inputs are 1", "A·B"],
      ["OR", "Either input is 1", "A + B"],
      ["NAND", "Not both inputs are 1", "NOT(A·B)"],
      ["NOR", "Neither input is 1", "NOT(A + B)"],
      ["XOR", "Inputs are different", "A ⊕ B"]
    ], after: "Build **truth tables** for combinations of gates; any logic function can be made from NAND gates alone." },
    { h: "Sequential logic", list: [
      "Output depends on previous states as well as current inputs (memory).",
      "**Flip-flops** store one bit; a **D-type** flip-flop with its inverted output fed back divides the clock frequency by 2.",
      "**Counters**: binary counters (chains of flip-flops), **decade (BCD)** counters (0–9 then reset), **Johnson counters**.",
      "**555 timer**: **astable** (continuous square wave – a clock) or **monostable** (one pulse of set length when triggered). Timing set by R and C."
    ]},
    { h: "Analogue to digital", list: [
      "**Sampling**: measuring the analogue signal at regular intervals. **Nyquist**: sampling rate must be at least **twice the highest frequency** in the signal, or aliasing occurs.",
      "**Quantisation**: each sample is rounded to the nearest of 2^{n} levels for an n-bit system – more bits = smaller quantisation error.",
      "**Bit rate** = sampling rate × bits per sample (× channels)."
    ]},
    { h: "Communication systems", list: [
      "Block diagram: input transducer → modulator → transmitter → channel → receiver → demodulator → output transducer.",
      "**Modulation**: **AM** (amplitude of carrier varies) – simple but noisy; **FM** (frequency varies) – better quality, more bandwidth.",
      "**Bandwidth** = range of frequencies a signal occupies; more bandwidth allows more data.",
      "**Media**: copper cable, optical fibre (high bandwidth, low attenuation, no EM interference), free space (radio, microwave, satellite).",
      "**Time-division multiplexing**: several signals share one channel by sending samples in turn.",
      "Digital signals can be **regenerated**, removing noise – an advantage over analogue."
    ]}
  ],
  cards: [
    ["What does a NAND gate output?", "0 only when both inputs are 1; otherwise 1."],
    ["What does an XOR gate output?", "1 when the inputs are different."],
    ["What does a NOR gate output?", "1 only when both inputs are 0."],
    ["What is sequential logic?", "Logic whose output depends on previous states (it has memory)."],
    ["How can a D-type flip-flop divide frequency by 2?", "Feed its inverted output back to its D input; it toggles on each clock pulse."],
    ["What is a decade counter?", "A counter that counts 0 to 9 then resets (BCD)."],
    ["What's the difference between astable and monostable 555 circuits?", "Astable produces a continuous square wave; monostable produces a single pulse when triggered."],
    ["State the Nyquist sampling criterion.", "Sample at at least twice the highest frequency in the signal."],
    ["How many quantisation levels does an 8-bit ADC have?", "2^{8} = 256."],
    ["How is bit rate calculated?", "Sampling rate × bits per sample (× number of channels)."],
    ["Compare AM and FM.", "AM varies carrier amplitude – simpler, more affected by noise. FM varies carrier frequency – better quality, needs more bandwidth."],
    ["What is time-division multiplexing?", "Sending several signals along one channel by interleaving their samples in time slots."]
  ],
  quiz: [
    ["Inputs A = 1, B = 1. Which gate outputs 1?", ["NAND", "NOR", "XOR", "AND"], 3, "AND."],
    ["Minimum sampling rate for audio up to 20 kHz?", ["10 kHz", "20 kHz", "40 kHz", "44.1 MHz"], 2, "2 × 20 kHz."],
    ["Bit rate for 16-bit samples at 44.1 kHz, stereo?", ["706 kbit s^{−1}", "1.41 Mbit s^{−1}", "88.2 kbit s^{−1}", "44.1 kbit s^{−1}"], 1, "44 100 × 16 × 2 = 1.41 × 10^{6}."],
    ["Which medium has the highest bandwidth and no EM interference?", ["Copper twisted pair", "Coaxial cable", "Optical fibre", "AM radio"], 2, "Optical fibre."],
    ["A 555 timer producing a continuous clock signal is in…", ["Monostable mode", "Astable mode", "Bistable mode", "Comparator mode"], 1, "Astable."],
    ["Which gate can be used to build any other logic function?", ["XOR", "NAND", "NOT", "OR"], 1, "NAND is universal (as is NOR)."]
  ]
});
