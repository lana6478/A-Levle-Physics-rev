/* Section 1: Measurements and their errors */
REV.add({
  id: "m-units", section: "s1", title: "SI units, prefixes and estimation", short: "Units and prefixes", glyph: "kg m s⁻²",
  spec: "3.1.1, 3.1.3",
  summary: "Every quantity is built from a handful of **SI base units**. You need to convert between prefixes, express derived units in base units, and make sensible **order-of-magnitude estimates**.",
  notes: [
    { h: "SI base units", table: [
      ["Quantity", "Unit", "Symbol"],
      ["Mass", "kilogram", "kg"],
      ["Length", "metre", "m"],
      ["Time", "second", "s"],
      ["Current", "ampere", "A"],
      ["Temperature", "kelvin", "K"],
      ["Amount of substance", "mole", "mol"]
    ], after: "Every other unit is **derived** from these, e.g. newton = kg m s^{−2}, joule = kg m^{2} s^{−2}, pascal = kg m^{−1} s^{−2}, coulomb = A s, volt = kg m^{2} s^{−3} A^{−1}." },
    { h: "Prefixes", table: [
      ["Prefix", "Symbol", "Factor"],
      ["tera", "T", "10^{12}"], ["giga", "G", "10^{9}"], ["mega", "M", "10^{6}"], ["kilo", "k", "10^{3}"],
      ["centi", "c", "10^{−2}"], ["milli", "m", "10^{−3}"], ["micro", "µ", "10^{−6}"], ["nano", "n", "10^{−9}"], ["pico", "p", "10^{−12}"], ["femto", "f", "10^{−15}"]
    ], after: "Squared and cubed units need care: 1 cm^{2} = 10^{−4} m^{2}; 1 cm^{3} = 10^{−6} m^{3}; 1 mm^{2} = 10^{−6} m^{2}." },
    { h: "Useful conversions", list: [
      "**Electronvolt**: 1 eV = 1.60 × 10^{−19} J (the energy gained by one electron accelerated through 1 V).",
      "**Kilowatt-hour**: 1 kWh = 1000 W × 3600 s = 3.6 × 10^{6} J.",
      "**Temperature**: T (K) = θ (°C) + 273 (273.15 precisely)."
    ]},
    { h: "Estimation", p: "An **order of magnitude** is the power of ten nearest a value. Estimate by rounding inputs to one significant figure and using sensible everyday values (person ≈ 70 kg, walking speed ≈ 1.5 m s^{−1}, a storey ≈ 3 m, atom ≈ 10^{−10} m, nucleus ≈ 10^{−15} m)." }
  ],
  cards: [
    ["Name the six SI base units used at A Level.", "kilogram, metre, second, ampere, kelvin, mole."],
    ["Express the newton in SI base units.", "kg m s^{−2}."],
    ["Express the joule in SI base units.", "kg m^{2} s^{−2}."],
    ["Express the watt in SI base units.", "kg m^{2} s^{−3}."],
    ["Express the coulomb in SI base units.", "A s."],
    ["What factor is the prefix 'nano'?", "10^{−9}."],
    ["What factor is the prefix 'pico'?", "10^{−12}."],
    ["What factor is the prefix 'tera'?", "10^{12}."],
    ["How many m^{2} in 1 mm^{2}?", "10^{−6} m^{2}."],
    ["Convert 1 eV into joules.", "1.60 × 10^{−19} J."],
    ["How many joules in 1 kWh?", "3.6 × 10^{6} J."],
    ["What is the approximate size of an atom and a nucleus?", "Atom ≈ 10^{−10} m; nucleus ≈ 10^{−15} m."]
  ],
  quiz: [
    ["Which is NOT an SI base unit?", ["kelvin", "ampere", "newton", "mole"], 2, "The newton is derived: kg m s^{−2}."],
    ["The pascal in base units is…", ["kg m s^{−2}", "kg m^{−1} s^{−2}", "kg m^{2} s^{−2}", "N m^{2}"], 1, "Pa = N m^{−2} = kg m s^{−2} × m^{−2}."],
    ["A wire has cross-sectional area 0.50 mm^{2}. In m^{2} this is…", ["5.0 × 10^{−4}", "5.0 × 10^{−7}", "5.0 × 10^{−6}", "5.0 × 10^{−3}"], 1, "0.50 × 10^{−6} m^{2}."],
    ["A 2.0 kW heater runs for 3.0 hours. Energy used in J?", ["6.0 × 10^{3}", "2.2 × 10^{7}", "6.0", "2.2 × 10^{4}"], 1, "6.0 kWh × 3.6 × 10^{6} = 2.16 × 10^{7} J."],
    ["The order of magnitude of the mass of an adult human in kg is…", ["10^{0}", "10^{1}", "10^{2}", "10^{3}"], 2, "About 70 kg ≈ 10^{2}."],
    ["5.0 MeV in joules is…", ["8.0 × 10^{−13}", "8.0 × 10^{−19}", "3.1 × 10^{13}", "5.0 × 10^{−13}"], 0, "5.0 × 10^{6} × 1.60 × 10^{−19}."],
    ["Which unit is equivalent to the volt?", ["J C^{−1}", "C J^{−1}", "A Ω^{−1}", "W A"], 0, "V = W/Q."]
  ],
  exam: [
    { q: "Show that the unit of the Young modulus can be written as kg m^{−1} s^{−2}.", marks: 2, points: [
      "Young modulus = stress / strain; strain has no unit, so unit = unit of stress = N m^{−2}.",
      "N = kg m s^{−2}, so N m^{−2} = kg m s^{−2} m^{−2} = kg m^{−1} s^{−2}."
    ]},
    { q: "Estimate the kinetic energy of a sprinter running at top speed. State the values you use.", marks: 3, points: [
      "Sensible mass, e.g. 70 kg (50–100 kg).",
      "Sensible speed, e.g. 10 m s^{−1} (8–12 m s^{−1}).",
      "Ek = ½mv^{2} ≈ ½ × 70 × 10^{2} ≈ 3500 J (accept order 10^{3} J)."
    ]}
  ]
});

