const STORAGE_KEY = "casegrid:mvp:v1";

const defaultState = {
  session: null,
  selectedCaseId: "CG-2025-0417",
  selectedEvidenceId: "EV-00026",
  selectedLeadId: "L-0039",
  reportGeneratedAt: null,
  lastPdfExportAt: null,
  lastPdfFileName: "",
  ui: {
    modal: null,
    evidenceQuery: "",
    evidenceFilter: "all",
    activeTab: "summary",
    reportStatus: "Draft"
  },
  users: [
    { id: "USR-001", name: "A. Ramirez", role: "Analyst", clearance: "Level 2", access: "Read / Write" },
    { id: "USR-002", name: "J. Morales", role: "Evidence Tech", clearance: "Level 2", access: "Evidence Upload" },
    { id: "USR-003", name: "T. Shaw", role: "Forensic Analyst", clearance: "Level 3", access: "Read / Write" },
    { id: "USR-004", name: "K. Rios", role: "Admin", clearance: "Level 4", access: "Admin" }
  ],
  cases: [
    {
      id: "CG-2025-0417",
      title: "Operation Harbor Signal",
      type: "Cybercrime",
      taskForce: "Harbor TF",
      opened: "2025-04-17",
      owner: "Det. A. Ramirez",
      sensitivity: "Restricted",
      agencies: ["FBI", "Harbor PD", "State Cyber Unit"],
      legalAuthority: {
        id: "W-2025-0417",
        type: "Warrant",
        status: "Warrant active",
        issued: "2025-05-17T14:32:00",
        expires: "2025-05-31T23:59:00",
        issuingAuthority: "Judge L. Whitaker",
        scope: "Electronic devices, records, and connected cloud accounts"
      },
      members: [
        { name: "A. Ramirez", role: "Analyst", access: "Read / Write" },
        { name: "J. Morales", role: "Evidence Tech", access: "Evidence Upload" },
        { name: "T. Shaw", role: "Forensic Analyst", access: "Read / Write" }
      ],
      evidence: [
        {
          id: "EV-00027",
          name: "IMG_4587.JPG",
          type: "Image",
          size: "8.7 MB",
          collected: "2025-05-18",
          uploaded: "2025-05-18",
          uploader: "J. Morales",
          hash: "7f3cb1d6b631d49c7d8121fdc36f42bb1f1f628c8a11e9be9caebf8b3a491e",
          status: "SHA-256 verified",
          grade: "Admissible-grade",
          legalAuthorityId: "W-2025-0417",
          linkedLeadId: "L-0043",
          storage: "vault://cases/CG-2025-0417/evidence/EV-00027",
          custody: [
            { action: "Collected", at: "2025-05-18T09:13:00", by: "Det. J. Morales (1234)", detail: "Location: Pier 6 camera export" },
            { action: "Verified", at: "2025-05-18T11:21:00", by: "System", detail: "SHA-256 verification successful" }
          ]
        },
        {
          id: "EV-00026",
          name: "Phone_Extraction.zip",
          type: "Archive",
          size: "2.4 GB",
          collected: "2025-05-17",
          uploaded: "2025-05-17",
          uploader: "J. Morales",
          hash: "c2b19d7f775439ce11f6f4e2c9466c2d5f80a9c72f01ab396bd0b65e7dc9d7f1",
          status: "SHA-256 verified",
          grade: "Admissible-grade",
          legalAuthorityId: "W-2025-0417",
          linkedLeadId: "L-0039",
          storage: "vault://cases/CG-2025-0417/evidence/EV-00026",
          custody: [
            { action: "Collected", at: "2025-05-17T08:14:00", by: "Det. J. Morales (1234)", detail: "Location: 123 Harbor Way, Dock 3" },
            { action: "Transferred", at: "2025-05-17T10:02:00", by: "Det. J. Morales (1234)", detail: "To Forensic Unit CU-17 for examination" },
            { action: "Received", at: "2025-05-17T11:15:00", by: "Forensic Analyst T. Shaw (5678)", detail: "Location: Forensics Lab 2A" },
            { action: "Examined", at: "2025-05-17T13:47:00", by: "Forensic Analyst T. Shaw (5678)", detail: "Tool: Cellebrite UFED 4PC; extraction completed" },
            { action: "Verified", at: "2025-05-17T13:50:00", by: "System", detail: "SHA-256 verification successful" }
          ]
        },
        {
          id: "EV-00025",
          name: "Call_Log_0417.pdf",
          type: "Document",
          size: "1.1 MB",
          collected: "2025-05-17",
          uploaded: "2025-05-17",
          uploader: "A. Ramirez",
          hash: "9a7d911b64d6655aa11ab67cf4f681ad89420d074db413ef44d76a3424d111bb",
          status: "SHA-256 verified",
          grade: "Admissible-grade",
          legalAuthorityId: "W-2025-0417",
          linkedLeadId: "L-0039",
          storage: "vault://cases/CG-2025-0417/evidence/EV-00025",
          custody: [
            { action: "Collected", at: "2025-05-17T16:10:00", by: "A. Ramirez", detail: "Carrier return packet" },
            { action: "Verified", at: "2025-05-17T16:13:00", by: "System", detail: "SHA-256 verification successful" }
          ]
        },
        {
          id: "EV-00024",
          name: "Surveillance_0516.mp4",
          type: "Video",
          size: "470 MB",
          collected: "2025-05-16",
          uploaded: "2025-05-16",
          uploader: "K. Rios",
          hash: "d4e8884c3be31d19bd119cd89c8d3f01a1a7cc8d54cc49c005f7f1c133e884cc",
          status: "SHA-256 verified",
          grade: "Intelligence-only",
          legalAuthorityId: "",
          linkedLeadId: "L-0036",
          storage: "vault://cases/CG-2025-0417/evidence/EV-00024",
          custody: [
            { action: "Collected", at: "2025-05-16T19:35:00", by: "K. Rios", detail: "Business camera voluntary copy" },
            { action: "Verified", at: "2025-05-16T19:44:00", by: "System", detail: "SHA-256 verification successful" }
          ]
        },
        {
          id: "EV-00023",
          name: "Bank_Records_0410.xlsx",
          type: "Spreadsheet",
          size: "982 KB",
          collected: "2025-05-14",
          uploaded: "2025-05-14",
          uploader: "A. Ramirez",
          hash: "1e9b44aa8e6df0c5b4d0ad9c527ca6922fd347891ab0d6d9a7d729a9eace44aa",
          status: "SHA-256 verified",
          grade: "Admissible-grade",
          legalAuthorityId: "W-2025-0417",
          linkedLeadId: "L-0032",
          storage: "vault://cases/CG-2025-0417/evidence/EV-00023",
          custody: [
            { action: "Received", at: "2025-05-14T12:22:00", by: "A. Ramirez", detail: "Subpoena return packet" },
            { action: "Verified", at: "2025-05-14T12:25:00", by: "System", detail: "SHA-256 verification successful" }
          ]
        }
      ],
      leads: [
        { id: "L-0047", title: "Harbor Freight Purchase", source: "Tip Line", status: "New Lead", date: "2025-05-20", assignee: "A. Ramirez", evidenceIds: [] },
        { id: "L-0046", title: "Anonymous Email", source: "Email", status: "New Lead", date: "2025-05-19", assignee: "J. Morales", evidenceIds: [] },
        { id: "L-0045", title: "Social Media Post", source: "Open Source", status: "New Lead", date: "2025-05-19", assignee: "K. Rios", evidenceIds: [] },
        { id: "L-0043", title: "Vehicle of Interest", source: "Flock ALPR", status: "In Review", date: "2025-05-18", assignee: "A. Ramirez", evidenceIds: ["EV-00027"] },
        { id: "L-0042", title: "Subject Phone Number", source: "Service Provider", status: "In Review", date: "2025-05-18", assignee: "T. Shaw", evidenceIds: [] },
        { id: "L-0041", title: "Associated Business", source: "State Registry", status: "In Review", date: "2025-05-17", assignee: "J. Morales", evidenceIds: [] },
        { id: "L-0039", title: "Phone Extraction Analysis", source: "Forensic", status: "Evidence-Linked", date: "2025-05-17", assignee: "A. Ramirez", evidenceIds: ["EV-00026", "EV-00025"] },
        { id: "L-0038", title: "Financial Transactions", source: "Bank Records", status: "Evidence-Linked", date: "2025-05-16", assignee: "T. Shaw", evidenceIds: ["EV-00023"] },
        { id: "L-0037", title: "Shipping Records", source: "Carrier", status: "Evidence-Linked", date: "2025-05-15", assignee: "K. Rios", evidenceIds: [] },
        { id: "L-0036", title: "Surveillance Footage", source: "Business Camera", status: "Assigned", date: "2025-05-16", assignee: "J. Morales", evidenceIds: ["EV-00024"] },
        { id: "L-0032", title: "Corporate Filings", source: "State Registry", status: "Assigned", date: "2025-05-14", assignee: "A. Ramirez", evidenceIds: ["EV-00023"] },
        { id: "L-0031", title: "Previous Arrest Check", source: "Records", status: "Closed", date: "2025-05-13", assignee: "J. Morales", evidenceIds: [] },
        { id: "L-0030", title: "License Plate Hit", source: "ALPR", status: "Closed", date: "2025-05-12", assignee: "K. Rios", evidenceIds: [] },
        { id: "L-0029", title: "Public Records Search", source: "Open Source", status: "Closed", date: "2025-05-11", assignee: "T. Shaw", evidenceIds: [] }
      ]
    }
  ],
  auditLog: [
    {
      id: "AUD-0094",
      timestamp: "2025-05-20T13:45:22",
      user: "A. Ramirez",
      action: "Viewed",
      entityType: "Evidence",
      entityId: "EV-00026",
      details: "Viewed evidence details",
      ip: "10.2.1.45",
      prevHash: "b77a9c",
      eventHash: "7380f40d2c8a"
    },
    {
      id: "AUD-0093",
      timestamp: "2025-05-20T13:12:08",
      user: "J. Morales",
      action: "Updated",
      entityType: "Lead",
      entityId: "L-0036",
      details: "Status changed Developing -> Assigned",
      ip: "10.2.1.31",
      prevHash: "8fc221",
      eventHash: "b77a9c92ad22"
    },
    {
      id: "AUD-0092",
      timestamp: "2025-05-20T12:58:41",
      user: "T. Shaw",
      action: "Added",
      entityType: "Note",
      entityId: "N-0112",
      details: "Added note to EV-00026",
      ip: "10.2.1.26",
      prevHash: "45bd91",
      eventHash: "8fc221a2f914"
    },
    {
      id: "AUD-0091",
      timestamp: "2025-05-20T12:41:17",
      user: "System",
      action: "Verified",
      entityType: "Evidence",
      entityId: "EV-00026",
      details: "SHA-256 verification successful",
      ip: "10.2.0.12",
      prevHash: "GENESIS",
      eventHash: "45bd91e004aa"
    }
  ]
};

