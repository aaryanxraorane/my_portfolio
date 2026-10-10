
const output = document.getElementById("output");
const input = document.getElementById("commandInput");
const drawer = document.getElementById("drawer");
const drawerContent = document.getElementById("drawer-content");
const glow = document.querySelector(".cursor-glow");

const content = {
  about: {
    label: "Get-About",
    title: "About Aaryan",
    html: `
      <p>
        I’m a computer engineering undergraduate with an aspiring interest
        in cybersecurity, particularly security operations, threat detection
        and digital forensics.
      </p>
      <p>
        I learn through hands-on labs, cybersecurity competitions and
        practical projects. I am currently building skills in security
        monitoring, incident investigation and security automation.
      </p>
      <h3>Career Target</h3>
      <p>SOC Analyst · Cybersecurity Analyst · Security Analyst</p>
      <h3>Current Focus</h3>
      <div class="drawer-tags">
        <span>SOC</span>
        <span>Threat Detection</span>
        <span>Digital Forensics</span>
        <span>IAM</span>
        <span>Security Automation</span>
      </div>
    `
  },

  projects: {
    label: "Get-Projects",
    title: "Projects",
    html: `
      <p class="terminal-label">
        SECURITY ENGINEERING / PRACTICAL PROJECTS
      </p>

      <div class="project-index">
        <div class="project-card">
          <div class="project-number">01</div>
          <div class="project-card-content">
            <div class="project-card-header">
              <h3>Keycloak IAM on Application</h3>
              <span class="project-status">ENTERPRISE IAM</span>
            </div>

            <p>
              Centralized Identity & Access Management implementation using
              Keycloak, SAML 2.0, ADFS and Active Directory.
            </p>

            <div class="drawer-tags">
              <span>KEYCLOAK</span>
              <span>SAML 2.0</span>
              <span>ADFS</span>
              <span>ACTIVE DIRECTORY</span>
              <span>UBUNTU</span>
            </div>

            <button class="project-view-btn" data-project="keycloak">
              [ VIEW PROJECT ]
            </button>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">02</div>
          <div class="project-card-content">
            <div class="project-card-header">
              <h3>Cybersecurity Monitoring Dashboard</h3>
              <span class="project-status">SOC MONITORING</span>
            </div>

            <p>
              Unified cybersecurity monitoring dashboard integrating
              enterprise security sources and patch-management data.
            </p>

            <div class="drawer-tags">
              <span>NODE.JS</span>
              <span>EXPRESS</span>
              <span>CHART.JS</span>
              <span>MANAGEENGINE</span>
              <span>CISCO ATP</span>
            </div>

            <button class="project-view-btn" data-project="dashboard">
              [ VIEW PROJECT ]
            </button>
          </div>
        </div>
      </div>

      <p class="terminal-label project-hint">
        Select a project to inspect implementation details.
      </p>
    `
  },

  events: {
    label: "Get-CyberEvents",
    title: "Cybersecurity Events",
    html: `
      <h3>College CyberCell — CTF Learning</h3>

      <p>
        Practiced CTF challenges and controlled security problem solving
        across Web Security, Cryptography, Linux, Networking, OSINT and
        cybersecurity fundamentals.
      </p>

      <p>
        Developed practical exposure to reconnaissance, vulnerability
        analysis, investigation and exploitation in controlled environments.
      </p>

      <h3>UCSI University — Malaysia</h3>

      <p>
        Explored AI-driven cybersecurity, ethical AI, data privacy and
        healthcare technology.
      </p>

      <p>
        Visited UCSI Hospital and observed how technology and programming
        support MRI, X-Ray and hospital management systems.
      </p>

      <div class="event-evidence">
        <a href="assets/events/usci.png" target="_blank" rel="noopener">
          <img
            src="assets/events/usci.png"
            alt="UCSI Cybersecurity Immersion Program"
          >
          <span>UCSI Cybersecurity Immersion Program ↗</span>
        </a>
      </div>
    `
  },

  learning: {
    label: "Get-Learning",
    title: "Practical Learning",
    html: `
      <div class="drawer-tags">
        <span>TOP 4% TRYHACKME</span>
        <span>100+ ROOMS</span>
        <span>100% TP IDENTIFICATION — SOC SIMULATOR</span>
      </div>

      <h3>Areas Covered</h3>
      <p>
        SOC Fundamentals · Networking · Linux · Windows · Web Security ·
        Digital Forensics · Threat Detection
      </p>

      <h3>TryHackMe Profile</h3>
      <p>
        <a
          href="https://tryhackme.com/p/aaryanraorane"
          target="_blank"
          rel="noopener"
        >
          TryHackMe / aaryanraorane ↗
        </a>
      </p>

      <h3>Learning Evidence</h3>
      <div class="evidence-gallery">
        <a href="assets/learning/thm1.png" target="_blank" rel="noopener">
          <img
            src="assets/learning/thm1.png"
            alt="TryHackMe learning progress screenshot"
          >
          <span>TryHackMe Progress ↗</span>
        </a>

        <a href="assets/learning/thm2.png" target="_blank" rel="noopener">
          <img
            src="assets/learning/thm2.png"
            alt="TryHackMe SOC learning screenshot"
          >
          <span>SOC Learning Evidence ↗</span>
        </a>
      </div>
    `
  },

  certifications: {
    label: "Get-Certifications",
    title: "Certifications & Learning",
    html: `
      <p class="terminal-label">
        CREDENTIALS / PROFESSIONAL LEARNING
      </p>

      <div class="cert-card">
        <h3>01 · Google Cybersecurity Professional Certificate</h3>
        <p>
          Cybersecurity Fundamentals · SIEM · Linux · Python · Networks ·
          Incident Response
        </p>
        <div class="cert-actions">
          <a
            href="assets/certificates/google-cybersecurity.pdf"
            target="_blank"
            rel="noopener"
          >
            [ VIEW CERTIFICATE ↗ ]
          </a>
        </div>
      </div>

      <div class="cert-card">
        <h3>02 · CCNA: Introduction to Networks</h3>
        <p>
          Networking Fundamentals · TCP/IP · OSI Model · Routing ·
          Switching · IP Addressing
        </p>
        <div class="cert-actions">
          <a
            href="assets/certificates/ccna.pdf"
            target="_blank"
            rel="noopener"
          >
            [ VIEW CERTIFICATE ↗ ]
          </a>
        </div>
      </div>

      <div class="cert-card">
        <h3>03 · Deloitte Australia — Cyber Job Simulation</h3>
        <p>
          Cyber Risk · Incident Response · Log Analysis · Threat Investigation
        </p>
        <div class="cert-actions">
          <a
            href="assets/certificates/deloitte-cyber.pdf"
            target="_blank"
            rel="noopener"
          >
            [ VIEW CERTIFICATE ↗ ]
          </a>
        </div>
      </div>

      <div class="cert-card">
        <h3>04 · Introduction to Splunk</h3>
        <p>
          SIEM · Log Analysis · Search & Querying · Security Monitoring
        </p>
        <div class="cert-actions">
          <a
            href="assets/certificates/splunk.pdf"
            target="_blank"
            rel="noopener"
          >
            [ VIEW CERTIFICATE ↗ ]
          </a>
        </div>
      </div>

      <p class="terminal-label" style="margin-top:25px;">
        Certificates open as original PDF documents in a new tab.
      </p>
    `
  },

  contact: {
    label: "Get-Contact",
    title: "Contact",
    html: `
      <p class="terminal-label">ESTABLISH CONNECTION</p>

      <h3>Email</h3>
      <p>
        <a href="mailto:aaryanraorane0710@gmail.com">
          aaryanraorane0710@gmail.com
        </a>
      </p>

      <h3>GitHub</h3>
      <p>
        <a
          href="https://github.com/aaryanxraorane"
          target="_blank"
          rel="noopener"
        >
          github.com/aaryanxraorane ↗
        </a>
      </p>

      <h3>LinkedIn</h3>
      <p>
        <a
          href="https://www.linkedin.com/in/aaryan-raorane-50189628a"
          target="_blank"
          rel="noopener"
        >
          linkedin.com/in/aaryan-raorane-50189628a ↗
        </a>
      </p>
    `
  }
};

