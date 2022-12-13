import { ExternalUtils } from 'common-external';
import { Utils } from 'common-internal';
import * as express from 'express';

let app = express()
let port = 3000

app.get('/', (req, res) => {
	let value = 'test';
	console.log(Utils.isEmpty(value));
	console.log(ExternalUtils.isEmptyExternal(value));

	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})