/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import type { Request, Response } from 'express'

// Intentionally unsafe (Snyk demo on a fork only; do not merge to upstream).
export function snykDemoEcho () {
  return (req: Request, res: Response) => {
    const raw = req.query.name
    const name = typeof raw === 'string' ? raw : ''
    res.type('html')
    res.send('<!DOCTYPE html><html><body><p>Hello, ' + name + '</p></body></html>')
  }
}