REV.add({
  id: "m-errors", section: "s1", title: "Errors and uncertainties", short: "Uncertainties", glyph: "±Δx",
  spec: "3.1.2",
  summary: "No measurement is exact. Know the vocabulary (**precise, accurate, repeatable, reproducible, resolution**), the difference between **random and systematic errors**, and how to **combine uncertainties** and get them from graphs.",
  notes: [
    { h: "Key terms", table: [
      ["Term", "Meaning"],
      ["Precise", "Repeated measurements are close to each other (little spread)"],
      ["Accurate", "Close to the true value"],
      ["Repeatable", "Same person, same method, same equipment gives the same results"],
      ["Reproducible", "Different people / methods / equipment give the same results"],
      ["Resolution", "The smallest change the instrument can detect"],
      ["Uncertainty", "The interval within which the true value is expected to lie, e.g. 20.1 ± 0.1 cm"]
    ]},
    { h: "Random and systematic errors", table: [
      ["", "Random errors", "Systematic errors"],
      ["Effect", "Scatter readings either side of the true value – affect **precision**", "Shift all readings the same way – affect **accuracy**"],
      ["Causes", "Reaction time, fluctuating conditions, reading a scale at slightly different angles", "Zero error, wrong calibration, consistent parallax, heat loss in one direction"],
      ["Reduce by", "Repeating and averaging; using a data logger or video; bigger quantities", "Checking zero, calibrating, correct technique – repeating does **not** help"]
    ]},
    { h: "Finding the uncertainty", list: [
      "**Single reading** on a scale (e.g. thermometer): ± half the smallest division (at least).",
      "**Measurement** from two readings (e.g. a length from a ruler, both ends read): ± one smallest division.",
      "**Digital meters**: ± the last significant digit (unless the manufacturer gives more).",
      "**Repeated readings**: ± half the range (largest − smallest) ÷ 2.",
      "**Fractional** uncertainty = absolute ÷ value; **percentage** = fractional × 100%."
    ]},
    { h: "Combining uncertainties", table: [
      ["Operation", "Rule", "Example"],
      ["Add or subtract", "**Add absolute** uncertainties", "(5.0 ± 0.1) − (2.0 ± 0.1) = 3.0 ± 0.2"],
      ["Multiply or divide", "**Add percentage** uncertainties", "2% in V and 3% in I → 5% in R"],
      ["Raise to a power n", "**Multiply percentage** by n", "2% in r → 6% in r^{3}; ½ × % for a square root"]
    ]},
    { h: "Uncertainty from graphs", list: [
      "Error bars show the uncertainty of each point.",
      "Draw the **best-fit line** and the **steepest and shallowest lines** that still pass through all error bars.",
      "Uncertainty in gradient = |best gradient − worst gradient| (or half the difference between max and min gradients).",
      "Percentage uncertainty in gradient = uncertainty ÷ best gradient × 100%. The same method works for intercepts."
    ]}
  ],
  memory: ["**Random** = **R**epeat to reduce. **Systematic** = **S**ame shift every time – repeating won't help.", "× or ÷ → add **%**. + or − → add **absolute**."],
  cards: [
    ["What is a precise measurement?", "One where repeated values are close together."],
    ["What is an accurate measurement?", "One close to the true value."],
    ["What is the difference between repeatable and reproducible?", "Repeatable: same experimenter/method/equipment gives same results. Reproducible: different experimenter, method or equipment gives same results."],
    ["What is resolution?", "The smallest change in a quantity that an instrument can detect."],
    ["What kind of error does a zero error cause?", "A systematic error."],
    ["How can random errors be reduced?", "Repeat readings and take a mean; use more precise apparatus or data loggers."],
    ["Why doesn't repeating reduce systematic error?", "Every reading is shifted by the same amount, so the mean is shifted too."],
    ["What is the uncertainty of repeated readings?", "Half the range."],
    ["What is the uncertainty in a length measured with a ruler (two readings)?", "± one smallest division, e.g. ±1 mm."],
    ["How do you combine uncertainties when multiplying?", "Add the percentage uncertainties."],
    ["How do you combine uncertainties when subtracting?", "Add the absolute uncertainties."],
    ["The radius has 2% uncertainty. What is the uncertainty in the volume of a sphere?", "6% (V ∝ r^{3})."],
    ["How do you find the uncertainty in a gradient?", "Draw the steepest/shallowest lines through all error bars; uncertainty = difference between best and worst gradient."]
  ],
  quiz: [
    ["Results are tightly grouped but all 5% above the true value. They are…", ["Accurate and precise", "Precise but not accurate", "Accurate but not precise", "Neither"], 1, "Small spread (precise) but shifted (systematic error)."],
    ["Repeat times: 2.31, 2.35, 2.27, 2.33 s. The uncertainty is…", ["±0.02 s", "±0.04 s", "±0.08 s", "±0.01 s"], 1, "Range = 2.35 − 2.27 = 0.08; half = 0.04."],
    ["V has 3% uncertainty and I has 2%. The uncertainty in R = V/I is…", ["1%", "1.5%", "5%", "6%"], 2, "Divide → add percentages."],
    ["A diameter has 1.5% uncertainty. The uncertainty in area (πd^{2}/4) is…", ["1.5%", "3.0%", "0.75%", "2.25%"], 1, "Power 2 → double the %."],
    ["A metre rule reading is 0.450 m and 0.120 m at the ends, each ±0.5 mm. The length is…", ["0.330 ± 0.0005 m", "0.330 ± 0.001 m", "0.330 ± 0.002 m", "0.330 ± 0.0025 m"], 1, "Subtracting → add absolute: 0.5 + 0.5 = 1 mm."],
    ["Which error does using a data logger instead of a stopwatch reduce?", ["Zero error", "Random error from reaction time", "Calibration error", "Parallax that's always the same"], 1, "Human reaction time varies randomly."],
    ["A thermometer reads 1 °C in melting ice. This is a…", ["Random error", "Zero (systematic) error", "Resolution limit", "Percentage uncertainty"], 1, "Every reading is shifted by +1 °C."]
  ],
  exam: [
    { q: "A student measures the diameter of a wire as 0.38 mm ± 0.01 mm and its length as 1.500 m ± 0.002 m. The resistance is 4.6 Ω ± 0.1 Ω. Calculate the percentage uncertainty in the resistivity, ρ = RA/L.", marks: 3, points: [
      "% in d = 0.01/0.38 × 100 = 2.6%; area ∝ d^{2} so % in A = 5.3%.",
      "% in R = 0.1/4.6 × 100 = 2.2%; % in L = 0.002/1.500 × 100 = 0.13%.",
      "Total = 5.3 + 2.2 + 0.13 ≈ 7.6% (accept 7–8%)."
    ]}
  ]
});