let state = loadState();

const app = document.querySelector("#app");
const leadColumns = ["New Lead", "In Review", "Evidence-Linked", "Assigned", "Closed"];
const evidenceTypes = ["Document", "Image", "Video", "Archive", "Spreadsheet", "Log", "Other"];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentCase() {
  return state.cases.find((item) => item.id === state.selectedCaseId) || state.cases[0];
}

function selectedEvidence() {
  const activeCase = currentCase();
  return activeCase.evidence.find((item) => item.id === state.selectedEvidenceId) || activeCase.evidence[0] || {
    id: "No evidence",
    name: "Upload evidence to begin",
    type: "Not set",
    size: "0 B",
    collected: "",
    uploaded: "",
    uploader: state.session?.name || "Not set",
    hash: "",
    status: "Pending",
    grade: "Intelligence-only",
    legalAuthorityId: "",
    linkedLeadId: "",
    storage: "",
    custody: []
  };
}

function selectedLead() {
  const activeCase = currentCase();
  return activeCase.leads.find((item) => item.id === state.selectedLeadId) || activeCase.leads[0] || {
    id: "No lead",
    title: "Add lead to begin",
    source: "Not set",
    status: "New Lead",
    date: "",
    assignee: state.session?.name || "Not set",
    evidenceIds: []
  };
}

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function formatDateTime(value) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function hashShort(hash) {
  if (!hash) return "Pending";
  return `${hash.slice(0, 6)}...${hash.slice(-6)}`;
}

function fileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`;
}

function detectEvidenceType(fileName) {
  const ext = fileName.split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "gif", "webp", "heic"].includes(ext)) return "Image";
  if (["mp4", "mov", "avi", "mkv"].includes(ext)) return "Video";
  if (["zip", "tar", "gz", "7z"].includes(ext)) return "Archive";
  if (["xls", "xlsx", "csv"].includes(ext)) return "Spreadsheet";
  if (["log", "json", "txt"].includes(ext)) return "Log";
  if (["pdf", "doc", "docx"].includes(ext)) return "Document";
  return "Other";
}

async function sha256ArrayBuffer(buffer) {
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256Text(text) {
  const bytes = new TextEncoder().encode(text);
  return sha256ArrayBuffer(bytes);
}

function nextId(prefix, items) {
  const numeric = items
    .map((item) => Number(String(item.id).replace(prefix, "")))
    .filter((num) => Number.isFinite(num));
  const next = (numeric.length ? Math.max(...numeric) : 0) + 1;
  return `${prefix}${String(next).padStart(5, "0")}`;
}

function icon(name) {
  const icons = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect>',
    vault: '<path d="M4 8h16v11H4z"></path><path d="M7 8V6.5A4.5 4.5 0 0 1 11.5 2h1A4.5 4.5 0 0 1 17 6.5V8"></path><circle cx="12" cy="13.5" r="2"></circle>',
    lead: '<path d="M5 4h14v16H5z"></path><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M8 16h5"></path>',
    legal: '<path d="M12 3v18"></path><path d="M5 7h14"></path><path d="m6 7-3 6h6L6 7Z"></path><path d="m18 7-3 6h6l-3-6Z"></path>',
    audit: '<path d="M6 3h9l3 3v15H6z"></path><path d="M14 3v4h4"></path><path d="M9 12h6"></path><path d="M9 16h6"></path>',
    report: '<path d="M6 3h12v18H6z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h4"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
    admin: '<path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z"></path><path d="M9.5 12.5 11 14l3.5-4"></path>',
    upload: '<path d="M12 16V4"></path><path d="m7 9 5-5 5 5"></path><path d="M5 20h14"></path>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"></path><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"></path>',
    shield: '<path d="M12 3 5 6v5c0 4.6 2.9 8.2 7 10 4.1-1.8 7-5.4 7-10V6l-7-3Z"></path><path d="m9.5 12 1.7 1.7 3.6-4"></path>',
    pdf: '<path d="M6 3h9l3 3v15H6z"></path><path d="M14 3v4h4"></path><path d="M9 13h1.5a1.5 1.5 0 0 0 0-3H9v6"></path><path d="M13 10v6h1.2a2.8 2.8 0 0 0 0-6H13Z"></path>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
    logout: '<path d="M10 5H5v14h5"></path><path d="M14 16l4-4-4-4"></path><path d="M8 12h10"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    x: '<path d="M6 6l12 12"></path><path d="M18 6 6 18"></path>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" class="icon">${icons[name] || icons.grid}</svg>`;
}

function render() {
  app.innerHTML = state.session ? renderWorkspace() : renderLogin();
  bindEvents();
}

function renderLogin() {
  return `
    <main class="login-shell">
      <section class="login-card" aria-labelledby="login-title">
        <div class="brand-row">
          <span class="brand-mark">${icon("grid")}</span>
          <div>
            <h1 id="login-title">CaseGrid MVP</h1>
            <p>Evidence-first case intelligence</p>
          </div>
        </div>
        <form id="login-form" class="stacked-form">
          <label>
            User
            <select name="userId">
              ${state.users.map((user) => `<option value="${user.id}">${escapeHtml(user.name)} - ${escapeHtml(user.role)}</option>`).join("")}
            </select>
          </label>
          <label>
            Badge PIN
            <input name="pin" type="password" value="0417" autocomplete="current-password">
          </label>
          <button class="primary-button wide" type="submit">${icon("lock")} Sign in</button>
        </form>
        <p class="fine-print">Demo auth uses local browser state only. Evidence hashing runs with Web Crypto after sign-in.</p>
      </section>
      <section class="login-brief" aria-label="MVP workflow">
        <h2>Operational demo path</h2>
        <ol>
          <li>Upload evidence and compute SHA-256.</li>
          <li>Attach it to a case and legal authority.</li>
          <li>Assign and link a lead.</li>
          <li>Generate a report and export custody PDF.</li>
        </ol>
      </section>
    </main>
  `;
}

function renderWorkspace() {
  const activeCase = currentCase();
  const evidence = selectedEvidence();
  const lead = selectedLead();
  return `
    <div class="app-shell">
      ${renderSidebar(activeCase)}
      <div class="workbench">
        ${renderHeader(activeCase)}
        <main class="workspace-grid">
          <section class="main-column">
            ${renderCaseTabs(activeCase)}
            ${renderEvidenceVault(activeCase)}
            ${renderLeadBoard(activeCase)}
            ${renderAuditLog()}
          </section>
          <aside class="inspector">
            ${renderLegalAuthority(activeCase)}
            ${renderCustodyTimeline(evidence)}
            ${renderReportPreview(activeCase, evidence, lead)}
            ${renderAdminPanel(activeCase)}
          </aside>
        </main>
      </div>
      ${renderModal(activeCase)}
      <input id="file-input" class="visually-hidden" type="file" multiple>
    </div>
  `;
}

