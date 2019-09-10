import * as _posthtml from 'posthtml'
import a from 'posthtml'
const posthtml:typeof a=_posthtml as any


const html = `
  <component mkMargin=16>
    <title>Super Title</title>
    <text>Awesome Text</text>
  </component>
`
describe('', () => {
    it('', async () => {
        console.log(html)
        const result = await posthtml()
            .use(require('posthtml-custom-elements')())
            .process(html)
        console.log(result.html) 
    })
})
