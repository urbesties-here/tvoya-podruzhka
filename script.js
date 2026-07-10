:root {
  --deep: #0D4D4D;
  --teal: #16A6A6;
  --soft: #A7DADB;
  --pale: #D9EEEF;
  --cream: #F5F1EA;
  --white: #FFFDFC;
  --text: #333333;
  --muted: #6E7777;
  --border: rgba(13, 77, 77, 0.13);
  --shadow: 0 18px 50px rgba(51, 51, 51, 0.08);
  --container: 1180px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  color: var(--text);

  background:
    radial-gradient(
      circle at top left,
      rgba(217, 238, 239, 0.35),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      #fffdfa 0%,
      var(--cream) 100%
    );

  font-family: "Montserrat", sans-serif;
  line-height: 1.65;
}

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(
    var(--container),
    calc(100% - 40px)
  );

  margin: 0 auto;
}

section {
  scroll-margin-top: 100px;
}

.subtitle {
  display: inline-block;
  margin-bottom: 10px;

  color: var(--teal);

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.primary,
.secondary,
.join-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  padding: 0 24px;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  text-align: center;

  cursor: pointer;
  transition: 0.25s ease;
}

.primary,
.join-btn {
  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      var(--teal),
      #2D9298
    );

  box-shadow:
    0 12px 28px
    rgba(22, 166, 166, 0.22);
}

.primary:hover,
.join-btn:hover {
  transform: translateY(-2px);

  box-shadow:
    0 16px 35px
    rgba(22, 166, 166, 0.3);
}

.secondary {
  color: var(--deep);

  background:
    rgba(255, 255, 255, 0.72);

  border:
    1px solid
    rgba(13, 77, 77, 0.18);
}

.secondary:hover {
  background: var(--pale);
}

/* ШАПКА */

