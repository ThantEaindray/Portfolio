# Thant Eaindray portfolio

A three-page software development portfolio with light and dark themes, ready to share as a ZIP. It includes the website, a local preview server, and the PDF resume used by the download button.

The shared navigation links to three pages:

- **About** (`index.html`): personal introduction, education, recognition, and contact details.
- **Projects** (`projects.html`): GitMart, Magical Academia, HDB resale price analysis, technical skills, and certifications.
- **Clubs** (`clubs.html`): student clubs, leadership, event organisation, and community involvement.

The current page is highlighted in the navigation. Each page also links to the other two near its bottom, and **Get in touch** in the footer opens the contact section on the About page.

The website uses HTML, CSS, and JavaScript. The theme toggle follows the device preference initially and remembers a visitor's selection. The preview server uses built-in Node.js modules. There are no npm packages to install, no build step, and no API keys or accounts to configure.

## 1. Extract the ZIP

Save the ZIP to your computer and extract all its contents:

- **Windows:** right-click the ZIP, choose **Extract All**, then open the extracted folder.
- **macOS:** double-click the ZIP, then open the extracted folder.
- **Linux:** use your archive manager to extract the ZIP, then open the extracted folder.

Inside, find the `thant-eaindray-portfolio` folder containing `serve.mjs`, `index.html`, and this `README.MD`. Depending on your extraction tool, you may need to open an extra enclosing folder first. Run the following commands from the folder containing `serve.mjs`.

Extract the files before starting the server; do not run them from inside the ZIP viewer.

## 2. Install Node.js

