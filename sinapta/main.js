(() => {
  "use strict";
  document.documentElement.classList.add("js");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header shadow on scroll */
  const header = document.querySelector("[data-header]");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* Reveal on scroll with light stagger */
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    reveals.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
      el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 5) * 70}ms`);
      io.observe(el);
    });
  }

  /* Active nav link */
  const links = [...document.querySelectorAll(".nav-list a[href^='#']:not(.btn)")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const active = a.getAttribute("href") === `#${entry.target.id}`;
          a.classList.toggle("is-active", active);
          if (active) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => navIO.observe(s));
  }

  /* Contact form: inline validation + mailto handoff */
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  const CONTACT_EMAIL = "contato@sinapta.dev.br";
  const messages = {
    nome: "Informe seu nome.",
    email: "Informe um e-mail válido.",
    mensagem: "Conte um pouco sobre o seu projeto.",
  };

  const showError = (field, msg) => {
    field.setAttribute("aria-invalid", "true");
    let err = field.parentElement.querySelector(".field-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "field-error";
      err.id = `${field.id}-error`;
      field.parentElement.appendChild(err);
      field.setAttribute("aria-describedby", err.id);
    }
    err.textContent = msg;
  };
  const clearError = (field) => {
    field.removeAttribute("aria-invalid");
    field.parentElement.querySelector(".field-error")?.remove();
    field.removeAttribute("aria-describedby");
  };

  form.querySelectorAll("input, textarea").forEach((f) => {
    f.addEventListener("blur", () => { if (f.required && !f.checkValidity()) showError(f, messages[f.name]); });
    f.addEventListener("input", () => { if (f.checkValidity()) clearError(f); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.className = "form-status";
    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((f) => {
      if (!f.checkValidity()) { showError(f, messages[f.name]); firstInvalid ??= f; }
      else clearError(f);
    });
    if (firstInvalid) { firstInvalid.focus(); status.textContent = "Revise os campos destacados."; return; }

    const data = new FormData(form);
    const subject = `Novo projeto — ${data.get("nome")}${data.get("empresa") ? ` (${data.get("empresa")})` : ""}`;
    const body = `Nome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nEmpresa: ${data.get("empresa") || "-"}\n\n${data.get("mensagem")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Abrimos seu app de e-mail com a mensagem pronta. Obrigado!";
    status.classList.add("is-success");
  });

  /* Footer year */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