header {
  position: sticky;
  top: 0;
  z-index: 1000;

  background:
    rgba(255, 253, 250, 0.92);

  border-bottom:
    1px solid
    rgba(13, 77, 77, 0.08);

  backdrop-filter: blur(16px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  min-height: 84px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo img {
  width: 76px;
  height: 76px;

  object-fit: contain;
}

nav {
  display: flex;
  align-items: center;
  gap: 28px;

  font-size: 14px;
  font-weight: 500;
}

nav a {
  transition: 0.2s ease;
}

nav a:hover {
  color: var(--teal);
}

/* ГЛАВНЫЙ ЭКРАН */

.hero {
  padding: 38px 0 28px;
}

.hero-grid {
  display: grid;

  grid-template-columns:
    0.82fr 1.55fr;

  align-items: center;
  gap: 28px;
}

.hero-left {
  padding:
    48px 12px
    48px 4px;
}

.hero-left h1 {
  margin-bottom: 22px;

  color: var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size:
    clamp(58px, 7vw, 96px);

  font-weight: 400;
  line-height: 0.92;
}

.hero-left p {
  max-width: 460px;
  margin-bottom: 28px;

  color: #475858;

  font-size: 17px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-right {
  position: relative;

  min-height: 500px;
  padding: 10px;

  overflow: hidden;

  background: #F6EFE7;
  border-radius: 42px;

  box-shadow: var(--shadow);
}

.hero-right img {
  width: 100%;
  height: 100%;
  max-height: 500px;

  object-fit: contain;
  object-position: center;
}

/* СОВЕТ МЕСЯЦА */

.monthly-advice {
  padding: 42px 0;
}

.advice-grid {
  display: grid;

  grid-template-columns:
    1.05fr 0.95fr;

  align-items: center;
  gap: 26px;

  padding: 26px;

  background:
    linear-gradient(
      135deg,
      rgba(217, 238, 239, 0.78),
      rgba(255, 253, 252, 0.95)
    );

  border:
    1px solid
    var(--border);

  border-radius: 34px;

  box-shadow: var(--shadow);
}

.advice-text {
  padding: 18px;
}

.advice-text h2 {
  margin-bottom: 18px;

  color: var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size:
    clamp(42px, 5vw, 66px);

  font-weight: 400;
  line-height: 1;
}

.advice-text p {
  max-width: 570px;

  color: #536060;

  font-size: 17px;
  line-height: 1.85;
}

.advice-image {
  min-height: 310px;

  overflow: hidden;

  border-radius: 26px;
}

.advice-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

/* ОБЩИЕ ЗАГОЛОВКИ */

.calendar-section,
.blog-section,
.gallery-section,
.about-section {
  padding: 52px 0;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;

  margin-bottom: 26px;
}

.section-heading h2 {
  color: var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size:
    clamp(42px, 5vw, 62px);

  font-weight: 400;
  line-height: 1;
}

.section-heading p {
  max-width: 390px;

  color: var(--muted);

  font-size: 14px;
  text-align: right;
}

/* КАЛЕНДАРЬ */

.calendar-layout {
  display: grid;

  grid-template-columns:
    0.9fr 1.45fr;

  align-items: stretch;
  gap: 26px;
}

.calendar-box {
  padding: 28px;

  background:
    rgba(255, 253, 252, 0.94);

  border:
    1px solid
    var(--border);

  border-radius: 28px;

  box-shadow: var(--shadow);
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
}

.calendar-header h3 {
  color: var(--deep);

  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}

.calendar-header button {
  width: 40px;
  height: 40px;

  color: var(--deep);

  background: #ffffff;

  border:
    1px solid
    var(--border);

  border-radius: 50%;

  cursor: pointer;
  transition: 0.2s ease;
}

.calendar-header button:hover {
  color: white;
  background: var(--teal);
}

.weekdays,
.calendar-days {
  display: grid;

  grid-template-columns:
    repeat(7, 1fr);

  gap: 8px;

  text-align: center;
}

.weekdays {
  margin-bottom: 9px;

  color: var(--muted);

  font-size: 12px;
  font-weight: 600;
}

.calendar-days button {
  aspect-ratio: 1;

  color: var(--text);

  background: transparent;

  border: 0;
  border-radius: 50%;

  font-size: 13px;
  font-weight: 500;
}

.calendar-days button.other-month {
  opacity: 0.25;
}

.calendar-days button.has-event {
  color: #ffffff;
  background: var(--teal);

  box-shadow:
    0 8px 18px
    rgba(22, 166, 166, 0.22);

  cursor: pointer;
}

.calendar-days button.has-event:hover,
.calendar-days button.active {
  background: var(--deep);

  transform:
    translateY(-2px)
    scale(1.04);
}

.calendar-note {
  display: flex;
  align-items: center;
  gap: 9px;

  margin-top: 22px;

  color: var(--muted);

  font-size: 13px;
}

.calendar-note span {
  width: 10px;
  height: 10px;

  background: var(--teal);
  border-radius: 50%;
}

/* БЛИЖАЙШЕЕ СОБЫТИЕ */

.featured-event {
  display: grid;

  grid-template-columns:
    1.05fr 0.95fr;

  min-height: 500px;

  overflow: hidden;

  background:
    rgba(255, 253, 252, 0.95);

  border:
    1px solid
    var(--border);

  border-radius: 28px;

  box-shadow: var(--shadow);
}

.featured-event-image {
  min-height: 100%;
  background: var(--cream);
}

.featured-event-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.featured-event-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 34px;
}

.event-date {
  display: inline-flex;
  width: fit-content;

  margin-bottom: 15px;
  padding: 8px 14px;

  color: var(--deep);

  border:
    1px solid
    var(--soft);

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
}

.featured-event-content h3 {
  margin-bottom: 18px;

  color: var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size:
    clamp(40px, 4vw, 58px);

  font-weight: 400;
  line-height: 1;
}

.featured-event-content p {
  margin-bottom: 18px;

  color: #536060;

  font-size: 15px;
}

.featured-event-content ul {
  display: grid;
  gap: 10px;

  margin-bottom: 24px;

  list-style: none;
}

.featured-event-content li {
  color: #455454;

  font-size: 14px;
}

.featured-event-content li::before {
  content: "♡";

  margin-right: 8px;

  color: var(--teal);
}

.event-button {
  width: fit-content;
  border: 0;
}
/* БЛОГ */

.blog-grid {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);
  gap: 22px;
}

.blog-card {
  overflow: hidden;

  background:
    rgba(255, 253, 252, 0.95);

  border:
    1px solid
    var(--border);

  border-radius: 26px;

  box-shadow:
    var(--shadow);

  transition:
    0.25s ease;
}

.blog-card:hover {
  transform:
    translateY(-5px);
}

.blog-card img {
  width: 100%;
  height: 220px;

  object-fit: cover;
}

.blog-content {
  padding: 22px;
}

.blog-content span {
  display: inline-block;

  margin-bottom: 8px;

  color:
    var(--teal);

  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.blog-content h3 {
  margin-bottom: 12px;

  color:
    var(--deep);

  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
}

.blog-content p {
  color:
    var(--muted);

  font-size: 14px;
  line-height: 1.7;
}

/* ГАЛЕРЕЯ */

.gallery-layout {
  display: grid;

  grid-template-columns:
    1.15fr 0.85fr;

  align-items: stretch;
  gap: 26px;
}

.gallery-image {
  min-height: 470px;

  overflow: hidden;

  background:
    var(--cream);

  border:
    1px solid
    var(--border);

  border-radius: 28px;

  box-shadow:
    var(--shadow);
}

.gallery-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
}

.gallery-info {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 42px;

  background:
    linear-gradient(
      135deg,
      rgba(217, 238, 239, 0.88),
      rgba(255, 253, 252, 0.96)
    );

  border:
    1px solid
    var(--border);

  border-radius: 28px;

  box-shadow:
    var(--shadow);
}

.gallery-info h3 {
  margin-bottom: 16px;

  color:
    var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size:
    clamp(40px, 4vw, 58px);

  font-weight: 400;
  line-height: 1;
}

.gallery-info p {
  color:
    #536060;

  font-size: 15px;
  line-height: 1.8;
}

.gallery-info ul {
  display: grid;
  gap: 12px;

  margin:
    20px 0 26px;

  list-style: none;
}

.gallery-info li {
  color:
    #465555;

  font-size: 14px;
}

.gallery-info li::before {
  content: "✓";

  margin-right: 9px;

  color:
    var(--teal);

  font-weight: 700;
}

/* О НАС, СОТРУДНИЧЕСТВО, КОНТАКТЫ */

.info-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 22px;
}

