export const deepDiveOne = {
  eyebrow: 'Module 01 deep dive',
  title: 'The perimeter is not a wall. It is a moving target.',
  lead: `Phases one and two are where an attack is cheapest for the adversary and least visible to the defender. What follows is the threat mechanics this module addresses, how ASOD and ZTMS change the arithmetic, and what a production rollout actually looks like.`,
  quote: 'Reconnaissance is a lookup only while the map stays accurate. Make the map wrong and the attack slows to a crawl.',
  sections: [
    {
      heading: 'The economics of phases one and two',
      paragraphs: [
        `An attacker's first hours are spent mapping, not breaking. Automated scanners walk address ranges for open ports, certificate transparency logs hand over hostnames for free, and public job postings describe the stack in useful detail. Long before a human operator looks at your estate, software has produced a shortlist of services worth trying, versions worth matching to published exploits, and logins worth spraying.`,
        `The two phases cannot be separated. Reconnaissance feeds initial access, because every discoverable asset is a candidate for credential stuffing, an unpatched edge appliance, or a phishing lure that quotes a real internal project. Teams that only watch for "the intrusion" are watching the second act; the first act draws no alert in most stacks.`,
        `The cost curve is lopsided. A scanning run costs minutes of compute. A successful foothold can cost a seven-figure incident, weeks of downtime, and permanent damage to customer trust. Anything that raises the attacker's cost per attempt while lowering yours is worth more than another dashboard with more panels on it.`,
      ],
    },
    {
      heading: 'Why scanners always find something',
      paragraphs: [
        `Every organization believes it knows its external surface. Almost none do. Cloud teams create environments in minutes, staging inherits production data, subsidiaries arrive with their own certificates, and a forgotten VPN concentrator outlives the contractor who set it up. The surface changes weekly while the inventory is refreshed quarterly.`,
        `Inventory tools describe that gap, but they do not change what an attacker sees in the moment they are looking. Hiding is not an option either, since customers, partners and integrations must reach real services. The practical question becomes a different one: how much of what the scanner sees should correspond to something real?`,
      ],
    },
    {
      heading: 'Obfuscation as an active defense',
      paragraphs: [
        `ASOD rewrites the external appearance of the estate continuously. Which ports answer, what banners they return, which hosts appear alive, and which address blocks look like yours on a given week are variables rather than constants. Legitimate traffic reaches real services through brokered, authenticated paths while a scanner sees a convincing mix of live-looking decoys.`,
        `This is not concealment. Nothing is hidden from your own telemetry, and your analysts always see the true inventory. It is a tax on the discovery step. Every false finding has to be disproven by hand, and a targeted operator who cannot trust their own results has to slow down, re-verify, and often abandon a path that looked promising an hour earlier.`,
        `Deception completes the picture. Honey-tokens, decoy credentials, and fake administrative databases are seeded where a real intruder will find them, and touching one is an unambiguous signal. Because no legitimate workflow ever uses those assets, the corresponding alert needs no tuning cycle and justifies immediate isolation of the host that touched it.`,
      ],
    },
    {
      heading: 'Phishing at the semantic layer',
      paragraphs: [
        `Most email security compares messages against signatures and reputation. Modern phishing rarely repeats itself. A single-paragraph message written in fluent prose, referencing a real invoice or an actual colleague, defeats pattern matching while a human reader still hesitates over it.`,
        `The interception layer analyzes metadata and language together: sender history, routing anomalies, lookalike domains, and whether the body's intent matches the relationship it claims to represent. Links are detonated in an isolated sandbox so the destination is judged rather than guessed, and the verdict follows the message even if the page changes after delivery.`,
        `The output is an action, not another score: a rewritten link, a quarantine, or a warning banner that names the specific reason. Analysts can override, and every override feeds the model, which is what keeps false positives from becoming the reason people start ignoring the tool entirely.`,
      ],
    },
    {
      heading: 'Memory is the new file system',
      paragraphs: [
        `Fileless techniques removed the artifact defenders used to rely on. A PowerShell one-liner, a WMI subscription, or a reflective .NET load can live only in memory, and once a trusted process is hollowed out or injected, the activity looks like that process behaving normally. Disk scanning and file reputation never see any of it.`,
        `ZTMS attaches at kernel level and evaluates intent rather than signatures: which process is asking for what, from which parent, with which token, and whether that combination is plausible for this host. Process hollowing, cross-process injection from an unexpected source, and script interpreters reaching for credential APIs all fall outside the learned baseline.`,
        `Response happens inside the same millisecond budget. The offending thread is terminated before it can complete the call, and because the surrounding process usually stays healthy, employees do not lose their session and analysts receive a memory snapshot that shows exactly what was attempted.`,
      ],
    },
    {
      heading: 'What a production rollout looks like',
      paragraphs: [
        `Perimeter work is measurable, and it should be measured from the first week. Track the ratio of externally discoverable services to inventoried assets, the number of scanner sessions that never progress past the decoy layer, phishing click-through against reported messages, and the time between a suspicious execution and the thread being stopped.`,
        `Run the first weeks in observe mode. ASOD needs a baseline of your public traffic to keep brokered paths fast, and ZTMS needs to learn which script interpreters your administrators legitimately use. Only after that should blocking be enabled, and always with an approval path and a break-glass procedure documented before it is needed rather than during an incident.`,
        `The end state is quiet: fewer credible entry points, fewer successful lures, and execution attempts that never complete. The absence of incidents is the product, which is why the numbers above carry more weight than any single alert.`,
      ],
    },
    {
      heading: 'Where ASOD and ZTMS sit in your stack',
      paragraphs: [
        `Neither control replaces what you already run. ASOD sits in front of the services you expose and beside mail flow; it does not proxy internal application traffic, and it assumes your WAF and identity provider are still doing their jobs. ZTMS installs as a kernel sensor alongside existing endpoint protection and defers to it on disk-based malware, because that is the job that tool was designed for.`,
        `Integration points stay narrow by design: alerts and containment events flow to the SIEM and the SOAR playbooks that already page your on-call, ticketing stays in the system your team lives in, and the API exposes rule state so scanning posture can be reviewed like any other configuration. Fewer moving parts at the perimeter means fewer things to explain at the next audit.`,
      ],
    },
  ],
};

