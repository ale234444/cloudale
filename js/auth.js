const SUPABASE_URL = "https://gdjpiapnyxhtlgkezbyi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkanBpYXBueXhodGxna2V6YnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MDUxOTMsImV4cCI6MjA3MDA4MTE5M30.lMqaoPtDV9TH2swuCgjhTcSNst2ORQsjvgnFRM3LG58"

const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
  registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
}

async function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const { data, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Registro exitoso.");
    toggleForms();
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Sesión iniciada.");
    localStorage.setItem("token", data.session.access_token);

     window.location.href = "dashboard.html"; //Registro Estudiantes
  }
}