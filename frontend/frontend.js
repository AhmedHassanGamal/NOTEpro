document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (token && window.location.pathname === "/notes.html") {
    fetchNotes();
  }

  // Login form submission
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "notes.html";
        } else {
          document.getElementById("errorMessage").innerText = data.message;
        }
      } catch (error) {
        console.error(error);
      }
    });

  // Register form submission
  document
    .getElementById("registerForm")
    ?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await res.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "notes.html";
        } else {
          document.getElementById("errorMessage").innerText = data.message;
        }
      } catch (error) {
        console.error(error);
      }
    });

  // Fetch notes
  async function fetchNotes() {
    try {
      const res = await fetch("/notes", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      const notes = await res.json();
      const notesList = document.getElementById("notesList");
      notesList.innerHTML = "";

      notes.forEach((note) => {
        const noteItem = document.createElement("div");
        noteItem.className = "noteItem";
        noteItem.innerHTML = `
                    <h4>${note.title}</h4>
                    <p>${note.content}</p>
                    <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
                    <button onclick="deleteNote('${note._id}')">Delete</button>
                `;
        notesList.appendChild(noteItem);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Create or update note
  document.getElementById("noteForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const noteId = document.getElementById("noteId").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const method = noteId ? "PATCH" : "POST";
    const url = noteId ? `/notes/${noteId}` : "/notes";

    try {
      await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content }),
      });

      fetchNotes();
      document.getElementById("noteForm").reset();
      document.getElementById("noteId").value = "";
    } catch (error) {
      console.error(error);
    }
  });

  // Delete note
  window.deleteNote = async (id) => {
    try {
      await fetch(`/notes/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  // Edit note
  window.editNote = (id, title, content) => {
    document.getElementById("noteId").value = id;
    document.getElementById("title").value = title;
    document.getElementById("content").value = content;
  };

  // Logout
  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
  });
});