Install a currently supported **LTS** version of Node.js from the [official Node.js download page](https://nodejs.org/en/download). Choose the installer or installation instructions for your operating system. This project requires Node.js 20 or newer; a current LTS version is recommended.

After installing, close and reopen your terminal. Check that Node.js is available:

```sh
node --version
```

You should see a version number, such as `v22.x.x` or a newer version. If Node.js is already installed and meets the requirement, you can skip reinstalling it.

## 3. Open a terminal in the project folder

- **Windows:** open the folder containing `serve.mjs` in File Explorer, type `powershell` into the address bar, and press Enter.
- **macOS or Linux:** open Terminal, type `cd ` followed by the full path to the extracted project folder in quotes, then press Enter.

For example, replace the path below with the actual location on your computer:

```sh
cd "/path/to/thant-eaindray-portfolio"
```

Check that you are in the right folder: run `dir` in Windows PowerShell or `ls` in macOS/Linux Terminal. The output should include `serve.mjs`, `index.html`, `styles.css`, and `package.json`.

## 4. Start the website

Run:

```sh
node serve.mjs
```

You should see:

```text
Portfolio preview: http://127.0.0.1:4173
Press Ctrl+C to stop. Refresh the page after editing a file.
```

Open **http://127.0.0.1:4173** in a browser on the same computer. Leave the terminal open while viewing the website. To stop the server, return to that terminal and press **Ctrl+C**. Run `node serve.mjs` again whenever you want to view it later.

If npm is available, `npm run dev` or `npm start` also starts the same server. You do not need to run `npm install`.

## 5. Check that it works

- The homepage should show Thant Eaindray's introduction, education, and contact details.
- Use **About**, **Projects**, and **Clubs** in the header to move between pages. Check that the current page is highlighted and that each page can be opened directly.
- The Projects page should show GitMart, Magical Academia, HDB resale price analysis, skills, and certifications.
- The Clubs page should show leadership, club activities, events, volunteering, and a seven-photo gallery with previous and next buttons.
- The links near the bottom of each page should open the other pages; **Get in touch** should open the contact section on About.
- The resume download should download `Thant_Eaindray_Resume.pdf`.
- The profile photo, project screenshots, and club photos should appear. Both repository links and Magical Academia's video demo should open.
- Resize the browser window to see the responsive layout.

## Troubleshooting

### "node is not recognized" or "command not found: node"

Install Node.js using the official link above, then close and reopen the terminal. On Windows, keep the installer's default option to add Node.js to PATH. Run `node --version` again before starting the site.

### "Cannot find module ... serve.mjs" or a missing package.json error

Your terminal is in the wrong folder, or the ZIP was not fully extracted. Navigate to the extracted folder containing `serve.mjs` and `package.json`, then run `node serve.mjs` again.

### "EADDRINUSE", "EACCES", or port 4173 is unavailable

Another process may be using the port, or your computer may reserve it. If you already have a copy of the portfolio server running, stop that copy with Ctrl+C. Alternatively, use another port:

**Windows PowerShell:**

```powershell
$env:PORTFOLIO_PORT = "4174"
node serve.mjs
```

**macOS or Linux:**

```sh
PORTFOLIO_PORT=4174 node serve.mjs
```

Then open **http://127.0.0.1:4174**. Use the port printed by the server. On Windows, the changed port remains set for the current terminal session; close and reopen the terminal to return to the default, or set `PORTFOLIO_PORT` to `4173`.

### The browser says it cannot connect

Make sure the terminal still shows a running server and has not returned to its command prompt. Start it again if needed. Open the exact `http://127.0.0.1:...` address printed in the terminal, including the port. Use HTTP for this local preview.

### Changes do not appear

Save the edited file, then refresh the browser. This preview does not reload automatically. Changes to `serve.mjs` require stopping and restarting the server.

### The resume download does not work

Keep `resume.pdf` beside `serve.mjs` with that exact filename.

## Included files

```text
thant-eaindray-portfolio/
  README.MD                         Setup, running, and editing instructions
  index.html                        Personal introduction, education, and contact
  projects.html                     Technical projects, skills, and certifications
  clubs.html                        Clubs, leadership, and community involvement
  styles.css                        Styling and responsive layouts
  gallery.js                        Clubs photo gallery controls
  theme.js                          Light and dark theme toggle
  favicon.svg                       Browser tab icon
  images/                           Profile, project, and club photos
    profile.jpeg                    Profile photo
    gitmart.jpeg, magi.jpeg, datanalysis.jpeg
                                    Project screenshots and chart
    classbonding.jpeg, gryphons.jpeg, wro-volunteering.jpeg
                                    Club activity photos
    1.jpeg – 7.jpeg                 Clubs photo gallery
  serve.mjs                         Local HTTP preview server
  package.json                      Optional npm start/dev commands
  resume.pdf                        Downloadable resume
```

## Editing the website and replacing placeholders

- **Personal introduction and contacts:** edit `index.html` in a text editor.
- **Technical projects, skills, and certifications:** edit `projects.html`.
- **Clubs, leadership, and volunteering:** edit `clubs.html`.
- **Navigation:** the header and footer are included in all three HTML files. Keep shared labels and links consistent when editing them. Each header uses `aria-current="page"` only on its own page's navigation link.
- **Colours, fonts, and layout:** edit `styles.css`.
- **Headshot:** replace `images/profile.jpeg`, or update its filename and alt text in `index.html` and add the new file to the server routes.
- **Project images:** replace `images/gitmart.jpeg`, `images/magi.jpeg`, or `images/datanalysis.jpeg`, or update their filenames and alt text in `projects.html` and add the new files to the server routes.
- **Club photos:** replace the relevant file in `images/`, or update its filename and alt text in `clubs.html` and add the new file to the server routes.
- **Photo gallery:** replace `images/1.jpeg` through `images/7.jpeg`, or edit the slides and their alt text in `clubs.html`. Update the gallery image routes in `serve.mjs` if you change the filenames or number of photos.
- **Project links:** update the repository and demo URLs in `projects.html`.
- **Resume:** replace `resume.pdf` while keeping its filename, or update the matching route and download filename in `serve.mjs` and the download links in all three HTML files.

The local server serves only the explicitly listed routes in `serve.mjs`. If you add an image, also add it to the `routes` map. For example, to serve `images/headshot.jpg`, add this entry:

```js
['/images/headshot.jpg', ['images/headshot.jpg', 'image/jpeg']],
```

Use `src="images/headshot.jpg"` in the HTML, then restart the server. Add similar entries for any project screenshots, using the correct MIME type, such as `image/png` for PNG files.

## Sharing and hosting

Send the ZIP to the recipient and ask them to follow this README. The local `127.0.0.1` address works only on the computer running the server; sending someone that address does not share your running website.

The website has not been published online. For a future static-host deployment, upload `index.html`, `projects.html`, `clubs.html`, `styles.css`, `gallery.js`, `theme.js`, `favicon.svg`, `resume.pdf`, and the complete `images` folder at the site's root. Keep all three HTML files together so their navigation links work.
