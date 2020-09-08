/*

import React, {Component} from 'react';
import * as THREE from 'three';

class ThreeViewer extends Component
{

    render(){

        function init()
            {
                let scene = new THREE.Scene();
                scene.background = new THREE.Color(0xdddddd);
                let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);

                //Define desde donde se va a ver el objeto

                camera.rotation.y = 45/180*Math.PI;
                camera.position.x = 800;
                camera.position.y = 100;
                camera.position.z = 1000;

                //Agrega luz y color a la scena

                let hlight = new THREE.AmbientLight(0x404040, 100);
                scene.add(hlight);

                let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
                directionalLight.position.set(0,1,0);
                directionalLight.castShadow = true;
                scene.add(directionalLight);

                let light = new THREE.PointLight(0xc4c4c4, 10);
                light.position.set(0, 300, 500);
                scene.add(light);

                let light2 = new THREE.PointLight(0xc4c4c4, 10);
                light2.position.set(300, 100, 0);
                scene.add(light2);

                let light3 = new THREE.PointLight(0xc4c4c4, 10);
                light3.position.set(0, 100, -300);
                scene.add(light3);

                let light4 = new THREE.PointLight(0xc4c4c4, 10);
                light4.position.set(-500, 300, 0);
                scene.add(light4);
                
                //renderiza y agrega al body html. Se puede agregar a un div o un canva y dar dimensiones

                let renderer = new THREE.WebGLRenderer({antialias:true});
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.getElementById("threepanel").appendChild(renderer.domElement);   

                //v Se define e inicializa el controlador
                //let controls = new THREE.OrbitControls(camera, renderer.domElement );

                //carga el objeto mediante el metodo loadCar o loadDrone
                
                let loader = new THREE.GLTFLoader();
                let uri = "models/mavicair/scene.glft"
                loadDrone(loader, uri);

            }

             function animate() {
                renderer.render(scene,camera);
                requestAnimationFrame(animate);
                controls.update();
                } 
    
                function loadDrone(loader,uri)
                {
                 
                    loader.load(uri, function(gltf){
                    drone = gltf.scene.children[0];
                    drone.scale.set(30,30,30);
                    scene.dispose();
                    scene.add(gltf.scene);
                    animate();
                    });
                }
        return(
            <div>
            <div className="container center-align" id="threepanel">
               
            </div>

            {init()} 

            </div>
        );
    } 
}

export default ThreeViewer;*/