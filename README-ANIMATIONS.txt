MERO ANNIVERSARY — REPEAT-ON-SCROLL ANIMATION UPDATE

This update changes the scroll reveal behavior so it plays again whenever an element re-enters the viewport. Elements remain visible when they leave the viewport; they do not disappear while scrolling away.

HOW TO INSTALL
1. Open your website folder.
2. Replace the existing animations.css with the animations.css in this package.
3. Replace the existing animations.js with the animations.js in this package.
4. Keep the two script/link tags already added to index.html. Do not change your original style.css or script.js.
5. Save the files and test locally with Ctrl+F5.
6. If it works, upload/commit the two replaced files to the same GitHub repository.

EXPECTED HTML LINKS
Inside <head>:
<link rel="stylesheet" href="animations.css">

Near the end of <body>, after script.js:
<script src="animations.js"></script>

Motion replays on entering view, not on every tiny scroll pixel. This keeps the effect subtle and premium. Reduced-motion accessibility settings are respected.
