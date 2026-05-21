const introText = document.getElementById("intro-text");
const charCount = document.getElementById("char-count");

if (introText && charCount) {
  const plainText = introText.textContent.replace(/\s+/g, "").trim();
  charCount.textContent = `自己紹介文の文字数: 約${plainText.length}文字`;
}