.info-card {
  display: flex;
  flex-direction: column;

  min-height: 430px;

  overflow: hidden;

  background:
    rgba(255, 253, 252, 0.95);

  border:
    1px solid
    var(--border);

  border-radius: 26px;

  box-shadow:
    var(--shadow);
}

.info-card img {
  width: 100%;
  height: 210px;

  object-fit: cover;
}

.info-content {
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 24px;
}

.info-content h3 {
  margin-bottom: 14px;

  color:
    var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size: 38px;
  font-weight: 400;
  line-height: 1;
}

.info-content p {
  margin-bottom: 20px;

  color:
    var(--muted);

  font-size: 14px;
  line-height: 1.8;
}

.info-content > a {
  margin-top: auto;

  color:
    var(--deep);

  font-size: 14px;
  font-weight: 600;
}

.info-content > a:hover {
  color:
    var(--teal);
}

.contact-links {
  display: grid;
  gap: 14px;

  margin-top: auto;
}

.contact-links a {
  color:
    var(--deep);

  font-size: 15px;
  font-weight: 500;

  transition:
    0.2s ease;
}

.contact-links a:hover {
  color:
    var(--teal);
}

/* FOOTER */

footer {
  margin-top: 36px;
  padding: 34px 0;

  border-top:
    1px solid
    var(--border);
}

.footer-grid {
  display: grid;

  grid-template-columns:
    1fr auto 1fr;

  align-items: center;
  gap: 20px;
}

.footer-logo img {
  width: 84px;
  height: 84px;

  object-fit: contain;
}

.footer-text {
  color:
    var(--muted);

  font-size: 13px;
  text-align: center;
}

.footer-text p + p {
  margin-top: 4px;
}

.social-links {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 44px;
  height: 44px;

  padding:
    0 14px;

  color:
    #ffffff;

  background:
    var(--teal);

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  transition:
    0.2s ease;
}

.social-links a:hover {
  background:
    var(--deep);

  transform:
    translateY(-2px);
}

/* MODAL */

.modal {
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: none;
  place-items: center;

  padding: 20px;

  background:
    rgba(13, 77, 77, 0.56);

  backdrop-filter:
    blur(10px);
}

.modal.open {
  display: grid;
}

