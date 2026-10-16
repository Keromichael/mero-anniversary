# Mero Anniversary Website 💗

A responsive, static anniversary website made with HTML, CSS, and JavaScript. No backend or music is used.

## What's included
- Hero / welcome section for Mero
- Polaroid-style memory cards with image lightbox
- Click-to-open personal letter
- Live countdown to the next March 8 anniversary
- Responsive mobile layout
- Subtle floating hearts

## 1. Add your photos
Put your photos in the `images` folder and name them:
- `memory-01.jpg`
- `memory-02.jpg`
- ...
- `memory-10.jpg`

The JavaScript is configured for 10 photos. You can add up to 15 by adding more objects to the `memories` array in `script.js` and using filenames `memory-11.jpg` through `memory-15.jpg`.

If your images are PNG or WEBP, update the file extension in `script.js` to match. Keep filenames simple and avoid spaces.

## 2. Personalize the captions and letter
- Edit the `memories` array near the top of `script.js` to replace the sample titles and captions with real memories.
- Open `index.html` and edit the text inside `<article id="loveLetter">` to make the letter sound like you.
- Search `Mero` in `index.html` if you want to change how her name is displayed.

## 3. Preview locally
Double-click `index.html` to open it in a browser. If your browser restricts anything when opened as a local file, use VS Code with the Live Server extension or run a simple local web server.

## 4. Publish using GitHub Pages
1. Sign in at https://github.com/.
2. Click **New repository**. Name it `mero-anniversary`.
3. For the simplest GitHub Free setup, set the repository to **Public**. Remember: a public repository and its GitHub Pages website can be viewed by other people.
4. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder. The `index.html` file must be at the repository root.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose branch **main** and folder **/(root)**, then click **Save**.
8. Wait a few minutes and refresh the Pages screen. GitHub will show the published URL, usually `https://YOUR-USERNAME.github.io/mero-anniversary/`.
9. Open the link on your phone to test it before sending it to Mero.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Privacy note
GitHub Pages on a public repository is public. Don't upload private photos, identifying information, or a letter you wouldn't want other people to read. This is a static site; the letter button is a reveal effect, not password protection.

## Change the anniversary date
The countdown is already set to March 8, 2025. In `script.js`, the month uses JavaScript's zero-based numbering:
- `anniversaryMonth = 2` means March
- `anniversaryDay = 8`
- `anniversaryYear = 2025`

The code automatically counts down to the next March 8.
