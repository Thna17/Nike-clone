# Convention Guide

## Project Overview
This project involves creating a web clone of Nike's website, focusing on developing core front-end skills using modern web technologies. The goal is to create a professional, responsive website that mirrors the original Nike site, providing a rich learning experience and a valuable portfolio piece.

## Project Objective

1. **Create Prototype**
   - Develop wireframes, UI screens, and mockups to visualize the website's layout and functionality before actual development.

2. **Practice and Development Code Skills**
   - Enhance proficiency in HTML, CSS, JavaScript, and web development frameworks through hands-on project experience.

3. **Understand Responsive Design**
   - Learn and apply responsive design principles to ensure the website functions well on various devices, including desktops, tablets, and smartphones.

4. **Build a Portfolio Piece**
   - Create a high-quality project that can be showcased in a professional portfolio to demonstrate skills to potential employers or clients.

5. **Master Component-Based Development**
   - Gain experience in creating reusable UI components, making the development process more efficient and organized.

## Scope

- **Homepage**
- **New & Featured Page**
- **Men Page**
- **Women Page**
- **Kids Page**

## Timeline

1. **Plan and Research (Convention Guide): May 14, 2024 - May 15, 2024**
   - Define project scope and requirements.
   - Conduct research on Nike's website design and functionality.

2. **Design: May 16, 2024 - May 19, 2024**
   - May 16 - May 17: Create wireframes for the website layout.
   - May 17 - May 18: Develop UI screens and mockups, incorporating Nike's branding elements.

3. **Development: May 20, 2024 - May 27, 2024**
   - Implement the website using HTML, CSS, JavaScript, and Vue with Vite.
   - Integrate Tailwind CSS and Bootstrap for styling.

4. **Testing: May 28, 2024**
   - Conduct thorough testing of the website to identify and fix any bugs or issues.

5. **Deployment: May 29, 2024 - May 30, 2024**
   - Finalize the website, implement any last-minute changes or updates, and deploy to the live server.

## Resources Required

### Design Tools:
- Figma

### Development Tools:
- HTML
- CSS
- JavaScript
- Tailwind CSS

### Testing Tools:
- BrowserStack

### Hosting:
- GitLab

## Folder Structure

```
project-root/
│
├── assets/
│   ├── fonts/
│   │   └── (font files)
│   ├── images/
│   │   └── (image files)
│   └── videos/
│       └── (video files)
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── components/
│   ├── header/
│   │   ├── header.html
│   │   └── header.css
│   │
│   ├── footer/
│   │   ├── footer.html
│   │   └── footer.css
│   │
│   └── ...
│
├── pages/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── index.html

```

### Folder and File Description:

- **index.html**: The main HTML file.
- **src/**: Contains all the source code for the website.
  - **assets/**: Stores images and styles.
    - **images/**: Directory for images..
- **components/**: Directory for Vue components.
    - **Header/**: Contains header component files.
        - **header.js**: JavaScript file related to the header.
    - **Footer/**: Contains footer component files.
        - **footer.js**: JavaScript file related to the footer.
- **pages/**: Directory for Vue page components.
    - **Home/**: Contains the Home page component.
    - **Product/**: Contains the Product page component.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## Style Guides

### Color Scheme:
#### Primary Colors:
- **nike-black**: #000000 (Black)
- **nike-white**: #FFFFFF (White)

#### Background Colors:
- **nike-bg-light**: #F9F9F9 (Light Gray)
- **nike-bg-dark**: #333333 (Dark Gray)

#### Text Colors:
- **nike-text-white**: #FFFFFF (White)
- **nike-text-charcoal**: #111111 (Dark Charcoal Gray)
- **nike-text-warm**: #757575 (Warm Gray)
- **nike-text-orange-red**: #9E3500 (Orange-red)


### Fonts:
- Futura Condensed Extra Bold
- HelveticaNowText-Medium
- HelveticaNowText-Regular

### Naming Conventions in Program:
- **JavaScript**: camelCase for variable and function names.
- **HTML and CSS**: kebab-case for class and ID names.

## Version Control

### Issue Naming Convention:
- **Issue Naming**: The issue name should be followed by a description of the issue at hand.

### Merge Request:
- **Title**: Include the issue name in the title.
- **Description**: Include a description of the issue and how it should be fixed. Example: `homepage: Create the homepage with responsiveness`.

### Commit Message:
- **Commit Prefixes**:
  - **Init**: When initializing the workspace on a new branch.
  - **Add**: When adding new functionality on a branch.
  - **Finish**: When the entire branch is finished (the last commit before merging the branch).
  - **Fix**: When fixing something on the bugfix/hotfix branch.
  - **Merge**: When merging your branch into a parent branch.

---

**Name**: Hong Than Brathna  
**Created Date**: May 15, 2024