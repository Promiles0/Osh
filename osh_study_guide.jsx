import { useState } from "react";

// ─── PROBLEM BANK ───────────────────────────────────────────────────────────
const sections = [
  {
    id: "domain",
    title: "Finding Domain",
    color: "#7c3aed",
    emoji: "🔍",
    problems: [
      {
        question: "Find the domain of f(x) = (x-1)(1+x) / (9 - x²)",
        hint: "Set denominator ≠ 0. Factor 9 - x².",
        steps: [
          "Set denominator ≠ 0: 9 - x² ≠ 0",
          "Factor: (3-x)(3+x) ≠ 0",
          "So x ≠ 3 and x ≠ -3",
          "Domain = ℝ \\ {-3, 3}  i.e. all reals except ±3"
        ],
        answer: "ℝ \\ {-3, 3}"
      },
      {
        question: "Find the domain of f(x) = √((x-2)(x+3) / (1-x))",
        hint: "Even root → expression inside must be ≥ 0. Sign analysis needed.",
        steps: [
          "Need (x-2)(x+3)/(1-x) ≥ 0",
          "Critical values: x = 2, x = -3, x = 1",
          "Sign table for intervals: (-∞,-3), (-3,1), (1,2), (2,∞)",
          "Test each: (-∞,-3): neg×neg/pos = + ✓ | (-3,1): pos×neg/pos = - ✗",
          "(1,2): pos×pos/neg = - ✗ | (2,∞): pos×pos/neg = - ✗",
          "Also include x=-3 and x=2 (makes expression = 0, still valid for √)",
          "Domain = (-∞, -3] ∪ {2}  Wait — recheck: at x=2 value=0 ✓",
          "Domain = (-∞, -3] ∪ [2, 2] but x≠1 (denom=0)",
          "Final: Domain = (-∞, -3] ∪ {2}"
        ],
        answer: "(-∞, -3] ∪ {2}"
      },
      {
        question: "Find the domain of f(x) = ⁴√(x / (x²-9))",
        hint: "4th root is even → inside ≥ 0. Also denominator ≠ 0.",
        steps: [
          "Need x/(x²-9) ≥ 0, and x²-9 ≠ 0",
          "Factor denominator: (x-3)(x+3) ≠ 0 → x ≠ ±3",
          "Critical values: x = 0, x = -3, x = 3",
          "Sign table on (-∞,-3), (-3,0), (0,3), (3,∞):",
          "(-∞,-3): neg/(pos) = neg ✗ | (-3,0): neg/neg = pos ✓",
          "(0,3): pos/neg = neg ✗ | (3,∞): pos/pos = pos ✓",
          "Include x=0 (gives 0, valid for root)",
          "Domain = [-3, 0] ∪ (3, ∞)  — but exclude ±3",
          "Domain = (-3, 0] ∪ (3, ∞)"
        ],
        answer: "(-3, 0] ∪ (3, ∞)"
      },
      {
        question: "Find the domain of f(x) = ⁵√(x / (3 - 4x - x²))",
        hint: "5th root is odd → no restriction from root. Only denominator ≠ 0.",
        steps: [
          "Odd root (n=5) → expression inside can be any real number",
          "Only restriction: denominator ≠ 0",
          "Set 3 - 4x - x² ≠ 0 → x² + 4x - 3 ≠ 0",
          "Discriminant: 16 + 12 = 28, roots = (-4 ± √28)/2 = -2 ± √7",
          "So x ≠ -2+√7 and x ≠ -2-√7",
          "Domain = ℝ \\ {-2-√7, -2+√7}"
        ],
        answer: "ℝ \\ {-2-√7, -2+√7}"
      },
    ]
  },
  {
    id: "values",
    title: "Evaluating Functions",
    color: "#0891b2",
    emoji: "🧮",
    problems: [
      {
        question: "Given f(x) = x³ - 2x² + 4x - 1, find: f(0), f(1), f(-2)",
        hint: "Substitute directly and simplify each time.",
        steps: [
          "f(0) = 0³ - 2(0)² + 4(0) - 1 = 0 - 0 + 0 - 1 = -1",
          "f(1) = 1 - 2 + 4 - 1 = 2",
          "f(-2) = (-2)³ - 2(-2)² + 4(-2) - 1",
          "     = -8 - 2(4) - 8 - 1",
          "     = -8 - 8 - 8 - 1 = -25"
        ],
        answer: "f(0) = -1,  f(1) = 2,  f(-2) = -25"
      },
      {
        question: "Given f(x) = x³ - 2x² + 4x - 1, find [f(x+h) - f(x)] / h",
        hint: "Expand f(x+h) by substituting (x+h) for every x. Then subtract f(x) and simplify.",
        steps: [
          "f(x+h) = (x+h)³ - 2(x+h)² + 4(x+h) - 1",
          "= x³+3x²h+3xh²+h³ - 2(x²+2xh+h²) + 4x+4h - 1",
          "= x³+3x²h+3xh²+h³ - 2x²-4xh-2h² + 4x+4h - 1",
          "f(x+h)-f(x) = 3x²h+3xh²+h³ - 4xh - 2h² + 4h",
          "Divide by h: 3x² + 3xh + h² - 4x - 2h + 4",
          "Answer = 3x² + 3xh + h² - 4x - 2h + 4"
        ],
        answer: "3x² + 3xh + h² - 4x - 2h + 4"
      },
      {
        question: "f(x) = 2x + 1, g(x) = x² - 1. Find fog(x), gof(x), fof(x), gog(x)",
        hint: "fog means f(g(x)). Substitute g into f. Order matters!",
        steps: [
          "fog(x) = f(g(x)) = f(x²-1) = 2(x²-1)+1 = 2x²-2+1 = 2x²-1",
          "gof(x) = g(f(x)) = g(2x+1) = (2x+1)²-1 = 4x²+4x+1-1 = 4x²+4x",
          "fof(x) = f(f(x)) = f(2x+1) = 2(2x+1)+1 = 4x+2+1 = 4x+3",
          "gog(x) = g(g(x)) = g(x²-1) = (x²-1)²-1 = x⁴-2x²+1-1 = x⁴-2x²"
        ],
        answer: "fog=2x²-1 | gof=4x²+4x | fof=4x+3 | gog=x⁴-2x²"
      }
    ]
  },
  {
    id: "inverse",
    title: "Inverse Functions",
    color: "#059669",
    emoji: "🔄",
    problems: [
      {
        question: "Find f⁻¹(x) for f(x) = 2x + 1",
        hint: "Write y = f(x), then swap x↔y, then solve for y.",
        steps: [
          "Step 1: Write y = 2x + 1",
          "Step 2: Swap (change object): x = 2y + 1",
          "Step 3: Solve for y: 2y = x - 1",
          "Step 4: y = (x-1)/2",
          "Therefore f⁻¹(x) = (x-1)/2",
          "Check: f(f⁻¹(x)) = 2·(x-1)/2 + 1 = x-1+1 = x ✓"
        ],
        answer: "f⁻¹(x) = (x-1)/2"
      },
      {
        question: "Find f⁻¹(x) for f(x) = (3x+2)/(x-1)",
        hint: "Same method — swap x and y, then isolate y (you'll need to collect y terms).",
        steps: [
          "Step 1: y = (3x+2)/(x-1)",
          "Step 2: Swap: x = (3y+2)/(y-1)",
          "Step 3: Multiply both sides by (y-1): x(y-1) = 3y+2",
          "Step 4: Expand: xy - x = 3y + 2",
          "Step 5: Collect y terms: xy - 3y = x + 2",
          "Step 6: Factor: y(x-3) = x + 2",
          "Step 7: y = (x+2)/(x-3)",
          "f⁻¹(x) = (x+2)/(x-3),  domain: x ≠ 3"
        ],
        answer: "f⁻¹(x) = (x+2)/(x-3)"
      },
      {
        question: "Find f⁻¹(x) for f(x) = x² + 1, (x ≥ 0)",
        hint: "For square root inverse, restrict domain first so f is one-to-one.",
        steps: [
          "Step 1: y = x² + 1",
          "Step 2: Swap: x = y² + 1",
          "Step 3: Solve for y: y² = x - 1  →  y = √(x-1)",
          "Take positive root since original domain was x ≥ 0",
          "f⁻¹(x) = √(x-1),  domain: x ≥ 1",
          "Check: f(f⁻¹(x)) = (√(x-1))² + 1 = x-1+1 = x ✓"
        ],
        answer: "f⁻¹(x) = √(x-1),  x ≥ 1"
      }
    ]
  },
  {
    id: "parity",
    title: "Even / Odd Parity",
    color: "#d97706",
    emoji: "⚖️",
    problems: [
      {
        question: "Determine if f(x) = x⁴ - 2x² + 5 is even, odd, or neither",
        hint: "Compute f(-x), simplify, compare to f(x) and -f(x).",
        steps: [
          "Compute f(-x): f(-x) = (-x)⁴ - 2(-x)² + 5",
          "= x⁴ - 2x² + 5",
          "Compare: f(-x) = x⁴ - 2x² + 5 = f(x) ✓",
          "Conclusion: EVEN function",
          "Graph is symmetric about the Y-axis"
        ],
        answer: "EVEN — f(-x) = f(x)"
      },
      {
        question: "Determine if f(x) = 3x⁵ - 2x³ + x is even, odd, or neither",
        hint: "All odd powers — expect odd function.",
        steps: [
          "f(-x) = 3(-x)⁵ - 2(-x)³ + (-x)",
          "= 3(-x⁵) - 2(-x³) + (-x)",
          "= -3x⁵ + 2x³ - x",
          "= -(3x⁵ - 2x³ + x)",
          "= -f(x) ✓",
          "Conclusion: ODD function",
          "Graph is symmetric about the ORIGIN"
        ],
        answer: "ODD — f(-x) = -f(x)"
      },
      {
        question: "Determine if f(x) = x³ + x² is even, odd, or neither",
        hint: "Mixed odd and even powers — suspect neither.",
        steps: [
          "f(-x) = (-x)³ + (-x)² = -x³ + x²",
          "Compare to f(x) = x³ + x²: NOT equal → not even",
          "Compare to -f(x) = -x³ - x²: NOT equal → not odd",
          "Conclusion: NEITHER even nor odd"
        ],
        answer: "NEITHER"
      },
      {
        question: "Determine if f(x) = sin(x)/x is even, odd, or neither (x ≠ 0)",
        hint: "Use the known parity of sin(x).",
        steps: [
          "f(-x) = sin(-x)/(-x)",
          "sin(-x) = -sin(x)  [sine is odd]",
          "So f(-x) = (-sin x)/(-x) = sin(x)/x = f(x)",
          "f(-x) = f(x) ✓",
          "Conclusion: EVEN function"
        ],
        answer: "EVEN — f(-x) = f(x)"
      }
    ]
  },
  {
    id: "explog",
    title: "Exponential & Log Equations",
    color: "#dc2626",
    emoji: "📈",
    problems: [
      {
        question: "Solve: e^(3x+1) = 1/e²",
        hint: "Write both sides as powers of e, then equate exponents.",
        steps: [
          "Rewrite right side: 1/e² = e^(-2)",
          "Now: e^(3x+1) = e^(-2)",
          "Equate exponents: 3x + 1 = -2",
          "3x = -3",
          "x = -1"
        ],
        answer: "x = -1"
      },
      {
        question: "Solve: 2ˣ = 3^(x-1)",
        hint: "Take log of both sides. Use log(aᵇ) = b·log(a).",
        steps: [
          "Take ln of both sides: ln(2ˣ) = ln(3^(x-1))",
          "Apply power law: x·ln2 = (x-1)·ln3",
          "Expand: x·ln2 = x·ln3 - ln3",
          "Collect x: x·ln2 - x·ln3 = -ln3",
          "x(ln2 - ln3) = -ln3",
          "x = -ln3 / (ln2 - ln3) = ln3 / (ln3 - ln2)"
        ],
        answer: "x = ln3 / (ln3 - ln2) ≈ 2.71"
      },
      {
        question: "Solve: (log x)² - log(x³) + 2 = 0",
        hint: "Let t = log x. Use power law log(x³) = 3log x = 3t.",
        steps: [
          "Let t = log x",
          "Rewrite: t² - 3t + 2 = 0",
          "Factor: (t-1)(t-2) = 0",
          "So t = 1 or t = 2",
          "t = 1: log x = 1 → x = 10",
          "t = 2: log x = 2 → x = 100",
          "Check both in original: both valid ✓"
        ],
        answer: "x = 10  or  x = 100"
      },
      {
        question: "Solve: 10^(2x) + 10^x = 2",
        hint: "Let u = 10ˣ. Then 10^(2x) = u². Solve the quadratic.",
        steps: [
          "Let u = 10ˣ  (u > 0)",
          "Equation becomes: u² + u - 2 = 0",
          "Factor: (u+2)(u-1) = 0",
          "u = -2 or u = 1",
          "Since u = 10ˣ > 0, reject u = -2",
          "u = 1: 10ˣ = 1 = 10⁰ → x = 0"
        ],
        answer: "x = 0"
      }
    ]
  },
  {
    id: "trig",
    title: "Trigonometry Problems",
    color: "#7c3aed",
    emoji: "📐",
    problems: [
      {
        question: "Convert: (a) 150° to radians  (b) 5π/6 to degrees",
        hint: "Use d/180 = r/π in both directions.",
        steps: [
          "(a) Degrees to radians: multiply by π/180",
          "150 × π/180 = 150π/180 = 5π/6",
          "",
          "(b) Radians to degrees: multiply by 180/π",
          "(5π/6) × (180/π) = 5×180/6 = 900/6 = 150°"
        ],
        answer: "(a) 5π/6  (b) 150°"
      },
      {
        question: "Right triangle: opposite = 5, adjacent = 12. Find all 6 trig ratios for angle θ.",
        hint: "First find hypotenuse using Pythagorean theorem, then apply SOH-CAH-TOA.",
        steps: [
          "Hypotenuse: h = √(5² + 12²) = √(25+144) = √169 = 13",
          "sin θ = opp/hyp = 5/13",
          "cos θ = adj/hyp = 12/13",
          "tan θ = opp/adj = 5/12",
          "csc θ = hyp/opp = 13/5",
          "sec θ = hyp/adj = 13/12",
          "cot θ = adj/opp = 12/5"
        ],
        answer: "sin=5/13, cos=12/13, tan=5/12, csc=13/5, sec=13/12, cot=12/5"
      },
      {
        question: "In triangle ABC: A=40°, B=60°, a=10. Find side b using Law of Sines.",
        hint: "a/sinA = b/sinB. Cross multiply to find b.",
        steps: [
          "Law of Sines: a/sinA = b/sinB",
          "10/sin(40°) = b/sin(60°)",
          "b = 10 × sin(60°) / sin(40°)",
          "sin(60°) = √3/2 ≈ 0.866",
          "sin(40°) ≈ 0.643",
          "b = 10 × 0.866 / 0.643",
          "b ≈ 13.47"
        ],
        answer: "b ≈ 13.47"
      },
      {
        question: "Triangle: a=8, b=5, C=60°. Find side c using Law of Cosines.",
        hint: "Use c² = a² + b² - 2ab·cosC.",
        steps: [
          "c² = a² + b² - 2ab·cos C",
          "c² = 8² + 5² - 2(8)(5)·cos(60°)",
          "c² = 64 + 25 - 80 × (1/2)",
          "c² = 89 - 40 = 49",
          "c = √49 = 7"
        ],
        answer: "c = 7"
      },
      {
        question: "Prove: sin²θ + cos²θ = 1 (from right triangle definition)",
        hint: "Write sin and cos in terms of sides, then add squares.",
        steps: [
          "Let θ be an angle in right triangle with sides opp, adj, hyp",
          "sin θ = opp/hyp,  cos θ = adj/hyp",
          "sin²θ + cos²θ = (opp/hyp)² + (adj/hyp)²",
          "= (opp² + adj²) / hyp²",
          "By Pythagorean theorem: opp² + adj² = hyp²",
          "= hyp²/hyp² = 1 ✓"
        ],
        answer: "sin²θ + cos²θ = 1  (QED)"
      }
    ]
  }
];

