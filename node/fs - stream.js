fs.createReadStream(path=''|Buffer|URL, ?options={
	flags:         'r',
	encoding:      '',
	fd:            null | 0,
	mode:          0o666,
	autoClose:     true
	emitClose:     false,
	start:         0,
	end:           Infinity,
	highWaterMark: 64 * 1024,
	fs:            null | {},
}): fs.ReadStream

fs.createWriteStream(path=''|Buffer|URL, ?options={
	flags:         'w',
	encoding:      'utf8',
	fd:            null | 0,
	mode:          0o666,
	autoClose:     true
	emitClose:     false,
	start:         0,
	fs:            null | {},
}): fs.WriteStream