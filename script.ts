const form = document.getElementById('contact-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const message = (document.getElementById('message') as HTMLTextAreaElement).value;

  // Simple form validation
  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }

  // Simulate sending data
  alert(`Message sent by ${name}`);
  form.reset();
});

