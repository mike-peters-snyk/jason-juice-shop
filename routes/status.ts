/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response } from 'express'

import * as utils from '../lib/utils'

const startTime = Date.now()

export function retrieveStatus () {
  return (_req: Request, res: Response) => {
    res.json({
      version: utils.version(),
      uptime: Math.floor((Date.now() - startTime) / 1000),
      environment: process.env.NODE_ENV ?? 'development'
    })
  }
}
