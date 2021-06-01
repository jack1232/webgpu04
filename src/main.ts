import glslangModule from '@webgpu/glslang/dist/web-devel-onefile/glslang';
import { CheckWebGPU } from './helper';
import { GlslShaders } from './shaders';

const CreateTriangle = async () => {
    const checkgpu = CheckWebGPU();
    if(checkgpu.includes('Your current browser does not support WebGPU!')){
        console.log(checkgpu);
        throw('Your current browser does not support WebGPU!');
    }

    const glslang = await glslangModule() as any;

    const canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;        
    const adapter = await navigator.gpu?.requestAdapter() as GPUAdapter;       
    const device = await adapter?.requestDevice() as GPUDevice;
    const context = canvas.getContext('gpupresent') as unknown as GPUCanvasContext;
    const swapChainFormat = 'bgra8unorm';
    const swapChain = context.configureSwapChain({
        device: device,
        format: swapChainFormat,
    });
    
    const shader = GlslShaders();
    const pipeline = device.createRenderPipeline({
        vertex: {
            module: device.createShaderModule({                    
                code: glslang.compileGLSL(shader.vertex, 'vertex')
            }),
            entryPoint: "main"
        },
        fragment: {
            module: device.createShaderModule({                    
                code: glslang.compileGLSL(shader.fragment, 'fragment')
            }),
            entryPoint: "main",
            targets: [{
                format: swapChainFormat as GPUTextureFormat
            }]
        },
        primitiveTopology: "triangle-list",
    });

    const commandEncoder = device.createCommandEncoder();
    const textureView = swapChain.getCurrentTexture().createView();
    const renderPass = commandEncoder.beginRenderPass({
        colorAttachments: [{
            attachment: textureView,
            loadValue: [0.5, 0.5, 0.8, 1] //background color
        }]
    });
    renderPass.setPipeline(pipeline);
    renderPass.draw(3, 1, 0, 0);
    renderPass.endPass();

    device.queue.submit([commandEncoder.finish()]);
}

CreateTriangle();




