#version 450

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
} ubo;

layout(location = 0) in vec3 inPosition;
layout(location = 1) in vec3 inColor;
layout(location = 2) in vec3 inNormal;

layout(location = 0) out vec3 outColor;
layout(location = 1) out vec3 outWorldPos;
layout(location = 2) out vec3 outNormal;

void main() {
    vec4 worldPos = ubo.model * vec4(inPosition, 1.0);
    gl_Position = ubo.proj * ubo.view * worldPos;
    outColor = inColor;
    outWorldPos = worldPos.xyz;
    outNormal = mat3(transpose(inverse(ubo.model))) * inNormal;
}