// Submits the waitlist form to Brevo in the background and reports the result inline.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup");
  if (!form) return;
  const status = form.querySelector(".signup-status");
  const button = form.querySelector("button[type=submit]");
  const email = form.elements.namedItem("EMAIL");

  const show = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!email.value.trim() || !email.checkValidity()) {
      show("Please enter a valid email address.", "error");
      email.focus();
      return;
    }
    if (form.getAttribute("action").startsWith("BREVO_")) {
      show("Signup opens soon. Please check back in a few days.", "error");
      return;
    }
    button.disabled = true;
    show("Sending…", "pending");
    try {
      const url = new URL(form.action);
      url.searchParams.set("isAjax", "1");
      const response = await fetch(url, { method: "POST", body: new FormData(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error("Signup failed");
      form.reset();
      show("Almost there. Check your inbox and confirm your address.", "ok");
    } catch {
      show("Something went wrong. Please try again in a moment.", "error");
    } finally {
      button.disabled = false;
    }
  });
});
