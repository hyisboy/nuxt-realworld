const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['dist/auth.dev'] = require('../middleware/dist/auth.dev.js')
middleware['dist/auth.dev'] = middleware['dist/auth.dev'].default || middleware['dist/auth.dev']

export default middleware