const projectDetails = {
  keycloak: {
    label: "Get-Keycloak",
    title: "Project 01: Keycloak IAM",
    html: `
      <p class="terminal-label">
        ENTERPRISE IDENTITY & ACCESS MANAGEMENT
      </p>

      <div class="drawer-tags">
        <span>KEYCLOAK</span>
        <span>SAML 2.0</span>
        <span>ADFS</span>
        <span>ACTIVE DIRECTORY</span>
        <span>UBUNTU</span>
        <span>JDK 21</span>
      </div>

      <h3>What was it?</h3>
      <p>
        Implemented Keycloak as a centralized Identity & Access Management
        layer, integrating an existing application with an enterprise
        authentication environment through SAML 2.0 and ADFS.
      </p>

      <h3>Why?</h3>
      <p>
        To secure the existing application and establish a centralized
        approach to authentication and access.
      </p>

      <h3>What I did</h3>
      <ul>
        <li>Deployed and configured Keycloak on Ubuntu Server.</li>
        <li>Configured realms and SAML federation with ADFS.</li>
        <li>Worked with SAML metadata, Entity ID, ACS, SLO and NameID.</li>
        <li>Transitioned local development to a UAT environment.</li>
        <li>Configured Keycloak as a centralized authentication layer.</li>
      </ul>

      <h3>Authentication Flow</h3>
      <p>Application → Keycloak → ADFS → Active Directory</p>

      <h3>Outcome</h3>
      <p>
        Established a foundation for centralized and scalable enterprise SSO.
      </p>
    `
  },

  dashboard: {
    label: "Get-CybersecurityDashboard",
    title: "Project 02: Cybersecurity Monitoring Dashboard",
    html: `
      <p class="terminal-label">
        UNIFIED SECURITY OPERATIONS MONITORING
      </p>

      <div class="drawer-tags">
        <span>NODE.JS</span>
        <span>EXPRESS</span>
        <span>CHART.JS</span>
        <span>MANAGEENGINE</span>
        <span>CISCO ATP</span>
        <span>SOPHOS</span>
        <span>CLOUDFLARE</span>
      </div>

      <h3>What was it?</h3>
      <p>
        Built a unified cybersecurity monitoring dashboard designed to bring
        security and infrastructure signals from multiple enterprise systems
        into a single operational view.
      </p>

      <h3>Why?</h3>
      <p>
        To reduce the need to switch between separate security consoles and
        provide a centralized view of patch status, security events and
        infrastructure protection.
      </p>

      <h3>What I did</h3>
      <ul>
        <li>
          Designed an executive security overview with KPI cards and
          operational drilldowns.
        </li>
        <li>
          Integrated the ManageEngine Patch Management API for patch
          and system compliance data.
        </li>
        <li>
          Worked with Cisco ATP, Sophos Firewall and Cloudflare data
          sources as part of the monitoring architecture.
        </li>
        <li>
          Built Node.js and Express backend routes to retrieve,
          process and transform security data.
        </li>
        <li>Implemented dashboard visualizations using Chart.js.</li>
        <li>
          Handled API pagination, rate limiting and controlled request
          concurrency while working with large patch datasets.
        </li>
      </ul>

      <h3>Architecture</h3>
      <p>
        Security Sources → Backend APIs → Data Processing → Dashboard
      </p>

      <h3>Security Sources</h3>
      <div class="drawer-tags">
        <span>ManageEngine Patch Management</span>
        <span>Cisco ATP</span>
        <span>Sophos Firewall</span>
        <span>Cloudflare</span>
      </div>

      <h3>Key Focus</h3>
      <div class="drawer-tags">
        <span>SECURITY MONITORING</span>
        <span>PATCH COMPLIANCE</span>
        <span>API INTEGRATION</span>
        <span>DATA VISUALIZATION</span>
        <span>SOC OPERATIONS</span>
      </div>

      <h3>Technical Challenges</h3>
      <ul>
        <li>Processing large volumes of patch-management system records.</li>
        <li>Managing API pagination across multiple pages of security data.</li>
        <li>Handling API rate limiting and HTTP 429 responses.</li>
        <li>
          Controlling request concurrency to avoid overloading external APIs.
        </li>
        <li>
          Structuring data from different security platforms into a
          unified dashboard format.
        </li>
      </ul>

      <h3>Outcome</h3>
      <p>
        Developed a centralized security operations dashboard prototype
        demonstrating how multiple enterprise security sources can be
        presented through a single monitoring interface.
      </p>
    `
  }
};

