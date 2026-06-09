import { useState } from "react";

const groups = [
  {
    id: "g1",
    label: "G1",
    title: "Expressions Temporelles & Heure",
    color: "#7c3aed",
    emoji: "🕐",
    exercises: [
      {
        title: "Exercice 1 — Passé / Présent / Futur",
        type: "table",
        headers: ["PRÉSENT", "PASSÉ", "FUTUR"],
        rows: [
          ["aujourd'hui", "hier", "demain"],
          ["en ce moment", "autrefois", "bientôt"],
          ["actuellement", "il y a longtemps", "plus tard"],
        ],
      },
      {
        title: "Exercice 2 — Expressions temporelles",
        type: "qa",
        items: [
          { n: 1, q: "Je travaille ___", a: "aujourd'hui", note: "présent" },
          { n: 2, q: "Elle est partie ___", a: "hier", note: "passé" },
          { n: 3, q: "Il arrivera ___", a: "bientôt", note: "futur" },
          { n: 4, q: "___, les gens vivaient sans électricité.", a: "Autrefois", note: "passé lointain" },
          { n: 5, q: "Nous sommes ___ en train de manger.", a: "en ce moment", note: "présent" },
        ],
      },
      {
        title: "Exercice 3 — Quelle heure est-il ?",
        type: "qa",
        items: [
          { n: "08h00", q: "08h00", a: "Il est huit heures (du matin)." },
          { n: "12h00", q: "12h00", a: "Il est midi." },
          { n: "15h15", q: "15h15", a: "Il est quinze heures et quart." },
          { n: "19h45", q: "19h45", a: "Il est vingt heures moins le quart." },
          { n: "00h30", q: "00h30", a: "Il est minuit et demi." },
        ],
      },
      {
        title: "Exercice 4 — Structures de phrases",
        type: "table",
        headers: ["Structure", "Exemple"],
        rows: [
          ["S + V (intransitif)", "Les oiseaux chantent."],
          ["S + V état + Adjectif", "Elle est heureuse."],
          ["S + V + Adverbe + Adjectif", "Il est très intelligent."],
          ["S + V + COD", "Je lis un livre."],
          ["S + V + COI", "Il parle à son ami."],
          ["S + V + CC de lieu", "Nous habitons à Kigali."],
          ["S + V + CC de temps", "Elle part demain matin."],
        ],
      },
    ],
  },
  {
    id: "g2",
    label: "G2",
    title: "Jours, Mois & Points Cardinaux",
    color: "#0891b2",
    emoji: "🧭",
    exercises: [
      {
        title: "Exercice 1 — Jours & Mois",
        type: "qa",
        items: [
          { n: 1, q: "Quel jour vient après le mardi ?", a: "Le mercredi." },
          { n: 2, q: "Quel est le 3e mois de l'année ?", a: "Mars." },
          { n: 3, q: "Quel est le dernier mois de l'année ?", a: "Décembre." },
          { n: 4, q: "Quel jour est entre le mercredi et le vendredi ?", a: "Le jeudi." },
          { n: 5, q: "Les deux mois d'été (en France) ?", a: "Juillet et août." },
        ],
      },
      {
        title: "Exercice 2 — Points Cardinaux",
        type: "qa",
        items: [
          { n: 6, q: "Le soleil se lève à l'___.", a: "Est" },
          { n: 7, q: "Le soleil se couche à l'___.", a: "Ouest" },
          { n: 8, q: "L'Antarctique est au ___ du globe.", a: "Sud" },
          { n: 9, q: "Le pôle est au ___ du globe.", a: "Nord" },
          { n: 10, q: "La Normandie est au ___ de Paris.", a: "nord-ouest" },
        ],
      },
      {
        title: "Exercice 3 — Expressions de quantité",
        type: "qa",
        items: [
          { n: 1, q: "Il y a ___ d'étudiants (salle pleine).", a: "beaucoup" },
          { n: 2, q: "Je n'ai ___ argent (porte-monnaie vide).", a: "pas d'" },
          { n: 3, q: "Elle mange ___ chocolat (mauvais pour la santé).", a: "trop de" },
          { n: 4, q: "Il y a ___ 30 personnes.", a: "environ" },
          { n: 5, q: "Tu as ___ dormi, tu peux sortir.", a: "assez" },
        ],
      },
    ],
  },
  {
    id: "g3",
    label: "G3",
    title: "Articles Partitifs & Liens de Parenté",
    color: "#059669",
    emoji: "👨‍👩‍👧",
    exercises: [
      {
        title: "Exercice 1 — Articles partitifs (du, de la, de l', des, pas de)",
        type: "qa",
        items: [
          { n: 6, q: "Je bois ___ eau chaque matin.", a: "de l'", note: "eau = féminin, commence par voyelle" },
          { n: 7, q: "Il mange ___ pain avec du beurre.", a: "du", note: "pain = masculin" },
          { n: 8, q: "Elle n'a ___ frère ni sœur.", a: "pas de", note: "négation → pas de" },
          { n: 9, q: "Nous achetons ___ légumes au marché.", a: "des", note: "pluriel" },
          { n: 10, q: "Tu veux ___ café ?", a: "du", note: "café = masculin" },
        ],
      },
      {
        title: "Exercice 2 — Liens de parenté",
        type: "qa",
        items: [
          { n: 1, q: "La mère de ma mère est ma ___.", a: "grand-mère" },
          { n: 2, q: "Le fils de mon oncle est mon ___.", a: "cousin" },
          { n: 3, q: "La fille de mes parents est ma ___.", a: "sœur" },
          { n: 4, q: "Le mari de ma fille est mon ___.", a: "gendre" },
          { n: 5, q: "La sœur de mon mari est ma ___.", a: "belle-sœur" },
        ],
      },
      {
        title: "Exercice 3 — Expression des goûts",
        type: "qa",
        items: [
          { n: 6, q: "Exprimer qu'on aime la musique", a: "J'aime beaucoup la musique. / La musique me plaît beaucoup." },
          { n: 7, q: "Exprimer qu'on déteste les légumes", a: "Je déteste les légumes. / Les légumes me déplaisent." },
          { n: 8, q: "Préférer le café au thé", a: "Je préfère le café au thé. / J'aime mieux le café que le thé." },
          { n: 9, q: "Exprimer qu'on aime lire", a: "J'aime bien lire. / La lecture me plaît bien." },
          { n: 10, q: "Ce qu'on aime le plus", a: "Ce que j'aime le plus, c'est voyager. / Voyager est ma passion." },
        ],
      },
    ],
  },
  {
    id: "g4",
    label: "G4",
    title: "Interrogation — 3 Formes",
    color: "#d97706",
    emoji: "❓",
    exercises: [
      {
        title: "Exercice 1 — Par intonation (montée de voix)",
        type: "transform",
        instruction: "Phrase déclarative → Question par intonation",
        items: [
          { from: "Elle travaille ici.", to: "Elle travaille ici ?" },
          { from: "Vous habitez à Kigali.", to: "Vous habitez à Kigali ?" },
          { from: "Il est médecin.", to: "Il est médecin ?" },
          { from: "Elles arrivent demain.", to: "Elles arrivent demain ?" },
          { from: "Tu aimes le chocolat.", to: "Tu aimes le chocolat ?" },
          { from: "Nous partons ce soir.", to: "Nous partons ce soir ?" },
          { from: "Il fait beau aujourd'hui.", to: "Il fait beau aujourd'hui ?" },
          { from: "Vous comprenez la leçon.", to: "Vous comprenez la leçon ?" },
        ],
      },
      {
        title: "Exercice 2 — Avec « est-ce que »",
        type: "transform",
        instruction: "Phrase → Question avec est-ce que",
        items: [
          { from: "Tu parles swahili.", to: "Est-ce que tu parles swahili ?" },
          { from: "Elle a mangé.", to: "Est-ce qu'elle a mangé ?" },
          { from: "Ils comprennent le français.", to: "Est-ce qu'ils comprennent le français ?" },
          { from: "Vous avez un stylo.", to: "Est-ce que vous avez un stylo ?" },
          { from: "Il pleut dehors.", to: "Est-ce qu'il pleut dehors ?" },
          { from: "Tu aimes le cinéma.", to: "Est-ce que tu aimes le cinéma ?" },
          { from: "Elle est arrivée à l'heure.", to: "Est-ce qu'elle est arrivée à l'heure ?" },
          { from: "Nous pouvons sortir.", to: "Est-ce que nous pouvons sortir ?" },
        ],
      },
      {
        title: "Exercice 3 — Inversion du sujet (forme soutenue)",
        type: "transform",
        instruction: "Phrase → Inversion du sujet",
        items: [
          { from: "Vous comprenez.", to: "Comprenez-vous ?" },
          { from: "Il mange.", to: "Mange-t-il ?" },
          { from: "Elles partent demain.", to: "Partent-elles demain ?" },
          { from: "Tu as fini.", to: "As-tu fini ?" },
          { from: "Elle aime le sport.", to: "Aime-t-elle le sport ?" },
          { from: "Nous pouvons entrer.", to: "Pouvons-nous entrer ?" },
          { from: "Il parle anglais.", to: "Parle-t-il anglais ?" },
          { from: "Vous êtes prêts.", to: "Êtes-vous prêts ?" },
        ],
      },
    ],
  },
  {
    id: "g5",
    label: "G5",
    title: "Adjectifs Interrogatifs & Pronoms",
    color: "#be185d",
    emoji: "🔤",
    exercises: [
      {
        title: "Exercice 1 — Quel / Quelle / Quels / Quelles",
        type: "qa",
        items: [
          { n: 1, q: "___ heure est-il ?", a: "Quelle", note: "heure = féminin singulier" },
          { n: 2, q: "___ langue parles-tu ?", a: "Quelle", note: "langue = féminin singulier" },
          { n: 3, q: "___ pays visitez-vous ?", a: "Quels", note: "pays = masculin pluriel" },
          { n: 4, q: "___ couleur préfères-tu ?", a: "Quelle", note: "couleur = féminin singulier" },
          { n: 5, q: "___ cours suivez-vous ?", a: "Quels", note: "cours = masculin pluriel" },
          { n: 6, q: "___ est ton plat préféré ?", a: "Quel", note: "plat = masculin singulier" },
          { n: 7, q: "___ sont tes matières préférées ?", a: "Quelles", note: "matières = féminin pluriel" },
          { n: 8, q: "___ temps fait-il ?", a: "Quel", note: "temps = masculin singulier" },
        ],
      },
      {
        title: "Exercice 2 — Mots interrogatifs",
        type: "qa",
        items: [
          { n: 1, q: "___ habites-tu ?", a: "Où", note: "lieu" },
          { n: 2, q: "___ est-ce que tu penses ?", a: "À quoi", note: "chose" },
          { n: 3, q: "___ vient ce soir ?", a: "Qui", note: "personne" },
          { n: 4, q: "___ coûte ce livre ?", a: "Combien", note: "prix" },
          { n: 5, q: "___ pleurez-vous ?", a: "Pourquoi", note: "cause" },
          { n: 6, q: "___ fais-tu en ce moment ?", a: "Que", note: "action" },
          { n: 7, q: "___ arrivent-ils ?", a: "Quand", note: "temps" },
          { n: 8, q: "___ viens-tu à l'école ?", a: "Comment", note: "manière" },
        ],
      },
      {
        title: "Exercice 3 — Pronoms sujets",
        type: "qa",
        items: [
          { n: 1, q: "Sophie chante.", a: "Elle chante." },
          { n: 2, q: "Le professeur explique.", a: "Il explique." },
          { n: 3, q: "Pierre et moi allons au marché.", a: "Nous allons au marché." },
          { n: 4, q: "Les garçons jouent.", a: "Ils jouent." },
          { n: 5, q: "Keza et Amina dansent.", a: "Elles dansent." },
        ],
      },
      {
        title: "Exercice 4 — Pronoms compléments (le, la, les, lui, leur, y, en)",
        type: "qa",
        items: [
          { n: 1, q: "Il mange le pain.", a: "Il le mange.", note: "COD masculin" },
          { n: 2, q: "Elle parle à Pierre.", a: "Elle lui parle.", note: "COI personne singulier" },
          { n: 3, q: "Nous regardons les films.", a: "Nous les regardons.", note: "COD pluriel" },
          { n: 4, q: "Il va à Paris.", a: "Il y va.", note: "y = lieu / à + chose" },
          { n: 5, q: "Tu téléphones à tes amis.", a: "Tu leur téléphones.", note: "COI personnes pluriel" },
          { n: 6, q: "Elle prend du café.", a: "Elle en prend.", note: "en = de + chose" },
        ],
      },
    ],
  },
  {
    id: "g6",
    label: "G6",
    title: "Verbes d'État / d'Action & COD / COI",
    color: "#dc2626",
    emoji: "⚡",
    exercises: [
      {
        title: "Exercice 1 — Verbe d'État (VÉ) ou Verbe d'Action (VA) ?",
        type: "table",
        headers: ["Verbe", "Type", "Justification"],
        rows: [
          ["EST", "VÉ", "Être = verbe d'état"],
          ["COURT", "VA", "Action physique"],
          ["SEMBLE", "VÉ", "Sembler = verbe d'état"],
          ["MANGEONS", "VA", "Action concrète"],
          ["PARAIS", "VÉ", "Paraître = verbe d'état"],
          ["JOUENT", "VA", "Action physique"],
          ["DEVIENT", "VÉ", "Devenir = verbe d'état"],
          ["CHANTE", "VA", "Action vocale"],
          ["RESTE", "VÉ", "Rester + adj = état"],
          ["TRAVAILLEZ", "VA", "Action concrète"],
        ],
      },
      {
        title: "Exercice 2 — Conjuguez et accordez l'adjectif",
        type: "qa",
        items: [
          { n: 11, q: "Mes sœurs ___ ___.", a: "paraissent contentes", note: "féminin pluriel" },
          { n: 12, q: "Le professeur ___ ___.", a: "semble sérieux", note: "masculin singulier" },
          { n: 13, q: "Tu ___ ___.", a: "deviens grand(e)", note: "accord selon le sujet" },
        ],
      },
      {
        title: "Exercice 3 — Soulignez le COD (V + Qui? / Quoi?)",
        type: "qa",
        items: [
          { n: 1, q: "Je mange ___.", a: "une pomme" },
          { n: 2, q: "Il regarde ___.", a: "la télévision" },
          { n: 3, q: "Tu aimes ___.", a: "la musique" },
          { n: 4, q: "Nous visitons ___.", a: "le musée" },
          { n: 5, q: "Elle appelle ___.", a: "son ami" },
          { n: 6, q: "Ils écoutent ___.", a: "le professeur" },
          { n: 7, q: "Tu prends ___.", a: "le bus" },
          { n: 8, q: "Elle achète ___.", a: "des légumes" },
        ],
      },
      {
        title: "Exercice 4 — COD ou COI ?",
        type: "table",
        headers: ["Complément", "Type", "Explication"],
        rows: [
          ["à sa mère (Elle parle à sa mère)", "COI", "parler À quelqu'un → préposition à"],
          ["son cousin (Il voit son cousin)", "COD", "voir quelqu'un → pas de préposition"],
        ],
      },
    ],
  },
  {
    id: "g7",
    label: "G7",
    title: "COI, Pronoms COI & Structures",
    color: "#0284c7",
    emoji: "🔗",
    exercises: [
      {
        title: "Exercice 1 — Identifiez le COI",
        type: "qa",
        items: [
          { n: 1, q: "Je téléphone ___ (à qui ?)", a: "à mon ami" },
          { n: 2, q: "Elle pense ___ (à quoi ?)", a: "à ses vacances" },
          { n: 3, q: "Il obéit ___ (à qui ?)", a: "à ses parents" },
          { n: 4, q: "Tu parles ___ (à qui ?)", a: "à la directrice" },
          { n: 5, q: "Nous avons besoin ___ (de quoi ?)", a: "d'aide" },
        ],
      },
      {
        title: "Exercice 2 — Remplacez le COI par lui / leur / y / en",
        type: "transform",
        instruction: "COI → Pronom",
        items: [
          { from: "Je parle à Pierre.", to: "Je lui parle.", note: "lui = à + personne singulier" },
          { from: "Elle téléphone à ses amies.", to: "Elle leur téléphone.", note: "leur = à + personnes pluriel" },
          { from: "Il pense à son avenir.", to: "Il y pense.", note: "y = à + chose" },
          { from: "Tu obéis à tes parents.", to: "Tu leur obéis.", note: "leur = à + personnes pluriel" },
          { from: "Nous avons besoin de temps.", to: "Nous en avons besoin.", note: "en = de + chose" },
        ],
      },
      {
        title: "Exercice 3 — Identifiez la structure",
        type: "table",
        headers: ["Phrase", "Structure"],
        rows: [
          ["Les oiseaux chantent.", "S + V"],
          ["Marie est belle.", "S + V état + Adj"],
          ["Il court très vite.", "S + V + Adv + Adv"],
          ["Je mange une pomme.", "S + V + COD"],
          ["Elle est très courageuse.", "S + V état + Adv + Adj"],
          ["Nous partons demain.", "S + V + CC (temps)"],
          ["Il pleut.", "S + V"],
          ["Tu sembles vraiment content.", "S + V état + Adv + Adj"],
          ["Elle travaille assez bien.", "S + V + Adv + Adv"],
          ["Il parle à son ami.", "S + V + COI"],
          ["Le soleil brille dehors.", "S + V + CC (lieu)"],
          ["Elle paraît assez fatiguée.", "S + V état + Adv + Adj"],
        ],
      },
    ],
  },
  {
    id: "g8",
    label: "G8",
    title: "Ordre des Mots & Compléments Circonstanciels",
    color: "#7c3aed",
    emoji: "📝",
    exercises: [
      {
        title: "Exercice 1 — Remettez dans le bon ordre",
        type: "transform",
        instruction: "Mots mélangés → Phrase correcte",
        items: [
          { from: "mange / une / Je / pomme", to: "Je mange une pomme." },
          { from: "est / Marie / belle / très", to: "Marie est très belle." },
          { from: "à / parle / il / ami / son", to: "Il parle à son ami." },
          { from: "travaille / lentement / Elle / très", to: "Elle travaille très lentement." },
          { from: "demain / au / Nous / allons / marché", to: "Nous allons au marché demain." },
          { from: "grand / Tu / deviens", to: "Tu deviens grand." },
          { from: "enfants / jouent / Les / dehors", to: "Les enfants jouent dehors." },
          { from: "content / paraît / assez / Il", to: "Il paraît assez content." },
          { from: "livre / un / Elle / lit / soir / le", to: "Elle lit un livre le soir." },
          { from: "à / pense / son / Il / avenir", to: "Il pense à son avenir." },
        ],
      },
      {
        title: "Exercice 2 — Type de Complément Circonstanciel",
        type: "table",
        headers: ["Phrase", "Type de CC"],
        rows: [
          ["Je travaille à Kigali.", "CC de lieu"],
          ["Elle arrive demain matin.", "CC de temps"],
          ["Il parle doucement.", "CC de manière"],
          ["Elle pleure de joie.", "CC de cause"],
          ["Nous étudions pour réussir.", "CC de but"],
          ["Il écrit avec un stylo rouge.", "CC de moyen"],
          ["Ils se retrouvent au café.", "CC de lieu"],
          ["Tu restes ici toute la journée.", "CC de temps / lieu"],
          ["Elle vient en voiture.", "CC de moyen"],
          ["Il part parce qu'il est fatigué.", "CC de cause"],
        ],
      },
      {
        title: "Exercice 3 — Formation de questions",
        type: "table",
        headers: ["Type", "Exemple"],
        rows: [
          ["Intonation", "Tu parles français ?"],
          ["Est-ce que", "Est-ce que tu parles français ?"],
          ["Inversion du sujet", "Parles-tu français ?"],
          ["Adverbe interrogatif", "Où habites-tu ? / Quand arrives-tu ? / Comment vas-tu ?"],
        ],
      },
    ],
  },
];

