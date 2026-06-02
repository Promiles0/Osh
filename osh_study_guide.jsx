import { useState } from "react";

const topics = [
  {
    id: "relations",
    title: "Relations & Functions",
    emoji: "📐",
    color: "#7c3aed",
    sections: [
      {
        heading: "Relation vs Function",
        content: [
          "Relation R from set A to B: any rule assigning element a ∈ A to element b ∈ B. Written as R = {(a, b) ∈ A × B}.",
          "Function f: a SPECIAL relation where each x in domain maps to EXACTLY ONE y (unique output). Key word: unique.",
          "Domain: the input set (set X). Codomain/Range: the output set (set Y).",
          "Notation: y = f(x), read 'y equals f of x'. x is independent variable, y is dependent variable.",
          "f is like a machine: input x → operate → unique output f(x).",
        ],
      },
      {
        heading: "Types of Functions",
        content: [
          "Polynomial: f(x) = aₙxⁿ + ... + a₁x + a₀. Degree n if aₙ ≠ 0. Example: 2x⁴ - 3x³ + 2x - 1 is degree 4.",
          "Linear: f(x) = ax + b (degree 1, a ≠ 0). Domain & range = all real numbers. Example: f(x) = 3x + 4.",
          "Constant: C(x) = a for all x. Produces the same value regardless of input. Example: C(x) = 2.",
          "Rational: f(x) = P(x)/Q(x). Domain: all x where Q(x) ≠ 0 (denominator ≠ 0).",
          "Irrational: f(x) = ⁿ√P(x). If n is EVEN → domain requires P(x) ≥ 0. If n is ODD → depends on P(x).",
        ],
      },
      {
        heading: "Domain — Key Rules",
        content: [
          "For fractions: set denominator ≠ 0, solve for excluded x.",
          "For even roots (√): set expression inside ≥ 0.",
          "For odd roots (∛): no restriction from root itself.",
          "Example: f(x) = x/(x²-4) → domain is x ≠ ±2 (since x²-4 ≠ 0).",
          "Example: f(x) = √(x²-9) → need x²-9 ≥ 0 → x ≤ -3 or x ≥ 3.",
        ],
      },
      {
        heading: "Composite Functions",
        content: [
          "Composition (g∘f)(x) = g(f(x)): apply f first, then apply g to the result.",
          "Order matters! g∘f ≠ f∘g in general.",
          "Example: f(x) = 2x+1, g(x) = x²-1 → (g∘f)(x) = g(2x+1) = (2x+1)²-1 = 4x²+4x.",
          "(f∘g)(x) = f(x²-1) = 2(x²-1)+1 = 2x²-1.",
          "f∘f(x): apply f twice. g∘g(x): apply g twice.",
        ],
      },
      {
        heading: "Inverse Functions",
        content: [
          "f⁻¹ exists only if f is one-to-one (each y has exactly one x).",
          "Definition: x = f⁻¹(y) iff y = f(x). The roles of domain and range swap.",
          "Algebraic method (Changing object): write y = f(x), swap x and y, solve for new y → that's f⁻¹(x).",
          "Example: f(x) = 2x+1 → y = 2x+1 → x = 2y+1 → y = (x-1)/2 → f⁻¹(x) = (x-1)/2.",
          "Graph of f and f⁻¹ are symmetric about the line y = x.",
        ],
      },
    ],
  },
  {
    id: "parity",
    title: "Even & Odd Functions",
    emoji: "⚖️",
    color: "#0891b2",
    sections: [
      {
        heading: "Even Function",
        content: [
          "Definition: f(-x) = f(x) for ALL x in domain.",
          "Graph is symmetric about the Y-AXIS (y-axis acts like a mirror).",
          "Examples: f(x) = x², f(x) = cos(x), f(x) = |x|.",
          "Quick test: substitute -x. If you get the exact same function back → EVEN.",
          "All terms have EVEN powers: x⁰, x², x⁴, ... → likely even function.",
        ],
      },
      {
        heading: "Odd Function",
        content: [
          "Definition: f(-x) = -f(x) for ALL x in domain.",
          "Graph is symmetric about the ORIGIN (rotate 180° → same graph).",
          "Examples: f(x) = x³, f(x) = sin(x), f(x) = x.",
          "Quick test: substitute -x. If you get MINUS the original function → ODD.",
          "All terms have ODD powers: x¹, x³, x⁵, ... → likely odd function.",
        ],
      },
      {
        heading: "Neither Even Nor Odd",
        content: [
          "Most functions are neither! f(-x) gives neither f(x) nor -f(x).",
          "Example: f(x) = x² + x. f(-x) = x² - x ≠ f(x) and ≠ -f(x). → NEITHER.",
          "If a function has BOTH even and odd power terms → usually neither.",
          "Exception: f(x) = 0 is BOTH even and odd.",
        ],
      },
      {
        heading: "Step-by-Step Parity Test",
        content: [
          "Step 1: Find f(-x) by replacing every x with -x.",
          "Step 2: Simplify f(-x) completely.",
          "Step 3: Compare: f(-x) = f(x)? → EVEN. f(-x) = -f(x)? → ODD. Neither? → NEITHER.",
          "Example: f(x) = x⁴ - 2x². f(-x) = (-x)⁴ - 2(-x)² = x⁴ - 2x² = f(x) → EVEN.",
          "Example: f(x) = x³ - x. f(-x) = -x³ + x = -(x³ - x) = -f(x) → ODD.",
        ],
      },
    ],
  },
  {
    id: "explog",
    title: "Exponential & Logarithmic",
    emoji: "📈",
    color: "#059669",
    sections: [
      {
        heading: "Exponential Function",
        content: [
          "Definition: f(x) = aˣ where a > 0 and a ≠ 1.",
          "Domain = all reals ℝ. Range = positive reals (0, ∞).",
          "If a > 1: graph increases (growth). If 0 < a < 1: graph decreases (decay).",
          "Always passes through (0, 1) since a⁰ = 1.",
          "Natural exponential: f(x) = eˣ where e ≈ 2.718.",
        ],
      },
      {
        heading: "Laws of Exponents (Must Know!)",
        content: [
          "(1) aᵐ · aⁿ = aᵐ⁺ⁿ — same base, add exponents.",
          "(2) (aᵐ)ⁿ = aᵐⁿ — power of power, multiply.",
          "(3) (ab)ᵐ = aᵐbᵐ — distribute over product.",
          "(4) aᵐ/aⁿ = aᵐ⁻ⁿ — same base, subtract exponents.",
          "(5) a⁻ᵐ = 1/aᵐ — negative exponent = reciprocal.",
          "(6) a^(m/n) = ⁿ√(aᵐ) — fractional exponent = root.",
        ],
      },
      {
        heading: "Logarithmic Function",
        content: [
          "Definition: f(x) = logₐ(x) where a > 0 and a ≠ 1.",
          "It's the INVERSE of the exponential: y = aˣ ⟺ x = logₐ(y).",
          "Domain = positive reals (0, ∞). Range = all reals ℝ.",
          "Special: log base e = ln (natural log). log base 10 = log.",
          "Always passes through (1, 0) since logₐ(1) = 0.",
        ],
      },
      {
        heading: "Laws of Logarithms (Must Know!)",
        content: [
          "(1) logₐ(uv) = logₐu + logₐv — Product Law.",
          "(2) logₐ(u/v) = logₐu − logₐv — Quotient Law.",
          "(3) logₐ(uⁿ) = n·logₐu — Power Law.",
          "(4) logₐu = logbu / logba — Change of Base Law.",
          "(5) a^(logₐu) = u — Cancellation Identity.",
        ],
      },
      {
        heading: "Solving Exponential & Log Equations",
        content: [
          "Exponential equation: unknown in the exponent. Use logs to solve.",
          "Log equation: unknown inside log expression. Use exponent laws to solve.",
          "Key trick: if aˣ = aʸ then x = y (same base → equate exponents).",
          "Example: e^(3x+1) = 1/e² → e^(3x+1) = e^(-2) → 3x+1 = -2 → x = -1.",
          "Example: log₁₀₀(x-1) = 0 → 100⁰ = x-1 → 1 = x-1 → x = 2.",
        ],
      },
    ],
  },
  {
    id: "trig",
    title: "Trigonometry",
    emoji: "📐",
    color: "#dc2626",
    sections: [
      {
        heading: "Angles: Degrees & Radians",
        content: [
          "One full revolution = 360° = 2π radians.",
          "Conversion formula: d/180° = r/π.",
          "Degrees → Radians: multiply by π/180. Example: 60° × π/180 = π/3.",
          "Radians → Degrees: multiply by 180/π. Example: 3π/2 × 180/π = 270°.",
          "Key angles: 0°=0, 30°=π/6, 45°=π/4, 60°=π/3, 90°=π/2, 180°=π, 270°=3π/2, 360°=2π.",
        ],
      },
      {
        heading: "6 Trigonometric Ratios (SOH-CAH-TOA)",
        content: [
          "sin θ = opposite/hypotenuse (SOH)",
          "cos θ = adjacent/hypotenuse (CAH)",
          "tan θ = opposite/adjacent (TOA) = sin θ / cos θ",
          "csc θ = hyp/opp = 1/sin θ",
          "sec θ = hyp/adj = 1/cos θ",
          "cot θ = adj/opp = 1/tan θ",
        ],
      },
      {
        heading: "Pythagorean Theorem",
        content: [
          "For right triangle with hypotenuse h, sides a and b: h² = a² + b².",
          "Fundamental trig identity: sin²θ + cos²θ = 1.",
          "Derived: 1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ.",
          "Solving a right triangle: if you know 3 parts (including one side), you can find all parts.",
        ],
      },
      {
        heading: "Law of Sines (Oblique Triangles)",
        content: [
          "Use when: AAS (2 angles + any side) or ASA or SSA.",
          "Formula: sin A / a = sin B / b = sin C / c.",
          "Equivalently: a/sin A = b/sin B = c/sin C.",
          "Angles A, B, C are opposite to sides a, b, c respectively.",
        ],
      },
      {
        heading: "Law of Cosines (Oblique Triangles)",
        content: [
          "Use when: SSS (3 sides) or SAS (2 sides + included angle).",
          "a² = b² + c² - 2bc·cos A",
          "b² = a² + c² - 2ac·cos B",
          "c² = a² + b² - 2ab·cos C",
          "When C = 90°, cos C = 0, and c² = a² + b² → Pythagorean theorem is a special case!",
        ],
      },
    ],
  },
];