function renderSidebar(activeCase) {
  const nav = [
    ["grid", "Case Dashboard"],
    ["vault", "Evidence Vault"],
    ["lead", "Lead Board"],
    ["legal", "Legal Authority"],
    ["audit", "Audit Log"],
    ["report", "Reports"],
    ["search", "Search"],
    ["admin", "Admin"]
  ];

  return `
    <aside class="sidebar">
      <div class="brand-row sidebar-brand">
        <span class="brand-mark">${icon("grid")}</span>
        <div>
          <strong>CaseGrid MVP</strong>
          <span>Evidence-first case intelligence</span>
        </div>
      </div>
      <nav class="nav-list" aria-label="Primary">
        ${nav
          .map(
            ([navIcon, label], index) => `
              <a href="#${label.toLowerCase().replaceAll(" ", "-")}" class="${index === 0 ? "is-active" : ""}">
                ${icon(navIcon)} ${label}
              </a>`
          )
          .join("")}
      </nav>
      <div class="case-access">
        <div class="section-title">${icon("lock")} Case Access</div>
        <dl>
          <div><dt>Role</dt><dd>${escapeHtml(state.session.role)}</dd></div>
          <div><dt>Clearance</dt><dd>${escapeHtml(state.session.clearance)}</dd></div>
          <div><dt>Access Level</dt><dd>${escapeHtml(state.session.access)}</dd></div>
          <div><dt>Case</dt><dd>${escapeHtml(activeCase.id)}</dd></div>
        </dl>
        <button class="secondary-button wide" data-action="open-admin">View details</button>
      </div>
    </aside>
  `;
}

function renderHeader(activeCase) {
  return `
    <header class="topbar">
      <div class="case-heading">
        <h1>${escapeHtml(activeCase.title)}</h1>
        <div class="case-meta">
          <span>Case ID: ${escapeHtml(activeCase.id)}</span>
          <span>Task Force: ${escapeHtml(activeCase.taskForce)}</span>
          <span>Opened: ${formatDate(activeCase.opened)}</span>
          <span>Owner: ${escapeHtml(activeCase.owner)}</span>
        </div>
      </div>
      <div class="topbar-actions">
        <label class="case-switcher">
          <span>Active case</span>
          <select id="case-switcher">
            ${state.cases.map((item) => `<option value="${item.id}" ${item.id === activeCase.id ? "selected" : ""}>${escapeHtml(item.id)}</option>`).join("")}
          </select>
        </label>
        <span class="status-chip good">${icon("shield")} Warrant active</span>
        <span class="status-chip info">Intelligence-only</span>
        <span class="status-chip good">Admissible-grade</span>
        <button class="icon-button" data-action="open-case" aria-label="Create case" title="Create case">${icon("plus")}</button>
        <button class="primary-button" data-action="open-case">${icon("plus")} Create case</button>
        <button class="ghost-button" data-action="logout">${icon("logout")} Sign out</button>
      </div>
    </header>
  `;
}

function renderCaseTabs(activeCase) {
  const tabs = ["Case Summary", "Activity Feed", "Associated Cases", "Notes (12)"];
  return `
    <section class="case-tabs" aria-label="Case sections">
      ${tabs
        .map(
          (tab) => `<button class="${state.ui.activeTab === tab.toLowerCase() ? "is-active" : ""}" data-action="tab" data-tab="${escapeHtml(tab.toLowerCase())}">${escapeHtml(tab)}</button>`
        )
        .join("")}
      <div class="case-snapshot">
        <span>${activeCase.evidence.length} evidence items</span>
        <span>${activeCase.leads.filter((lead) => lead.status !== "Closed").length} open leads</span>
        <span>${activeCase.agencies.length} agencies</span>
      </div>
    </section>
  `;
}

