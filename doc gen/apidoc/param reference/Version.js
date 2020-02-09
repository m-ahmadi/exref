/*
@apiVersion version

set the version of a documentation block.
version can also be used in @apiDefine.
blocks with same group and name, but different versions can be compared in the generated output,
so you or a frontend developer can retrace what changes in the api since the last version.

version
	simple versioning supported (SemVer: major.minor.patch)
*/

/**
 * @api {get} /api/version Version
 * @apiVersion 1.6.2
 * @apiGroup Params
*/