const flashcards = [
  { q: "What makes a relation a function?", a: "Every element in the domain maps to EXACTLY ONE element in the range (unique output for each input)." },
  { q: "What is f(-x) = f(x) called?", a: "EVEN function. Its graph is symmetric about the Y-axis." },
  { q: "What is f(-x) = -f(x) called?", a: "ODD function. Its graph is symmetric about the ORIGIN." },
  { q: "How do you find the inverse f⁻¹(x)?", a: "Write y = f(x), swap x and y, solve for y. The result is f⁻¹(x). (Changing Object method)" },
  { q: "What is (g∘f)(x)?", a: "g(f(x)) — apply f first, then apply g to the result." },
  { q: "Domain rule for rational function P(x)/Q(x)?", a: "All x where Q(x) ≠ 0 (exclude values that make denominator zero)." },
  { q: "Domain rule for even root ⁿ√P(x)?", a: "P(x) ≥ 0 (the expression inside must be non-negative)." },
  { q: "Product law of logarithms?", a: "logₐ(uv) = logₐu + logₐv" },
  { q: "Power law of logarithms?", a: "logₐ(uⁿ) = n · logₐu" },
  { q: "How do you convert 45° to radians?", a: "45 × π/180 = π/4 radians." },
  { q: "SOH-CAH-TOA: what is sin θ?", a: "sin θ = opposite / hypotenuse" },
  { q: "When to use Law of Sines vs Law of Cosines?", a: "Sines: AAS, ASA, SSA. Cosines: SSS, SAS." },
  { q: "What is aᵐ · aⁿ equal to?", a: "aᵐ⁺ⁿ (add exponents when multiplying same base)" },
  { q: "y = aˣ ⟺ ?", a: "x = logₐ(y) — this is the definition connecting exponential and logarithm." },
  { q: "Fundamental trig identity?", a: "sin²θ + cos²θ = 1" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openTopic, setOpenTopic] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState({ got: 0, missed: 0 });

  const tabs = [
    { id: "overview", label: "📋 Overview" },
    { id: "concepts", label: "📚 Concepts" },
    { id: "flashcards", label: "🃏 Flashcards" },
  ];

  const card = flashcards[cardIndex];

  function nextCard(correct) {
    setScore(s => ({ ...s, got: correct ? s.got + 1 : s.got, missed: !correct ? s.missed + 1 : s.missed }));
    setFlipped(false);
    setTimeout(() => setCardIndex(i => (i + 1) % flashcards.length), 150);
  }

  return (
    <div style={{ fontFamily: "'Georgia', serif", maxWidth: 820, margin: "0 auto", padding: "16px", background: "#0f0f1a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a0533, #0d1f4a)", border: "1px solid #3730a3", borderRadius: 14, padding: "20px 24px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, background: "radial-gradient(circle, #7c3aed33, transparent)", borderRadius: "50%" }} />
        <div style={{ fontSize: 11, color: "#a78bfa", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>GENFM601 — SJITC Nyamirambo · 2025-2026</div>
        <h1 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#f0e6ff" }}>Fundamental Engineering Mathematics</h1>
        <div style={{ fontSize: 13, color: "#94a3b8" }}>Functions · Parity · Exponential & Log · Trigonometry</div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            flex: 1, padding: "10px 4px", border: "1px solid", borderRadius: 8, cursor: "pointer",
            fontWeight: 600, fontSize: 12, fontFamily: "inherit", transition: "all 0.15s",
            background: activeTab === t.id ? "#7c3aed" : "#1e1e35",
            color: activeTab === t.id ? "white" : "#94a3b8",
            borderColor: activeTab === t.id ? "#7c3aed" : "#2d2d4e",
          }}>{t.label}</button>
        ))}
      </div>

      {/* OVERVIEW */}
      {activeTab === "overview" && (
        <div>
          {topics.map(t => (
            <div key={t.id} style={{ background: "#1a1a2e", border: `1px solid ${t.color}44`, borderLeft: `4px solid ${t.color}`, borderRadius: 10, padding: "14px 16px", marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: t.color, fontSize: 15 }}>{t.emoji} {t.title}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{t.sections.length} topic areas</div>
            </div>
          ))}

          <div style={{ background: "#1a1a2e", border: "1px solid #fbbf2444", borderLeft: "4px solid #fbbf24", borderRadius: 10, padding: 14, marginTop: 4 }}>
            <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: 14, marginBottom: 10 }}>⚡ Must-Know Formulas at a Glance</div>
            {[
              ["Even fn", "f(-x) = f(x) → Y-axis symmetry"],
              ["Odd fn", "f(-x) = -f(x) → origin symmetry"],
              ["Inverse", "Swap x & y in y = f(x), solve for y"],
              ["Composition", "(g∘f)(x) = g(f(x)) — f first, then g"],
              ["Log Product", "logₐ(uv) = logₐu + logₐv"],
              ["Log Power", "logₐ(uⁿ) = n·logₐu"],
              ["Degrees↔Radians", "d/180 = r/π"],
              ["SOH-CAH-TOA", "sin=opp/hyp, cos=adj/hyp, tan=opp/adj"],
              ["Law of Sines", "a/sinA = b/sinB = c/sinC"],
              ["Pythagorean", "h² = a² + b²  |  sin²θ + cos²θ = 1"],
            ].map(([label, val]) => (
              <div key={label} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24", minWidth: 110, flexShrink: 0 }}>{label}:</span>
                <span style={{ fontSize: 12, color: "#cbd5e1", fontFamily: "monospace" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONCEPTS */}
      {activeTab === "concepts" && (
        <div>
          {topics.map(t => (
            <div key={t.id} style={{ marginBottom: 10 }}>
              <button onClick={() => { setOpenTopic(openTopic === t.id ? null : t.id); setOpenSection(null); }} style={{
                width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: 10,
                border: `1px solid ${t.color}66`, cursor: "pointer", fontFamily: "inherit",
                background: openTopic === t.id ? t.color : "#1a1a2e",
                color: openTopic === t.id ? "white" : "#e2e8f0",
                fontWeight: 700, fontSize: 14, display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span>{t.emoji} {t.title}</span>
                <span style={{ fontSize: 16 }}>{openTopic === t.id ? "▲" : "▼"}</span>
              </button>

              {openTopic === t.id && (
                <div style={{ background: "#13132a", border: `1px solid ${t.color}33`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: 10 }}>
                  {t.sections.map((sec, si) => {
                    const key = `${t.id}-${si}`;
                    return (
                      <div key={si} style={{ marginBottom: 6 }}>
                        <button onClick={() => setOpenSection(openSection === key ? null : key)} style={{
                          width: "100%", textAlign: "left", padding: "10px 14px",
                          background: openSection === key ? `${t.color}22` : "#1e1e35",
                          border: `1px solid ${t.color}33`, borderRadius: 8, cursor: "pointer",
                          fontFamily: "inherit", color: openSection === key ? "#f0e6ff" : "#94a3b8",
                          fontWeight: 600, fontSize: 13, display: "flex", justifyContent: "space-between",
                        }}>
                          <span>▸ {sec.heading}</span>
                          <span style={{ color: t.color }}>{openSection === key ? "−" : "+"}</span>
                        </button>
                        {openSection === key && (
                          <div style={{ background: `${t.color}10`, borderRadius: "0 0 8px 8px", padding: "10px 14px" }}>
                            {sec.content.map((point, pi) => (
                              <div key={pi} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                                <span style={{ color: t.color, flexShrink: 0, fontSize: 14 }}>•</span>
                                <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{point}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* FLASHCARDS */}
      {activeTab === "flashcards" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: "#64748b" }}>Card {cardIndex + 1} of {flashcards.length}</div>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 13, color: "#22c55e" }}>✓ {score.got}</span>
              <span style={{ fontSize: 13, color: "#ef4444" }}>✗ {score.missed}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 4, background: "#1e1e35", borderRadius: 4, marginBottom: 16 }}>
            <div style={{ height: 4, background: "#7c3aed", borderRadius: 4, width: `${((cardIndex + 1) / flashcards.length) * 100}%`, transition: "width 0.3s" }} />
          </div>

          {/* Card */}
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              background: flipped ? "linear-gradient(135deg, #0d4a1f, #1a3a0d)" : "linear-gradient(135deg, #1a0a3a, #0d1f4a)",
              border: `1px solid ${flipped ? "#22c55e55" : "#7c3aed55"}`,
              borderRadius: 14, padding: "32px 24px", cursor: "pointer",
              minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "center",
              transition: "all 0.3s", userSelect: "none",
            }}>
            <div style={{ fontSize: 10, color: flipped ? "#86efac" : "#a78bfa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              {flipped ? "ANSWER" : "QUESTION — tap to reveal"}
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: flipped ? "#bbf7d0" : "#e2e8f0", lineHeight: 1.6 }}>
              {flipped ? card.a : card.q}
            </div>
          </div>

          {flipped && (
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <button onClick={() => nextCard(false)} style={{
                flex: 1, padding: "12px", background: "#2d0a0a", border: "1px solid #ef4444", borderRadius: 10,
                color: "#ef4444", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit",
              }}>✗ Need to review</button>
              <button onClick={() => nextCard(true)} style={{
                flex: 1, padding: "12px", background: "#0a2d14", border: "1px solid #22c55e", borderRadius: 10,
                color: "#22c55e", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit",
              }}>✓ Got it!</button>
            </div>
          )}

          {!flipped && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button onClick={() => { setFlipped(false); setCardIndex(0); setScore({ got: 0, missed: 0 }); }} style={{
                background: "transparent", border: "1px solid #2d2d4e", color: "#64748b",
                borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 12, fontFamily: "inherit",
              }}>↺ Restart deck</button>
            </div>
          )}

          <div style={{ background: "#1a1a2e", border: "1px solid #2d2d4e", borderRadius: 10, padding: "12px 14px", marginTop: 18 }}>
            <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>All topics covered in deck</div>
            {["Relations & Functions", "Even & Odd Functions", "Exponential Laws", "Logarithm Laws", "Trigonometry & Ratios", "Law of Sines & Cosines"].map((tp, i) => (
              <div key={i} style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>• {tp}</div>
            ))}
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", fontSize: 11, color: "#374151", marginTop: 20, paddingTop: 12, borderTop: "1px solid #1e1e35" }}>
        GENFM601 — Facilitator: HAKUZIMANA Dieudonné · Good luck! 🎓
      </div>
    </div>
  );
}