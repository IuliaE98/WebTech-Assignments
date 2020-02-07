const puppeteer = require('puppeteer')

let browser
let page

describe('local', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({headless : true})
    page = await browser.newPage()
  })

  it('should be able to click', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#del')
    await page.click('#del')
  })


  it('should load on page load', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#main')
    const first = await page.$eval("#main tr:first-child td:first-child", e => e.textContent)
    expect(first.trim()).toEqual('a')
  })

  it('should delete elements specified in name filled', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#name')
    await page.focus('#name')
    page.keyboard.type('a')
    await page.waitForSelector('#del')
    await page.click('#del')
    await page.waitForSelector('#main')
    const content = await page.$$('#main tr')
    let contentArray = Array.apply(null, content)
    expect(contentArray.length).toEqual(1)
  })

  it('deleted elements disappear from list', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#main')
    const content = await page.$$eval('#main tr td:nth-child(1)', nodes => nodes.map(e => e.innerText))
    let contentArray = Array.apply(null, content)
    expect(contentArray.every(e => e !== 'a')).toEqual(true)
  })

  afterAll(() => {
    browser.close()
  })
})