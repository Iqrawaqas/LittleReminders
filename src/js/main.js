import * as bootstrap from "bootstrap";
// import * as lib from "../js/ruotes";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseURL = "https://nkikgexpwegwcwoumbah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5raWtnZXhwd2Vnd2N3b3VtYmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxOTM4NTUsImV4cCI6MjAwMDc2OTg1NX0.IiOgnVgFke-sKgtAt8so2kweouWGC48LPhaJUPjdapU";
let supabase = createClient(supabaseURL, supabaseKey);

async function loadData() {
  let { data: users, error } = await supabase.from("users").select("*");

  console.log(users);
}
loadData();

let name = document.querySelector("#name");
name.innerText = name.value;
let email = document.querySelector("#email");
email.innerText = email.value;
const submit = document.querySelector(".submit");
const notification = document.createElement("div");

// submit.addEventListener("click", async (e) => {
//   e.preventDefault();
//   insertData();
//   const alert = document.querySelector(".alert");
//   alert.style.removeProperty("display");
// });
// async function insertData() {
//   const { data, error } = await supabase
//     .from("users")
//     .insert([{ name: name.value, email: email.value }]);
// }

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  signInWithEmail();
});

//Add login code to your client app
async function signInWithEmail() {
  debugger;
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      // emailRedirectTo: email,
      // e.preventDefault();
      emailRedirectTo: "https://little-reminders.vercel.app/src/reminders.html",
    },
  });
  console.log(email);
}

// ///////////////////////////////////////////////////////////
// Adding list functions
