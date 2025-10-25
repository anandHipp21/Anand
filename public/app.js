// E-Voting System - Main JavaScript File
// All data is dummy/fake for demo purposes only

// Check registration status on home page
if (window.location.pathname.includes('home.html')) {
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    const loginBtn = document.getElementById('loginBtn');
    const statusMessage = document.getElementById('statusMessage');

    if (isRegistered) {
        loginBtn.disabled = false;
        loginBtn.classList.add('enabled');
        statusMessage.textContent = '✓ Registration complete. You may now log in to vote.';
        statusMessage.classList.add('success-message');
    }

    document.getElementById('registerBtn').addEventListener('click', () => {
        window.location.href = 'register.html';
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        if (isRegistered) {
            window.location.href = 'login.html';
        }
    });
}

// Registration page logic
if (window.location.pathname.includes('register.html')) {
    const form = document.getElementById('registrationForm');

    // Auto-format Aadhaar input
    const aadhaarInput = document.getElementById('aadhaar');
    aadhaarInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        if (value.length > 0) {
            value = value.match(/.{1,4}/g).join(' ');
        }
        e.target.value = value;
    });

    // Auto-uppercase PAN
    const panInput = document.getElementById('pan');
    panInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Store registration data (dummy)
        const formData = {
            fullName: document.getElementById('fullName').value,
            aadhaar: document.getElementById('aadhaar').value,
            pan: document.getElementById('pan').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('dob').value,
            address: document.getElementById('address').value,
            registrationDate: new Date().toISOString()
        };

        localStorage.setItem('voterData', JSON.stringify(formData));
        localStorage.setItem('isRegistered', 'true');

        // Show success message with animation
        const successModal = document.createElement('div');
        successModal.className = 'modal-overlay';
        successModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-icon success">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-width="2"/>
                        <polyline points="22 4 12 14.01 9 11.01" stroke-width="2"/>
                    </svg>
                </div>
                <h2>Registration Successful!</h2>
                <p>You may now log in to vote.</p>
                <button class="btn btn-primary" onclick="window.location.href='home.html'">
                    Go to Home Page
                </button>
            </div>
        `;
        document.body.appendChild(successModal);
    });
}

// Login page logic
if (window.location.pathname.includes('login.html')) {
    const isRegistered = localStorage.getItem('isRegistered') === 'true';

    if (!isRegistered) {
        alert('Please register first before logging in.');
        window.location.href = 'home.html';
    }

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const backBtn = document.getElementById('backBtn');
    const form = document.getElementById('loginForm');

    sendOtpBtn.addEventListener('click', () => {
        const phoneEmail = document.getElementById('phoneEmail').value;
        if (phoneEmail.trim() === '') {
            alert('Please enter your phone number or email.');
            return;
        }

        // Simulate OTP sent
        alert('Demo OTP sent: 654321');
        step1.style.display = 'none';
        step2.style.display = 'block';
    });

    backBtn.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const otp = document.getElementById('otp').value;
        const captcha = document.getElementById('captcha').value;

        if (otp === '654321' && captcha.toUpperCase() === 'ABC123') {
            localStorage.setItem('isLoggedIn', 'true');

            // Show success message
            const successModal = document.createElement('div');
            successModal.className = 'modal-overlay';
            successModal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-icon success">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke-width="2"/>
                            <polyline points="10 17 15 12 10 7" stroke-width="2"/>
                            <line x1="15" y1="12" x2="3" y2="12" stroke-width="2"/>
                        </svg>
                    </div>
                    <h2>Login Successful!</h2>
                    <p>Proceed to cast your vote.</p>
                    <button class="btn btn-primary" onclick="window.location.href='vote.html'">
                        Go to Voting Page
                    </button>
                </div>
            `;
            document.body.appendChild(successModal);
        } else {
            alert('Invalid OTP or Captcha. Please use:\nOTP: 654321\nCaptcha: ABC123');
        }
    });
}

// Voting page logic
if (window.location.pathname.includes('vote.html')) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        alert('Please log in first to access the voting page.');
        window.location.href = 'login.html';
    }

    const votingSection = document.getElementById('votingSection');
    const successSection = document.getElementById('successSection');
    const votingForm = document.getElementById('votingForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const returnHomeBtn = document.getElementById('returnHomeBtn');

    // Handle party card clicks
    document.querySelectorAll('.party-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.party-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // Handle vote submission
    votingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedParty = document.querySelector('input[name="party"]:checked');
        if (!selectedParty) {
            alert('Please select a party to vote.');
            return;
        }

        // Store vote (dummy)
        const voteData = {
            party: selectedParty.value,
            timestamp: new Date().toISOString(),
            voter: 'Demo Voter',
            constituency: 'Mumbai North (Demo)'
        };

        localStorage.setItem('voteData', JSON.stringify(voteData));
        localStorage.setItem('hasVoted', 'true');

        // Show success section
        votingSection.style.display = 'none';
        successSection.style.display = 'block';

        // Update success section with vote data
        document.getElementById('selectedParty').textContent = selectedParty.value;
        document.getElementById('voteTime').textContent = new Date().toLocaleString();
    });

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'home.html';
        }
    });

    // Handle download acknowledgment
    downloadBtn.addEventListener('click', () => {
        const voteData = JSON.parse(localStorage.getItem('voteData'));
        alert(`Demo Acknowledgment:\n\nVoter: Demo Voter\nParty: ${voteData.party}\nTime: ${new Date(voteData.timestamp).toLocaleString()}\n\n(This is a simulation - no actual file downloaded)`);
    });

    // Handle return to home
    returnHomeBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isRegistered');
        localStorage.removeItem('voterData');
        localStorage.removeItem('voteData');
        localStorage.removeItem('hasVoted');
        window.location.href = 'home.html';
    });
}

// Add smooth page transitions
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