const aminaText = [
  { n: 1, blank: "___(1)___", answer: "depuis", sentence: "Je suis étudiante depuis trois ans." },
  { n: 2, blank: "___(2)___", answer: "à Paris", sentence: "J'habite à Paris, mais je suis originaire du Sénégal." },
  { n: 3, blank: "___(3)___", answer: "qui", sentence: "J'ai une amie qui s'appelle Sophie." },
  { n: 4, blank: "___(4)___", answer: "Elle", sentence: "Elle est professeure de français." },
  { n: 5, blank: "___(5)___", answer: "lui", sentence: "Je lui parle souvent (= à Sophie)." },
  { n: 6, blank: "___(6)___", answer: "parce que", sentence: "Je lui parle souvent parce que j'aime beaucoup le français." },
  { n: 7, blank: "___(7)___", answer: "Est-ce que", sentence: "Est-ce que tu aimes le français ?" },
  { n: 8, blank: "___(8)___", answer: "les", sentence: "Moi, j'adore les [domaines que sont] la littérature, la grammaire..." },
  { n: 9, blank: "___(9)___", answer: "très", sentence: "Mon amie est très sympathique." },
  { n: 10, blank: "___(10)___", answer: "beaucoup", sentence: "Elle connaît beaucoup de personnes importantes." },
  { n: 11, blank: "___(11)___", answer: "Comment", sentence: "Comment vas-tu ?" },
  { n: 12, blank: "___(12)___", answer: "Quand", sentence: "Quand je rencontre Sophie, je lui parle toujours en français." },
  { n: 13, blank: "___(13)___", answer: "Demain", sentence: "Demain, nous allons visiter le musée du Louvre." },
];

