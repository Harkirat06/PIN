import axios from 'axios'

export async function buildPorPrecio(presupuesto = 0, segundaMano = false, build = {}){
    const response = await axios.get("/api/builder/precio",{
        params: {
            presupuesto,
            segundaMano,
            build
        }
    })
    const {data} = response
    return data
}

export async function buildPorGama(gama){
    const response = await axios.get("/api/builder/gama",{
        params: {
            gama
        }
    })
    const {data} = response
    return data
}

export async function buildPorNicho(nicho) {
    const response = await axios.get("/api/builder/nicho", {
        params: {
            nicho
        }
    })
    const { data } = response
    return data
}

export async function getListas(config = {}){
    const response = await axios.get("/api/pcbuilder", {
        params: config
    })
    return response
}


export async function registerUser(user) {
    const res = await axios.post("/users", user).catch((e) => {
        const { response } = e
        return response
    })
    return res
}

export async function registerImage(image) {
    console.log(image)
    const formData = new FormData();
    formData.append("docs", image);
    const res = await axios.post("/image", formData).catch((e) => {
        const { response } = e
        return response
    })
    console.log(res)
    return res
}

export async function loginUser(user) {
    const res = await axios.post("/login", user).catch((e) => {
        const { response } = e
        return response
    })
    return res
}
