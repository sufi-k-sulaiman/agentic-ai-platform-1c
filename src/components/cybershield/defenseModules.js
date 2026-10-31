export const moduleOne = {
  moduleNumber: '01',
  phase: 'Attack Phases 1–2',
  title: 'Perimeter & Network Protection',
  body:
    'Neutralize reconnaissance, initial access, and malicious execution before an attacker ever establishes a foothold on your estate.',
  issuesHeading: 'The issues addressed',
  issues: [
    {
      label: 'Reconnaissance & Active Scanning',
      body: 'Threat actors mapping public-facing assets to find exploitable entry points.',
    },
    {
      label: 'Initial Access via Phishing & Vulnerabilities',
      body: 'Attackers breaching the perimeter through stolen credentials, zero-day exploits, or malicious emails.',
    },
    {
      label: 'Execution & Malicious Infiltration',
      body: 'Attackers running fileless code inside memory using native tools like PowerShell.',
    },
  ],
  features: [
    {
      code: 'ASOD',
      name: 'Adaptive Surface Obfuscation & Deception',
      what:
        'A dynamic perimeter shield that constantly shifts the public-facing footprint of an enterprise while seeding the network with fake digital assets.',
      mitigations: [
        {
          title: 'Network Ghosting',
          body: 'External scanners are shown randomized, fake open ports and rotating IP configurations — rendering real vulnerabilities invisible during the reconnaissance phase.',
        },
        {
          title: 'AI-Phishing Intercept',
          body: 'Deep-learning natural language models analyze inbound and outbound email metadata, neutralizing advanced spear-phishing links inside an isolated sandbox before they reach an employee inbox.',
        },
        {
          title: 'Honey-Token Injection',
          body: 'Realistic fake administrative credentials and decoy databases are deployed across the environment. The moment a hacker uses or touches a honey-token, an automated network isolation protocol triggers.',
        },
      ],
    },
    {
      code: 'ZTMS',
      name: 'Zero-Trust Memory Sentinel',
      what:
        'A continuous, kernel-level memory monitoring agent that evaluates the behavioral intent of every system process.',
      mitigations: [
        {
          title: 'Fileless Execution Blocking',
          body: 'Instead of hunting known malware files on disk, ZTMS watches live memory space. If a legitimate tool such as PowerShell attempts process hollowing or injects code into a trusted system process, the runtime memory thread is terminated in milliseconds — neutralizing the execution phase in flight.',
        },
      ],
    },
  ],
};

export const moduleTwo = {
  moduleNumber: '02',
  phase: 'Attack Phases 3–4',
  title: 'Internal Domain Hardening',
  body:
    'Contain a breach already inside the network: no privilege escalation, no lateral movement, no stolen credentials, and no blind spot in your own defenses.',
  issuesHeading: 'The issues addressed',
  issues: [
    {
      label: 'Privilege Escalation & Lateral Movement',
      body: 'Attackers jumping from a basic user profile to domain admin and moving sideways through internal subnets.',
    },
    {
      label: 'Credential Access',
      body: 'Hackers scraping system memory to steal plaintext passwords or active authentication tokens.',
    },
    {
      label: 'Defense Impairment',
      body: 'Attackers using administrative rights to uninstall security software and wipe event logs.',
    },
  ],
  features: [
    {
      code: 'MSIF',
      name: 'Micro-Segmented Identity Firewall',
      what:
        'An identity-centric, automated access control engine that creates isolated micro-perimeters around every user, device, and workload.',
      mitigations: [
        {
          title: 'Blast Radius Containment',
          body: 'A strict zero-trust architecture means that even with entry to an employee laptop, an attacker can neither see nor communicate with the rest of the network. Every internal connection requires explicit, continuous cryptographic validation, so lateral movement simply has nowhere to go.',
        },
        {
          title: 'Ephemeral Credential Vaulting',
          body: 'Static passwords and permanent access tokens are replaced by single-use, rolling cryptographic keys that expire after 60 seconds. An attacker dumping system memory harvests only expired, useless data.',
        },
      ],
    },
    {
      code: 'ICSD',
      name: 'Immutable Core Self-Defense',
      what:
        'A hardened, hypervisor-level protection layer that shields the security agent itself — from the system administrators who control the machine.',
      mitigations: [
        {
          title: 'Tamper-Proof Protection',
          body: 'When a compromised administrator account attempts to disable CyberShield or delete system event logs, the ICSD engine intercepts the call at the hardware level, denies it, flags the account as compromised, and triggers an emergency lockout protocol across the enterprise domain.',
        },
      ],
    },
  ],
};

