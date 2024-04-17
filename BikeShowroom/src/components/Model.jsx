import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Motorbike.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="fram"
          castShadow
          receiveShadow
          geometry={nodes.fram.geometry}
          material={materials.fram}
          position={[0.433, 0.354, 5.769]}
          rotation={[0.005, 0.857, -0.043]}
          scale={[0.242, 0.322, 0.322]}>
          <group name="backfram" position={[0, -0.224, 0.391]} rotation={[-0.053, 0, 0]}>
            <mesh
              name="Cylinder022"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder022_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022_1.geometry}
              material={materials.fram}
            />
            <group name="backrim" position={[0.052, 1.935, 10.225]} scale={[0.918, 0.964, 0.964]}>
              <mesh
                name="Cylinder002"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials.rim}
              />
              <mesh
                name="Cylinder002_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002_1.geometry}
                material={materials.brakedisk}
              />
              <mesh
                name="Cylinder002_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002_2.geometry}
                material={materials['bikepaint.001']}
              />
              <mesh
                name="backtier"
                castShadow
                receiveShadow
                geometry={nodes.backtier.geometry}
                material={materials.tıire}
                rotation={[-1.223, 0, 0]}
              />
            </group>
            <mesh
              name="chain"
              castShadow
              receiveShadow
              geometry={nodes.chain.geometry}
              material={materials.fram}
              position={[-0.109, 2.098, 10.085]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.887, 2.361, 1.887]}
            />
          </group>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['bikepaint.001']}
            position={[0.166, 1.276, -0.044]}
            rotation={[0.007, 0, 0]}
            scale={[1.042, 0.905, 2.418]}
          />
          <mesh
            name="Cylinder015"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials.fram}
            position={[-2.341, 0.048, -0.678]}
            rotation={[1.523, 0, 0]}
            scale={[0.226, 0.217, 0.181]}
          />
          <group
            name="engine"
            position={[-0.002, 3.176, 0.297]}
            rotation={[0.007, -1.571, 0]}
            scale={[11.896, 20.149, 20.738]}>
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.fram}
            />
          </group>
          <group
            name="enginepart1"
            position={[0.188, 3.526, -2.187]}
            rotation={[1.105, -1.57, 0]}
            scale={[2.791, 0.344, 4.293]}>
            <mesh
              name="Cylinder011"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder011_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_1.geometry}
              material={materials.fram}
            />
          </group>
          <group
            name="enginepart2"
            position={[-1.998, 2.025, 3.203]}
            rotation={[0.007, 0, -Math.PI / 2]}
            scale={[0.93, 1.163, 0.93]}>
            <mesh
              name="Cylinder009"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder009_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009_1.geometry}
              material={materials.fram}
            />
          </group>
          <group
            name="enginepart3"
            position={[1.601, 3.328, -2.651]}
            rotation={[0.007, 0, -Math.PI / 2]}
            scale={[0.367, 0.459, 0.367]}>
            <mesh
              name="Cylinder020"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder020.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder020_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder020_1.geometry}
              material={materials.fram}
            />
          </group>
          <group
            name="enginepart4"
            position={[1.559, 2.071, 0.32]}
            rotation={[1.578, 0, Math.PI / 2]}
            scale={[10.282, 0.355, 9.098]}>
            <mesh
              name="Cylinder013"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder013_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013_1.geometry}
              material={materials.fram}
            />
          </group>
          <mesh
            name="exhust1"
            castShadow
            receiveShadow
            geometry={nodes.exhust1.geometry}
            material={materials.exhust}
            position={[1.835, 1.727, -2.016]}
            rotation={[-0.489, -0.066, 0.103]}
            scale={[0.282, 0.227, 0.226]}
          />
          <mesh
            name="exhust2"
            castShadow
            receiveShadow
            geometry={nodes.exhust2.geometry}
            material={materials.exhust}
            position={[0.527, 2.98, 2.94]}
            rotation={[0.007, 0, -Math.PI / 2]}
            scale={[0.234, 0.293, 0.234]}
          />
          <group
            name="Frontbodykit"
            position={[0.008, 1.803, -3.369]}
            rotation={[-0.424, 0, 0]}
            scale={[2.464, 2.512, 0.422]}>
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.fram}
            />
          </group>
          <mesh
            name="fueltank"
            castShadow
            receiveShadow
            geometry={nodes.fueltank.geometry}
            material={materials['bikepaint.001']}
            position={[0.028, 5.083, -0.018]}
            rotation={[0.007, 0, 0]}
            scale={[3.249, 3.102, 3.102]}
          />
          <mesh
            name="gearshift"
            castShadow
            receiveShadow
            geometry={nodes.gearshift.geometry}
            material={materials.fram}
            position={[-0.023, 1.326, -2.022]}
            rotation={[-0.489, -0.066, 0.103]}
            scale={[0.282, 0.227, 0.226]}
          />
          <group
            name="handlebars"
            position={[-1.212, 0.264, -3.42]}
            rotation={[-0.04, -0.346, -0.142]}
            scale={[0.972, 1.006, 1.041]}>
            <mesh
              name="Cylinder003"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Cylinder003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_1.geometry}
              material={materials.fram}
            />
            <mesh
              name="Cylinder003_2"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_2.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder003_3"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_3.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Cylinder003_4"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_4.geometry}
              material={materials['Material.005']}
            />
            <mesh
              name="frontier"
              castShadow
              receiveShadow
              geometry={nodes.frontier.geometry}
              material={materials.tıire}
              position={[0.017, 2.008, -4.929]}
              scale={[0.453, 0.947, 0.947]}
            />
            <group
              name="frontrim"
              position={[0.017, 2.008, -4.929]}
              rotation={[2.318, 0, 0]}
              scale={[0.453, 0.947, 0.947]}>
              <mesh
                name="Cylinder008"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008.geometry}
                material={materials.rim}
              />
              <mesh
                name="Cylinder008_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008_1.geometry}
                material={materials.brakedisk}
              />
              <mesh
                name="Cylinder008_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008_2.geometry}
                material={materials['bikepaint.001']}
              />
            </group>
          </group>
          <group
            name="seat"
            position={[0.044, 1.148, 9.509]}
            rotation={[0.007, 0, 0]}
            scale={[0.918, 0.964, 0.964]}>
            <mesh
              name="Cylinder004"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004.geometry}
              material={materials['bikepaint.001']}
            />
            <mesh
              name="Cylinder004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_1.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Cylinder004_2"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_2.geometry}
              material={nodes.Cylinder004_2.material}
            />
          </group>
          <mesh
            name="sidebodykit"
            castShadow
            receiveShadow
            geometry={nodes.sidebodykit.geometry}
            material={materials['bikepaint.001']}
            position={[0.05, 4.807, -3.124]}
            rotation={[1.578, 0, -Math.PI / 2]}
            scale={[0.592, 0.501, 0.592]}
          />
        </mesh>
        <group
          name="CustomShapes"
          position={[0, -1.396, 1.806]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={3.14}>
          <group name="GZM_Ball025" />
          <group name="GZM_Breast_L" />
          <group name="GZM_Breast_R" />
          <group name="GZM_Circle025" />
          <group name="GZM_CircleChest" />
          <group name="GZM_CircleHips" />
          <group name="GZM_CircleSpine" />
          <group name="GZM_CrownHips" />
          <group name="GZM_Cube025" />
          <group name="GZM_FaceHead" />
          <group name="GZM_FaceJaw" />
          <group name="GZM_Foot" />
          <group name="GZM_FootIK" />
          <group name="GZM_Gaze" />
          <group name="GZM_Hand" />
          <group name="GZM_HandIK" />
          <group name="GZM_Head" />
          <group name="GZM_Jaw" />
          <group name="GZM_Knuckle" />
          <group name="GZM_LoLid" />
          <group name="GZM_Master" />
          <group name="GZM_Neck" />
          <group name="GZM_RevFoot" />
          <group name="GZM_RevToe" />
          <group name="GZM_Root" />
          <group name="GZM_Shoulder" />
          <group name="GZM_Toe" />
          <group name="GZM_Tongue" />
          <group name="GZM_UpLid" />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Motorbike.glb')