export const deepDiveTwo = {
  eyebrow: 'Module 02 deep dive',
  title: 'Assume the laptop is already compromised.',
  lead: `Every containment plan has to start from the endpoint falling. What decides the outcome afterwards is how far an identity can travel, what a stolen secret is still worth, and what a compromised administrator can switch off.`,
  quote: 'Inside the network, trust should be earned per connection and per minute, never inherited from an address.',
  sections: [
    {
      heading: 'Lateral movement is a permissions problem',
      paragraphs: [
        `Attackers rarely escalate by finding a clever exploit once they are inside. They look for an account, a service ticket, a cached credential, or a share with inherited rights that quietly carries more authority than the person who created it. The path is usually legitimate tooling used at an illegitimate moment.`,
        `That is why segmentation built only on network ranges disappoints. Flat subnets assume trust follows topology, while real privilege follows people, machines and workload identities. If one account can authenticate to two hundred hosts, blocking a port does not reduce the blast radius, it only changes the route.`,
        `The objective in these phases is not to detect every step. It is to make each step cost more than the prize is worth, and to make the first unauthorized hop loud enough that a human sees it while there is still time to act.`,
      ],
    },
    {
      heading: 'Why static credentials keep losing',
      paragraphs: [
        `Passwords and long-lived tokens are secrets that must be stored somewhere a process can read. Once an attacker has code execution, memory dumping tools reach them in seconds: LSASS on Windows, keychains and credential caches elsewhere, and browser session stores that require no cracking at all.`,
        `Multi-factor authentication helps against remote login and does almost nothing against stolen session material or pass-the-hash. Long expiry windows turn a single theft into weeks of quiet access, and the longer a secret lives, the more places it ends up copied into: scripts, CI variables, ticketing systems, and screenshots of someone's terminal.`,
      ],
    },
    {
      heading: 'Segmentation at the identity layer',
      paragraphs: [
        `MSIF treats identity, not topology, as the unit of trust. Each user, device and workload gets a micro-perimeter, and every internal connection carries an explicit, continuously validated cryptographic proof of who is on each end. Sitting on the corporate network confers nothing on its own.`,
        `When a laptop is compromised, the attacker inherits that device's identity and nothing more. Other workloads refuse its requests because the proof does not satisfy policy for that pair, so attempted lateral steps fail loudly and generate a clear signal: an identity is authenticating from a place policy says it should never appear.`,
        `The practical effect is a much smaller search space during an incident. Instead of sweeping a flat network for signs of movement, responders ask which identities touched which workloads in the last hour and compare that against policy. Anything outside the pattern is a candidate, and every denial the engine produced along the way is already recorded with the identity, the target and the reason attached.`,
      ],
    },
    {
      heading: 'Credentials that expire before they can be used',
      paragraphs: [
        `Replacing standing secrets with short-lived ones changes what theft actually buys. MSIF issues single-use cryptographic credentials scoped to one target, valid for sixty seconds, and re-validates authorization continuously while the session is open. A dumped cache yields keys that are already dead.`,
        `The engineering cost sits in issuance, clock discipline and clean revocation rather than in cryptography. Applications receive credentials through local agents and standard interfaces, developers get documented flows instead of exceptions, and expired keys fail closed with an audit record instead of silently degrading a service at three in the morning.`,
      ],
    },
    {
      heading: 'When the attacker goes after the security tool',
      paragraphs: [
        `Defense impairment is standard practice. Before acting, intruders holding administrative rights disable endpoint agents, unload drivers, clear event logs, and delete shadow copies. Every one of those actions is also a legitimate administrator function, which is precisely why it is hard to block once it has already happened.`,
        `ICSD moves the decision out of reach. The protection layer runs beneath the guest operating system, so an administrator inside the domain cannot unload it, alter its policy, or delete the records it writes. A request to disable the agent or purge logs is intercepted at the hardware boundary and denied.`,
        `A denial is treated as evidence. The account behind the attempt is flagged as compromised, its sessions are revoked, an emergency lockout is applied across the domain, and the security team receives the full context of what was attempted. Break-glass access is defined, logged and out of band, so recovery stays possible without reopening the hole.`,
      ],
    },
    {
      heading: 'Running it: policy, break-glass, and the metrics that matter',
      paragraphs: [
        `Start with visibility. Map which identities can reach which workloads, then find the accounts whose blast radius is far larger than their role requires. Tighten the worst offenders first, because that is where an attacker gains the most from a single theft.`,
        `Expect friction in the first month: service accounts with undocumented dependencies, backup jobs that reach many hosts, and applications with hard-coded addresses. Each one is a finding rather than a failure. Document break-glass access, require a second approver, and log every use, or the first real incident becomes the reason the control gets bypassed.`,
        `Useful measures include the median number of workloads one credential can reach, credential lifespan percentiles, unauthorized-hop attempts blocked, tamper attempts on the agent, and the time from a tamper signal to account lockout. Tabletop a single scenario, a stolen domain admin, and watch how quickly the domain closes around it.`,
      ],
    },
    {
      heading: 'How this changes an incident',
      paragraphs: [
        `An intrusion that reaches these phases now has a predictable shape. The compromised identity stays confined to its device, harvested secrets are useless within a minute, and any attempt to blind the platform produces a lockout instead of silence. Investigators get a preserved timeline, because the tool that was supposed to be disabled kept writing.`,
        `That changes containment from a debate into a procedure: revoke the identity, rebuild the machine from a known image, and return to operations without re-verifying the rest of the domain by hand. The incident ends where it started, on one laptop, which is the entire purpose of hardening the internal domain.`,
      ],
    },
  ],
};