export const moduleThree = {
  moduleNumber: '03',
  phase: 'OWASP Application Risks',
  title: 'Application Security Assurance',
  body:
    'Secure the code itself, from the runtime environment outward — so web applications, third-party dependencies, and audit trails all hold under attack.',
  issuesHeading: 'The issues addressed',
  issues: [
    {
      label: 'Injection, SSRF & Broken Access Control',
      body: 'Web applications processing malicious database commands, acting as unauthorized proxies, or leaking private data due to missing permission checks.',
    },
    {
      label: 'Supply Chain & Integrity Failures',
      body: 'Applications pulling down corrupted third-party libraries or deserializing unsafe data.',
    },
    {
      label: 'Logging & Alerting Failures',
      body: 'Missing audit trails that allow attackers to dwell silently inside applications for months.',
    },
  ],
  features: [
    {
      code: 'RASP',
      name: 'Real-Time Application Self-Protection',
      what:
        "A security plug-in embedded directly into the application's runtime environment, inspecting data traffic from inside the running software.",
      mitigations: [
        {
          title: 'Contextual Input Filtering',
          body: 'RASP intercepts every input flowing into application fields and stops SQL injection and cross-site scripting by judging whether the data behaves like executable code before it reaches the backend interpreter.',
        },
        {
          title: 'Server-Side Enforcement',
          body: 'User session state and permissions are validated against requested URL parameters at the server level — completely mitigating broken access control and server-side request forgery attempts.',
        },
      ],
    },
    {
      code: 'CBOM',
      name: 'Continuous Bill of Materials & Autonomous Telemetry',
      what:
        'An automated, real-time code analysis engine paired with a hyper-verbose, cryptographic logging ledger.',
      mitigations: [
        {
          title: 'Supply Chain Watchdog',
          body: 'Every open-source dependency is monitored in real time. If a third-party package ships a malicious payload in an update, CyberShield blocks that dependency from executing inside the production environment.',
        },
        {
          title: 'Immutable Auditing',
          body: 'All application events are written to an isolated, write-once-read-many security ledger. Logging and alerting can no longer be defeated, security teams receive instantaneous alerts on anomalous API activity, and no attacker can tamper with the audit record.',
        },
      ],
    },
  ],
};

export const moduleFour = {
  moduleNumber: '04',
  phase: 'Attack Phase 5 · Mission Impact',
  title: 'Mission Objective & Blast Mitigation',
  body:
    'Break command and control, stop exfiltration in progress, and recover from ransomware in minutes rather than quarters.',
  issuesHeading: 'The issues addressed',
  issues: [
    {
      label: 'Command & Control (C2) Beaconing',
      body: 'Malicious software communicating outbound with hacker servers, disguised as standard web traffic.',
    },
    {
      label: 'Data Exfiltration',
      body: 'Threat actors compressing and quietly uploading large quantities of company data to external servers.',
    },
    {
      label: 'Ransomware & Destructive Impact',
      body: 'Mass encryption of critical servers, destroyed master boot records, and operational downtime.',
    },
  ],
  features: [
    {
      code: 'AEI',
      name: 'AI-Driven Protocol & Exfiltration Interceptor',
      what:
        'An inline network traffic inspection engine that analyzes the behavioral patterns of outbound internet requests.',
      mitigations: [
        {
          title: 'C2 Disruption',
          body: 'The interceptor identifies the distinct, rhythmic timing pattern of hidden malware signaling. Even traffic that is encrypted and disguised as ordinary HTTPS or DNS is caught on behavioral anomaly, and the link back to the attacker server is cut.',
        },
        {
          title: 'Anomalous Bulk-Transfer Blocking',
          body: 'When an account suddenly compresses files or moves a larger-than-normal volume of data out of the corporate network, CyberShield freezes the data pipe, revokes the active session, and alerts the incident response team.',
        },
      ],
    },
    {
      code: 'IAGR',
      name: 'Kinetic Canary & Instant Air-Gap Recovery',
      what:
        'A file system monitor that deploys hidden file-change traps alongside an automated, isolated cloud backup restoration system.',
      mitigations: [
        {
          title: 'Ransomware Kill-Switch',
          body: 'Hidden canary files sit across every storage system. The microsecond a ransomware strain begins encrypting, it hits a canary; CyberShield identifies the unauthorized rapid cryptographic change, freezes the server within seconds, and kills the process before it spreads to other nodes.',
        },
        {
          title: 'Zero-Downtime Rebuilds',
          body: 'Servers damaged or encrypted before containment are replaced by clean virtual environments provisioned from air-gapped, immutable backups — restoring operational readiness in minutes and removing any reason to pay a ransom.',
        },
      ],
    },
  ],
};

export const portfolioMatrix = [
  {
    issue: 'Reconnaissance & Phishing',
    capability: 'Adaptive Surface Obfuscation & Deception',
    mitigation:
      'Conceals real network architecture and neutralizes malicious emails via NLP sandboxing.',
  },
  {
    issue: 'Fileless Execution',
    capability: 'Zero-Trust Memory Sentinel',
    mitigation:
      'Blocks native scripting languages from running malicious commands directly in system memory.',
  },
  {
    issue: 'Lateral Movement & Credential Theft',
    capability: 'Micro-Segmented Identity Firewall',
    mitigation:
      'Confines attackers to a single isolated device and rotates session tokens every 60 seconds.',
  },
  {
    issue: 'OWASP Vulnerabilities (SQLi, SSRF)',
    capability: 'Real-Time Application Self-Protection',
    mitigation:
      'Filters inputs and checks access permissions from inside the running code architecture.',
  },
  {
    issue: 'Supply Chain Failures',
    capability: 'Continuous Bill of Materials (CBOM)',
    mitigation: 'Scans and halts untrusted third-party dependencies from running in production.',
  },
  {
    issue: 'Data Exfiltration',
    capability: 'AI-Driven Protocol Interceptor',
    mitigation: 'Catches hidden outbound C2 beacons and automatically kills unauthorized bulk transfers.',
  },
  {
    issue: 'Ransomware Deployment',
    capability: 'Kinetic Canary & Air-Gap Recovery',
    mitigation:
      'Detects rapid file encryption via trap files, kills the process, and restores from immutable backups.',
  },
];