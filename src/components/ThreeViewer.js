
import React, { Component } from "react";
import * as THREE from "three";
import {Color}  from "three";
import GLTFLoader from 'three-gltf-loader';
import OrbitControls from 'three-orbitcontrols';



class ThreeViewer extends Component {

    componentDidMount()
    {
       
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer({antialias:true});
        scene.background = new Color(0xdddddd);

        camera.rotation.y = 45/180*Math.PI;
        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;

        const hlight = new THREE.AmbientLight(0x404040, 100);
        scene.add(hlight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const light = new THREE.PointLight(0xc4c4c4, 10);
        light.position.set(0, 300, 500);
        scene.add(light);
        
        const light2 = new THREE.PointLight(0xc4c4c4, 10);
        light2.position.set(300, 100, 0);
        scene.add(light2);

        const light3 = new THREE.PointLight(0xc4c4c4, 10);
        light3.position.set(0, 100, -300);
        scene.add(light3);

        const light4 = new THREE.PointLight(0xc4c4c4, 10);
        light4.position.set(-500, 300, 0);
        scene.add(light4);
        
        renderer.setSize( 950, 400, true);
        this.mount.appendChild( renderer.domElement );

        const controls = new OrbitControls(camera, renderer.domElement );
        const loader = new GLTFLoader();
        let uri = "/models/car-1/scene.gltf";

        const animate = () => 
        {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
            controls.update();
        }

        const loadDrone = (uri) =>
        {
            loader.load(uri, (glft) => {
            const drone = glft.scene.children[0];
                drone.scale.set(30,30,30);
                scene.add(gltf.scene)
                animate();
            });
        }
        
        loadDrone(uri);
    }

  render() {
    return (
     
     <div id ="canvasdiv" ref={ref => (this.mount = ref)}  style={{height:"100%", widht:"100%"}}/>
    )
  }
}

export default ThreeViewer;
