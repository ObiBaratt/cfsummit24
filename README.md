# Adobe ColdFusion Summit October 1st, 2024

## Comparing JavaScript and JQuery
- Modern JavaScript can do most of what JQuery can
- See the slides: at `https://docs.google.com/presentation/d/1Nr1TFWfgDLqVPWaG3Cj0eHU2TLI0kJZZJdsoUf__CvQ/`

## Using the App
- Go to `https://jqtojs.netlify.app/`
- Click the `Ready to get started?`
- From there you'll hit the `0` key to trigger the next function to run.
- On the "Add a Dog" part, you'll need to add at least one dog on each side.

## Running it locally
- Install the required module to run locally: `live-server` with `pnnpm i`
- Start the app with `pnpm start`

### App Structure
```
/
├── src/
│   ├── fade/ 
│   │   └── index.js        Custom JS fade in / out method
│   ├── scripts/            
│   │   ├── jsScripts.js    The JavaScript app functions
│   │   ├── jsScripts.js    The jQuery app functions
│   │   └── scripts.js      Main App control scripts in plain JavaScript
│   ├── slide/              
│   │   ├── index.js        Custom JS slide in / out method with necessary styles
│   │   └── slide.css
│   └── textSearch/         
│       └── index.js        Unused custom element search by text
├── styles/
│   └── styles.css          General App styles
├── .gitignore
├── README.md               Its this? How meta.
├── index.html              I guess its a single page app?
├── linkedinQR.png          My LinkedIn QR code 
├── package.json            Only necessary to run as a server locally via live-server
└── pnpm-lock.yaml          I used pnpm to do local things
```

### Warning
- It's kinda buggy, and was designed to be operated by me, on stage, from my laptop (where it worked great!)
- The timeouts aren't the same length for... some reason? Probably not enough coffee when I was adding the finishing touches.
- The custom JS functions `slide` and `fade` I wrote worked for this use case, but likely need a bit more work to be suitable for real projects.
