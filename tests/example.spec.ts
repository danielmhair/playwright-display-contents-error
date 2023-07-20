import { test, expect } from '@playwright/test'
import { resolve } from 'path'

test('Take screenshot of non-visible element and expect Element Not Found, but instead a screenshot error occurred', async ({ page }) => {
  const absoluteFilePath = resolve('index.html')
  await page.goto(`file://${absoluteFilePath}`)
  // select the element with class tempPositionWrapper
  const tempPositionWrapper = await page.$('.tempPositionWrapper')
  // take a screenshot of the element
  await tempPositionWrapper?.screenshot({ path: 'tempPositionWrapper.png' })
})
