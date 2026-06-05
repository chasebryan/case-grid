# CaseGrid

CaseGrid is an evidence-centered case intelligence and integrity platform
concept for lawful investigative workflows.

## MVP

This repo now includes a browser-based CaseGrid MVP:

- simulated login/auth and role-aware admin controls
- case creation
- evidence upload with real SHA-256 file hashing
- evidence-to-lead linking
- legal authority tracking
- append-only audit log with chained event hashes
- chain-of-custody report preview
- PDF export for selected evidence custody records

## Run

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open <http://127.0.0.1:4173>.

No package install is required. The app uses browser-native APIs and stores demo
state in local storage. If `npm` is available, `npm start` runs the same local
server command.

## License

This repository is licensed under the Creative Commons Attribution 4.0
International Public License (CC BY 4.0). See [LICENSE](LICENSE).

Unless noted otherwise, you may share and adapt the material here, including for
commercial purposes, as long as you give appropriate credit, link to the
license, and indicate whether changes were made.
