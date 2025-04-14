// scripts.js - Glorious Luna Logic

function launchPopup() {
    const popup = window.open('', '', 'width=420,height=320');
    popup.document.write('<h1 style="font-family: Comic Sans MS; color: hotpink;">🍕 CHONK ATTACK!</h1>');
    popup.document.write('<p style="font-size: 18px;">You just witnessed Luna’s legendary hunger blast!</p>');
    popup.document.write('<img src="images/luna2.png" style="width: 100%; border: 3px groove pink;" />');
    popup.document.body.style.background = 'black';
  }
  
  document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', () => {
        if (music.paused) {
          music.play().catch(e => {
            console.warn('Autoplay failed:', e);
          });
        }
      }, { once: true });
      
    const form = document.getElementById('guestbook-form');
    const entriesContainer = document.getElementById('guestbook-entries');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert('Luna demands FULL dedication. Fill it out!');
        return;
      }
  
      const entry = document.createElement('div');
      entry.className = 'entry';
      entry.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
        <small>(${email})</small>
        <hr />
      `;
      entriesContainer.prepend(entry);
      form.reset();
      alert('Your devotion to the Chonk Queen has been recorded. 🐾');
    });
  
    // Autoplay music with stop control
    const music = document.createElement('audio');
    music.src = 'audio/luna_theme.mp3';
    music.autoplay = true;
    music.loop = true;
    music.id = 'luna-music';
    document.body.appendChild(music);
  
    const muteBtn = document.createElement('button');
    muteBtn.innerText = '🔇 Mute the Meowzart';
    muteBtn.style.position = 'fixed';
    muteBtn.style.bottom = '10px';
    muteBtn.style.right = '10px';
    muteBtn.style.zIndex = '10000';
    muteBtn.onclick = () => {
      music.paused ? music.play() : music.pause();
      muteBtn.innerText = music.paused ? '🔊 Unmute the Meowzart' : '🔇 Mute the Meowzart';
    };
    document.body.appendChild(muteBtn);
  
    // Easter egg: Press L for Luna laugh
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'l') {
        alert('😹 Luna rolled over and crushed the space bar. Legend.');
      }
    });
  });