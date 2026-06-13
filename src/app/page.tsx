import Nav from "@/components/Nav";

const projects = [
  {
    title: "Abatur Ministries",
    subtitle: "\u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u043A\u043E\u0435 \u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0435",
    description: "\u041F\u0440\u043E\u043F\u043E\u0432\u0435\u0434\u044C \u0421\u043B\u043E\u0432\u0430 \u0411\u043E\u0436\u044C\u0435\u0433\u043E, \u0442\u043E\u043B\u043A\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043D\u043E\u0432, \u043C\u043E\u043B\u0438\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442 \u043C\u0438\u043D\u0438-\u0433\u043E\u0440\u043E\u0434\u043A\u0430 \u0434\u043B\u044F \u0438\u043D\u0432\u0430\u043B\u0438\u0434\u043E\u0432.",
    url: "https://abaturministry.org",
    color: "#d4af37",
    icon: "\u2720",
  },
  {
    title: "Management 2.0+",
    subtitle: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E",
    description: "\u0421\u0438\u043D\u0442\u0435\u0437 \u0445\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430. \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439.",
    url: "https://management2plus.ru",
    color: "#c0392b",
    icon: "\u2696",
  },
  {
    title: "\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0418\u043C\u0435\u043D\u0438",
    subtitle: "\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0438 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C",
    description: "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0435\u043D\u0438 \u043A\u0430\u043A \u043A\u043B\u044E\u0447\u0430 \u043A \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0422\u0440\u0443\u0434\u044B \u041B\u043E\u0441\u0435\u0432\u0430 \u0438 \u0424\u043B\u043E\u0440\u0435\u043D\u0441\u043A\u043E\u0433\u043E \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u0438.",
    url: "https://filosofiya-imeni.webnode.ru",
    color: "#2980b9",
    icon: "\u2756",
  },
];