function renderEvidenceVault(activeCase) {
  const query = state.ui.evidenceQuery.toLowerCase().trim();
  const filtered = activeCase.evidence.filter((item) => {
    const matchesQuery = !query || [item.name, item.id, item.type, item.grade, item.status].join(" ").toLowerCase().includes(query);
    const matchesFilter = state.ui.evidenceFilter === "all" || item.type === state.ui.evidenceFilter;
    return matchesQuery && matchesFilter;
  });

  return `
    <section class="panel" id="evidence-vault" aria-labelledby="vault-title">
      <div class="panel-heading">
        <h2 id="vault-title">${icon("vault")} Evidence Vault</h2>
        <button class="secondary-button" data-action="trigger-upload">${icon("upload")} Upload Evidence</button>
      </div>
      <div class="upload-zone" id="dropzone" tabindex="0" role="button" aria-label="Upload evidence files">
        ${icon("upload")}
        <div>
          <strong>Upload Evidence</strong>
          <span>Drag and drop files here or choose files. Hashing starts immediately.</span>
        </div>
        <div class="upload-actions">
          <button class="outline-button" data-action="trigger-upload" type="button">${icon("upload")} Choose files</button>
          <button class="secondary-button" data-action="upload-demo" type="button">${icon("shield")} Hash Demo File</button>
        </div>
      </div>
      <div class="table-tools">
        <strong>Evidence (${activeCase.evidence.length})</strong>
        <select id="evidence-filter" aria-label="Evidence type filter">
          <option value="all">All Types</option>
          ${evidenceTypes.map((type) => `<option value="${type}" ${state.ui.evidenceFilter === type ? "selected" : ""}>${type}</option>`).join("")}
        </select>
        <label class="search-field">
          ${icon("search")}
          <input id="evidence-search" type="search" value="${escapeHtml(state.ui.evidenceQuery)}" placeholder="Search evidence">
        </label>
      </div>
      <div class="table-wrap">
        <table class="evidence-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Evidence Name</th>
              <th scope="col">Type</th>
              <th scope="col">Collected</th>
              <th scope="col">Hash (SHA-256)</th>
              <th scope="col">Status</th>
              <th scope="col">Linked To</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(renderEvidenceRow).join("") || `<tr><td colspan="7" class="empty-cell">No evidence matches this view.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderEvidenceRow(item) {
  const linkedLead = currentCase().leads.find((lead) => lead.id === item.linkedLeadId);
  return `
    <tr class="${state.selectedEvidenceId === item.id ? "is-selected" : ""}" data-action="select-evidence" data-id="${escapeHtml(item.id)}">
      <td><span class="row-id">${escapeHtml(item.id)}</span></td>
      <td>
        <button class="link-button" data-action="select-evidence" data-id="${escapeHtml(item.id)}">${escapeHtml(item.name)}</button>
      </td>
      <td><span class="type-pill">${escapeHtml(item.type)}</span></td>
      <td>${formatDate(item.collected)}</td>
      <td><code>${escapeHtml(hashShort(item.hash))}</code></td>
      <td><span class="verify-status">${icon("check")} ${escapeHtml(item.status)}</span></td>
      <td>${linkedLead ? `<button class="link-button" data-action="select-lead" data-id="${escapeHtml(linkedLead.id)}">${escapeHtml(linkedLead.id)}</button>` : '<span class="muted">Unlinked</span>'}</td>
    </tr>
  `;
}

function renderLeadBoard(activeCase) {
  return `
    <section class="panel" id="lead-board" aria-labelledby="lead-title">
      <div class="panel-heading">
        <h2 id="lead-title">${icon("lead")} Lead Board</h2>
        <button class="secondary-button" data-action="open-lead">${icon("plus")} Add Lead</button>
      </div>
      <div class="lead-board">
        ${leadColumns
          .map((column) => {
            const leads = activeCase.leads.filter((lead) => lead.status === column);
            return `
              <section class="lead-column">
                <header>${escapeHtml(column)} <span>${leads.length}</span></header>
                <div class="lead-list">
                  ${leads.map(renderLeadCard).join("")}
                </div>
                <button class="add-card" data-action="open-lead" data-status="${escapeHtml(column)}">${icon("plus")} Add Lead</button>
              </section>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderLeadCard(lead) {
  const evidenceCount = lead.evidenceIds?.length || 0;
  return `
    <article class="lead-card ${state.selectedLeadId === lead.id ? "is-selected" : ""}" data-action="select-lead" data-id="${escapeHtml(lead.id)}">
      <div class="lead-card-top">
        <span>${escapeHtml(lead.id)}</span>
        ${evidenceCount ? `<span title="Evidence-linked">${icon("link")}</span>` : ""}
      </div>
      <h3>${escapeHtml(lead.title)}</h3>
      <p>Source: ${escapeHtml(lead.source)}</p>
      <footer>
        <span>${formatDate(lead.date)}</span>
        <span class="avatar">${escapeHtml(initials(lead.assignee))}</span>
      </footer>
    </article>
  `;
}

function renderLegalAuthority(activeCase) {
  const legal = activeCase.legalAuthority;
  return `
    <section class="panel legal-panel" id="legal-authority" aria-labelledby="legal-title">
      <h2 id="legal-title">${icon("legal")} Legal Authority</h2>
      <div class="legal-card">
        <div class="legal-status">${icon("shield")} <strong>${escapeHtml(legal.status)}</strong><span>${escapeHtml(legal.id)}</span></div>
        <dl>
          <div><dt>Issued</dt><dd>${formatDateTime(legal.issued)}</dd></div>
          <div><dt>Expires</dt><dd>${formatDateTime(legal.expires)}</dd></div>
          <div><dt>Issuing Authority</dt><dd>${escapeHtml(legal.issuingAuthority)}</dd></div>
          <div><dt>Scope</dt><dd>${escapeHtml(legal.scope)}</dd></div>
        </dl>
        <button class="outline-button wide" data-action="mark-authority">${icon("check")} Link selected evidence</button>
      </div>
    </section>
  `;
}

function renderCustodyTimeline(evidence) {
  return `
    <section class="panel" id="chain-of-custody" aria-labelledby="custody-title">
      <div class="panel-heading compact">
        <h2 id="custody-title">${icon("link")} Chain of Custody</h2>
        <span>For: ${escapeHtml(evidence.id)}</span>
      </div>
      <div class="custody-meta">
        <strong>${escapeHtml(evidence.name)}</strong>
        <span>${escapeHtml(evidence.grade)}</span>
      </div>
      <ol class="timeline">
        ${(evidence.custody.length ? evidence.custody : [{ action: "Awaiting upload", at: "", by: "System", detail: "No custody events recorded yet" }])
          .map(
            (event) => `
              <li>
                <span class="timeline-dot"></span>
                <strong>${escapeHtml(event.action)}</strong>
                <time>${formatDateTime(event.at)}</time>
                <p>${escapeHtml(event.by)}</p>
                <small>${escapeHtml(event.detail)}</small>
              </li>`
          )
          .join("")}
      </ol>
      <div class="integrity-strip">
        <span>${icon("shield")} Integrity Verified</span>
        <code>${escapeHtml(hashShort(evidence.hash))}</code>
      </div>
      <div class="split-actions">
        <button class="secondary-button" data-action="open-lead">${icon("link")} Link lead</button>
        <button class="primary-button" data-action="export-pdf">${icon("pdf")} Export PDF</button>
      </div>
    </section>
  `;
}

function renderReportPreview(activeCase, evidence, lead) {
  return `
    <section class="panel" id="reports" aria-labelledby="report-title">
      <div class="panel-heading compact">
        <h2 id="report-title">${icon("report")} Report Preview</h2>
        <button class="primary-button" data-action="generate-report">Generate Report</button>
      </div>
      <article class="report-paper">
        <div class="paper-brand"><span class="brand-mark mini">${icon("grid")}</span> CaseGrid</div>
        <div class="paper-meta">
          <span>Case ID: ${escapeHtml(activeCase.id)}</span>
          <span>Date: ${formatDate(new Date().toISOString())}</span>
        </div>
        <h3>Chain of Custody Report</h3>
        <dl>
          <div><dt>Evidence ID</dt><dd>${escapeHtml(evidence.id)}</dd></div>
          <div><dt>Evidence Name</dt><dd>${escapeHtml(evidence.name)}</dd></div>
          <div><dt>Linked Lead</dt><dd>${escapeHtml(lead?.title || "Unlinked")}</dd></div>
          <div><dt>Legal Authority</dt><dd>${escapeHtml(evidence.legalAuthorityId || "Missing")}</dd></div>
          <div><dt>Current Custodian</dt><dd>${escapeHtml(evidence.custody.at(-1)?.by || evidence.uploader)}</dd></div>
        </dl>
        <div class="paper-footer">
          <span>Pages: 2</span>
          <span>Includes: Chain of Custody, Hash Verification</span>
          ${state.lastPdfExportAt ? `<span>Last PDF: ${escapeHtml(state.lastPdfFileName)} at ${formatDateTime(state.lastPdfExportAt)}</span>` : ""}
        </div>
        <div class="report-state ${state.reportGeneratedAt ? "ready" : ""}">
          ${state.reportGeneratedAt ? `Generated ${formatDateTime(state.reportGeneratedAt)}` : "Draft report"}
        </div>
      </article>
    </section>
  `;
}

function renderAdminPanel(activeCase) {
  const isAdmin = state.session.role === "Admin";
  return `
    <section class="panel" id="admin" aria-labelledby="admin-title">
      <div class="panel-heading compact">
        <h2 id="admin-title">${icon("admin")} Admin Role Controls</h2>
        <button class="secondary-button" data-action="open-admin" ${isAdmin ? "" : "disabled"}>Manage</button>
      </div>
      <div class="admin-grid">
        ${activeCase.members
          .map(
            (member) => `
            <div>
              <strong>${escapeHtml(member.name)}</strong>
              <span>${escapeHtml(member.role)}</span>
              <small>${escapeHtml(member.access)}</small>
            </div>`
          )
          .join("")}
      </div>
      <p class="fine-print">${isAdmin ? "Admin controls are enabled for this session." : "Sign in as Admin to change case permissions."}</p>
    </section>
  `;
}

function renderAuditLog() {
  return `
    <section class="panel" id="audit-log" aria-labelledby="audit-title">
      <div class="panel-heading">
        <h2 id="audit-title">${icon("audit")} Audit Log (Immutable)</h2>
        <div class="split-actions">
          <button class="ghost-button" data-action="download-audit">Download CSV</button>
          <span class="ledger-note">Append-only ledger</span>
        </div>
      </div>
      <div class="table-wrap">
        <table class="audit-table">
          <thead>
            <tr>
              <th scope="col">Timestamp (UTC)</th>
              <th scope="col">User</th>
              <th scope="col">Action</th>
              <th scope="col">Entity Type</th>
              <th scope="col">Entity ID</th>
              <th scope="col">Details</th>
              <th scope="col">Ledger Hash</th>
            </tr>
          </thead>
          <tbody>
            ${state.auditLog
              .map(
                (row) => `
                <tr>
                  <td>${formatDateTime(row.timestamp)}</td>
                  <td>${escapeHtml(row.user)}</td>
                  <td>${escapeHtml(row.action)}</td>
                  <td>${escapeHtml(row.entityType)}</td>
                  <td>${escapeHtml(row.entityId)}</td>
                  <td>${escapeHtml(row.details)}</td>
                  <td><code>${escapeHtml(row.eventHash.slice(0, 12))}</code></td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderModal(activeCase) {
  if (!state.ui.modal) return "";
  if (state.ui.modal === "case") return renderCaseModal();
  if (state.ui.modal === "lead") return renderLeadModal(activeCase);
  if (state.ui.modal === "admin") return renderAdminModal(activeCase);
  return "";
}

function renderCaseModal() {
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
        <button class="icon-button close-button" data-action="close-modal" aria-label="Close">${icon("x")}</button>
        <h2 id="case-modal-title">Create case</h2>
        <form id="case-form" class="stacked-form">
          <label>Case title <input name="title" required value="Operation Glass Quay"></label>
          <label>Case type <input name="type" required value="White-collar crime"></label>
          <label>Task force <input name="taskForce" required value="Financial TF"></label>
          <label>Sensitivity
            <select name="sensitivity">
              <option>Standard</option>
              <option selected>Restricted</option>
              <option>Compartmented</option>
            </select>
          </label>
          <button class="primary-button wide" type="submit">${icon("plus")} Create case</button>
        </form>
      </section>
    </div>
  `;
}

function renderLeadModal(activeCase) {
  const selected = selectedEvidence();
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        <button class="icon-button close-button" data-action="close-modal" aria-label="Close">${icon("x")}</button>
        <h2 id="lead-modal-title">Add lead</h2>
        <form id="lead-form" class="stacked-form">
          <label>Lead title <input name="title" required value="Device owner interview"></label>
          <label>Source <input name="source" required value="Forensic follow-up"></label>
          <label>Status
            <select name="status">
              ${leadColumns.map((column) => `<option ${column === "Evidence-Linked" ? "selected" : ""}>${column}</option>`).join("")}
            </select>
          </label>
          <label>Assignee <input name="assignee" required value="${escapeHtml(state.session.name)}"></label>
          <label>Link to evidence
            <select name="evidenceId">
              <option value="">No evidence link</option>
              ${activeCase.evidence.map((item) => `<option value="${item.id}" ${item.id === selected.id ? "selected" : ""}>${item.id} - ${escapeHtml(item.name)}</option>`).join("")}
            </select>
          </label>
          <button class="primary-button wide" type="submit">${icon("link")} Save linked lead</button>
        </form>
      </section>
    </div>
  `;
}

function renderAdminModal(activeCase) {
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
        <button class="icon-button close-button" data-action="close-modal" aria-label="Close">${icon("x")}</button>
        <h2 id="admin-modal-title">Admin role controls</h2>
        <form id="admin-form" class="stacked-form">
          <label>Member
            <select name="member">
              ${activeCase.members.map((member) => `<option>${escapeHtml(member.name)}</option>`).join("")}
            </select>
          </label>
          <label>Access level
            <select name="access">
              <option>Read Only</option>
              <option selected>Read / Write</option>
              <option>Evidence Upload</option>
              <option>Admin</option>
            </select>
          </label>
          <button class="primary-button wide" type="submit">${icon("admin")} Update permission</button>
        </form>
      </section>
    </div>
  `;
}

function bindEvents() {
  const loginForm = byId("login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  const evidenceSearch = byId("evidence-search");
  if (evidenceSearch) {
    evidenceSearch.addEventListener("input", (event) => {
      state.ui.evidenceQuery = event.target.value;
      saveState();
      render();
    });
  }

  const evidenceFilter = byId("evidence-filter");
  if (evidenceFilter) {
    evidenceFilter.addEventListener("change", (event) => {
      state.ui.evidenceFilter = event.target.value;
      saveState();
      render();
    });
  }

  const caseSwitcher = byId("case-switcher");
  if (caseSwitcher) {
    caseSwitcher.addEventListener("change", (event) => {
      state.selectedCaseId = event.target.value;
      const activeCase = currentCase();
      state.selectedEvidenceId = activeCase.evidence[0]?.id || "";
      state.selectedLeadId = activeCase.leads[0]?.id || "";
      saveState();
      render();
    });
  }

  const fileInput = byId("file-input");
  if (fileInput) {
    fileInput.addEventListener("change", async (event) => {
      await handleFiles([...event.target.files]);
      event.target.value = "";
    });
  }

  const dropzone = byId("dropzone");
  if (dropzone) {
    dropzone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    });
    dropzone.addEventListener("dragleave", () => dropzone.classList.remove("is-dragging"));
    dropzone.addEventListener("drop", async (event) => {
      event.preventDefault();
      dropzone.classList.remove("is-dragging");
      await handleFiles([...event.dataTransfer.files]);
    });
  }

  const caseForm = byId("case-form");
  if (caseForm) caseForm.addEventListener("submit", handleCreateCase);

  const leadForm = byId("lead-form");
  if (leadForm) leadForm.addEventListener("submit", handleCreateLead);

  const adminForm = byId("admin-form");
  if (adminForm) adminForm.addEventListener("submit", handleAdminUpdate);

  app.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });
}

async function handleLogin(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const user = state.users.find((item) => item.id === form.get("userId"));
  state.session = user || state.users[0];
  saveState();
  await appendAudit("Authenticated", "User", state.session.id, `${state.session.name} signed in`);
}

async function handleAction(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action } = target.dataset;

  if (["select-evidence", "select-lead"].includes(action)) event.preventDefault();

  if (action === "logout") {
    state.session = null;
    saveState();
    render();
    return;
  }

  if (action === "trigger-upload") {
    byId("file-input")?.click();
    return;
  }

  if (action === "upload-demo") return uploadDemoFile();

  if (action === "select-evidence") {
    state.selectedEvidenceId = target.dataset.id;
    await appendAudit("Viewed", "Evidence", target.dataset.id, "Viewed evidence details");
    return;
  }

  if (action === "select-lead") {
    state.selectedLeadId = target.dataset.id;
    await appendAudit("Viewed", "Lead", target.dataset.id, "Viewed lead details");
    return;
  }

  if (action === "open-case") return openModal("case");
  if (action === "open-lead") return openModal("lead");
  if (action === "open-admin") return openModal("admin");
  if (action === "close-modal") return closeModal();

  if (action === "tab") {
    state.ui.activeTab = target.dataset.tab;
    saveState();
    render();
    return;
  }

  if (action === "mark-authority") return linkSelectedEvidenceToAuthority();
  if (action === "generate-report") return generateReport();
  if (action === "export-pdf") return exportPdf();
  if (action === "download-audit") return downloadAuditCsv();
}

function openModal(name) {
  state.ui.modal = name;
  saveState();
  render();
}

function closeModal() {
  state.ui.modal = null;
  saveState();
  render();
}

async function handleCreateCase(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const newCase = {
    id: `CG-${new Date().getFullYear()}-${String(state.cases.length + 418).padStart(4, "0")}`,
    title: form.get("title").trim(),
    type: form.get("type").trim(),
    taskForce: form.get("taskForce").trim(),
    opened: new Date().toISOString().slice(0, 10),
    owner: state.session.name,
    sensitivity: form.get("sensitivity"),
    agencies: ["FBI", "Local Partner"],
    legalAuthority: {
      id: "Pending",
      type: "Not set",
      status: "Authority pending",
      issued: "",
      expires: "",
      issuingAuthority: "Not set",
      scope: "Not set"
    },
    members: [{ name: state.session.name, role: state.session.role, access: state.session.access }],
    evidence: [],
    leads: []
  };
  state.cases.push(newCase);
  state.selectedCaseId = newCase.id;
  state.selectedEvidenceId = "";
  state.selectedLeadId = "";
  state.ui.modal = null;
  saveState();
  await appendAudit("Created", "Case", newCase.id, `Created case ${newCase.title}`);
}

async function handleCreateLead(event) {
  event.preventDefault();
  const activeCase = currentCase();
  const form = new FormData(event.currentTarget);
  const evidenceId = form.get("evidenceId");
  const newLead = {
    id: nextId("L-", activeCase.leads),
    title: form.get("title").trim(),
    source: form.get("source").trim(),
    status: form.get("status"),
    date: new Date().toISOString().slice(0, 10),
    assignee: form.get("assignee").trim(),
    evidenceIds: evidenceId ? [evidenceId] : []
  };
  activeCase.leads.push(newLead);
  if (evidenceId) {
    const evidence = activeCase.evidence.find((item) => item.id === evidenceId);
    if (evidence) evidence.linkedLeadId = newLead.id;
  }
  state.selectedLeadId = newLead.id;
  state.ui.modal = null;
  saveState();
  await appendAudit("Added", "Lead", newLead.id, evidenceId ? `Added lead and linked ${evidenceId}` : "Added lead");
}

async function handleAdminUpdate(event) {
  event.preventDefault();
  if (state.session.role !== "Admin") return;
  const activeCase = currentCase();
  const form = new FormData(event.currentTarget);
  const member = activeCase.members.find((item) => item.name === form.get("member"));
  if (member) member.access = form.get("access");
  state.ui.modal = null;
  saveState();
  await appendAudit("Updated", "Case Member", member?.name || "Unknown", `Access changed to ${form.get("access")}`);
}

async function handleFiles(files) {
  if (!files.length) return;
  if (!crypto.subtle) {
    alert("SHA-256 hashing needs a secure browser context. Run the local server with npm start.");
    return;
  }
  const activeCase = currentCase();
  for (const file of files) {
    const buffer = await file.arrayBuffer();
    const hash = await sha256ArrayBuffer(buffer);
    const id = nextId("EV-", activeCase.evidence);
    const type = detectEvidenceType(file.name);
    const now = new Date().toISOString();
    const item = {
      id,
      name: file.name,
      type,
      size: fileSize(file.size),
      collected: now.slice(0, 10),
      uploaded: now.slice(0, 10),
      uploader: state.session.name,
      hash,
      status: "SHA-256 verified",
      grade: activeCase.legalAuthority.status.includes("active") ? "Admissible-grade" : "Intelligence-only",
      legalAuthorityId: activeCase.legalAuthority.id === "Pending" ? "" : activeCase.legalAuthority.id,
      linkedLeadId: "",
      storage: `vault://cases/${activeCase.id}/evidence/${id}`,
      custody: [
        { action: "Uploaded", at: now, by: state.session.name, detail: `Original file: ${file.name}; size ${fileSize(file.size)}` },
        { action: "Verified", at: now, by: "System", detail: "SHA-256 verification successful" }
      ]
    };
    activeCase.evidence.unshift(item);
    state.selectedEvidenceId = id;
    await appendAudit("Added", "Evidence", id, `Uploaded ${file.name}; SHA-256 verified`);
  }
  saveState();
  render();
}

async function uploadDemoFile() {
  const stamp = new Date().toISOString();
  const file = new File(
    [`CaseGrid demo evidence packet\nGenerated: ${stamp}\nCase: ${currentCase().id}\nCustody: Browser demo upload`],
    `Demo_Evidence_${stamp.slice(0, 10)}.txt`,
    { type: "text/plain" }
  );
  await handleFiles([file]);
}

async function linkSelectedEvidenceToAuthority() {
  const activeCase = currentCase();
  const evidence = selectedEvidence();
  if (!evidence.hash) {
    alert("Upload or select an evidence item before linking legal authority.");
    return;
  }
  evidence.legalAuthorityId = activeCase.legalAuthority.id;
  evidence.grade = "Admissible-grade";
  evidence.custody.push({
    action: "Authority Linked",
    at: new Date().toISOString(),
    by: state.session.name,
    detail: `${activeCase.legalAuthority.type} ${activeCase.legalAuthority.id} linked to item`
  });
  saveState();
  await appendAudit("Linked", "Legal Authority", activeCase.legalAuthority.id, `Linked ${evidence.id} to authority`);
}

async function generateReport() {
  if (!selectedEvidence().hash) {
    alert("Upload or select an evidence item before generating a report.");
    return;
  }
  state.reportGeneratedAt = new Date().toISOString();
  state.ui.reportStatus = "Ready";
  saveState();
  await appendAudit("Generated", "Report", currentCase().id, `Generated chain-of-custody report for ${selectedEvidence().id}`);
}

async function exportPdf() {
  const activeCase = currentCase();
  const evidence = selectedEvidence();
  if (!evidence.hash) {
    alert("Upload or select an evidence item before exporting a PDF.");
    return;
  }
  const lead = activeCase.leads.find((item) => item.id === evidence.linkedLeadId);
  const lines = [
    "CaseGrid MVP - Chain of Custody Report",
    `Case: ${activeCase.title} (${activeCase.id})`,
    `Evidence: ${evidence.id} - ${evidence.name}`,
    `Type: ${evidence.type}`,
    `SHA-256: ${evidence.hash}`,
    `Status: ${evidence.status}`,
    `Grade: ${evidence.grade}`,
    `Linked Lead: ${lead ? `${lead.id} - ${lead.title}` : "Unlinked"}`,
    `Legal Authority: ${evidence.legalAuthorityId || "Missing"}`,
    "",
    "Custody Events:",
    ...evidence.custody.map((event) => `${formatDateTime(event.at)} | ${event.action} | ${event.by} | ${event.detail}`),
    "",
    `Generated: ${formatDateTime(new Date().toISOString())}`,
    "Audit note: This browser MVP records append-only audit entries in local state."
  ];
  const filename = `${activeCase.id}-${evidence.id}-chain-of-custody.pdf`;
  const blob = makePdfBlob(lines);
  state.lastPdfExportAt = new Date().toISOString();
  state.lastPdfFileName = filename;
  saveState();
  downloadBlob(blob, filename);
  await appendAudit("Exported", "Report", evidence.id, "Exported chain-of-custody PDF");
}

function makePdfBlob(lines) {
  const escapedLines = lines.flatMap((line) => wrapPdfLine(line, 92));
  let y = 760;
  const textOps = ["BT", "/F1 10 Tf", "50 760 Td"];
  escapedLines.forEach((line, index) => {
    if (index > 0) textOps.push(`0 -16 Td`);
    if (y < 70) return;
    textOps.push(`(${escapePdf(line)}) Tj`);
    y -= 16;
  });
  textOps.push("ET");
  const stream = textOps.join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function escapePdf(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function wrapPdfLine(line, length) {
  if (line.length <= length) return [line];
  const words = line.split(" ");
  const lines = [];
  let current = "";
  words.forEach((word) => {
    if (`${current} ${word}`.trim().length > length) {
      lines.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  });
  if (current) lines.push(current);
  return lines;
}

function downloadAuditCsv() {
  const header = ["timestamp", "user", "action", "entity_type", "entity_id", "details", "prev_hash", "event_hash"];
  const rows = state.auditLog.map((row) =>
    [row.timestamp, row.user, row.action, row.entityType, row.entityId, row.details, row.prevHash, row.eventHash]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(",")
  );
  downloadBlob(new Blob([[header.join(","), ...rows].join("\n")], { type: "text/csv" }), "casegrid-audit-log.csv");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function appendAudit(action, entityType, entityId, details) {
  const previous = state.auditLog[0]?.eventHash || "GENESIS";
  const event = {
    id: nextId("AUD-", state.auditLog),
    timestamp: new Date().toISOString(),
    user: state.session?.name || "System",
    action,
    entityType,
    entityId,
    details,
    ip: "127.0.0.1",
    prevHash: previous,
    eventHash: ""
  };
  event.eventHash = await sha256Text(JSON.stringify({ ...event, eventHash: "" }));
  state.auditLog.unshift(event);
  saveState();
  render();
}

render();