function openDrawer(key) {
  const item = content[key];

  if (!item) {
    return;
  }

  drawerContent.innerHTML = `
    <div class="terminal-label">
      PS C:\\Users\\Aaryan&gt; ${item.label}
    </div>
    <h2>${item.title}</h2>
    ${item.html}
  `;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  attachProjectButtons();
}

function openProject(projectKey) {
  const item = projectDetails[projectKey];

  if (!item) {
    return;
  }

  drawerContent.innerHTML = `
    <div class="terminal-label">
      PS C:\\Users\\Aaryan&gt; ${item.label}
    </div>
    <h2>${item.title}</h2>
    ${item.html}

    <div class="project-back">
      <button class="project-back-btn" data-back-projects>
        ← BACK TO PROJECTS
      </button>
    </div>
  `;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document
    .querySelector("[data-back-projects]")
    ?.addEventListener("click", () => openDrawer("projects"));
}

function attachProjectButtons() {
  document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
      openProject(button.dataset.project);
    });
  });
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function execute(raw) {
  const command = raw.trim().toLowerCase().replace(/^get-/, "");

  if (!command) {
    return;
  }

  if (command === "help") {
    appendCommand(
      raw,
      "Commands: home · about · projects · events · learning · certifications · contact · keycloak · dashboard · clear"
    );
    return;
  }

  if (command === "clear") {
    closeDrawer();

    output.innerHTML = `
      <div class="boot-line">
        <span class="prompt">PS C:\\Users\\Aaryan&gt;</span>
        <span class="cmd">Clear-Host</span>
      </div>

      <div class="response" style="margin-top:20px;">
        <span class="dim">Terminal cleared.</span>
        <br><br>
        <span class="dim">Type</span>
        <span class="prompt">home</span>
        <span class="dim">to return to the portfolio home.</span>
        <br>
        <span class="dim">Type</span>
        <span class="prompt">help</span>
        <span class="dim">to view available commands.</span>
      </div>
    `;
    return;
  }

  if (command === "home") {
    closeDrawer();
    window.location.reload();
    return;
  }

  if (command === "keycloak") {
    appendCommand(raw, "Loading Project 01: Keycloak IAM ...");
    openProject("keycloak");
    return;
  }

  if (
    command === "cybersecuritydashboard" ||
    command === "dashboard"
  ) {
    appendCommand(
      raw,
      "Loading Project 02: Cybersecurity Monitoring Dashboard ..."
    );
    openProject("dashboard");
    return;
  }

  if (content[command]) {
    appendCommand(raw, `Loading ${content[command].title} ...`);
    openDrawer(command);
    return;
  }

  appendCommand(
    raw,
    `Get-Command : The term '${raw}' is not recognized. Try 'help'.`
  );
}

