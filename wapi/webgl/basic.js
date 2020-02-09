/*
<canvas id="glcanvas" width="640" height="480">
	Your browser doesn't appear to support the 
	<code>&lt;canvas&gt;</code> element.
</canvas>
*/
var gl, canvas;
document.addEventListener('DOMContentLoaded', function () {
	
//	Setup
//------------------------------------------------------------------------------------------------------------
canvas = document.getElementById('glcanvas');
gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

if (!gl) { throw new Error('Unable to initialize WebGL. Your browser may not support it.'); return; }
//------------------------------------------------------------------------------------------------------------


gl.clearColor(0.0, 0.0, 0.0, 1.0);                   // Set clear color to black, fully opaque
gl.enable(gl.DEPTH_TEST);                            // Enable depth testing
gl.depthFunc(gl.LEQUAL);                             // Near things obscure far things
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear the color as well as the depth buffer.
gl.viewport(0, 0, canvas.width, canvas.height);      // Resizing the WebGL context



function createSquare(gl) {
	var vertexBuffer;
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	var verts = [
		 .5,  .5, 0.0,
		-.5,  .5, 0.0,
		 .5, -.5, 0.0,
		-.5, -.5, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts),
	gl.STATIC_DRAW);
	var square = {
		buffer: vertexBuffer,
		vertSize: 3,
		nVerts: 4,
		primtype: gl.TRIANGLE_STRIP
	};
	return square;
}

});