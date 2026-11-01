// Drop images into src/assets/projects/ or src/assets/tools/ and reference the file name in the data files.
const projectFiles = import.meta.glob('../assets/projects/*.{webp,png,jpg,jpeg,avif,svg}', { eager: true, query: '?url', import: 'default' })
const toolFiles = import.meta.glob('../assets/tools/*.{webp,png,jpg,jpeg,avif,svg}', { eager: true, query: '?url', import: 'default' })

const pick = (files, folder, name) => (name ? files[`../assets/${folder}/${name}`] ?? null : null)

export const projectImage = (name) => pick(projectFiles, 'projects', name)
export const toolImage = (name) => pick(toolFiles, 'tools', name)