function appendCommand(raw, message) {
  const line = document.createElement("p");
  line.className = "response";

  line.innerHTML = `
    <span class="prompt">PS C:\\Users\\Aaryan&gt;</span>
    ${escapeHTML(raw)}
    <br>
    <span class="dim">${escapeHTML(message)}</span>
  `;

  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function escapeHTML(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (input && output && drawer && drawerContent) {
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      execute(input.value);
      input.value = "";
      input.removeAttribute("data-suggestion");
    }
  });

  document.querySelectorAll("[data-command]").forEach(button => {
    button.addEventListener("click", () => {
      execute(button.dataset.command);
    });
  });

  document.querySelectorAll("[data-close]").forEach(element => {
    element.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      drawer.classList.contains("open")
    ) {
      closeDrawer();
    }
  });

  document.querySelector(".terminal")?.addEventListener("click", event => {
    if (
      event.target.tagName !== "BUTTON" &&
      event.target.tagName !== "A" &&
      event.target.tagName !== "INPUT"
    ) {
      input.focus();
    }
  });

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();

    if (!value) {
      input.removeAttribute("data-suggestion");
      return;
    }

    const commands = [
      "help",
      "about",
      "projects",
      "keycloak",
      "cybersecuritydashboard",
      "dashboard",
      "events",
      "learning",
      "certifications",
      "contact",
      "clear",
      "home"
    ];

    const match = commands.find(command => command.startsWith(value));

    if (match && match !== value) {
      input.setAttribute("data-suggestion", match);
    } else {
      input.removeAttribute("data-suggestion");
    }
  });
}

document.addEventListener("mousemove", event => {
  if (!glow) {
    return;
  }

  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const minimizeButton = document.getElementById("minimizeHint");

if (minimizeButton) {
  minimizeButton.addEventListener("click", () => {
    document.querySelector(".terminal-output")?.classList.toggle("compact");
  });
}

window.addEventListener("load", () => {
  if (input) {
    setTimeout(() => input.focus(), 500);
  }
});