export const deepDiveThree = {
  eyebrow: 'Module 03 deep dive',
  title: 'The application is the new network edge.',
  lead: `Applications now carry the data and the business logic, which makes them the part of the estate an attacker most wants to reach. Here is how the OWASP failure classes are closed at runtime, why dependency risk became a supply chain problem, and how immutable audit turns logging into detection.`,
  quote: 'Code that validates its own inputs and audits its own events does not have to hope it is safe.',
  sections: [
    {
      heading: 'Why OWASP categories keep coming back',
      paragraphs: [
        `Injection, broken access control and server-side request forgery persist because they are logic failures rather than configuration mistakes. A perimeter appliance can be patched; an endpoint that trusts a parameter because the front end validated it stays broken until someone changes how the server thinks about that parameter.`,
        `Modern delivery accelerates the cycle. Frameworks generate dozens of routes, AI-assisted coding produces plausible handlers at unfamiliar speed, and teams ship daily. Any control that depends on a reviewer reading every diff is a control that quietly stops happening during a release crunch.`,
      ],
    },
    {
      heading: 'Runtime is the last place intent is visible',
      paragraphs: [
        `By the time a request reaches application code it has already passed the firewall, the WAF, and the load balancer, and it is about to touch a database or a filesystem. RASP instruments the runtime itself, so it sees method calls, object arguments and session context that network tooling cannot reconstruct.`,
        `That position buys precision. A string containing SQL keywords is common in a search box and rare in a login field, and the difference is context. Inspecting the actual interpreter boundary produces fewer blocks and far fewer false positives than pattern matching on the wire.`,
        `That precision is what makes blocking acceptable in production. A pattern-based filter has to choose between catching obfuscated payloads and letting ordinary content through, and most teams resolve that tension by disabling the rule after the second false positive. A runtime check can allow a value that is merely unusual and still refuse the one that would have restructured a query, because it evaluates the value against the operation it is entering rather than against the words it contains.`,
      ],
    },
    {
      heading: 'Filtering input by behavior, not by pattern',
      paragraphs: [
        `Contextual filtering asks what the data is trying to do. If a value supplied to a query builder would change the shape of the statement rather than fill a slot, it is stopped before the interpreter parses it, whether it arrived as a textbook injection or a deliberately malformed encoding.`,
        `The same test applies to output. RASP traces data through concatenation and template rendering, so reflected and stored cross-site scripting is caught at the point where untrusted content would become executable, including inside framework helpers that bypass naive escaping.`,
      ],
    },
    {
      heading: 'Authorization belongs on the server, every time',
      paragraphs: [
        `Broken access control usually looks like a missing object-level check: the endpoint is authenticated, the user is real, and the identifier in the URL points at somebody else's record. Server-side enforcement validates session state and permissions against the requested resource on every call, so nothing depends on the client hiding a button.`,
        `SSRF gets the same treatment. Outbound requests initiated by the application are compared against policy for the calling context, blocking attempts to reach metadata services, internal admin interfaces, or arbitrary third-party hosts through parameters an attacker controls.`,
        `Requests that fail are denied by default and recorded with the identity, the resource and the reason, which turns an access-control regression into something a team can see before an attacker finds it.`,
      ],
    },
    {
      heading: 'The dependency tree is a surface you did not write',
      paragraphs: [
        `A modern application is mostly other people's code. A typical service pulls hundreds of transitive packages, each of which can publish a new version at any moment. Attackers have learned that compromising a maintainer account reaches thousands of production environments at once, often with valid signing that passes integrity checks.`,
        `CBOM inventories every dependency actually loaded at runtime, with versions, provenance and the code paths that reach each one. When a package is published with a payload that executes on install or import, the dependency is blocked from running in production and the platform reports which services were exposed.`,
        `The output is actionable in seconds: what changed, when it appeared, and which deployments pulled it. That is the difference between a supply-chain incident and an afternoon of incident response.`,
      ],
    },
    {
      heading: 'Audit trails as a detection capability',
      paragraphs: [
        `Logging failures are rarely about storage. They happen when events are written to systems the attacker can reach, filtered so aggressively that the interesting ones never survive, or retained so briefly that investigations begin with missing hours.`,
        `Every application event is sealed onto a write-once-read-many ledger outside the reach of the application's own credentials. Entries cannot be edited or deleted, and any attempt to do so is itself recorded. Retention becomes a policy rather than a window that quietly expires.`,
        `Because the baseline is complete, anomaly detection becomes possible: a spike in reads for a single account, an API key used from a new geography, a burst of 404s that indicates enumeration. Alerts arrive with the sequence that produced them, so triage is inspection rather than reconstruction.`,
      ],
    },
    {
      heading: 'Rolling it out without slowing the product',
      paragraphs: [
        `Instrumentation has a cost, so measure it. Deploy to a canary first, keep the agent in monitor mode for a release cycle, and publish the latency budget each team must respect. Most blocking rules only affect requests that were already malformed or unauthorized.`,
        `Overhead belongs in the same dashboards as response times. If one route slows down under enforcement, that route usually reveals a query pattern worth fixing on its own merits. Treat the latency question as an engineering conversation with data rather than a reason to grant exceptions quietly, because exceptions are how coverage erodes from enforcement back to a pilot nobody remembers approving.`,
        `Then make ownership explicit. Runtime findings route to the team that owns the service, dependency blocks notify the release owner, and audit alerts carry a named responder. Coverage is measured as the percentage of production endpoints under enforcement and reported alongside availability, because a control nobody enforces is a claim rather than a defense.`,
      ],
    },
  ],
};

