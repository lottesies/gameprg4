import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import capyImage from '../images/capybara.png'

const Resources = {
    Capy: new ImageSource(capyImage)
}

const ResourceArray = []
for (const key in Resources) {
    ResourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(ResourceArray)

export { Resources, ResourceLoader }