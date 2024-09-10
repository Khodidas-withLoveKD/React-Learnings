// cb with no arguments
const cb1 = () => console.log('called CB1')

// cb with one arg
const cb2 = (val) => console.log('calle CB2 | val = ', val)

// cb with one or more args
const cb3 = (val1, val2, val3) =>
	console.log(`called CB3 | val1 = ${val1} | val2 = ${val2} | val3 = ${val3}}`)

// how will you call a cb with an arg
const cbForCb1 = (cb) => cb()
// cb with arg
const cbForCb2 = (cb) => cb('CB2')
const cbForCb3 = (cb) => cb('CB3', 1, 2)

cbForCb1(cb1)
cbForCb2(cb2)
cbForCb3(cb3)