export const deepDiveFour = {
  eyebrow: 'Module 04 deep dive',
  title: 'Impact is a phase. Contain it like one.',
  lead: `Phase five is where an intrusion becomes a business event. What follows covers how beaconing is spotted inside encrypted traffic, how exfiltration is judged against a baseline, and how canary files and air-gapped backups turn a ransom demand into a recovery schedule.`,
  quote: 'The goal in phase five is not to stop every packet. It is to make the last move worthless.',
  sections: [
    {
      heading: 'The last phase is the only one the business feels',
      paragraphs: [
        `Earlier phases are about position. Phase five is about the objective: a channel back to the operator, data leaving the building, and destructive payloads that stop production. Everything the attacker did before this prepares for it, and everything the defender does afterwards is measured against downtime.`,
        `The window is short. Ransomware strains have compressed encryption from days to minutes, and exfiltration can complete inside a single maintenance period. Controls that require a human to open a ticket cannot close that gap, so the design assumption has to be autonomous action with a complete audit trail.`,
      ],
    },
    {
      heading: 'Finding the heartbeat inside encrypted traffic',
      paragraphs: [
        `Most command and control now hides behind legitimate protocols: HTTPS to a plausible domain, DNS queries to a resolver, or a cloud storage API. Content inspection is largely finished, so detection moves to behavior. Malware must check in on a schedule to receive instructions, and schedules leave a rhythm.`,
        `The interceptor measures that rhythm: interval regularity, jitter, payload size distribution, session duration, destination age, certificate characteristics, and how the pattern differs from what the same application normally does. DNS tunneling shows up as unusual query volume and label entropy rather than a suspicious-looking domain name.`,
        `A confirmed pattern is cut at the edge, and the host that was speaking is flagged for containment. Operators lose their channel at exactly the moment they need it, which is often the first moment the organization learns something is wrong.`,
      ],
    },
    {
      heading: 'Judging bulk transfer against a baseline',
      paragraphs: [
        `Exfiltration hides in ordinary work. Staff upload datasets, backups replicate, and analytics pipelines move terabytes. Policy that forbids bulk transfer outright breaks the business, so the judgement has to be relational: is this identity, at this hour, moving this kind of data, at this volume?`,
        `Baselines are built per identity, per device and per destination, then updated as roles change. Compression activity followed by a long outbound connection is a meaningful sequence, and so is a laptop reaching an unfamiliar storage endpoint with an archive it just created.`,
        `When the pattern crosses the threshold, the pipe freezes, sessions are revoked, and the response team receives the flow record with the identity attached. Nothing is deleted, so if the transfer was legitimate, restoring service is a policy adjustment rather than a data-loss investigation.`,
      ],
    },
    {
      heading: 'Ransomware is a physics problem',
      paragraphs: [
        `Encryption takes time and file operations. A strain working through a filesystem at speed generates a change rate no human workflow can match, and it must touch every file it intends to extort. Both facts are measurable, and both are traps the attacker cannot avoid.`,
        `Canary files sit across storage systems, in shares and directories that look valuable. When a canary changes cryptographically inside a short window, the platform has a confirmed encryption event rather than an inference. The host is frozen: file handles revoked, network cut, and processes suspended before the burst can continue to other nodes.`,
        `Freezing beats deleting. The machine retains the memory and file evidence needed to identify the strain, the entry point and the operator, while the rest of the estate keeps running, isolated from the affected segment.`,
      ],
    },
    {
      heading: 'Recovery is part of containment',
      paragraphs: [
        `Backups stop ransomware only if the attacker cannot reach them and the restore actually works. Air-gapped, immutable copies are inaccessible from compromised credentials and cannot be rewritten, which removes the extortion leverage that depends on destroying your recovery options.`,
        `Restoration is orchestrated rather than improvised. Clean virtual environments are provisioned from the last verified snapshot, network policy is applied before the machines rejoin, and services return in the order that restores revenue first. Target recovery times are measured the same way uptime is.`,
        `Sequencing matters as much as speed. Identity services come back first, then the systems that authenticate the business, then the services customers actually touch. A restore that returns a database before its directory services is not a recovery, it is a second outage. Dependencies are mapped in advance, rehearsed on a schedule, and verified through application health checks rather than by an orchestrator reporting success.`,
      ],
    },
    {
      heading: 'Minutes, not quarters: the metrics that prove it',
      paragraphs: [
        `Measure detection to freeze in seconds, the volume of outbound data stopped before it left, the percentage of hosts recovered from immutable snapshots, and actual recovery time against the target. Run a canary exercise monthly, because encryption velocity and restore speed are the two numbers that decide an outcome.`,
        `Report them next to availability and revenue impact. A board understands "fourteen minutes to operational readiness" far better than a detection rate, and an insurer, a regulator and a customer's security team all ask the same question: if this happened tomorrow, how fast would you be back?`,
      ],
    },
    {
      heading: 'Why paying stops being the rational choice',
      paragraphs: [
        `Extortion works when recovery looks impossible. Once clean rebuilds are routine and canary detection stops encryption early in its run, the payment calculation changes on both sides: restoration becomes cheaper than negotiation, and the attacker's leverage shrinks to whatever data has already left.`,
        `None of that requires trusting a vendor's claim. Each step is demonstrated inside your own environment: a canary touch that freezes a host in seconds, a restore from an immutable snapshot that finishes inside the target window, and a blocked transfer that never reached an external endpoint. Once those three are routine, the decision at three in the morning is a procedure rather than a negotiation with an adversary who is counting on panic.`,
        `That is also why these controls are deployed as one system. Beacon detection limits how much can leave, transfer blocking stops most of the rest, and air-gapped recovery removes the downtime threat. No single control is sufficient, and together they turn a business-ending event into a maintenance window.`,
      ],
    },
  ],
};