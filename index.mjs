import { generateEntry, fastEqual } from './jsonRTEHelper.mjs'
import  _ from 'lodash'

// size of the JSON
const size = [300000, 500000, 1024000, 2048000]
for(const s of size) {
    const obj1 = generateEntry(1, s)
    const obj2 = generateEntry(1, s)

    // sample JSON with diff    
    // const obj1 ={"uid":"1161ff60a9db494c80b2ede57ef1b0fd","type":"doc","attrs":{},"children":[{"type":"p","attrs":{},"uid":"a88c1c76e21e41e68088a28428af9477","children":[{"text":"123"}]},{"type":"p","attrs":{},"uid":"c52149f3daf34759a7431512e90f71ed","children":[{"text":"2"}]},{"type":"p","attrs":{},"uid":"ac69394ae7e149a59bf1f258b24f6b3c","children":[{"text":"3"}]},{"type":"p","attrs":{},"uid":"18858837948142f2b9419c9f9edeb5f4","children":[{"text":"4"}]}]}
    // const obj2 ={"uid":"1161ff60a9db494c80b2ede57ef1b0fd","type":"doc","attrs":{},"children":[{"type":"p","attrs":{},"uid":"a88c1c76e21e41e68088a28428af9477","children":[{"text":"121"}]},{"type":"p","attrs":{},"uid":"c52149f3daf34759a7431512e90f71ed","children":[{"text":"2"}]},{"type":"p","attrs":{},"uid":"ac69394ae7e149a59bf1f258b24f6b3c","children":[{"text":"3"}]},{"type":"p","attrs":{},"uid":"18858837948142f2b9419c9f9edeb5f4","children":[{"text":"4"}]}]}
    


    const startTime = performance.now()
    const isDirty = !JSON.stringify(obj1) === JSON.stringify(obj2)
    const endTime = performance.now()

    const startTime2 = performance.now()
    const isDirty2 = !fastEqual(obj1, obj2)
    const endTime2 = performance.now()

    const startTime3 = performance.now()
    const isDirty3 = !_.isEqual(obj1, obj2)
    const endTime3 = performance.now()
    console.log(`${s/1000}kb | stringify = ${isDirty} ${endTime - startTime}, fast-equal = ${isDirty2} ${endTime2 - startTime2}, lodash = ${isDirty3} ${endTime3 - startTime3} ms`)
}

// Test results on M1 13" macbook pro | node v16
//  300kb stringify= 2.300374984741211 , fast-equal = 0.053458213806152344, lodash =  0.2507500648498535 ms
//  500kb stringify = 3.4363341331481934 , fast-equal = 0.01574993133544922, lodash =  0.13929224014282227 ms
//  1024kb stringify = 6.88004207611084 , fast-equal = 0.028374671936035156, lodash =  0.04387474060058594 ms
//  2048kb stringify = 14.73545789718628 , fast-equal = 0.013833045959472656, lodash =  0.12970829010009766 ms
