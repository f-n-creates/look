var camera, scene, renderer, controls;

var d = new Date();
var n = d.getHours();
if (n >= 0 && n < 6) { /*navy and yellow*/
    document.body.style.backgroundColor = "#444e68";
    document.body.style.color = "#fff";
    document.getElementById("open").style.background = "conic-gradient(from 25deg, #f9e3a2 0%, #444e68 100%)";
    document.getElementById("p").style.color = "#dee4f3";
    document.getElementById("mob").style.color = "#dee4f3";
    document.getElementById("q").style.color = "#444e68";
    document.getElementById("ht").style.color = "#6a6a6b";
    document.getElementById("htc").style.color = "#6a6a6b";
    document.getElementById("how").style.background = "#f9e3a2";    
} else if (n >= 18 && n < 24) { /*yellow and orange*/
    document.body.style.backgroundColor = "#f7db89";
    document.body.style.color = "#fff";
    document.getElementById("open").style.background = "conic-gradient(from 25deg, #f4a461 0%, #f7db89 100%)";
    document.getElementById("a").style.color = "c38e00";
    document.getElementById("p").style.color = "#fbf6e8";
    document.getElementById("mob").style.color = "#fbf6e8";
    document.getElementById("q").style.color = "#fbf6e8";
    document.getElementById("how").style.background = "#f4a461";    
} else if (n >= 12 && n < 18) { /*orange and pink*/
    document.body.style.backgroundColor = "#f4a461";
    document.body.style.color = "#fff";
    document.getElementById("open").style.background = "conic-gradient(from 25deg, #f8b3b1 0%, #f4a461 100%)";
    document.getElementById("p").style.color = "#feece4";
    document.getElementById("mob").style.color = "#feece4";
    document.getElementById("q").style.color = "#feece4";
    document.getElementById("how").style.background = "#f8b3b1";
} /*else if (n >= 18 && n < 24) { pink and navy
    document.body.style.backgroundColor = "#f8b3b1";
    document.body.style.color = "#fff";
    document.getElementById("open").style.background = "conic-gradient(from 25deg, #444e68 0%, #f8b3b1 100%)";
    document.getElementById("p").style.color = "#f9dddd";
    document.getElementById("mob").style.color = "#f9dddd";
    document.getElementById("q").style.color = "#f9dddd";
    document.getElementById("how").style.background = "#444e68";
}*/

var how = document.getElementById("how");
var open = document.getElementById("open");
var introButton = document.getElementById("intro");
            
introButton.onclick = function () {
    how.style.display = "flex";
    open.style.opacity = "0";
};
   
var startButton = document.getElementById('enter');
startButton.onclick = function () {
    
    how.style.display = "none";
    init();
    animate();
                
};
            
function init() {
                
    var start = document.getElementById('open');
    start.remove();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
                
    scene = new THREE.Scene();
    //scene.background = new THREE.Color(0xfce5c3);
                
    //https://observablehq.com/@bumbeishvili/three-js-basics

    var loader = new THREE.FontLoader();
    loader.load('avenir_book.tf.json', function (font) {
                    
        //text
        var p1 = "       study the nearest soft surface,\n             where does it wrinkle? \n      what do its lines remind you of? \nwhere else have you seen this before?",
            p2 = "listen closely to the sounds around you,\n                      inside you,\n               what can you hear?\n        what song could you make?",
            p3 = "                     find your favourite colour,\n                          focus on its shade,\ndo you remember how you felt when you first saw it?\n                    embrace that feeling again",
            p4 = "                     close your eyes,\n                       count to three,\n              feel the warmth wash over,\npicture waves of sunlight hitting your eyelids,\n                              open,\n                             repeat",
            p5 = "                     stay still,\n   picture the shape of your spine,\n     match it to an object in sight,\n              now straighten it,\n                    support it,\n                       hold it",
            p6 = "wriggle the part of your body furthest away from your heart,\n                  concentrate on the areas of contact,\n what kind of texture does it feel against another surface?\n                               against other skin?";

        //material
        var matLite = new THREE.MeshBasicMaterial({
            color: 'white',
            transparent: true,
            opacity: 0.8
            //side:THREE.DoubleSide
        });
        //generate.Shapes(string, scale)
        var p1s = font.generateShapes(p1, 20),
            p2s = font.generateShapes(p2, 20),
            p3s = font.generateShapes(p3, 20),
            p4s = font.generateShapes(p4, 20),
            p5s = font.generateShapes(p5, 20),
            p6s = font.generateShapes(p6, 20);

        //geometry
        var g1 = new THREE.ShapeBufferGeometry(p1s).rotateY(Math.PI / 2);
        g1.translate(-512, 0, 206);
        var g2 = new THREE.ShapeBufferGeometry(p2s).rotateY(-Math.PI / 2);
        g2.translate(512, 0, -240);
        var g3 = new THREE.ShapeBufferGeometry(p3s).rotateX(Math.PI / 2);
        g3.translate(-350, 512, 0);
        g3.rotateZ(Math.PI);
        var g4 = new THREE.ShapeBufferGeometry(p4s).rotateX(-Math.PI / 2);
        g4.translate(-250, -512, 0);
        g4.rotateZ(Math.PI);
        var g5 = new THREE.ShapeBufferGeometry(p5s).rotateY(Math.PI);
        g5.translate(200, 0, 512);
        var g6 = new THREE.ShapeBufferGeometry(p6s).translate(-340, 0, -512);

        //mesh
        var t1 = new THREE.Mesh(g1, matLite);
        t1.position.z = 0;
        var t2 = new THREE.Mesh(g2, matLite);
        t2.position.z = 0;
        var t3 = new THREE.Mesh(g3, matLite);
        t3.position.z = 0;
        var t4 = new THREE.Mesh(g4, matLite);
        t4.position.z = 0;
        var t5 = new THREE.Mesh(g5, matLite);
        t5.position.z = 0;
        var t6 = new THREE.Mesh(g6, matLite);
        t6.position.z = 0;

        scene.add(t1);
        scene.add(t2);
        scene.add(t3);
        scene.add(t4);
        scene.add(t5);
        scene.add(t6);
        animate();
    }); //end load
                
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.DeviceOrientationControls(camera);

    window.addEventListener('resize', onWindowResize, false);

} //end init

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

	controls.update();
	renderer.render(scene, camera);

}