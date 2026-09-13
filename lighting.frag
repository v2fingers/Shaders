#version 450

layout(set = 0, binding = 0) uniform sampler2D albedoSampler;
layout(set = 0, binding = 1) uniform sampler2D normalSampler;
layout(set = 0, binding = 2) uniform sampler2D worldPosSampler;

layout(set = 1, binding = 0) uniform Light {
    vec3 direction;
    float intensity;
    vec3 color;
    float padding;
} light;

layout(location = 0) out vec4 outColor;

void main() {
    ivec2 coord = ivec2(gl_FragCoord.xy);
    vec3 albedo = texelFetch(albedoSampler, coord, 0).rgb;
    vec3 normal = texelFetch(normalSampler, coord, 0).xyz;
    
    vec3 lightDir = normalize(light.direction);
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 ambient = albedo * 0.15;
    vec3 diffuse = albedo * diff * light.color * light.intensity;
    
    outColor = vec4(ambient + diffuse, 1.0);
}