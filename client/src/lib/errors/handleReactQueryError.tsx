export default function handleReactQueryError(error: any){
    let responseMessage = error.response.data.message as string

    // if its an axios error
    if (error.name == "AxiosError" || !responseMessage){
        throw "Ocorreu um erro no nosso servidor. Por favor, tente novamente mais tarde."
    }

    return responseMessage
}