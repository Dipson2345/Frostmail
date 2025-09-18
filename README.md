Frost Mail(Prototype)

Frost Mail is a freelancer-focused AI-assisted email generator that allows you to quickly create personalized emails for multiple clients.  
This is a **demo prototype** designed for showcasing functionality, UI/UX, and AI-powered email template generation. Emails are **simulated locally** in the browser.

---

## Features

- Input multiple client emails (one per line)  
- AI-assisted subject and body suggestions  
- `{name}` placeholder automatically replaced with client name  
- Generate & “send” emails with **instant logging** in the Sent Emails section  
- Polished **SaaS-style UI** with gradients, hover effects, and animations  
- Fun **snowflake animation** for Frost branding  
- Fully **self-contained**, runs offline in browser  
- Logs persist using **localStorage**

---

Folder Structure

FrostMail/Frontend

├── index.html # Main frontend HTML file
├── style.css # Polished styles and animations
├── script.js # AI-assisted email logic and UI interaction


---

## How To Use

1. **Download and Open the project**  
   - Open `index.html` in any modern browser (Chrome/Edge/Firefox).  

2. **Step 1: Add Clients**  
   - Paste client emails into the text area (one email per line).  

3. **Step 2: Write Template**  
   - Write your email subject and body.  
   - Use `{name}` as a placeholder for automatic client name insertion.  
   - Optionally, click **“AI Suggest Subject & Body”** to generate a professional template automatically.

4. **Step 3: Generate & Send**  
   - Click **“Generate & Send”**.  
   - Emails will appear in the **Sent Emails** log.  
   - `{name}` in templates will be replaced with each client’s name.  
   - Refresh the page → sent emails persist thanks to `localStorage`.

5. **Demo Interaction**
  
   - The **Sent Emails** log shows all generated emails.  
   - Hover over each email → smooth hover effect.  
   - Snowflakes animate in the header for a polished “Frost Mail” feel.

---

## Technologies Used

- **HTML** – Structure and layout  
- **CSS** – Polished gradients, shadows, hover effects, and snowflake animation  
- **JavaScript** – AI template generation, placeholder replacement, localStorage persistence  

---

## Notes

- This is a **demo prototype**: emails are **not sent to real clients**.    
- Fully extendable — you can integrate backend Gmail API or SMTP later for real email sending.  

---

## Author

Dipson Upadhyay Freelancer, SaaS enthusiast, AI & UX-driven creator,and Much more
