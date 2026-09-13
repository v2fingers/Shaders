#version 450

layout(location = 0) in vec3 outColor;
layout(location = 1) in vec3 outWorldPos;
layout(location = 2) in vec3 inNormal;

layout(location = 0) out vec4 outAlbedo;
layout(location = 1) out vec4 outNormalVec;
layout(location = 2) out vec4 outWorldPosColor;

void main() {
    outAlbedo = vec4(outColor, 1.0);
    outNormalVec = vec4(normalize(inNormal), 1.0);
    outWorldPosColor = vec4(outWorldPos, 1.0);
}
