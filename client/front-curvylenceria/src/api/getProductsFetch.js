export const getProductsFetch = async () => {
    try {
        // trae la url 
        const url = 'http://localhost:4000/api/v1/products' ;
        const response = await fetch(url) ;
        // parsea los datos de la url
        const result = response.json() ;

        if(response.status !== 200) throw response ;
        return result ;
    } catch (error) {
        throw error 
    }
}