.modal-content {
  position: relative;

  width:
    min(560px, 100%);

  padding: 30px;

  background:
    var(--white);

  border:
    1px solid
    var(--border);

  border-radius: 28px;

  box-shadow:
    0 24px 70px
    rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;

  top: 16px;
  right: 16px;

  width: 38px;
  height: 38px;

  color:
    var(--deep);

  background:
    var(--pale);

  border: 0;
  border-radius: 50%;

  font-size: 24px;
  line-height: 1;

  cursor: pointer;
}

.modal-content h3 {
  margin-bottom: 14px;

  color:
    var(--deep);

  font-family:
    "Marck Script",
    cursive;

  font-size: 44px;
  font-weight: 400;
  line-height: 1;
}

.modal-content p {
  margin-bottom: 22px;

  color:
    var(--muted);

  font-size: 15px;
  line-height: 1.8;
}

/* АНИМАЦИЯ */

.hero-left,
.hero-right,
.advice-grid,
.calendar-box,
.featured-event,
.blog-card,
.gallery-image,
.gallery-info,
.info-card {
  animation:
    fadeUp 0.7s ease both;
}

@keyframes fadeUp {
  from {
    opacity: 0;

    transform:
      translateY(22px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

/* ПЛАНШЕТ */

@media (max-width: 980px) {
  nav {
    gap: 18px;

    font-size: 13px;
  }

  .join-btn {
    padding:
      0 18px;
  }

  .hero-grid,
  .advice-grid,
  .calendar-layout,
  .gallery-layout {
    grid-template-columns: 1fr;
  }

  .hero-left {
    padding:
      32px 4px 18px;
  }

  .hero-right {
    min-height: 430px;
  }

  .hero-right img {
    max-height: 430px;
  }

  .featured-event {
    grid-template-columns: 1fr;
  }

  .featured-event-image {
    min-height: 340px;
  }

  .blog-grid,
  .info-grid {
    grid-template-columns:
      1fr 1fr;
  }

  .info-grid
  .info-card:last-child {
    grid-column:
      1 / -1;
  }

  .footer-grid {
    grid-template-columns:
      1fr;
  }

  .footer-logo img {
    margin: 0 auto;
  }

  .social-links {
    justify-content: center;
  }
}
/* МОБИЛЬНАЯ ВЕРСИЯ */

@media (max-width: 680px) {

  .container {
    width: min(100% - 24px, var(--container));
  }

  header .nav {
    flex-direction: column;
    gap: 16px;
    padding: 18px 0;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  .logo img {
    width: 60px;
    height: 60px;
  }

  .join-btn,
  .primary,
  .secondary {
    width: 100%;
  }

  .hero {
    padding: 24px 0;
  }

  .hero-left {
    padding: 10px 0;
    text-align: center;
  }

  .hero-left h1 {
    font-size: 58px;
  }

  .hero-left p {
    font-size: 15px;
    margin: 0 auto 24px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-right {
    min-height: auto;
    padding: 8px;
    border-radius: 24px;
  }

  .hero-right img {
    max-height: 280px;
    object-fit: contain;
  }

  .advice-grid {
    padding: 18px;
    gap: 18px;
  }

  .advice-text {
    padding: 0;
  }

  .advice-text h2 {
    font-size: 42px;
  }

  .advice-text p {
    font-size: 15px;
  }

  .advice-image {
    min-height: auto;
  }

  .advice-image img {
    height: 220px;
  }

  .section-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .section-heading p {
    text-align: left;
    max-width: 100%;
  }

  .calendar-box {
    padding: 18px;
  }

  .featured-event-image {
    min-height: auto;
  }

  .featured-event-image img {
    height: 240px;
  }

  .featured-event-content {
    padding: 22px;
  }

  .featured-event-content h3 {
    font-size: 40px;
  }

  .blog-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .blog-card img {
    height: 190px;
  }

  .gallery-image {
    min-height: auto;
  }

  .gallery-image img {
    height: 240px;
  }

  .gallery-info {
    padding: 24px;
  }

  .gallery-info h3 {
    font-size: 40px;
  }

  .info-card img {
    height: 190px;
  }

  .footer-grid {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .modal-content {
    padding: 24px;
  }

  .modal-content h3 {
    font-size: 36px;
  }

}