export default function App() {
  const [activeSec, setActiveSec] = useState(null);
  const [openProblem, setOpenProblem] = useState(null);
  const [showSteps, setShowSteps] = useState({});
  const [attempted, setAttempted] = useState({});

  function toggleStep(key) {
    setShowSteps(p => ({ ...p, [key]: !p[key] }));
  }

  function markAttempted(key) {
    setAttempted(p => ({ ...p, [key]: true }));
  }

  const totalProblems = sections.reduce((s, sec) => s + sec.problems.length, 0);
  const doneCount = Object.keys(attempted).length;

  return (
    <div style={{ fontFamily: "'Georgia', serif", maxWidth: 840, margin: "0 auto", padding: "16px", background: "#0a0a14", minHeight: "100vh", color: "#e2e8f0", boxSizing: "border-box" }}>
      <style>{`body, html { background: #0a0a14 !important; margin: 0; padding: 0; } * { box-sizing: border-box; }`}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0d0d1f, #1a0a3a)", border: "1px solid #3730a366", borderRadius: 14, padding: "18px 22px", marginBottom: 18 }}>
        <div style={{ fontSize: 10, color: "#7c3aed", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>GENFM601 · Worked Examples & Practice</div>
        <h1 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 700, color: "#f0e6ff" }}>Maths Practice Problems</h1>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
          <div style={{ fontSize: 12, color: "#64748b" }}>{sections.length} topics · {totalProblems} worked examples</div>
          <div style={{ fontSize: 12 }}>
            <span style={{ color: "#22c55e" }}>✓ {doneCount}</span>
            <span style={{ color: "#475569" }}> / {totalProblems} attempted</span>
          </div>
        </div>
        {doneCount > 0 && (
          <div style={{ height: 3, background: "#1e1e35", borderRadius: 4, marginTop: 8 }}>
            <div style={{ height: 3, background: "#22c55e", borderRadius: 4, width: `${(doneCount/totalProblems)*100}%`, transition: "width 0.4s" }} />
          </div>
        )}
      </div>

      {/* Section selector */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 18 }}>
        {sections.map(sec => (
          <button key={sec.id} onClick={() => setActiveSec(activeSec === sec.id ? null : sec.id)} style={{
            padding: "10px 8px", borderRadius: 10, border: `1px solid ${sec.color}${activeSec === sec.id ? "cc" : "44"}`,
            background: activeSec === sec.id ? `${sec.color}22` : "#13132a",
            color: activeSec === sec.id ? "#f0e6ff" : "#94a3b8",
            cursor: "pointer", fontFamily: "inherit", fontWeight: 600, fontSize: 11,
            textAlign: "center", transition: "all 0.15s", lineHeight: 1.3
          }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{sec.emoji}</div>
            {sec.title}
          </button>
        ))}
      </div>

      {/* No section selected */}
      {!activeSec && (
        <div style={{ background: "#13132a", border: "1px solid #1e1e35", borderRadius: 12, padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>👆</div>
          <div style={{ color: "#64748b", fontSize: 14 }}>Select a topic above to start practicing</div>
          <div style={{ color: "#475569", fontSize: 12, marginTop: 6 }}>Each problem has a hint and full step-by-step solution</div>
        </div>
      )}

      {/* Problems */}
      {activeSec && (() => {
        const sec = sections.find(s => s.id === activeSec);
        return (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 4, height: 24, background: sec.color, borderRadius: 2 }} />
              <h2 style={{ margin: 0, fontSize: 16, color: "#f0e6ff" }}>{sec.emoji} {sec.title}</h2>
              <span style={{ fontSize: 11, color: "#64748b", marginLeft: "auto" }}>{sec.problems.length} problems</span>
            </div>

            {sec.problems.map((prob, pi) => {
              const key = `${sec.id}-${pi}`;
              const isOpen = openProblem === key;
              const stepsVisible = showSteps[key];
              const done = attempted[key];

              return (
                <div key={pi} style={{
                  background: "#13132a",
                  border: `1px solid ${isOpen ? sec.color + "66" : "#1e1e35"}`,
                  borderLeft: `3px solid ${done ? "#22c55e" : sec.color}`,
                  borderRadius: 12, marginBottom: 12, overflow: "hidden",
                  transition: "all 0.2s"
                }}>
                  {/* Problem header */}
                  <button onClick={() => setOpenProblem(isOpen ? null : key)} style={{
                    width: "100%", textAlign: "left", padding: "14px 16px",
                    background: "transparent", border: "none", cursor: "pointer",
                    fontFamily: "inherit", display: "flex", gap: 12, alignItems: "flex-start"
                  }}>
                    <span style={{
                      background: done ? "#14532d" : sec.color + "33",
                      color: done ? "#86efac" : sec.color,
                      borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700,
                      flexShrink: 0, marginTop: 1
                    }}>Q{pi+1}</span>
                    <span style={{ fontSize: 14, color: "#e2e8f0", lineHeight: 1.5, fontFamily: "monospace" }}>{prob.question}</span>
                    <span style={{ color: "#475569", marginLeft: "auto", flexShrink: 0, fontSize: 16 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {/* Expanded */}
                  {isOpen && (
                    <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${sec.color}22` }}>
                      {/* Hint */}
                      <div style={{ background: "#1e1a0a", border: "1px solid #fbbf2444", borderRadius: 8, padding: "10px 12px", margin: "12px 0" }}>
                        <span style={{ color: "#fbbf24", fontWeight: 700, fontSize: 11 }}>💡 HINT: </span>
                        <span style={{ color: "#fde68a", fontSize: 13 }}>{prob.hint}</span>
                      </div>

                      {/* Try it yourself prompt */}
                      {!stepsVisible && (
                        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                          <button onClick={() => { toggleStep(key); markAttempted(key); }} style={{
                            flex: 1, padding: "10px", background: `${sec.color}22`,
                            border: `1px solid ${sec.color}66`, borderRadius: 8,
                            color: sec.color, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit"
                          }}>
                            Show Step-by-Step Solution →
                          </button>
                        </div>
                      )}

                      {/* Steps */}
                      {stepsVisible && (
                        <div>
                          <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Solution</div>
                          <div style={{ background: "#0d0d1f", borderRadius: 8, padding: "12px 14px" }}>
                            {prob.steps.map((step, si) => step === "" ? (
                              <div key={si} style={{ height: 8 }} />
                            ) : (
                              <div key={si} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                                <span style={{ color: sec.color, fontSize: 12, flexShrink: 0, marginTop: 2 }}>▸</span>
                                <span style={{ fontSize: 13, color: "#cbd5e1", fontFamily: "monospace", lineHeight: 1.6 }}>{step}</span>
                              </div>
                            ))}
                          </div>

                          {/* Answer box */}
                          <div style={{ background: "#0a2d14", border: "1px solid #22c55e55", borderRadius: 8, padding: "10px 14px", marginTop: 10, display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ color: "#22c55e", fontSize: 18 }}>✓</span>
                            <div>
                              <div style={{ fontSize: 10, color: "#16a34a", textTransform: "uppercase", letterSpacing: 1 }}>Final Answer</div>
                              <div style={{ fontSize: 14, fontWeight: 700, color: "#86efac", fontFamily: "monospace" }}>{prob.answer}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })()}

      <div style={{ textAlign: "center", fontSize: 11, color: "#1e1e35", marginTop: 20 }}>
        GENFM601 Practice · SJITC Nyamirambo 2025-2026
      </div>
    </div>
  );
}