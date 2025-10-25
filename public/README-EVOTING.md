# E-Voting System - Multi-Page Website

## Overview
This is a professional multi-page e-voting demonstration website with a white and gray government-style theme.

## Pages Structure

### 1. Home Page (`home.html`)
- Entry point of the application
- Two main buttons:
  - **Register to Vote** - Always enabled
  - **Login to Vote** - Disabled until registration is complete
- Features section showcasing security aspects

### 2. Registration Page (`register.html`)
- Accessible by clicking "Register to Vote" on home page
- Form fields:
  - Full Name
  - Aadhaar Number (Demo: 1234 5678 9012)
  - PAN Number (Demo: DEMO12345P)
  - Phone Number
  - Date of Birth
  - Address
- After successful registration, the "Login to Vote" button becomes enabled on home page

### 3. Login Page (`login.html`)
- Accessible after registration by clicking "Login to Vote"
- Two-step process:
  - Step 1: Enter phone/email
  - Step 2: Verify OTP and Captcha
- Demo credentials:
  - **OTP:** 654321
  - **Captcha:** ABC123

### 4. Voting Page (`vote.html`)
- Accessible after successful login
- Three political parties to choose from:
  - **BJP** - Bharatiya Janata Party (Lotus)
  - **NCP** - Nationalist Congress Party (Clock)
  - **Shiv Sena** - (Bow and Arrow)
- Select a party and click "Confirm My Vote"
- Success screen shows vote summary with download option

## How to Access

### For Development:
1. Navigate to the public folder
2. Open `home.html` in a web browser
3. Or use a local server:
   ```bash
   cd public
   python -m http.server 8080
   ```
   Then visit: http://localhost:8080/home.html

### User Flow:
1. Start at `home.html`
2. Click "Register to Vote" → `register.html`
3. Fill form and submit
4. Return to home page (login button now enabled)
5. Click "Login to Vote" → `login.html`
6. Enter credentials and verify OTP
7. Proceed to `vote.html`
8. Select party and confirm vote
9. View success screen

## Features

- ✅ Smooth page transitions
- ✅ Local storage for state management
- ✅ Professional government-style design
- ✅ White and gray color theme
- ✅ Responsive design for mobile and desktop
- ✅ Modal confirmations
- ✅ Form validation
- ✅ Demo data with clear indicators

## Important Notes

⚠️ **All data is dummy/fake for prototype purposes only**
- No real backend or database
- Uses browser localStorage for state
- OTPs and data are simulated
- Not connected to any real election system

## Technologies Used

- HTML5 - Page structure
- CSS3 - Styling and animations
- Vanilla JavaScript - Interactivity and navigation
- LocalStorage - State management between pages
