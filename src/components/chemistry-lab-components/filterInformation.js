
import { information } from "./MaterialDataChemistry"

const filterInformation = (word = "") => {


    if (word === "") {
        return information
    }

    word = word.toLocaleLowerCase()


    return information.filter(item => item.nombre.toLocaleLowerCase().includes(word))

}


export default filterInformation