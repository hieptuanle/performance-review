# performance-review CLI

CLI client for the performance-review backend. Binary: `fhd-360`.

## Setup

```bash
cd cli
pnpm install
pnpm build
pnpm link --global   # makes `fhd-360` available system-wide
```

## Auth

Backend expects an `x-user-id` header (Mongo ObjectId — used to look up the user via webwork). Configure once:

```bash
fhd-360 auth login <userId> --base-url https://360review.4-handy.com
fhd-360 auth set-url <url>     # change base URL only
fhd-360 auth status
fhd-360 auth logout
```

Env overrides: `PR_USER_ID`, `PR_URL`.

Config stored at `~/.config/performance-review-cli/config.json`.

## Commands

```bash
fhd-360 review-responses list                    # or: fhd-360 rr list
fhd-360 rr list --reviewee D7381
fhd-360 rr list --manager D327
fhd-360 rr list --employee D7381

fhd-360 rr get <mongoId>
fhd-360 rr by-slug <slug>
fhd-360 rr summary

fhd-360 rr submit --file payload.json
fhd-360 rr submit --data '{"slug":"...","questions":[...]}'
```

## Output modes

- Default: colored human-readable
- `--json`: pretty-printed JSON (essential fields)
- `--json --full`: pretty-printed JSON (all fields)
- `--raw`: plain text without colors

## Dev

```bash
pnpm dev          # tsc --watch
pnpm type-check
```
