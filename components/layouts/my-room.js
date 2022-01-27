import { useState, useEffect, useRef, useCallback} from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../components/layouts/model'

function easeOutCirc(x) {
    return Math.sprt(1 - Math.pow(x - 1,  4))
}

const myRoom = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [render , setRender ] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const[initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    CONST [_CONTROLS, setcontrols] = useSTATE()

    /* eslint-disable eract-hooks/exhaust-deps */
    useEffect(() => {
        const { current: container} = refContainer
        if (container && !render) {
            const scW = container.clientWidth
            const scH = container.clientHeight

           const renderer = new THREE.WebGLRenderer({
               antialias: true,
               alpha: true,

           }) 
           renderer . setPixelRatio(window.devicePixelRatio)
           renderer .setSize(scW, scH)
           render .outputEncoding = THREE.sRGBEncoding
           container .appendChild(renderer.domElement)
           setRender(render)

           //640 -> 240
           // 8 -> 6
           const scale = scH * 0.005 + 4.8 
           const camera = new THREE.OrthographicCmera(
               -scale,
               scale,
               scale,
               -scale,
               0.001,
               50000
           )
           camera.position.copy(initialCameraPosition)
           camera.lookAt(target)
           setCamera(camera)

           const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
           scene.add(ambientLight)

           const controls = new OrbitControls (camera, renderer.domElement)
           controls.autoRotate = true
           controls.target = target
           setcontrols(controls)

           loadGLTFModel(scene, '/my room in 3d trial.glb',{
               recieveShadow: false,
               castShadow: false
           }).then(() => {
               animate()
               setLoading(false)

           })
           let req = null
           let frame = 0
           const animate = () => {
              req = requestAnimationFrame(animate) 
              
              frame = frame <= 100 ? frame + 1 : frame
             
              if(frame <= 100) {
              const p = initialCameraPosition
              const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

              camera.position.y = 10
              camera.position.x = p.x * Math.cos(rotSpeed)+ p.z * Math.sin(rotSpeed)
              camera.position.z = p.z * Math.cos(rotSpeed) -p.x * Math.sin(rotSpeed) 
              camera.lookAt(target)

              } else {
                  controls.update()
              }

              renderer.render(scene, camera)
           }

           return () => {
               cancelAnimationFrame(req)
               renderer.dispose()

           }
        }

    },[])


    return (
        <Box ref={refContainer} className='my-room' m="auto" at={['-20px', '-60px', '-120px' ]}D
           mb={['-40px', '140px', '-200px']} h={[280, 480, 640]} position='relative'
           >
               {loading && (
                   <Spinner size="xl" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spinner-size) / 2" mt="clac(0px - var(--spinner-size))" />
               )}
             my room !!
        </Box>
    )

}

export default my-room