export default function App() {
  const [activeGroup, setActiveGroup] = useState(null);
  const [openEx, setOpenEx] = useState(null);
  const [aminaRevealed, setAminaRevealed] = useState({});
  const [showAllAmina, setShowAllAmina] = useState(false);

  const g = groups.find(x => x.id === activeGroup);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 860, margin: "0 auto", padding: 16, background: "#0a0a14", minHeight: "100vh", color: "#e2e8f0" }}>
      <style>{`body,html{background:#0a0a14!important;margin:0;padding:0}*{box-sizing:border-box}`}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a0a2e, #0a1a2e)", border: "1px solid #3730a344", borderRadius: 14, padding: "18px 22px", marginBottom: 18 }}>
        <div style={{ fontSize: 10, color: "#a78bfa", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>SJITC · Corrigé Complet G1–G8</div>
        <h1 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#f0e6ff" }}>🇫🇷 Français — Grammaire & Vocabulaire</h1>
        <div style={{ fontSize: 12, color: "#64748b" }}>Groupes G1 à G8 · Travail en Groupe</div>
      </div>

      {/* Group grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 18 }}>
        {groups.map(grp => (
          <button key={grp.id} onClick={() => { setActiveGroup(activeGroup === grp.id ? null : grp.id); setOpenEx(null); }} style={{
            padding: "10px 6px", borderRadius: 10,
            border: `1px solid ${grp.color}${activeGroup === grp.id ? "cc" : "44"}`,
            background: activeGroup === grp.id ? `${grp.color}33` : "#13132a",
            color: activeGroup === grp.id ? "#f0e6ff" : "#94a3b8",
            cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: 12,
            textAlign: "center", transition: "all 0.15s", lineHeight: 1.4,
          }}>
            <div style={{ fontSize: 20, marginBottom: 3 }}>{grp.emoji}</div>
            <div style={{ color: grp.color, fontSize: 13 }}>{grp.label}</div>
            <div style={{ fontSize: 10, marginTop: 2, opacity: 0.8 }}>{grp.title.split(" ")[0]}</div>
          </button>
        ))}
      </div>

      {/* Placeholder */}
      {!activeGroup && (
        <div style={{ background: "#13132a", border: "1px solid #1e1e35", borderRadius: 12, padding: 28, textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>👆</div>
          <div style={{ color: "#64748b", fontSize: 14 }}>Sélectionne un groupe pour voir les réponses</div>
        </div>
      )}

      {/* Group content */}
      {g && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 4, height: 28, background: g.color, borderRadius: 3 }} />
            <div>
              <div style={{ fontSize: 11, color: g.color, textTransform: "uppercase", letterSpacing: 2 }}>{g.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#f0e6ff" }}>{g.title}</div>
            </div>
          </div>

          {g.exercises.map((ex, ei) => {
            const key = `${g.id}-${ei}`;
            const open = openEx === key;
            return (
              <div key={ei} style={{ background: "#13132a", border: `1px solid ${open ? g.color + "55" : "#1e1e35"}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button onClick={() => setOpenEx(open ? null : key)} style={{
                  width: "100%", textAlign: "left", padding: "13px 16px",
                  background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: open ? g.color : "#cbd5e1" }}>{ex.title}</span>
                  <span style={{ color: g.color, fontSize: 18 }}>{open ? "▲" : "▼"}</span>
                </button>

                {open && (
                  <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${g.color}22` }}>

                    {/* TABLE */}
                    {ex.type === "table" && (
                      <div style={{ overflowX: "auto", marginTop: 12 }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                          <thead>
                            <tr>
                              {ex.headers.map((h, hi) => (
                                <th key={hi} style={{ padding: "8px 12px", background: `${g.color}22`, color: g.color, textAlign: "left", border: `1px solid ${g.color}33`, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {ex.rows.map((row, ri) => (
                              <tr key={ri} style={{ background: ri % 2 === 0 ? "#0d0d1f" : "#13132a" }}>
                                {row.map((cell, ci) => (
                                  <td key={ci} style={{ padding: "8px 12px", border: `1px solid #1e1e35`, color: ci === 0 ? "#f0e6ff" : ci === 1 ? g.color : "#94a3b8", fontWeight: ci === 1 ? 700 : 400 }}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* QA */}
                    {ex.type === "qa" && (
                      <div style={{ marginTop: 12 }}>
                        {ex.items.map((item, ii) => (
                          <div key={ii} style={{ display: "flex", gap: 10, padding: "8px 10px", background: ii % 2 === 0 ? "#0d0d1f" : "#111120", borderRadius: 6, marginBottom: 4, alignItems: "flex-start", flexWrap: "wrap" }}>
                            <span style={{ color: g.color, fontWeight: 700, fontSize: 12, minWidth: 24, flexShrink: 0 }}>{item.n}.</span>
                            <span style={{ color: "#94a3b8", fontSize: 13, flex: 1, minWidth: 120 }}>{item.q}</span>
                            <span style={{ color: "#f0e6ff", fontWeight: 700, fontSize: 13, background: `${g.color}22`, borderRadius: 6, padding: "2px 8px", flexShrink: 0 }}>{item.a}</span>
                            {item.note && <span style={{ color: "#475569", fontSize: 11, fontStyle: "italic", width: "100%", paddingLeft: 34 }}>{item.note}</span>}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* TRANSFORM */}
                    {ex.type === "transform" && (
                      <div style={{ marginTop: 12 }}>
                        {ex.instruction && <div style={{ fontSize: 12, color: "#64748b", fontStyle: "italic", marginBottom: 10 }}>→ {ex.instruction}</div>}
                        {ex.items.map((item, ii) => (
                          <div key={ii} style={{ background: ii % 2 === 0 ? "#0d0d1f" : "#111120", borderRadius: 8, padding: "10px 12px", marginBottom: 6 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                              <span style={{ fontSize: 13, color: "#94a3b8", flex: 1 }}>{item.from}</span>
                              <span style={{ color: g.color, fontSize: 16, flexShrink: 0 }}>→</span>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#86efac", flex: 1 }}>{item.to}</span>
                            </div>
                            {item.note && <div style={{ fontSize: 11, color: "#475569", fontStyle: "italic", marginTop: 4 }}>💡 {item.note}</div>}
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}

          {/* Texte Amina — shown for all groups */}
          <div style={{ background: "#13132a", border: `1px solid ${g.color}44`, borderRadius: 12, marginTop: 6, overflow: "hidden" }}>
            <button onClick={() => setOpenEx(openEx === `${g.id}-amina` ? null : `${g.id}-amina`)} style={{
              width: "100%", textAlign: "left", padding: "13px 16px", background: "transparent", border: "none",
              cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: openEx === `${g.id}-amina` ? g.color : "#cbd5e1" }}>📖 Exercice — Texte à compléter (Amina)</span>
              <span style={{ color: g.color, fontSize: 18 }}>{openEx === `${g.id}-amina` ? "▲" : "▼"}</span>
            </button>

            {openEx === `${g.id}-amina` && (
              <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${g.color}22` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "12px 0 10px" }}>
                  <div style={{ fontSize: 12, color: "#64748b" }}>Mots : elle • lui • qui • est-ce que • comment • à Paris • depuis • parce que • très • beaucoup • les • demain • quand</div>
                  <button onClick={() => setShowAllAmina(!showAllAmina)} style={{
                    background: `${g.color}22`, border: `1px solid ${g.color}66`, borderRadius: 8,
                    color: g.color, fontSize: 11, padding: "4px 10px", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, whiteSpace: "nowrap", marginLeft: 8, flexShrink: 0,
                  }}>{showAllAmina ? "Cacher tout" : "Tout révéler"}</button>
                </div>
                {aminaText.map((item) => {
                  const revealed = showAllAmina || aminaRevealed[item.n];
                  return (
                    <div key={item.n} style={{ display: "flex", gap: 10, padding: "7px 10px", background: item.n % 2 === 0 ? "#0d0d1f" : "#111120", borderRadius: 6, marginBottom: 4, alignItems: "flex-start" }}
                      onClick={() => setAminaRevealed(p => ({ ...p, [item.n]: !p[item.n] }))}>
                      <span style={{ color: g.color, fontWeight: 700, fontSize: 12, minWidth: 24, flexShrink: 0 }}>({item.n})</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{
                            fontWeight: 700, fontSize: 13, padding: "1px 8px", borderRadius: 6,
                            background: revealed ? `${g.color}22` : "#1e1e35",
                            color: revealed ? "#f0e6ff" : "#475569",
                            cursor: "pointer", minWidth: 70, textAlign: "center", border: `1px solid ${revealed ? g.color + "44" : "#2d2d4e"}`,
                            transition: "all 0.2s"
                          }}>{revealed ? item.answer : "Tap pour voir"}</span>
                          {revealed && <span style={{ fontSize: 12, color: "#94a3b8", fontStyle: "italic" }}>→ {item.sentence}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", fontSize: 11, color: "#1e1e35", marginTop: 20 }}>Corrigé Complet G1–G8 · Français Grammaire & Vocabulaire</div>
    </div>
  );
}