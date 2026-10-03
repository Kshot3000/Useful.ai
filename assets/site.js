function money(n) {
  const v = Number.isFinite(n) ? n : 0;
  return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
function persist(key, root) {
  const fields = root.querySelectorAll("input, select, textarea");
  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  fields.forEach((el) => {
    if (!el.id || el.type === "checkbox") return;
    if (saved[el.id] != null) el.value = saved[el.id];
  });
  const save = () => {
    const data = {};
    fields.forEach((el) => { if (el.id && el.type !== "checkbox") data[el.id] = el.value; });
    localStorage.setItem(key, JSON.stringify(data));
  };
  root.addEventListener("input", save);
  return save;
}
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (!btn) return;
    const old = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(() => { btn.textContent = old; }, 1400);
  }).catch(() => {});
}
