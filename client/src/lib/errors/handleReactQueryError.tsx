export default function handleReactQueryError(error: any){
    // if its an error 500 (server down)
    if (error.status == 500){
        throw "Ocorreu um erro no nosso servidor. Por favor, tente novamente mais tarde."
    }

    return error.response.data.message[0]
}