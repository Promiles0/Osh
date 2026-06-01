
import React, { useState } from "react";

const units = [
  {
    id: 1,
    title: "Unit 1: Hygiene & Sanitation",
    color: "#2563eb",
    emoji: "🧼",
    concepts: [
      {
        heading: "Hygiene vs Sanitation vs Sanitizing",
        points: [
          "Hygiene: Practices to maintain health and prevent disease through cleanliness (e.g. handwashing, bathing).",
          "Sanitation: Systems to maintain clean conditions through waste disposal and environmental cleanliness (e.g. drainage, sewage).",
          "Sanitizing: Reducing harmful microorganisms on surfaces to safe levels using chemicals or heat.",
        ],
      },
      {
        heading: "5S Method (Tool Storage)",
        points: [
          "Sort – Separate needed from unneeded items.",
          "Set in Order – Arrange items properly.",
          "Shine – Clean the workplace.",
          "Standardize – Maintain standards consistently.",
          "Sustain – Continue good practices over time.",
        ],
      },
      {
        heading: "7 Steps of Effective Sanitation",
        points: [
          "1. Dry Clean-Up – Remove solid waste.",
          "2. Pre-Rinse – Rinse surfaces with water.",
          "3. Chemical Application – Apply detergent/foam.",
          "4. Scrubbing – Use appropriate brushes.",
          "5. Rinsing – Remove chemicals with clean water.",
          "6. Inspection – Check for remaining dirt.",
          "7. Sanitizing – Apply disinfectant, leave for recommended time.",
        ],
      },
      {
        heading: "Hygiene Monitoring Process",
        points: [
          "1. Determine monitoring purpose.",
          "2. Develop measurable indicators.",
          "3. Collect evidence.",
          "4. Analyze findings.",
          "5. Report results.",
        ],
      },
      {
        heading: "Consequences of Poor Hygiene",
        points: [
          "Disease outbreaks.",
          "Low productivity.",
          "Food contamination.",
          "Poor company image.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Unit 2: Communicable & Non-Communicable Diseases",
    color: "#16a34a",
    emoji: "🦠",
    concepts: [
      {
        heading: "Key Disease Terms",
        points: [
          "Disease: A condition affecting body functioning.",
          "Epidemic: Rapid spread of disease in an area.",
          "Pandemic: Worldwide spread of disease.",
          "Endemic: Disease constantly present in a region.",
        ],
      },
      {
        heading: "Non-Communicable Diseases (NCDs)",
        points: [
          "Do NOT spread from person to person.",
          "Cancer – causes: smoking, radiation, chemicals. Prevent with healthy diet & screening.",
          "Diabetes – causes: obesity, poor diet, lack of exercise. Prevent with exercise & balanced diet.",
          "Epilepsy – causes: brain injury, infections. Prevent with early treatment.",
          "Cataracts – causes: aging, diabetes, eye injuries. Prevent with eye protection.",
        ],
      },
      {
        heading: "Communicable Diseases",
        points: [
          "Spread from person to person or via contaminated objects/surfaces.",
          "Influenza – virus; prevent with vaccination & masks.",
          "Hepatitis – blood/food/sexual contact; prevent with vaccination & hygiene.",
          "TB – airborne; persistent cough, night sweats; prevent with good ventilation.",
          "HIV/AIDS – prevent with abstinence, condoms, safe blood transfusion.",
          "COVID-19 – fever, cough, breathing difficulty; prevent with masks & vaccination.",
        ],
      },
      {
        heading: "Main Disease Control Strategies",
        points: [
          "Immunization – prevents infections.",
          "Food safety – prevents contamination.",
          "Safe water – reduces waterborne diseases.",
          "Sterilization – prevents infection spread.",
          "Vector control – controls mosquitoes.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Unit 3: Gender-Based Violence (GBV)",
    color: "#9333ea",
    emoji: "🤝",
    concepts: [
      {
        heading: "Forms of GBV at Workplace",
        points: [
          "Sexual Harassment – unwanted sexual comments or actions (e.g. manager demanding favors for promotion).",
          "Psychological Violence – emotional abuse causing mental suffering (e.g. threats).",
          "Workplace Discrimination – unequal treatment based on gender (e.g. unequal pay).",
          "Sexual Exploitation – abusing power for sexual benefit.",
        ],
      },
      {
        heading: "Effects of GBV",
        points: [
          "Depression and fear.",
          "Reduced productivity.",
          "High employee turnover.",
        ],
      },
      {
        heading: "GBV Prevention Measures",
        points: [
          "Create a supportive environment of respect and equality.",
          "Establish clear anti-GBV organizational policies.",
          "Training and awareness programs for workers.",
          "Provide confidential reporting channels.",
          "Support victims with counseling and protection.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Unit 4: Health, Safety & Emergencies",
    color: "#dc2626",
    emoji: "⛑️",
    concepts: [
      {
        heading: "5 Types of Workplace Hazards",
        points: [
          "Chemical – chlorine, solvents, asbestos.",
          "Biological – HIV, Hepatitis, TB.",
          "Physical – noise, heat, radiation.",
          "Ergonomic – poor posture, repetitive lifting.",
          "Psychological – stress, harassment.",
        ],
      },
      {
        heading: "How Hazards Enter the Body",
        points: [
          "Inhalation – breathing harmful substances.",
          "Ingestion – swallowing contaminants.",
          "Absorption – through the skin.",
          "Injection – through cuts or wounds.",
        ],
      },
      {
        heading: "Safety Measures",
        points: [
          "Use PPE: helmet (head), gloves (hands), boots (feet), goggles (eyes).",
          "Display warning signs: 'Wet Floor', 'No Smoking', 'Wear Helmet'.",
          "Regular safety training and awareness.",
          "Create safety committees to monitor compliance.",
        ],
      },
      {
        heading: "Safety Performance Indicators",
        points: [
          "Leading Indicators (before accidents): safety training, inspections.",
          "Lagging Indicators (after incidents): accident rates, injury reports.",
          "Safety Culture: shared safety values in an organization.",
          "Safety Climate: workers' perception of safety.",
        ],
      },
      {
        heading: "Fire Triangle",
        points: [
          "Fire needs: Heat + Fuel + Oxygen.",
          "Remove ANY ONE element to stop/prevent fire.",
        ],
      },
      {
        heading: "Emergency Response Procedures",
        points: [
          "1. Raise the alarm.",
          "2. Inform emergency coordinators.",
          "3. Evacuate safely.",
          "4. Provide first aid.",
          "5. Assess injuries and damages.",
        ],
      },
      {
        heading: "Types of Emergencies",
        points: [
          "Natural: floods, earthquakes.",
          "Work-related: fire outbreaks, chemical spills.",
          "Civil: riots, terrorism.",
        ],
      },
    ],
  },
];

const examQuestions = [
  { q: "What is the difference between hygiene and sanitation?", a: "Hygiene = personal practices to maintain health through cleanliness. Sanitation = systems/measures for clean conditions through waste disposal and environmental cleanliness." },
  { q: "List the 7 steps of effective sanitation.", a: "1. Dry Clean-Up, 2. Pre-Rinse, 3. Chemical Application, 4. Scrubbing, 5. Rinsing, 6. Inspection, 7. Sanitizing." },
  { q: "Distinguish communicable from non-communicable diseases.", a: "Communicable diseases spread from person to person (e.g. flu, TB, HIV). Non-communicable diseases do NOT spread between people (e.g. cancer, diabetes, epilepsy)." },
  { q: "What are the causes and prevention of TB?", a: "TB spreads via air (droplets from coughing/sneezing). Symptoms: persistent cough, weight loss, night sweats. Prevention: good ventilation, early treatment, covering mouth when coughing." },
  { q: "Name and describe 4 forms of GBV.", a: "Sexual harassment (unwanted sexual acts), Psychological violence (emotional abuse/threats), Workplace discrimination (unequal treatment based on gender), Sexual exploitation (abusing power for sexual benefit)." },
  { q: "List and explain the 5 types of workplace hazards.", a: "Chemical (toxic substances), Biological (pathogens), Physical (noise/heat/radiation), Ergonomic (poor posture/repetitive motion), Psychological (stress/harassment)." },
  { q: "What are the benefits of a safe workplace?", a: "Increased productivity, reduced accidents, lower insurance costs, employee satisfaction." },
  { q: "Explain emergency response procedures.", a: "1. Raise alarm, 2. Inform emergency coordinators, 3. Evacuate safely, 4. Provide first aid, 5. Assess injuries and damages." },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openUnit, setOpenUnit] = useState(null);
  const [openConcept, setOpenConcept] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});

  const tabs = [
    { id: "overview", label: "📋 Overview" },
    { id: "concepts", label: "📚 Key Concepts" },
    { id: "questions", label: "❓ Exam Q&A" },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 800, margin: "0 auto", padding: "16px", background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)", color: "white", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>SJITC – Nyamirambo | 2026 Exam Prep</div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Occupational Safety & Health</h1>
        <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>Activities Management — Topic Overview</div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            flex: 1, padding: "10px 4px", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13,
            background: activeTab === t.id ? "#2563eb" : "white",
            color: activeTab === t.id ? "white" : "#374151",
            boxShadow: activeTab === t.id ? "0 2px 8px #2563eb44" : "0 1px 3px #0001",
            transition: "all 0.15s",
          }}>{t.label}</button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <div>
          <div style={{ background: "white", borderRadius: 10, padding: 16, marginBottom: 16, boxShadow: "0 1px 4px #0001" }}>
            <h3 style={{ margin: "0 0 12px", color: "#1e3a5f", fontSize: 15 }}>📌 Module at a Glance</h3>
            <p style={{ margin: "0 0 10px", color: "#374151", fontSize: 14 }}>This module has <strong>4 Learning Units</strong>. Tap each to see what you need to know:</p>
            {units.map(u => (
              <div key={u.id} style={{ border: `2px solid ${u.color}22`, borderLeft: `4px solid ${u.color}`, borderRadius: 8, padding: "10px 14px", marginBottom: 10, background: `${u.color}08` }}>
                <div style={{ fontWeight: 700, color: u.color, fontSize: 14 }}>{u.emoji} {u.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{u.concepts.length} key concept areas</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fef9c3", border: "1px solid #fde047", borderRadius: 10, padding: 14 }}>
            <div style={{ fontWeight: 700, color: "#92400e", fontSize: 14, marginBottom: 8 }}>⚡ Quick-Recall: Must-Know Lists</div>
            {[
              { label: "5S Method", items: ["Sort", "Set in Order", "Shine", "Standardize", "Sustain"] },
              { label: "Fire Triangle", items: ["Heat", "Fuel", "Oxygen"] },
              { label: "Hazard Entry Routes", items: ["Inhalation", "Ingestion", "Absorption", "Injection"] },
              { label: "Emergency Steps", items: ["Raise alarm", "Inform coordinators", "Evacuate", "First aid", "Assess damage"] },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 8 }}>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#78350f" }}>{item.label}: </span>
                <span style={{ fontSize: 13, color: "#374151" }}>{item.items.join(" → ")}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONCEPTS TAB */}
      {activeTab === "concepts" && (
        <div>
          {units.map(u => (
            <div key={u.id} style={{ marginBottom: 12 }}>
              <button onClick={() => setOpenUnit(openUnit === u.id ? null : u.id)} style={{
                width: "100%", textAlign: "left", background: openUnit === u.id ? u.color : "white",
                color: openUnit === u.id ? "white" : "#1e293b", border: `2px solid ${u.color}`,
                borderRadius: 10, padding: "14px 16px", cursor: "pointer", fontWeight: 700, fontSize: 14,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                boxShadow: "0 1px 4px #0001", transition: "all 0.15s",
              }}>
                <span>{u.emoji} {u.title}</span>
                <span>{openUnit === u.id ? "▲" : "▼"}</span>
              </button>
              {openUnit === u.id && (
                <div style={{ background: "white", border: `2px solid ${u.color}44`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: 12 }}>
                  {u.concepts.map((c, ci) => (
                    <div key={ci} style={{ marginBottom: 8 }}>
                      <button onClick={() => setOpenConcept(openConcept === `${u.id}-${ci}` ? null : `${u.id}-${ci}`)} style={{
                        width: "100%", textAlign: "left", background: openConcept === `${u.id}-${ci}` ? `${u.color}15` : "#f8fafc",
                        color: "#1e293b", border: `1px solid ${u.color}44`, borderRadius: 8,
                        padding: "10px 14px", cursor: "pointer", fontWeight: 600, fontSize: 13,
                        display: "flex", justifyContent: "space-between",
                      }}>
                        <span>📎 {c.heading}</span>
                        <span style={{ color: u.color }}>{openConcept === `${u.id}-${ci}` ? "−" : "+"}</span>
                      </button>
                      {openConcept === `${u.id}-${ci}` && (
                        <ul style={{ margin: "6px 0 0", padding: "0 0 0 20px", background: `${u.color}08`, borderRadius: "0 0 8px 8px", paddingTop: 8, paddingBottom: 8 }}>
                          {c.points.map((p, pi) => (
                            <li key={pi} style={{ fontSize: 13, color: "#374151", marginBottom: 5, lineHeight: 1.5 }}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* QUESTIONS TAB */}
      {activeTab === "questions" && (
        <div>
          <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 10, padding: 12, marginBottom: 14, fontSize: 13, color: "#0369a1" }}>
            💡 These are based on the <strong>General Revision Questions</strong> in your notes. Tap a question to reveal the answer.
          </div>
          {examQuestions.map((item, i) => (
            <div key={i} style={{ background: "white", borderRadius: 10, marginBottom: 10, boxShadow: "0 1px 4px #0001", overflow: "hidden" }}>
              <button onClick={() => setShowAnswer(prev => ({ ...prev, [i]: !prev[i] }))} style={{
                width: "100%", textAlign: "left", background: "white", border: "none",
                padding: "14px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8,
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", lineHeight: 1.4 }}>Q{i + 1}. {item.q}</span>
                <span style={{ fontSize: 18, color: "#2563eb", flexShrink: 0 }}>{showAnswer[i] ? "🔼" : "👁️"}</span>
              </button>
              {showAnswer[i] && (
                <div style={{ background: "#f0fdf4", borderTop: "1px solid #86efac", padding: "12px 16px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d", marginBottom: 4 }}>ANSWER:</div>
                  <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.6 }}>{item.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 20 }}>
        Good luck on your exam! 🍀 — Based on SJITC OSH Module 2026
      </div>
    </div>
  );
}
