import { createRequire } from 'node:module'

const fallbackRequire = createRequire(import.meta.url)
const opencodeRequire = createRequire(new URL(".claude/package.json", import.meta.url))
const { z } = (() => {
  try {
    return opencodeRequire('zod')
  } catch {
    return fallbackRequire('zod')
  }
})()

const toolFactory = (definition = {}) => definition
toolFactory.schema = z

export const tool = toolFactory
export default toolFactory
