import { test, expect } from '@playwright/test'
import { resolve } from 'path'

test('non-visible element should throw Element Not Found or something similiar, but doesnt', async ({ page }) => {
  const absoluteFilePath = resolve('tests/index.html')
  await page.goto(`file://${absoluteFilePath}`)
  // Expected this to throw Element Not Found, because element should not be visible
  expect(await page.$('.tempPositionWrapper')).toThrow()
  // await tempPositionWrapper.screenshot({ path: 'tempPositionWrapper.png' })
})

test('Take screenshot of non-visible element and expect Element Not Found, but instead a screenshot error occurred', async ({ page }) => {
  const absoluteFilePath = resolve('tests/index.html')
  await page.goto(`file://${absoluteFilePath}`)
  // Expected this to throw Element Not Found, because element should not be visible
  const tempPositionWrapper = await page.$('.tempPositionWrapper')
  await tempPositionWrapper?.screenshot({ path: 'tempPositionWrapper.png' })
})

test('For elements with display contents set, element has no width or height, meaning it is not visible, so isVisible() should be false', async ({ page }) => {
  const absoluteFilePath = resolve('tests/index.html')
  await page.goto(`file://${absoluteFilePath}`)
  // select the element with class tempPositionWrapper
  const tempPositionWrapper = await page.$('.tempPositionWrapper')
  const visible = await tempPositionWrapper?.isVisible()
  expect(visible).toBe(false)
})