export default function Home() {
  return (
    <div>
      <Nav />

      {/* Hero */}
      <section id="home" style={{
        position: "relative", height: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #0a0a0a 100%)"
      }}>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px" }}>
          <p style={{ color: "#888", fontSize: 14, letterSpacing: 6, marginBottom: 20, textTransform: "uppercase", fontWeight: 500 }}>
            {"\u041A\u043E\u043D\u0446\u0435\u043F\u0442"}
          </p>
          <h1 style={{ fontSize: 80, color: "#d4af37", fontWeight: 700, letterSpacing: 10, marginBottom: 25, lineHeight: 1.1, fontFamily: "'Playfair Display', serif" }}>
            {"\u0418\u0421\u0422\u0418\u041D\u0410. \u0423\u041F\u0420\u0410\u0412\u041B\u0415\u041D\u0418\u0415. \u0424\u0418\u041B\u041E\u0421\u041E\u0424\u0418\u042F."}
          </h1>
          <p style={{ fontSize: 22, color: "#999", letterSpacing: 3, fontWeight: 300, maxWidth: 600, margin: "0 auto 50px" }}>
            Abatur Ministry
          </p>
          <a href="#about" style={{ color: "#d4af37", fontSize: 13, textDecoration: "none", borderBottom: "1px solid #d4af37", paddingBottom: 4, letterSpacing: 3 }}>
            {"\u0423\u0417\u041D\u0410\u0422\u042C \u0411\u041E\u041B\u042C\u0428\u0415"}
          </a>
        </div>
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          color: "#555", fontSize: 13, letterSpacing: 2, animation: "none"
        }}>
          {"Абатур Ministry"}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "120px 20px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37", fontSize: 38, marginBottom: 30, fontWeight: 600 }}>
          {"\u041E \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"}
        </h2>
        <p style={{ color: "#aaa", fontSize: 18, lineHeight: 1.9, marginBottom: 60 }}>
          {"\u041A\u043E\u043D\u0446\u0435\u043F\u0442 Abatur \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0442\u0440\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u0443\u0436\u0435\u043D\u0438\u044F: \u0445\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u043A\u0443\u044E \u0432\u0435\u0440\u0443, \u043D\u0430\u0443\u043A\u0443 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044E \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u041C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0438\u0441\u0442\u0438\u043D\u0430 \u043D\u0435 \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0447\u0430\u0441\u0442\u0438 \u2014 \u043E\u043D\u0430 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0446\u0435\u043B\u0438\u043A\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0435, \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0437\u0443\u043C\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0447\u0435\u0440\u0435\u0437 \u0433\u043B\u0443\u0431\u0438\u043D\u043D\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0438\u043C\u0435\u043D\u0438 \u0438 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
          <div>
            <div style={{ fontSize: 40, color: "#d4af37", marginBottom: 15 }}>{"\u2720"}</div>
            <h3 style={{ color: "#fff", fontSize: 20, marginBottom: 10 }}>{"\u0418\u0441\u0442\u0438\u043D\u0430"}</h3>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7 }}>{"\u041F\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0411\u043E\u0433\u0430 \u0447\u0435\u0440\u0435\u0437 \u0421\u043B\u043E\u0432\u043E, \u043C\u043E\u043B\u0438\u0442\u0432\u0443 \u0438 \u0436\u0438\u0432\u043E\u0439 \u043E\u043F\u044B\u0442 \u0432\u0435\u0440\u044B."}</p>
          </div>
          <div>
            <div style={{ fontSize: 40, color: "#d4af37", marginBottom: 15 }}>{"\u2696"}</div>
            <h3 style={{ color: "#fff", fontSize: 20, marginBottom: 10 }}>{"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"}</h3>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7 }}>{"\u041B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0438 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438."}</p>
          </div>
          <div>
            <div style={{ fontSize: 40, color: "#d4af37", marginBottom: 15 }}>{"\u2756"}</div>
            <h3 style={{ color: "#fff", fontSize: 20, marginBottom: 10 }}>{"\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F"}</h3>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7 }}>{"\u0418\u043C\u044F \u043A\u0430\u043A \u043A\u043B\u044E\u0447 \u043A \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0420\u0443\u0441\u0441\u043A\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u043E\u0437\u043D\u0430\u044F \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u0438."}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "120px 20px", backgroundColor: "#0d0d0d" }}>
        <h2 style={{ textAlign: "center", color: "#d4af37", fontSize: 38, marginBottom: 60, fontWeight: 600 }}>
          {"\u041F\u0440\u043E\u0435\u043A\u0442\u044B"}
        </h2>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
          {projects.map((project) => (
            <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer"
              style={{
                backgroundColor: "#111", border: "1px solid #222", borderRadius: 16,
                padding: "40px 30px", textDecoration: "none", display: "block",
                transition: "0.3s", position: "relative", overflow: "hidden"
              }}>
              <div style={{
                width: 60, height: 60, borderRadius: 12,
                backgroundColor: project.color + "15",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, fontSize: 28, color: project.color
              }}>
                {project.icon}
              </div>
              <p style={{ color: project.color, fontSize: 12, fontWeight: 600, letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>
                {project.subtitle}
              </p>
              <h3 style={{ color: "#fff", fontSize: 22, marginBottom: 15, fontFamily: "'Playfair Display', serif" }}>
                {project.title}
              </h3>
              <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7 }}>
                {project.description}
              </p>
              <div style={{ marginTop: 30, color: project.color, fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                {"\u041F\u0415\u0420\u0415\u0419\u0422\u0418"} {"\u2192"}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{
        padding: "120px 20px", position: "relative",
        background: "linear-gradient(135deg, #0a0a0a 0%, #151210 50%, #0a0a0a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, textAlign: "center" }}>
          <div style={{ fontSize: 60, color: "#d4af37", marginBottom: 25, fontFamily: "'Playfair Display', serif" }}>{"\u201C"}</div>
          <blockquote style={{ fontSize: 28, color: "#fff", fontStyle: "italic", lineHeight: 1.8, fontWeight: 300, marginBottom: 25 }}>
            {"\u041F\u043E\u0437\u043D\u0430\u0439\u0442\u0435 \u0438\u0441\u0442\u0438\u043D\u0443, \u0438 \u0438\u0441\u0442\u0438\u043D\u0430 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0430\u0441 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u043C\u0438."}
          </blockquote>
          <cite style={{ color: "#d4af37", fontStyle: "normal", fontSize: 16, fontWeight: 600, display: "block" }}>
            {"\u0418\u043E\u0430\u043D\u043D\u0430 8:32"}
          </cite>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" style={{ padding: "120px 20px", backgroundColor: "#0d0d0d" }}>
        <h2 style={{ textAlign: "center", color: "#d4af37", fontSize: 38, marginBottom: 15, fontWeight: 600 }}>
          {"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"}
        </h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: 50, maxWidth: 500, margin: "0 auto 50px", fontSize: 16 }}>
          {"\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"}
        </p>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <input placeholder={"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"} style={{
            width: "100%", padding: "14px 16px", backgroundColor: "#111",
            border: "1px solid #333", borderRadius: 10, color: "#fff",
            fontSize: 15, marginBottom: 14, outline: "none"
          }} />
          <input placeholder="Email" type="email" style={{
            width: "100%", padding: "14px 16px", backgroundColor: "#111",
            border: "1px solid #333", borderRadius: 10, color: "#fff",
            fontSize: 15, marginBottom: 14, outline: "none"
          }} />
          <textarea placeholder={"\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"} rows={4} style={{
            width: "100%", padding: "14px 16px", backgroundColor: "#111",
            border: "1px solid #333", borderRadius: 10, color: "#fff",
            fontSize: 15, marginBottom: 20, outline: "none", resize: "vertical", fontFamily: "inherit"
          }} />
          <button style={{
            width: "100%", padding: "16px", backgroundColor: "#d4af37",
            color: "#000", border: "none", borderRadius: 10, fontWeight: "bold",
            fontSize: 16, cursor: "pointer", letterSpacing: 2
          }}>
            {"\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C"}
          </button>
        </div>
        <div style={{ maxWidth: 600, margin: "40px auto 0", display: "flex", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
          <a href="https://t.me/Abaturministry_bot" target="_blank" rel="noopener noreferrer" style={{ color: "#888", textDecoration: "none", fontSize: 14 }}>
            Telegram
          </a>
          <a href="mailto:info@abaturministries.org" style={{ color: "#888", textDecoration: "none", fontSize: 14 }}>
            info@abaturministries.org
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 20px", borderTop: "1px solid #1a1a1a", textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 20 }}>
          {"\u00A9 2026 Abatur Ministry. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 25, flexWrap: "wrap" }}>
          <a href="https://abaturministries.org" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none", fontSize: 13 }}>
            Abatur Ministries
          </a>
          <span style={{ color: "#333" }}>|</span>
          <a href="https://management2plus.ru" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none", fontSize: 13 }}>
            Management 2.0+
          </a>
          <span style={{ color: "#333" }}>|</span>
          <a href="https://filosofiya-imeni.webnode.ru" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none", fontSize: 13 }}>
            {"\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0418\u043C\u0435\u043D\u0438"}
          </a>
        </div>
      </footer>
    </div>
  );
}